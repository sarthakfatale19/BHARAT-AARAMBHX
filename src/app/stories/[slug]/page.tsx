import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CulturalRepository } from "@/lib/data/repository";
import { SourceCitations } from "@/components/ui/SourceCitations";
import { 
  ArrowLeft, 
  Volume2, 
  MapPin 
} from "lucide-react";

export async function generateStaticParams() {
  const stories = CulturalRepository.getStories();
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = CulturalRepository.getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back link */}
        <div className="flex items-center justify-between">
          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Oral Traditions</span>
          </Link>

          <Link
            href={`/states/${story.stateSlug}`}
            className="text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{story.stateName} Traditions</span>
          </Link>
        </div>

        {/* Story Article */}
        <article className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              {story.traditionType.replace("_", " ")}
            </span>
            <span className="text-xs font-mono text-stone-500">
              Audited Oral History
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-50 leading-tight">
              {story.title}
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400 font-medium">
              Narrated by: <strong className="text-stone-900 dark:text-stone-100">{story.tellerOrCommunity}</strong> &bull; Dialect: <span className="italic">{story.languageOrDialect}</span>
            </p>
          </div>

          {/* Audio Player Widget Mockup */}
          <div className="p-5 rounded-2xl bg-stone-900 text-white shadow-inner flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center shrink-0 shadow-sm cursor-pointer hover:bg-cyan-500 transition">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-200">
                  Field Oral Archival Recording
                </p>
                <p className="text-[11px] text-stone-400">
                  {story.recordedBy || "Oral History Society"} ({story.recordingYear || "Archival Track"})
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1">
                <span className="w-1 h-4 bg-cyan-500 rounded-full animate-pulse" />
                <span className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" />
                <span className="w-1 h-3 bg-cyan-600 rounded-full animate-pulse" />
                <span className="w-1 h-8 bg-cyan-400 rounded-full animate-pulse" />
                <span className="w-1 h-5 bg-cyan-500 rounded-full animate-pulse" />
                <span className="w-1 h-3 bg-cyan-600 rounded-full animate-pulse" />
              </div>
              <span className="text-xs font-mono text-cyan-300 font-medium">
                {story.audioDuration || "12:45"}
              </span>
            </div>
          </div>

          {/* Cultural Context Callout */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 space-y-1.5 text-xs">
            <h2 className="font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-[11px]">
              Anthropological & Cultural Context
            </h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed italic">
              {story.culturalContext}
            </p>
          </div>

          {/* Full Narrative Text */}
          <div className="prose dark:prose-invert max-w-none text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
            <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-50 not-prose border-b border-stone-100 dark:border-stone-800 pb-2">
              The Living Narrative
            </h2>
            {story.fullNarrative.split("\n\n").map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </article>

        {/* Source Citations */}
        {story.sources && story.sources.length > 0 && (
          <section>
            <SourceCitations sources={story.sources} title="Documented Oral & Archival Sources" />
          </section>
        )}
      </div>
    </div>
  );
}
