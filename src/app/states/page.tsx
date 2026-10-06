"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { IndianRegion } from "@/types/cultural";
import { Compass, Search, MapPin, Languages, ArrowRight } from "lucide-react";
import { RegionalMapSelector } from "@/components/ui/RegionalMapSelector";

const REGIONS: ("ALL" | IndianRegion)[] = [
  "ALL",
  "Western India",
  "Southern India",
  "Northern India",
  "Eastern India",
  "North East India",
  "Central India",
];

export default function StatesExplorerPage() {
  const [selectedRegion, setSelectedRegion] = useState<"ALL" | IndianRegion>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const allStates = useMemo(() => CulturalRepository.getStates(), []);

  const stateCountsByRegion = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of allStates) {
      counts[s.region] = (counts[s.region] || 0) + 1;
    }
    return counts;
  }, [allStates]);

  const filteredStates = useMemo(() => {
    return allStates.filter((s) => {
      const matchesRegion = selectedRegion === "ALL" || s.region === selectedRegion;
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.officialLanguages.some((lang) => lang.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [allStates, selectedRegion, searchQuery]);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>28 States & 8 Union Territories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            States & Territories of Bharat
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Every state is an ancient civilizational republic in miniature, with distinct epigraphic records, living linguistic traditions, and geographic ecologies.
          </p>
        </div>

        {/* Visual Geographic Regional Zone Explorer */}
        <RegionalMapSelector
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          stateCountsByRegion={stateCountsByRegion}
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/50 backdrop-blur shadow-xs">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedRegion === region
                    ? "bg-amber-600 text-white shadow-xs font-semibold"
                    : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                {region === "ALL" ? "All Regions" : region}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search state, capital, language..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* Results Count & Current Filter Stamp */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
          <span>
            Showing <strong>{filteredStates.length}</strong> of {allStates.length} States & Territories
          </span>
          {selectedRegion !== "ALL" && (
            <span className="font-mono text-amber-700 dark:text-amber-400">
              Filter: {selectedRegion}
            </span>
          )}
        </div>

        {/* State Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((state) => (
            <Link
              key={state.id}
              href={`/states/${state.slug}`}
              className="group rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                  <img
                    src={state.heroImageUrl}
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/90 dark:bg-stone-900/90 text-stone-900 dark:text-stone-100 backdrop-blur">
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

                <div className="p-5 space-y-3">
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                    {state.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs">
                    <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Capital: <strong className="text-stone-800 dark:text-stone-200 font-medium">{state.capital}</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                      <Languages className="w-3.5 h-3.5 text-amber-600" />
                      <span>Languages: <strong className="text-stone-800 dark:text-stone-200 font-medium">{state.officialLanguages.join(", ")}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3.5 bg-stone-50 dark:bg-stone-800/40 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-500">
                  {state.livingTraditionCount ? `${state.livingTraditionCount} Documented Traditions` : "Documented Heritage"}
                </span>
                <span className="font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
