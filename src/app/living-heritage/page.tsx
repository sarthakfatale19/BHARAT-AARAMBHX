"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { Layers, Users } from "lucide-react";

export default function LivingHeritagePage() {
  const [selectedType, setSelectedType] = useState<string>("ALL");

  const items = useMemo(() => {
    return CulturalRepository.getLivingHeritage(selectedType);
  }, [selectedType]);

  const types = [
    { key: "ALL", label: "All Intangible Heritage" },
    { key: "CRAFT", label: "Ancient Crafts" },
    { key: "TEXTILE", label: "Textiles & Weaving" },
    { key: "PERFORMING_ARTS", label: "Performing Arts" },
    { key: "RITUAL", label: "Sacred Rituals" },
    { key: "CULINARY", label: "Culinary Legacies" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Intangible Cultural Heritage & Guilds</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            Living Heritage of India
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Preserving the tactile techniques, hereditary knowledge guilds, GI-tagged crafts, and living ritual arts passed mouth-to-ear and hand-to-hand across millennia.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs">
          {types.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setSelectedType(t.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedType === t.key
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Living Heritage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const statusConfig = {
              THRIVING: "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
              REVIVED: "bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
              ENDANGERED: "bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
            }[item.status];

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm overflow-hidden flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-600 transition"
              >
                <div>
                  {item.heroImageUrl && (
                    <div className="relative h-48 w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                      <img
                        src={item.heroImageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/90 dark:bg-stone-900/90 text-stone-900 dark:text-stone-100 backdrop-blur">
                          {item.heritageType}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${statusConfig}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                        {item.stateName}
                      </span>
                      {item.giStatus && (
                        <span className="text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                          {item.giStatus}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 space-y-1.5 text-xs">
                      <p className="text-[11px] font-semibold text-stone-700 dark:text-stone-300">
                        Cultural Significance:
                      </p>
                      <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed italic">
                        &ldquo;{item.culturalSignificance}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    <span>Guild: <strong>{item.communitiesPracticing[0]}</strong></span>
                  </div>
                  <Link
                    href={`/states/${item.stateSlug}`}
                    className="font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                  >
                    <span>State &rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
