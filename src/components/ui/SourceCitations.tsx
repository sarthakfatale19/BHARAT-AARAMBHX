"use client";

import React, { useState } from "react";
import { SourceCitation } from "@/types/cultural";
import { BookOpen, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

interface SourceCitationsProps {
  sources: SourceCitation[];
  title?: string;
  defaultExpanded?: boolean;
}

export function SourceCitations({
  sources,
  title = "Verified Archival & Scholarly Citations",
  defaultExpanded = true
}: SourceCitationsProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!sources || sources.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-amber-300 dark:border-amber-800/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-xs text-amber-800 dark:text-amber-300">
        <p className="font-semibold">Source Citations in Progress</p>
        <p className="mt-1">
          This record is currently pending field archival citation attachment by cultural custodians.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/60 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-stone-50 dark:bg-stone-800/40 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-500" />
          <h4 className="font-semibold text-sm text-stone-900 dark:text-stone-100">
            {title} ({sources.length})
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <span>{expanded ? "Collapse" : "Show Sources"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {expanded && (
        <div className="p-5 space-y-4 divide-y divide-stone-100 dark:divide-stone-800">
          {sources.map((src, index) => (
            <div key={src.id || index} className={index > 0 ? "pt-4" : ""}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                    {src.citationType.replace("_", " ")}
                  </span>
                  <h5 className="font-medium text-sm text-stone-900 dark:text-stone-100 mt-1">
                    {src.title}
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                    <span className="font-medium">{src.authorOrInstitution}</span>
                    {src.publicationYear ? ` (${src.publicationYear})` : ""}
                  </p>
                </div>

                {src.urlOrArchiveRef && (
                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/80 px-2 py-1 rounded shrink-0 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                    Ref: {src.urlOrArchiveRef.slice(0, 24)}...
                  </span>
                )}
              </div>

              {src.excerpt && (
                <blockquote className="mt-2.5 pl-3 border-l-2 border-amber-500/60 italic text-xs text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-800/30 py-1 rounded-r">
                  &ldquo;{src.excerpt}&rdquo;
                </blockquote>
              )}

              {src.verifiedBy && (
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Audited by: {src.verifiedBy}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
