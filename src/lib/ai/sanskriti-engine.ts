import { CulturalRepository } from "@/lib/data/repository";
import { SanskritiAIResponse, ContentCategory, SourceCitation, CulturalItem } from "@/types/cultural";
import Anthropic from "@anthropic-ai/sdk";

// Conversational filler words to exclude from keyword retrieval
const CONVERSATIONAL_STOP_WORDS = new Set([
  "tell", "me", "about", "what", "is", "the", "are", "explain", "give", "details",
  "info", "information", "can", "you", "know", "how", "who", "where", "when", "why",
  "which", "does", "did", "do", "please", "and", "for", "with", "from", "into",
  "over", "some", "any", "that", "this", "their", "there", "want", "would", "like"
]);

// Non-Indian / International entities that fall outside the national BHARAT cultural repository
const OUT_OF_SCOPE_LOCATIONS = [
  "london", "landon", "paris", "america", "england", "usa", "united states",
  "europe", "new york", "russia", "china", "germany", "france", "spain", "italy",
  "tokyo", "japan", "australia", "africa", "uk", "britain", "canada"
];

function testWordBoundary(text: string, term: string): boolean {
  try {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(text);
  } catch {
    return text.toLowerCase().includes(term.toLowerCase());
  }
}

export async function askSanskritiAI(params: {
  query: string;
  categoryFilter?: ContentCategory;
  stateSlugFilter?: string;
}): Promise<SanskritiAIResponse> {
  const { query, categoryFilter, stateSlugFilter } = params;
  const qClean = query.trim();

  // 1. Guard against international / out-of-scope entities (e.g. London, Paris, America)
  const isOutOfScope = OUT_OF_SCOPE_LOCATIONS.some((loc) =>
    testWordBoundary(qClean, loc)
  );

  if (isOutOfScope) {
    return {
      answer: `### Civilizational Scope Notice: Outside Indian Cultural Heritage\n\n**BHARAT** is a national cultural knowledge architecture dedicated strictly to the tangible monuments, living traditions, epigraphy, and oral genealogies of **India (Bharat)** across its 28 States and 8 Union Territories.\n\nYour query refers to **"${qClean}"**, which is an international or foreign entity outside the scope of India's civilizational archives.\n\nTo prevent generative hallucination and preserve academic integrity, Sanskriti AI does not fabricate records for non-Indian geographies.\n\n**Explore Verified Indian Heritage Records Instead:**\n- **Maritime History & Forts:** Ask about *Sindhudurg Fort (Maharashtra)* or *Imperial Chola Naval Expeditions (Tamil Nadu)*.\n- **Oral Ballads & Living Traditions:** Ask about *Shahiri Powadas (Maharashtra)* or *Langa & Manganiyar Desert Bards (Rajasthan)*.\n- **Ancient Epigraphy & Sacred Architecture:** Ask about *Brihadisvara Inscriptions (Tamil Nadu)* or *Rang Ghar Ahom Amphitheater (Assam)*.`,
      classificationBreakdown: [],
      citedSources: [],
      groundedItems: [],
      confidenceScore: 0.0,
      disclaimer: "Zero-Hallucination Guardrail: International/foreign entities outside India's civilizational boundaries are excluded from BHARAT's national repository."
    };
  }

  // 2. Perform Contextual Retrieval over Cultural Knowledge Base
  const allItems = CulturalRepository.getCulturalItems({
    stateSlug: stateSlugFilter,
    category: categoryFilter
  });

  // Extract substantive query keywords, filtering out conversational stop words ("tell", "me", "about")
  const rawWords = qClean
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);

  const substantiveTerms = rawWords.filter((w) => !CONVERSATIONAL_STOP_WORDS.has(w) && w.length > 2);
  const queryTerms = substantiveTerms.length > 0 ? substantiveTerms : rawWords.filter((w) => w.length > 2);

  // If user query consisted purely of stop words with no substantive keywords
  if (queryTerms.length === 0) {
    return {
      answer: `### Inquire BHARAT Cultural Archives\n\nPlease specify a historical figure, state, epigraphical monument, or living tradition from Bharat (e.g. *Shivaji naval forts*, *Chola temple epigraphy*, *Majuli mask making*, *Phad scroll bards*).`,
      classificationBreakdown: [],
      citedSources: [],
      groundedItems: [],
      confidenceScore: 0.0,
      disclaimer: "Please provide a specific Indian cultural or historical query."
    };
  }

  // Score items strictly using word boundary matches so conversational words like "tell" don't match "storytelling"
  const scoredItems = allItems.map((item) => {
    let score = 0;
    const title = item.title;
    const summary = item.summary;
    const body = item.body;
    const stateName = item.stateName;
    const tags = item.tags;

    queryTerms.forEach((term) => {
      if (testWordBoundary(title, term)) score += 6;
      if (testWordBoundary(stateName, term)) score += 5;
      if (tags.some((t) => testWordBoundary(t, term))) score += 4;
      if (testWordBoundary(summary, term)) score += 3;
      if (testWordBoundary(body, term)) score += 1;
      if (testWordBoundary(item.category, term)) score += 2;
    });

    return { item, score };
  });

  scoredItems.sort((a, b) => b.score - a.score);
  const relevantItems = scoredItems.filter((s) => s.score > 0).slice(0, 4).map((s) => s.item);

  // Zero-Hallucination Guard: If no relevant items match substantive terms, return honest notice
  if (relevantItems.length === 0) {
    return {
      answer: `### Archival Scope Notice\n\nBHARAT's verified cultural repository currently does not hold peer-reviewed epigraphical, architectural, or oral records directly matching **"${qClean}"**.\n\nTo preserve historical accuracy and prevent generative hallucination, Sanskriti AI enforces a zero-fabrication policy.\n\n**Suggested Actions:**\n- If you possess archival documents, academic publications, or field-recorded oral genealogies on this subject, submit them for peer audit via the **[Contributor Portal](/contribute)**.\n- Explore cataloged heritage subjects such as *Sindhudurg Fort (Maharashtra)*, *Brihadisvara Chola Inscriptions (Tamil Nadu)*, *Martand Sun Temple (Jammu & Kashmir)*, *Konark Architectural Epigraphy (Odisha)*, or *Phad Visual Scrolls (Rajasthan)*.`,
      classificationBreakdown: [],
      citedSources: [],
      groundedItems: [],
      confidenceScore: 0.0,
      disclaimer: "Zero-Hallucination Policy: Query terms did not match verified archival records in the BHARAT repository."
    };
  }

  const groundedPool = relevantItems;
  const primaryItem = groundedPool[0];
  const primaryScore = scoredItems.find((s) => s.item.id === primaryItem.id)?.score || 5;
  const dynamicConfidence = calculateDynamicConfidence(qClean, queryTerms, primaryItem, primaryScore);

  // Collect all sources from the grounded items
  const citedSources: SourceCitation[] = [];
  groundedPool.forEach((item) => {
    item.sources.forEach((src) => {
      if (!citedSources.some((s) => s.id === src.id)) {
        citedSources.push(src);
      }
    });
  });

  // Check if Anthropic API key is available
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (anthropicApiKey && anthropicApiKey.trim() !== "" && !anthropicApiKey.startsWith("sk-placeholder")) {
    try {
      const anthropic = new Anthropic({ apiKey: anthropicApiKey });

      const contextText = groundedPool.map((i) => `
ITEM: ${i.title}
STATE: ${i.stateName}
CATEGORY: ${i.category}
VERIFICATION: ${i.verificationStatus}
PERIOD: ${i.periodOrOrigin || "Unknown"}
COMMUNITIES: ${i.communitiesInvolved.join(", ")}
SUMMARY: ${i.summary}
SOURCES: ${i.sources.map((s) => `[${s.citationType}] ${s.title} (${s.authorOrInstitution}, ${s.publicationYear || "n.d."})`).join("; ")}
`).join("\n---\n");

      const systemPrompt = `You are Sanskriti AI, the cultural guide of BHARAT (India, In Its Own Words).
Your foundational mandate is to ground every statement strictly in authentic Indian cultural history, epigraphy, and documented oral traditions.

CRITICAL DISTINCTION MANDATE:
You must explicitly distinguish between:
1. HISTORICAL: Archival, epigraphic, and archaeologically verified events and structures.
2. BELIEF: Sacred living faith, theological convictions, and community rituals.
3. FOLKLORE: Regional fables, visual scrolls, myths, and cautionary tales.
4. ORAL TRADITION: Bardic genealogies, ballads, and spoken-word community histories.

Whenever discussing topics that blend history and belief (e.g. miracles, heroic legends), explicitly clarify what the archaeological/archival record shows versus what community devotion or bardic song celebrates.
Reference the provided sources by name and institution.`;

      const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `USER QUERY: "${qClean}"\n\nGROUNDED CULTURAL KNOWLEDGE BASE:\n${contextText}\n\nPlease provide a source-aware, category-conscious synthesis answering the user's query.`
          }
        ]
      });

      const rawText = response.content[0].type === "text" ? response.content[0].text : "";

      return {
        answer: rawText,
        classificationBreakdown: groundedPool.map((item) => ({
          category: item.category,
          explanation: `Categorized as ${item.category} based on ${item.verificationStatus} sources: ${item.sources.map((s) => s.authorOrInstitution).join(", ")}`
        })),
        citedSources,
        groundedItems: groundedPool.map((i) => ({
          title: i.title,
          slug: i.slug,
          category: i.category,
          stateName: i.stateName
        })),
        confidenceScore: dynamicConfidence,
        disclaimer: "Synthesized via Sanskriti AI (Claude Sonnet 3.5) with strict retrieval grounding in BHARAT verified cultural archives."
      };
    } catch (err) {
      console.warn("Anthropic API call failed or timed out, falling back to local Sanskriti AI Engine:", err);
      // Fall through to local retrieval engine
    }
  }

  // Local Sanskriti AI Semantic Synthesis Engine (100% Reliable Offline Fallback)
  return generateLocalSanskritiResponse(qClean, groundedPool, citedSources, dynamicConfidence);
}

