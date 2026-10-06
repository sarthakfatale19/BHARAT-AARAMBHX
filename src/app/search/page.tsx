"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { 
  Search, 
  Compass, 
  BookOpen, 
  Layers, 
  Mic 
} from "lucide-react";

export default function SearchHubPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"ALL" | "CULTURE" | "STATES" | "LIVING" | "STORIES">("ALL");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    const cultureResults = CulturalRepository.getCulturalItems({
      search: q || undefined,
    });

    const stateResults = CulturalRepository.getStates().filter((s) => {
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.capital.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.officialLanguages.some((l) => l.toLowerCase().includes(q))
      );
    });

    const livingResults = CulturalRepository.getLivingHeritage().filter((lh) => {
      if (!q) return true;
      return (
        lh.title.toLowerCase().includes(q) ||
        lh.description.toLowerCase().includes(q) ||
        lh.culturalSignificance.toLowerCase().includes(q) ||
        lh.communitiesPracticing.some((c) => c.toLowerCase().includes(q))
      );
    });

    const storyResults = CulturalRepository.getStories().filter((st) => {
      if (!q) return true;
      return (
        st.title.toLowerCase().includes(q) ||
        st.summary.toLowerCase().includes(q) ||
        st.fullNarrative.toLowerCase().includes(q) ||
        st.tellerOrCommunity.toLowerCase().includes(q)
      );
    });

    return {
      culture: cultureResults,
      states: stateResults,
      living: livingResults,
      stories: storyResults,
      totalCount: cultureResults.length + stateResults.length + livingResults.length + storyResults.length,
    };
  }, [query]);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Search className="w-3.5 h-3.5 text-amber-600" />
            <span>Pan-Indian Cultural Archive Search</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-50">
            Search the BHARAT Knowledge Base
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            Search across monuments, epigraphical inscriptions, sacred traditions, living crafts, and oral genealogies.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative max-w-3xl mx-auto">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. 'Shivaji naval forts', 'Phad scrolls', 'Majuli mask', 'Chola', 'Ajanta'..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-base border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition"
            autoFocus
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("ALL")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "ALL"
                ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
            }`}
          >
            All Results ({searchResults.totalCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("CULTURE")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "CULTURE"
                ? "bg-amber-600 text-white"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
            }`}
          >
            Cultural Profiles ({searchResults.culture.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("STATES")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "STATES"
                ? "bg-amber-600 text-white"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
            }`}
          >
            States & UTs ({searchResults.states.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("LIVING")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "LIVING"
                ? "bg-amber-600 text-white"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
            }`}
          >
            Living Crafts ({searchResults.living.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("STORIES")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "STORIES"
                ? "bg-amber-600 text-white"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
            }`}
          >
            Oral Stories ({searchResults.stories.length})
          </button>
        </div>

        {/* Results Container */}
        <div className="space-y-6">
          {/* Cultural Profiles */}
          {(activeTab === "ALL" || activeTab === "CULTURE") && searchResults.culture.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-600" />
                Cultural Profiles ({searchResults.culture.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.culture.map((item) => (
                  <Link
                    key={item.id}
                    href={`/culture/${item.slug}`}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-2 group shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <CategoryBadge category={item.category} size="sm" />
                        <span className="text-xs text-stone-500 font-medium">{item.stateName}</span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                        {item.summary}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
                      View Profile & Sources &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* States */}
          {(activeTab === "ALL" || activeTab === "STATES") && searchResults.states.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-600" />
                States & Union Territories ({searchResults.states.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.states.map((st) => (
                  <Link
                    key={st.id}
                    href={`/states/${st.slug}`}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-2 group shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300">
                          {st.code}
                        </span>
                        <span className="text-[10px] text-stone-500">{st.region}</span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition mt-1">
                        {st.name}
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                        {st.summary}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
                      Explore State &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Living Heritage */}
          {(activeTab === "ALL" || activeTab === "LIVING") && searchResults.living.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" />
                Living Crafts & Traditions ({searchResults.living.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {searchResults.living.map((lh) => (
                  <div
                    key={lh.id}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2 shadow-xs"
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
                    <p className="text-[11px] text-stone-500">
                      Guild: <strong className="text-stone-700 dark:text-stone-300">{lh.communitiesPracticing[0]}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stories */}
          {(activeTab === "ALL" || activeTab === "STORIES") && searchResults.stories.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Mic className="w-4 h-4 text-cyan-600" />
                Oral Traditions & Ballads ({searchResults.stories.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {searchResults.stories.map((st) => (
                  <Link
                    key={st.id}
                    href={`/stories/${st.slug}`}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-2 group shadow-xs"
                  >
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300">
                        {st.traditionType}
                      </span>
                      <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition mt-1.5">
                        {st.title}
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                        {st.summary}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
                      Read Oral Narrative &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {searchResults.totalCount === 0 && (
            <div className="p-12 text-center rounded-2xl border border-dashed border-stone-300 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 space-y-3">
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                No cultural records matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-stone-500">
                Try searching for broader terms like &ldquo;temple&rdquo;, &ldquo;Maratha&rdquo;, &ldquo;silk&rdquo;, &ldquo;bard&rdquo;, or &ldquo;Assam&rdquo;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
