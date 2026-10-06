"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { Mic, Radio } from "lucide-react";

export default function StoriesPage() {
  const [selectedTradition, setSelectedTradition] = useState<string>("ALL");

  const stories = useMemo(() => {
    return CulturalRepository.getStories(selectedTradition);
  }, [selectedTradition]);

  const traditionTypes = [
    { key: "ALL", label: "All Oral Traditions" },
    { key: "BARDIC", label: "Heroic Bardic Ballads" },
    { key: "COMMUNITY_MEMORY", label: "Community Memory & Legends" },
    { key: "FOLK_EPIC", label: "Folk Epics & Fables" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-semibold">
            <Mic className="w-3.5 h-3.5 text-cyan-600" />
            <span>Spoken-Word Historiography</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            Stories & Bardic Genealogies
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            In traditional Indian culture, memory was preserved not on parchment, but in the cadence of the singing voice. Explore field-recorded oral narratives, bardic chronicles, and village remembrances.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs">
          {traditionTypes.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setSelectedTradition(t.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedTradition === t.key
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Stories List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col justify-between space-y-4 hover:border-amber-400 dark:hover:border-amber-600 transition shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    {story.traditionType.replace("_", " ")}
                  </span>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                    {story.stateName}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  <Link href={`/stories/${story.slug}`} className="hover:text-amber-600 transition">
                    {story.title}
                  </Link>
                </h3>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  {story.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-500">
                  <p>
                    <strong className="text-stone-700 dark:text-stone-300 font-medium">Teller / Lineage:</strong> {story.tellerOrCommunity}
                  </p>
                  <p>
                    <strong className="text-stone-700 dark:text-stone-300 font-medium">Dialect:</strong> {story.languageOrDialect}
                  </p>
                  {story.audioDuration && (
                    <div className="flex items-center gap-1 text-cyan-700 dark:text-cyan-400 font-medium pt-0.5">
                      <Radio className="w-3 h-3" />
                      <span>{story.audioDuration}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  Recorded: {story.recordingYear || "Archived"}
                </span>
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                  <span>Listen & Read &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