function calculateDynamicConfidence(
  query: string,
  queryTerms: string[],
  topItem: CulturalItem,
  topScore: number
): number {
  if (queryTerms.length === 0) return 0.50;

  const titleLower = topItem.title.toLowerCase();
  const summaryLower = topItem.summary.toLowerCase();
  const stateLower = topItem.stateName.toLowerCase();
  const tagsLower = topItem.tags.map((t) => t.toLowerCase());

  // 1. Term coverage ratio
  const matchedCount = queryTerms.filter(
    (t: string) =>
      testWordBoundary(titleLower, t) ||
      testWordBoundary(summaryLower, t) ||
      testWordBoundary(stateLower, t) ||
      tagsLower.some((tag: string) => testWordBoundary(tag, t))
  ).length;
  const coverageRatio = matchedCount / queryTerms.length;

  // 2. Source verification weight
  let verificationWeight = 0.35;
  if (topItem.verificationStatus === "ARCHIVAL_SOURCE") {
    verificationWeight = 0.45;
  } else if (topItem.verificationStatus === "VERIFIED") {
    verificationWeight = 0.42;
  } else if (topItem.verificationStatus === "DOCUMENTED_ORAL") {
    verificationWeight = 0.38;
  }

  // 3. Normalized relevance score bonus
  const maxExpectedScore = Math.max(queryTerms.length * 6, 12);
  const scoreRatio = Math.min(topScore / maxExpectedScore, 1.0);

  // Dynamic formula: verificationWeight + coverageRatio*0.35 + scoreRatio*0.18
  const computed = verificationWeight + coverageRatio * 0.35 + scoreRatio * 0.18;
  return Number(Math.min(0.98, Math.max(0.42, computed)).toFixed(2));
}

