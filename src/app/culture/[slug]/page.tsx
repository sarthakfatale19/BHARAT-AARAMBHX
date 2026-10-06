import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CulturalRepository } from "@/lib/data/repository";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { SourceCitations } from "@/components/ui/SourceCitations";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Languages, 
  Sparkles, 
  Tag, 
  ArrowRight 
} from "lucide-react";

export async function generateStaticParams() {
  const items = CulturalRepository.getCulturalItems();
  return items.map((i) => ({ slug: i.slug }));
}

export default async function CulturalItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CulturalRepository.getCulturalItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = CulturalRepository.getCulturalItems({
    stateSlug: item.stateSlug,
  }).filter((i) => i.slug !== item.slug).slice(0, 2);

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/culture"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Cultural Archive</span>
          </Link>

          <Link
            href={`/states/${item.stateSlug}`}
            className="text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.stateName} State Archive</span>
          </Link>
        </div>

        {/* Profile Header */}
        <article className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryBadge category={item.category} size="md" />
              <VerificationBadge status={item.verificationStatus} size="md" />
            </div>

            <span className="text-xs font-mono text-stone-500">
              ID: {item.id}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-50 leading-tight">
              {item.title}
            </h1>
            {item.nativeTitle && (
              <p className="text-lg font-serif text-amber-800 dark:text-amber-300">
                {item.nativeTitle} {item.nativeScript ? `(${item.nativeScript})` : ""}
              </p>
            )}
          </div>

          {/* Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 text-xs">
            <div className="space-y-1">
              <span className="text-stone-500 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                Historical Era / Origin
              </span>
              <p className="font-semibold text-stone-900 dark:text-stone-100">
                {item.periodOrOrigin || "Documented Living Tradition"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-stone-500 font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                Communities Involved
              </span>
              <p className="font-semibold text-stone-900 dark:text-stone-100">
                {item.communitiesInvolved.join(", ")}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-stone-500 font-medium flex items-center gap-1">
                <Languages className="w-3.5 h-3.5 text-amber-600" />
                Linguistic Anchor
              </span>
              <p className="font-semibold text-stone-900 dark:text-stone-100 uppercase">
                {item.primaryLanguageCode} &bull; {item.stateName}
              </p>
            </div>
          </div>

          {/* Hero Image if present */}
          {item.heroImageUrl && (
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800">
              <img
                src={item.heroImageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            </div>
          )}

          {/* Summary Callout */}
          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
            <h2 className="text-xs uppercase tracking-wider font-bold text-amber-900 dark:text-amber-200 mb-1">
              Executive Cultural Summary
            </h2>
            <p className="text-sm text-amber-950 dark:text-amber-100 leading-relaxed font-serif">
              {item.summary}
            </p>
          </div>

          {/* Deep Narrative Body */}
          <div className="prose dark:prose-invert max-w-none text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
            <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-50 not-prose border-b border-stone-100 dark:border-stone-800 pb-2">
              Comprehensive Historical & Ethnographic Documentation
            </h2>
            {item.body.split("\n\n").map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Auditable Citations Section */}
        <section className="space-y-3">
          <SourceCitations sources={item.sources} defaultExpanded={true} />
        </section>

        {/* Ask Sanskriti AI Contextual Card */}
        <section className="p-6 rounded-2xl border border-amber-300/60 dark:border-amber-900/60 bg-gradient-to-r from-amber-500/10 to-amber-500/5 dark:from-amber-950/40 dark:to-stone-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>Sanskriti AI Cross-Verification</span>
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Have questions about this profile?
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-lg">
              Ask Sanskriti AI to compare this entry with related epigraphical archives or oral traditions.
            </p>
          </div>

          <Link
            href={`/sanskriti-ai?prompt=${encodeURIComponent(`Tell me more about the historical and cultural significance of ${item.title} from ${item.stateName}`)}`}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Inquire with AI</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Related State Items */}
        {relatedItems.length > 0 && (
          <section className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
              More Documented Heritage from {item.stateName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/culture/${rel.slug}`}
                  className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1">
                    <CategoryBadge category={rel.category} size="sm" />
                    <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
                    Read Profile &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
