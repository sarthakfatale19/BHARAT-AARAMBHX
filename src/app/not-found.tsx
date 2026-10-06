import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 mx-auto flex items-center justify-center">
          <Compass className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
          Cultural Record Not Found
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          The requested cultural profile, state territory, or bardic archive does not exist or has been relocated within the BHARAT repository.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white transition shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/culture"
            className="px-5 py-2.5 rounded-xl text-xs font-medium border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
          >
            Browse Culture
          </Link>
        </div>
      </div>
    </div>
  );
}
