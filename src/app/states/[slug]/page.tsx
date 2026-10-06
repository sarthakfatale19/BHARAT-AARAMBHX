import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CulturalRepository } from "@/lib/data/repository";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { 
  ArrowLeft, 
  MapPin, 
  Languages, 
  Calendar, 
  Layers, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Mic,
  ShieldCheck
} from "lucide-react";

export async function generateStaticParams() {
  const states = CulturalRepository.getStates();
  return states.map((s) => ({ slug: s.slug }));
}

export default async function StateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = CulturalRepository.getStateBySlug(slug);

  if (!state) {
    notFound();
  }

  const stateItems = CulturalRepository.getItemsByState(slug);
  const stateLivingHeritage = CulturalRepository.getLivingHeritage().filter(
    (lh) => lh.stateSlug === slug
  );
  const stateStories = CulturalRepository.getStories().filter(
    (st) => st.stateSlug === slug
  );

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          href="/states"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All States & Territories</span>
        </Link>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-900 text-white min-h-[360px] flex flex-col justify-end p-6 sm:p-12 shadow-md">
          <img
            src={state.heroImageUrl}
            alt={state.name}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500 text-white">
                {state.code}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white">
                {state.region}
              </span>
              {state.isSeedState && (
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/80 text-white flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Primary Epigraphic Seed
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
              {state.name}
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
              {state.summary}
            </p>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Capital: <strong className="text-white font-medium">{state.capital}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-amber-400" />
                <span>Languages: <strong className="text-white font-medium">{state.officialLanguages.join(", ")}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Context & Epochs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 space-y-4">
            <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-600" />
              Historical Epochs & Sovereign Eras
            </h2>
            {state.historicalEpochs && state.historicalEpochs.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {state.historicalEpochs.map((epoch, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                  >
                    {epoch}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500">Documented sovereign timelines in progress.</p>
            )}

            {state.geographicContext && (
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                <h3 className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1">
                  Geographic & Ecological Context
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {state.geographicContext}
                </p>
              </div>
            )}
          </div>

          {/* Sanskriti AI State Inquirer */}
          <div className="rounded-2xl border border-amber-300/60 dark:border-amber-900/60 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Sanskriti AI Grounding</span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Inquire About {state.name}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Ask our retrieval-grounded engine about archaeological excavations, bardic traditions, or dynasties of {state.name}.
              </p>
            </div>

            <Link
              href={`/sanskriti-ai?state=${state.slug}&prompt=Tell me about the historical epigraphy and living traditions of ${encodeURIComponent(state.name)}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition"
            >
              <span>Ask Sanskriti AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Cultural Profiles of this State */}
        <div className="space-y-6">
          <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Documented Cultural Profiles ({stateItems.length})
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              Classified knowledge records with auditable primary citations.
            </p>
          </div>

          {stateItems.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-stone-300 dark:border-stone-800 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-stone-400 mx-auto" />
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                Submissions Welcome for {state.name}
              </h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                No verified cultural profile is currently published for this territory. Are you an archivist or native keeper?
              </p>
              <Link
                href="/contribute"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-600 text-white"
              >
                <span>Submit Profile</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 space-y-4 hover:border-amber-400 dark:hover:border-amber-600 transition shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CategoryBadge category={item.category} size="sm" />
                      <VerificationBadge status={item.verificationStatus} size="sm" />
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
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

                    <div className="text-[11px] text-stone-500 bg-stone-50 dark:bg-stone-800/50 p-2.5 rounded-lg">
                      <span className="font-semibold text-stone-700 dark:text-stone-300">Period: </span>
                      <span>{item.periodOrOrigin || "Documented Living Tradition"}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-medium">
                      {item.sources.length} Verified Sources
                    </span>
                    <Link
                      href={`/culture/${item.slug}`}
                      className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                    >
                      <span>Read Deep Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Living Heritage & Stories in this state */}
        {(stateLivingHeritage.length > 0 || stateStories.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {stateLivingHeritage.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-600" />
                  Living Craft & Performing Arts
                </h3>
                <div className="space-y-3">
                  {stateLivingHeritage.map((lh) => (
                    <div
                      key={lh.id}
                      className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                          {lh.title}
                        </span>
                        {lh.giStatus && (
                          <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                            {lh.giStatus}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                        {lh.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {stateStories.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-amber-600" />
                  Bardic Stories & Oral Genealogies
                </h3>
                <div className="space-y-3">
                  {stateStories.map((st) => (
                    <div
                      key={st.id}
                      className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2"
                    >
                      <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        {st.title}
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                        {st.summary}
                      </p>
                      <div className="text-[10px] text-stone-400 font-mono">
                        Tradition: {st.traditionType} | Teller: {st.tellerOrCommunity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
