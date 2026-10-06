import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-amber-200 dark:border-amber-900 border-t-amber-600 animate-spin" />
        <span className="absolute inset-0 flex items-center justify-center text-sm">
          🇮🇳
        </span>
      </div>
      <p className="text-xs font-medium text-stone-500 font-mono tracking-wider uppercase animate-pulse">
        Loading BHARAT Archives...
      </p>
    </div>
  );
}
