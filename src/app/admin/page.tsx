"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/lib/context/auth-context";
import { CulturalRepository } from "@/lib/data/repository";
import { 
  Shield, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight, 
  Sparkles
} from "lucide-react";

export default function AdminDashboardPage() {
  const { role, user, hasPermission, setRole } = useAuth();
  const stats = CulturalRepository.getPlatformStats();
  const pendingCount = CulturalRepository.getContributions("PENDING").length;

  if (!hasPermission("cultural_keeper")) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 mx-auto flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Cultural Keeper Authorization Required
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Your active persona is currently <strong className="font-semibold text-stone-800 dark:text-stone-200 capitalize">{role.replace("_", " ")}</strong>. Access to platform administration and moderation is reserved for certified Cultural Keepers and Archivists.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setRole("cultural_keeper")}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white transition shadow-xs"
            >
              Switch to Cultural Keeper (Demo RBAC)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>Institutional Governance Dashboard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-50">
              BHARAT Administration
            </h1>
            <p className="text-xs text-stone-500">
              Authenticated Keeper: <strong>{user.name}</strong> ({user.title})
            </p>
          </div>

          <Link
            href="/admin/moderation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition"
          >
            <Clock className="w-4 h-4" />
            <span>Review Moderation Queue ({pendingCount})</span>
          </Link>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs space-y-2">
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Total Cultural Profiles
            </span>
            <p className="text-3xl font-serif font-black text-stone-900 dark:text-stone-100">
              {stats.totalItems}
            </p>
            <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              <span>100% Epigraphically Categorized</span>
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs space-y-2">
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Archival Audit Rate
            </span>
            <p className="text-3xl font-serif font-black text-amber-700 dark:text-amber-400">
              {stats.verificationRate}%
            </p>
            <p className="text-[11px] text-stone-500">
              {stats.verifiedCount} peer-reviewed records
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs space-y-2">
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Auditable Primary Citations
            </span>
            <p className="text-3xl font-serif font-black text-stone-900 dark:text-stone-100">
              {stats.totalSources}+
            </p>
            <p className="text-[11px] text-stone-500">
              ASI reports, Gazetteers, & Bards
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs space-y-2">
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Pending Submissions
            </span>
            <p className="text-3xl font-serif font-black text-rose-600 dark:text-rose-400">
              {pendingCount}
            </p>
            <Link
              href="/admin/moderation"
              className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Action required &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Administration Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/moderation"
            className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-4 group shadow-xs"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition">
                Community Moderation Queue
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Review submitted oral histories, verify academic citations, approve records into the public repository, or request revision notes.
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
              <span>Open Queue ({pendingCount} pending)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/culture"
            className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-4 group shadow-xs"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition">
                Live Knowledge Corpus
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Inspect live published profiles across Maharashtra, Rajasthan, Assam, and all Indian territories with verification badges.
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
              <span>Browse Catalog &rarr;</span>
            </span>
          </Link>

          <Link
            href="/sanskriti-ai"
            className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-amber-400 dark:hover:border-amber-600 transition flex flex-col justify-between space-y-4 group shadow-xs"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition">
                Sanskriti AI Diagnostics
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Test retrieval grounded synthesis, check source citation linking, and verify classification guardrails for anti-hallucination.
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1">
              <span>Test AI Diagnostics &rarr;</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
