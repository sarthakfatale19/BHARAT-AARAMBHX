import React from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { CategoryBadge, CATEGORY_CONFIG } from "@/components/ui/CategoryBadge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { HeritageEmblem } from "@/components/ui/HeritageEmblem";
import { AudioSnippetPlayer } from "@/components/ui/AudioSnippetPlayer";
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  ShieldCheck,
  CheckCircle,
  FileText,
  Volume2
} from "lucide-react";
import { ContentCategory } from "@/types/cultural";

export default function HomePage() {
  const states = CulturalRepository.getStates().slice(0, 6);
  const featuredItems = CulturalRepository.getCulturalItems().slice(0, 4);
  const livingHeritage = CulturalRepository.getLivingHeritage().slice(0, 3);
  const stats = CulturalRepository.getPlatformStats();

  const categories: ContentCategory[] = ["HISTORICAL", "BELIEF", "FOLKLORE", "ORAL_TRADITION"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION: 30-Second Value Comprehension */}
      <section className="relative overflow-hidden border-b border-stone-200 dark:border-stone-800 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent py-16 sm:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* National Architecture Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-300 dark:border-amber-800 bg-amber-50/90 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>National Open Cultural Knowledge Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              India, In Its Own Words
            </h1>

            <p className="text-lg sm:text-xl text-stone-700 dark:text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto">
              A retrieval-grounded cultural intelligence platform that distinguishes <strong className="text-stone-900 dark:text-stone-100 font-semibold">Historical Epigraphy</strong> from <strong className="text-stone-900 dark:text-stone-100 font-semibold">Living Belief</strong>, <strong className="text-stone-900 dark:text-stone-100 font-semibold">Folklore</strong>, and <strong className="text-stone-900 dark:text-stone-100 font-semibold">Oral Tradition</strong> with auditable scholarly citations.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/states"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-md shadow-amber-600/20 transition-all hover:scale-[1.02]"
              >
                <Compass className="w-4 h-4" />
                <span>Explore States & UTs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/sanskriti-ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 transition-all hover:scale-[1.02] shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Ask Sanskriti AI</span>
              </Link>
            </div>

            {/* Live Metrics Counter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-200/80 dark:border-stone-800/80">
              <div className="p-3 bg-white/70 dark:bg-stone-900/50 backdrop-blur rounded-xl border border-stone-200/60 dark:border-stone-800">
                <p className="text-2xl sm:text-3xl font-serif font-black text-amber-700 dark:text-amber-400">
                  {stats.stateCount}
                </p>
                <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-0.5">
                  States & UTs Covered
                </p>
              </div>

              <div className="p-3 bg-white/70 dark:bg-stone-900/50 backdrop-blur rounded-xl border border-stone-200/60 dark:border-stone-800">
                <p className="text-2xl sm:text-3xl font-serif font-black text-amber-700 dark:text-amber-400">
                  {stats.verificationRate}%
                </p>
                <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-0.5">
                  Archival Audit Rate
                </p>
              </div>

              <div className="p-3 bg-white/70 dark:bg-stone-900/50 backdrop-blur rounded-xl border border-stone-200/60 dark:border-stone-800">
                <p className="text-2xl sm:text-3xl font-serif font-black text-amber-700 dark:text-amber-400">
                  {stats.totalSources}+
                </p>
                <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-0.5">
                  Scholarly & ASI Citations
                </p>
              </div>

              <div className="p-3 bg-white/70 dark:bg-stone-900/50 backdrop-blur rounded-xl border border-stone-200/60 dark:border-stone-800">
                <p className="text-2xl sm:text-3xl font-serif font-black text-amber-700 dark:text-amber-400">
                  4 Lenses
                </p>
                <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-0.5">
                  Epistemic Grounding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR LENSES OF KNOWLEDGE (Core Differentiator) */}
      <section id="epistemic-lenses" className="py-14 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
              Epistemic Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              Four Lenses of Cultural Truth
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
              Indian culture cannot be flattened into a single database column. BHARAT enforces distinct classification to preserve the integrity of archaeological facts while honoring living devotion and bardic memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const conf = CATEGORY_CONFIG[cat];
              const Icon = conf.icon;
              return (
                <div
                  key={cat}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 bg-stone-50/50 dark:bg-stone-900/40 hover:border-amber-400 dark:hover:border-amber-600 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${conf.bgClass} ${conf.textClass} border ${conf.borderClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                      {conf.label}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      {conf.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-stone-200/60 dark:border-stone-800">
                    <Link
                      href={`/culture?category=${cat}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:gap-2 transition-all"
                    >
                      <span>Explore {conf.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DISCOVER INDIA: 60-Second Cultural Discovery Across States */}
      <section className="py-14 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                Civilizational Geography
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                Explore States & Union Territories
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                Deep-dive into regional history, monuments, languages, and living customs.
              </p>
            </div>
            <Link
              href="/states"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800"
            >
              <span>View All 28 States & 8 UTs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state) => (
              <Link
                key={state.id}
                href={`/states/${state.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                  <img
                    src={state.heroImageUrl}
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white/90 dark:bg-stone-900/90 text-stone-900 dark:text-stone-100 backdrop-blur">
                      {state.code}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">
                      {state.region}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white leading-tight">
                      {state.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                    {state.summary}
                  </p>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
                    <span>Capital: <strong className="text-stone-700 dark:text-stone-300 font-medium">{state.capital}</strong></span>
                    <span className="text-amber-700 dark:text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CULTURAL PROFILES WITH VERIFIED SOURCES */}
      <section className="py-14 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                Archival & Field Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                Documented Cultural Profiles
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                Every record displays verifiable primary sources, field recordings, and responsible custody.
              </p>
            </div>
            <Link
              href="/culture"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800"
            >
              <span>Explore All Cultural Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30 p-6 flex flex-col justify-between space-y-4 hover:border-amber-300 dark:hover:border-amber-700 transition"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CategoryBadge category={item.category} size="sm" />
                    <VerificationBadge status={item.verificationStatus} size="sm" />
                  </div>

                  <div>
                    <span className="text-xs text-stone-500 font-medium">{item.stateName} &bull; {item.periodOrOrigin}</span>
                    <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mt-0.5">
                      <Link href={`/culture/${item.slug}`} className="hover:text-amber-600 transition">
                        {item.title}
                      </Link>
                    </h3>
                    {item.nativeTitle && (
                      <p className="text-xs text-amber-800 dark:text-amber-300 font-serif mt-0.5">
                        {item.nativeTitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Audio preview for oral traditions */}
                  {item.category === "ORAL_TRADITION" && (
                    <AudioSnippetPlayer
                      title={item.title}
                      tradition="Shahiri Ballad / Bardic Oral Tradition"
                      duration="0:45"
                    />
                  )}

                  <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-stone-200/80 dark:border-stone-800 text-xs">
                    <p className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Primary Source Grounding:
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 italic mt-0.5">
                      {item.sources[0]?.title} &mdash; {item.sources[0]?.authorOrInstitution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Communities: <strong className="text-stone-700 dark:text-stone-300 font-normal">{item.communitiesInvolved.slice(0, 2).join(", ")}</strong>
                  </span>
                  <Link
                    href={`/culture/${item.slug}`}
                    className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SANSKRITI AI INTERACTIVE PREVIEW */}
      <section className="py-14 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-gradient-to-r from-amber-950 via-stone-950 to-stone-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Retrieval-Grounded Cultural Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black">
              Sanskriti AI Guide
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Experience an AI companion engineered specifically to avoid cultural hallucination. Sanskriti AI cites historical gazetteers, epigraphical corpora, and field bards in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Link
              href="/sanskriti-ai?prompt=What is the historical evidence for Chhatrapati Shivaji's naval forts vs bardic Powadas?"
              className="p-5 rounded-xl border border-stone-800 bg-stone-900/80 hover:bg-stone-800/80 hover:border-amber-500/50 transition group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-mono tracking-wider font-semibold">
                  History vs Ballad
                </span>
                <p className="text-sm font-medium text-stone-100 group-hover:text-amber-200 transition">
                  &ldquo;What is the historical evidence for Shivaji Maharaj&apos;s naval forts vs bardic Powadas?&rdquo;
                </p>
              </div>
              <span className="text-xs text-amber-400 inline-flex items-center gap-1 font-semibold">
                Ask Sanskriti AI &rarr;
              </span>
            </Link>

            <Link
              href="/sanskriti-ai?prompt=Explain the epigraphic inscriptions of the Brihadisvara Temple at Thanjavur"
              className="p-5 rounded-xl border border-stone-800 bg-stone-900/80 hover:bg-stone-800/80 hover:border-amber-500/50 transition group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-mono tracking-wider font-semibold">
                  Chola Epigraphy
                </span>
                <p className="text-sm font-medium text-stone-100 group-hover:text-amber-200 transition">
                  &ldquo;Explain the epigraphic inscriptions of the Brihadisvara Temple at Thanjavur.&rdquo;
                </p>
              </div>
              <span className="text-xs text-amber-400 inline-flex items-center gap-1 font-semibold">
                Ask Sanskriti AI &rarr;
              </span>
            </Link>

            <Link
              href="/sanskriti-ai?prompt=How do Rajasthan's Phad scroll paintings combine oral folklore with visual performance?"
              className="p-5 rounded-xl border border-stone-800 bg-stone-900/80 hover:bg-stone-800/80 hover:border-amber-500/50 transition group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-mono tracking-wider font-semibold">
                  Living Folklore
                </span>
                <p className="text-sm font-medium text-stone-100 group-hover:text-amber-200 transition">
                  &ldquo;How do Rajasthan&apos;s Phad scroll paintings combine oral folklore with performance?&rdquo;
                </p>
              </div>
              <span className="text-xs text-amber-400 inline-flex items-center gap-1 font-semibold">
                Ask Sanskriti AI &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LIVING HERITAGE & INTANGIBLE CULTURE */}
      <section className="py-14 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                Preservation in Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                Living Heritage & Endangered Guilds
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                Crafts, performing arts, and culinary traditions that define the lived experience of Bharat.
              </p>
            </div>
            <Link
              href="/living-heritage"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800"
            >
              <span>View All Crafts & Traditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {livingHeritage.map((lh) => (
              <div
                key={lh.id}
                className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/40 p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-800 dark:text-amber-300">
                      {lh.heritageType}
                    </span>
                    {lh.giStatus && (
                      <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                        {lh.giStatus}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                    {lh.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {lh.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/60 dark:border-stone-800 text-[11px] text-stone-500">
                  Practicing Guild: <span className="font-medium text-stone-700 dark:text-stone-300">{lh.communitiesPracticing[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION: PRESERVE & CONTRIBUTE */}
      <section className="py-16 sm:py-20 bg-amber-500/5 dark:bg-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
            Community Preservation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-100">
            Are You a Cultural Keeper or Local Historian?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Help document your town&apos;s oral histories, endangered crafts, or village epigraphs. All contributions enter a transparent scholarly moderation workflow before permanent archival preservation.
          </p>
          <div className="pt-2">
            <Link
              href="/contribute"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-100 text-white shadow-md transition"
            >
              <span>Submit Cultural Heritage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
