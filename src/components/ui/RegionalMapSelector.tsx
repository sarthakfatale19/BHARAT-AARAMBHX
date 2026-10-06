"use client";

import React from "react";
import { IndianRegion } from "@/types/cultural";
import { Compass, Landmark, Users } from "lucide-react";

interface RegionalMapSelectorProps {
  selectedRegion: "ALL" | IndianRegion;
  onSelectRegion: (region: "ALL" | IndianRegion) => void;
  stateCountsByRegion: Record<string, number>;
}

const REGION_METADATA: {
  id: IndianRegion;
  label: string;
  icon: string;
  color: string;
  gradient: string;
  culturalAnchor: string;
}[] = [
  {
    id: "Western India",
    label: "Western India",
    icon: "🏰",
    color: "from-amber-600 to-amber-700",
    gradient: "hover:border-amber-500",
    culturalAnchor: "Maratha Marine Forts & Thar Desert Bards",
  },
  {
    id: "Southern India",
    label: "Southern India",
    icon: "🛕",
    color: "from-emerald-600 to-teal-700",
    gradient: "hover:border-emerald-500",
    culturalAnchor: "Chola Epigraphy & Muziris Spice Coast",
  },
  {
    id: "Northern India",
    label: "Northern India",
    icon: "🌄",
    color: "from-indigo-600 to-blue-700",
    gradient: "hover:border-indigo-500",
    culturalAnchor: "Silk Road Monasteries & Gangetic Heritage",
  },
  {
    id: "Eastern India",
    label: "Eastern India",
    icon: "☀️",
    color: "from-orange-600 to-red-700",
    gradient: "hover:border-orange-500",
    culturalAnchor: "Konark Sun Architecture & Baul Minstrels",
  },
  {
    id: "North East India",
    label: "North East India",
    icon: "🎋",
    color: "from-teal-600 to-emerald-800",
    gradient: "hover:border-teal-500",
    culturalAnchor: "Ahom Dynasty, Majuli Satras & Living Bridges",
  },
  {
    id: "Central India",
    label: "Central India",
    icon: "🏛️",
    color: "from-purple-600 to-pink-700",
    gradient: "hover:border-purple-500",
    culturalAnchor: "Bhimbetka Cave Murals & Bastar Dhokra Bronze",
  },
];

export function RegionalMapSelector({
  selectedRegion,
  onSelectRegion,
  stateCountsByRegion,
}: RegionalMapSelectorProps) {
  return (
    <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 p-5 sm:p-7 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Civilizational Zones of Bharat</span>
          </span>
          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-0.5">
            Geographic Cultural Architecture
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onSelectRegion("ALL")}
          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition ${
            selectedRegion === "ALL"
              ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs"
              : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
          }`}
        >
          View All 28 States & 8 UTs
        </button>
      </div>

      {/* Grid of Interactive Zone Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {REGION_METADATA.map((reg) => {
          const isSelected = selectedRegion === reg.id;
          const count = stateCountsByRegion[reg.id] || 0;

          return (
            <button
              key={reg.id}
              type="button"
              onClick={() => onSelectRegion(isSelected ? "ALL" : reg.id)}
              className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group flex flex-col justify-between ${
                isSelected
                  ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/20 shadow-sm"
                  : "border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-800/40 hover:bg-white dark:hover:bg-stone-800 hover:border-amber-300"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl" role="img" aria-label={reg.label}>
                    {reg.icon}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                      {reg.label}
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      {count} States & Territories
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white font-mono">
                    ACTIVE
                  </span>
                )}
              </div>

              <div className="pt-3 mt-2 border-t border-stone-200/50 dark:border-stone-700/50 flex items-center justify-between text-[11px]">
                <span className="text-stone-600 dark:text-stone-300 truncate font-medium">
                  {reg.culturalAnchor}
                </span>
                <span className="text-amber-700 dark:text-amber-400 font-semibold shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform">
                  &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
