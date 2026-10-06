"use client";

import React, { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SanskritiAIResponse } from "@/types/cultural";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { SourceCitations } from "@/components/ui/SourceCitations";
import { 
  Sparkles, 
  Send, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  RotateCcw,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const SAMPLE_PROMPTS = [
  {
    category: "HISTORICAL vs BALLAD",
    prompt: "What is the historical evidence for Chhatrapati Shivaji's naval forts vs bardic Powadas?",
  },
  {
    category: "CHOLA EPIGRAPHY",
    prompt: "Explain the epigraphic inscriptions of the Brihadisvara Temple at Thanjavur.",
  },
  {
    category: "LIVING FOLKLORE",
    prompt: "How do Rajasthan's Phad scroll paintings combine oral folklore with visual performance?",
  },
  {
    category: "SACRED MONASTICISM",
    prompt: "Explain how Majuli's Sattriya culture and Sankaradeva dismantled caste barriers.",
  },
];

function SanskritiAIChat() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || "";
  const initialState = searchParams.get("state") || "";

  const [query, setQuery] = useState(initialPrompt);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<SanskritiAIResponse | null>(null);
  const [showBenchmarking, setShowBenchmarking] = useState(false);
  const hasAutoFired = useRef(false);

  const handleAsk = useCallback(async (queryText?: string) => {
    const textToSend = queryText || query;
    if (!textToSend.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSend.trim(),
          categoryFilter: selectedCategory === "ALL" ? undefined : selectedCategory,
          stateSlugFilter: initialState || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to retrieve response from Sanskriti AI.");
      }

      const data: SanskritiAIResponse = await res.json();
      setAiResponse(data);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to generate grounded cultural answer.");
    } finally {
      setLoading(false);
    }
  }, [query, loading, selectedCategory, initialState]);

  useEffect(() => {
    if (initialPrompt && !hasAutoFired.current) {
      hasAutoFired.current = true;
      const timer = setTimeout(() => {
        handleAsk(initialPrompt);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [initialPrompt, handleAsk]);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Grounded Cultural Assistant &bull; Anti-Hallucination Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            Sanskriti AI Guide
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Inquire about India&apos;s civilizational tapestry with strict retrieval-grounding. Every answer explicitly attributes facts to epigraphy, beliefs to sacred traditions, and tales to oral bards.
          </p>
        </div>

        {/* SIH BENCHMARKING CALLOUT: Generic AI vs Sanskriti AI */}
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-4 shadow-xs">
          <button
            type="button"
            onClick={() => setShowBenchmarking(!showBenchmarking)}
            className="w-full flex items-center justify-between text-left gap-2 text-xs font-semibold text-stone-800 dark:text-stone-200"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span> Why generic LLMs fail on Indian culture vs Sanskriti AI</span>
            </div>
            <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-mono text-[11px]">
              <span>{showBenchmarking ? "Hide Technical Comparison" : "View Comparison Matrix"}</span>
              {showBenchmarking ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {showBenchmarking && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 text-xs animate-in fade-in">
              {/* Flaw of generic LLMs */}
              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 space-y-2">
                <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-300 font-bold">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Standard Generic LLM (ChatGPT / Claude)</span>
                </div>
                <ul className="space-y-1.5 text-rose-900 dark:text-rose-200 text-[11px] leading-relaxed">
                  <li>&bull; Flattens historical archaeology and folklore into a single narrative.</li>
                  <li>&bull; Hallucinates fictional inscription dates and attribution lineages.</li>
                  <li>&bull; Lacks auditable ASI monument numbers and Gazetteers.</li>
                  <li>&bull; Confuses 19th-century colonial bards with 17th-century court records.</li>
                </ul>
              </div>

              {/* Sanskriti AI Rigor */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>BHARAT Sanskriti AI (Retrieval-Grounded)</span>
                </div>
                <ul className="space-y-1.5 text-emerald-900 dark:text-emerald-200 text-[11px] leading-relaxed">
                  <li>&bull; Strictly differentiates 4 Lenses (Historical, Sacred, Folklore, Bardic).</li>
                  <li>&bull; Real-time citation linking to ASI records and academic monographs.</li>
                  <li>&bull; Confidence score metrics based on primary epigraphical verification.</li>
                  <li>&bull; 100% resilient offline fallback mode if remote LLM is unreachable.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Input & Form */}
        <div className="p-4 sm:p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm space-y-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="space-y-4"
          >
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask any cultural, historical, or epigraphic question about Bharat..."
                rows={3}
                className="w-full p-4 rounded-2xl text-sm sm:text-base border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none font-serif"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              {/* Category Filter Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-medium">Lens:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1.5 rounded-lg text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none"
                >
                  <option value="ALL">All Lenses (Balanced)</option>
                  <option value="HISTORICAL">Historical Epigraphy Focus</option>
                  <option value="BELIEF">Sacred Belief Focus</option>
                  <option value="FOLKLORE">Folklore & Myth Focus</option>
                  <option value="ORAL_TRADITION">Oral Tradition Focus</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-2 justify-end">
                {aiResponse && (
                  <button
                    type="button"
                    onClick={() => {
                      setAiResponse(null);
                      setQuery("");
                    }}
                    className="p-2 rounded-xl text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                    title="Reset chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-xs transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Retrieving Archives...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Inquire Sanskriti AI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Sample Prompts */}
          {!aiResponse && !loading && (
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2">
              <p className="text-xs font-semibold text-stone-500">
                Or explore these curated research queries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SAMPLE_PROMPTS.map((sp, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setQuery(sp.prompt);
                      handleAsk(sp.prompt);
                    }}
                    className="text-left p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-800/40 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-stone-100 transition group"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mb-0.5">
                      {sp.category}
                    </span>
                    <span className="text-xs text-stone-800 dark:text-stone-200 group-hover:text-amber-800 dark:group-hover:text-amber-300 font-medium">
                      &ldquo;{sp.prompt}&rdquo;
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-4 animate-pulse">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber-400" />
              <div className="h-4 w-40 bg-stone-200 dark:bg-stone-700 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-stone-200 dark:bg-stone-700 rounded" />
              <div className="h-4 w-5/6 bg-stone-200 dark:bg-stone-700 rounded" />
              <div className="h-4 w-4/6 bg-stone-200 dark:bg-stone-700 rounded" />
            </div>
            <div className="h-24 bg-stone-100 dark:bg-stone-800 rounded-2xl" />
          </div>
        )}

        {/* Grounded Response View */}
        {aiResponse && !loading && (
          <div className="space-y-6">
            <article className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-10 shadow-xs space-y-6">
              {/* Confidence & Epistemic Stamp */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Retrieval-Grounded in BHARAT Verified Records</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                  Confidence: {Math.round(aiResponse.confidenceScore * 100)}%
                </span>
              </div>

              {/* Grounded Cultural Items Found */}
              {aiResponse.groundedItems.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Grounded Primary Entities:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {aiResponse.groundedItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/culture/${item.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 transition"
                      >
                        <CategoryBadge category={item.category} size="sm" showTooltip={false} />
                        <span>{item.title}</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Formatted Answer Body */}
              <div className="prose dark:prose-invert max-w-none text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed space-y-4">
                {aiResponse.answer.split("\n\n").map((para, idx) => {
                  if (para.startsWith("### ")) {
                    return (
                      <h3 key={idx} className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-stone-100 not-prose pt-2">
                        {para.replace("### ", "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Epistemic Categorization Breakdown */}
              {aiResponse.classificationBreakdown.length > 0 && (
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    Epistemic Classification Breakdown
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
                    {aiResponse.classificationBreakdown.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b.explanation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Disclaimer */}
              <div className="text-[11px] text-stone-500 dark:text-stone-400 italic pt-2 border-t border-stone-100 dark:border-stone-800">
                {aiResponse.disclaimer}
              </div>
            </article>

            {/* Cited Primary Sources */}
            {aiResponse.citedSources.length > 0 && (
              <SourceCitations
                sources={aiResponse.citedSources}
                title="Primary Auditable Sources Cited in this Response"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SanskritiAIPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-stone-500">Loading Sanskriti AI...</div>}>
      <SanskritiAIChat />
    </Suspense>
  );
}