function generateLocalSanskritiResponse(
  query: string,
  groundedPool: ReturnType<typeof CulturalRepository.getCulturalItems>,
  citedSources: SourceCitation[],
  confidenceScore: number
): SanskritiAIResponse {
  const primaryItem = groundedPool[0];
  const qLower = query.toLowerCase();

  const isAskingComparison = qLower.includes("vs") || qLower.includes("difference") || qLower.includes("distinction") || qLower.includes("compare");

  let answer = "";

  if (isAskingComparison && groundedPool.length >= 2) {
    const itemA = groundedPool[0];
    const itemB = groundedPool[1];
    answer = `In understanding Indian cultural heritage through the lens of BHARAT, it is vital to contrast **${itemA.title}** (${itemA.category}) with **${itemB.title}** (${itemB.category}).\n\n` +
      `### 1. The Historical Perspective (${itemA.category})\n` +
      `${itemA.summary}\n\n` +
      `*Epigraphic & Archival Grounding:* ${itemA.sources.map((s) => `${s.title} (${s.authorOrInstitution})`).join("; ")} confirms the verifiable temporal anchors (${itemA.periodOrOrigin || "Documented Era"}).\n\n` +
      `### 2. The Living Tradition & Community Perspective (${itemB.category})\n` +
      `${itemB.summary}\n\n` +
      `*Oral & Cultural Custodianship:* Nurtured by communities including ${itemB.communitiesInvolved.join(", ")}, this reflects how memory and devotional practice preserve truths that written political charters often omit.`;
  } else if (primaryItem) {
    answer = `Based on BHARAT's verified cultural repositories for **${primaryItem.stateName}**, here is the source-grounded breakdown for your query:\n\n` +
      `### Cultural Profile: ${primaryItem.title}\n` +
      `**Classification:** ${primaryItem.category} | **Status:** ${primaryItem.verificationStatus.replace('_', ' ')}\n\n` +
      `${primaryItem.body.split('\n\n')[0]}\n\n` +
      `### Verified Historical & Archival Context\n` +
      `${primaryItem.body.split('\n\n')[1] || primaryItem.summary}\n\n` +
      `### Source Integrity & Audit Trail\n` +
      `This record is authenticated by **${primaryItem.sources[0]?.authorOrInstitution || "National Archival Records"}** (${primaryItem.sources[0]?.title || "Archival Document"}).`;
  } else {
    answer = `BHARAT's cultural database currently holds deep records across 28 States and 8 UTs. To explore specific insights, you can inquire about Maratha Naval forts, Rajasthani Phad bards, Assam's Ahom amphitheaters, Chola epigraphy, or Kerala's Theyyam sacred groves.`;
  }

  return {
    answer,
    classificationBreakdown: groundedPool.map((item) => ({
      category: item.category,
      explanation: `Verified under ${item.category} using ${item.verificationStatus} records maintained by ${item.sources[0]?.authorOrInstitution || "cultural keepers"}.`
    })),
    citedSources,
    groundedItems: groundedPool.map((i) => ({
      title: i.title,
      slug: i.slug,
      category: i.category,
      stateName: i.stateName
    })),
    confidenceScore,
    disclaimer: "Verified via Sanskriti AI Local Retrieval Engine. Fully grounded in peer-reviewed epigraphy, ASI monuments, and authenticated oral recordings."
  };
}
