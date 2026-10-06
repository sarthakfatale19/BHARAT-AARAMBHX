"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { ContentCategory, VerificationStatus } from "@/types/cultural";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Users 
} from "lucide-react";

export default function CultureArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedState, setSelectedState] = useState<string>("ALL");
  const [selectedVerification, setSelectedVerification] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const states = useMemo(() => CulturalRepository.getStates(), []);

  const items = useMemo(() => {
    return CulturalRepository.getCulturalItems({
      search: searchQuery,
      stateSlug: selectedState === "ALL" ? undefined : selectedState,
      category: selectedCategory === "ALL" ? undefined : (selectedCategory as ContentCategory),
      verificationStatus: selectedVerification === "ALL" ? undefined : (selectedVerification as VerificationStatus),
    });
  }, [searchQuery, selectedState, selectedCategory, selectedVerification]);

  const categories: { key: string; label: string }[] = [
    { key: "ALL", label: "All Classifications" },
    { key: "HISTORICAL", label: "Historical Facts" },
    { key: "BELIEF", label: "Sacred Beliefs" },
    { key: "FOLKLORE", label: "Folklore & Fables" },
    { key: "ORAL_TRADITION", label: "Oral Traditions" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Classified Cultural Corpus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            Cultural Knowledge Profiles
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Every entry in the BHARAT repository is grounded by strict epistemological categorization, attributing each narrative back to archaeological epigraphy, sacred devotion, or spoken bardic memory.
          </p>
        </div>

        {/* Multi-Facet Filter Bar */}
        <div className="p-4 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search monuments, bards, edicts, communities, or periods..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Classification Lens
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Territory / State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
              >
                <option value="ALL">All States & UTs</option>
                {states.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.name} ({s.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Verification Filter */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Source Audit Status
              </label>
              <select
                value={selectedVerification}
                onChange={(e) => setSelectedVerification(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
              >
                <option value="ALL">All Audit Levels</option>
                <option value="VERIFIED">Scholarly Verified</option>
                <option value="ARCHIVAL_SOURCE">Archival & ASI Source</option>
                <option value="DOCUMENTED_ORAL">Documented Oral</option>
                <option value="COMMUNITY_REVIEW">Community Review</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
          <span>Found {items.length} verified cultural profiles</span>
          {(selectedCategory !== "ALL" || selectedState !== "ALL" || selectedVerification !== "ALL" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSelectedState("ALL");
                setSelectedVerification("ALL");
                setSearchQuery("");
              }}
              className="text-amber-700 dark:text-amber-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Cultural Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
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
                  <span className="text-xs text-stone-500 font-medium">
                    {item.stateName} &bull; {item.periodOrOrigin || "Documented Era"}
                  </span>
                  <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mt-0.5">
                    <Link href={`/culture/${item.slug}`} className="hover:text-amber-600 transition">
                      {item.title}
                    </Link>
                  </h2>
                  {item.nativeTitle && (
                    <p className="text-xs text-amber-800 dark:text-amber-300 font-serif mt-0.5">
                      {item.nativeTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {/* Communities and Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {item.communitiesInvolved.slice(0, 2).map((comm, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    >
                      <Users className="w-3 h-3 text-stone-400" />
                      <span>{comm}</span>
                    </span>
                  ))}
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-800 dark:text-amber-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Primary Citation preview */}
                <div className="p-3 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-100 dark:border-stone-800 text-xs">
                  <p className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Primary Citation:
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 italic mt-0.5">
                    {item.sources[0]?.title} ({item.sources[0]?.authorOrInstitution})
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 font-medium">
                  {item.sources.length} Verified Citations Attached
                </span>
                <Link
                  href={`/culture/${item.slug}`}
                  className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                  <span>Examine Sources & Body</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
