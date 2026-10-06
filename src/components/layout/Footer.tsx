import React from "react";
import Link from "next/link";
import { ShieldCheck, BookOpen, Heart, Landmark, Compass, Award } from "lucide-react";
import { HeritageEmblem } from "@/components/ui/HeritageEmblem";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300">
      {/* Manifesto Banner */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-amber-500/5 dark:bg-amber-500/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold">
            BHARAT Core Product Principle
          </p>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
            Build Technology Around Culture. Not Culture Around Technology.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-stone-600 dark:text-stone-400 pt-1">
            <span className="bg-white dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-800 shadow-2xs">
              EXPLORE INDIA
            </span>
            <span>&rarr;</span>
            <span className="bg-white dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-800 shadow-2xs">
              UNDERSTAND INDIA
            </span>
            <span>&rarr;</span>
            <span className="bg-white dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-800 shadow-2xs">
              CONNECT INDIA
            </span>
            <span>&rarr;</span>
            <span className="bg-white dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-800 shadow-2xs">
              EXPERIENCE INDIA
            </span>
            <span>&rarr;</span>
            <span className="bg-white dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-800 text-amber-700 dark:text-amber-400 font-semibold shadow-2xs">
              PRESERVE INDIA
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <HeritageEmblem size="sm" />
            <span className="font-serif font-black text-xl text-stone-900 dark:text-stone-100">
              BHARAT
            </span>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            India, In Its Own Words is an open-access cultural repository and retrieval-grounded intelligence platform safeguarding tangible monuments, living traditions, and oral genealogies with auditable citations.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Open Citations & ASI Grounding</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Exploration Hub
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/states" className="hover:text-amber-600 transition">
                All 28 States & 8 UTs
              </Link>
            </li>
            <li>
              <Link href="/states/maharashtra" className="hover:text-amber-600 transition">
                Maharashtra Maratha Swarajya
              </Link>
            </li>
            <li>
              <Link href="/states/rajasthan" className="hover:text-amber-600 transition">
                Rajasthan Desert Bards
              </Link>
            </li>
            <li>
              <Link href="/states/assam" className="hover:text-amber-600 transition">
                Assam Ahom & Majuli
              </Link>
            </li>
            <li>
              <Link href="/states/kerala" className="hover:text-amber-600 transition">
                Kerala Muziris & Theyyam
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-amber-600" />
            Four Lenses
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/culture?category=HISTORICAL" className="hover:text-amber-600 transition">
                Historical Facts & Epigraphy
              </Link>
            </li>
            <li>
              <Link href="/culture?category=BELIEF" className="hover:text-amber-600 transition">
                Living Beliefs & Faith
              </Link>
            </li>
            <li>
              <Link href="/culture?category=FOLKLORE" className="hover:text-amber-600 transition">
                Folklore & Visual Scrolls
              </Link>
            </li>
            <li>
              <Link href="/culture?category=ORAL_TRADITION" className="hover:text-amber-600 transition">
                Oral Traditions & Bards
              </Link>
            </li>
            <li>
              <Link href="/living-heritage" className="hover:text-amber-600 transition">
                GI Crafts & Performing Arts
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            Platform & Governance
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/sanskriti-ai" className="hover:text-amber-600 transition">
                Sanskriti AI Cultural Assistant
              </Link>
            </li>
            <li>
              <Link href="/contribute" className="hover:text-amber-600 transition">
                Community Contribution Portal
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-amber-600 transition">
                Moderation & Keeper Audit
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-amber-600 transition">
                Cross-Archive Search
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Academic Attribution */}
      <div className="border-t border-stone-200 dark:border-stone-800 py-6 text-center text-xs text-stone-500">
        <p className="flex items-center justify-center gap-1">
          Built for preservation with <Heart className="w-3 h-3 text-red-500 fill-current" /> by the BHARAT Cultural Initiative.
        </p>
        <p className="mt-1 text-[11px]">
          All epigraphical references, ASI records, and oral recordings remain the heritage of the native communities of India.
        </p>
      </div>
    </footer>
  );
}
