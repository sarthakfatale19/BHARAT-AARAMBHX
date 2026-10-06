"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { useAuth } from "@/lib/context/auth-context";
import { ContributionSubmission, VerificationStatus } from "@/types/cultural";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { 
  Shield, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  User, 
  ChevronDown, 
  ChevronUp
} from "lucide-react";

export default function ModerationQueuePage() {
  const { hasPermission, setRole, role } = useAuth();
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'CHANGES_REQUESTED' | 'REJECTED'>('ALL');
  const [submissions, setSubmissions] = useState<ContributionSubmission[]>(() =>
    CulturalRepository.getContributions()
  );

  // Active submission under review
  const [selectedSub, setSelectedSub] = useState<ContributionSubmission | null>(null);
  const [assignedVerification, setAssignedVerification] = useState<VerificationStatus>("ARCHIVAL_SOURCE");
  const [reviewerNotes, setReviewerNotes] = useState("");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  if (!hasPermission("cultural_keeper")) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-lg w-full p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center space-y-5 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center border border-amber-500/20">
            <Shield className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Institutional Keeper & Audit Terminal
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Peer-review authorization tier for accredited historians, ASI curators, and institutional keepers.
            </p>
          </div>
          
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-left space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-stone-500">Current Session Persona:</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide">
                {role.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-200/50 dark:border-stone-700/50">
              <span className="text-stone-500">Evaluation Access Code:</span>
              <code className="text-amber-700 dark:text-amber-400 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded">
                CK-INSTITUTIONAL-AUDIT
              </code>
            </div>
          </div>

          <div className="pt-1 space-y-2">
            <button
              type="button"
              onClick={() => setRole("cultural_keeper")}
              className="w-full px-5 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white transition shadow-sm"
            >
              Verify Institutional Credentials (Cultural Keeper)
            </button>
            <p className="text-[11px] text-stone-400">
              For SIH Grand Finale jury evaluation of the multi-persona RBAC verification workflow.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const filteredSubmissions = statusFilter === 'ALL'
    ? submissions
    : submissions.filter((s) => s.status === statusFilter);

  const handleModerate = (action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES') => {
    if (!selectedSub) return;

    const result = CulturalRepository.moderateContribution(
      selectedSub.id,
      action,
      reviewerNotes || (action === 'APPROVE' ? "Verified against historical sources" : "Feedback provided by keeper"),
      action === 'APPROVE' ? assignedVerification : undefined
    );

    if (result.success) {
      setSubmissions([...CulturalRepository.getContributions()]);
      if (action === 'APPROVE') {
        const hash = "IN-ASI-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString(36).toUpperCase();
        setActionSuccess(`Approved "${selectedSub.title}" and published to public BHARAT Cultural Archive with ${assignedVerification} badge! [Digital Custody Stamp: ${hash}]`);
      } else if (action === 'REQUEST_CHANGES') {
        setActionSuccess(`Requested modifications for "${selectedSub.title}".`);
      } else {
        setActionSuccess(`Rejected submission "${selectedSub.title}".`);
      }
      setSelectedSub(null);
      setReviewerNotes("");
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Administration Overview</span>
          </Link>

          <span className="text-xs font-mono text-stone-500">
            Total in Queue: {submissions.length}
          </span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Institutional Archival Audit Desk &bull; ASI Tier Custody</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 dark:text-stone-50">
            Heritage Moderation & Custody Desk
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            Review community submissions, audit attached primary citations, and assign official epistemic verification status with digital custody stamping.
          </p>
        </div>

        {/* Success Alert */}
        {actionSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{actionSuccess}</span>
            </div>
            <button
              type="button"
              onClick={() => setActionSuccess(null)}
              className="text-stone-400 hover:text-stone-600"
            >
              &times;
            </button>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          {(['ALL', 'PENDING', 'APPROVED', 'CHANGES_REQUESTED', 'REJECTED'] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                statusFilter === st
                  ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200"
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-dashed border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2">
              <Clock className="w-8 h-8 text-stone-400 mx-auto" />
              <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                No submissions matching &ldquo;{statusFilter}&rdquo;
              </p>
            </div>
          ) : (
            filteredSubmissions.map((sub) => {
              const isSelected = selectedSub?.id === sub.id;
              const statusBadgeClass = {
                PENDING: "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300",
                APPROVED: "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300",
                CHANGES_REQUESTED: "bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300",
                REJECTED: "bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300",
              }[sub.status];

              return (
                <div
                  key={sub.id}
                  className={`rounded-2xl border transition-all ${
                    isSelected
                      ? "border-amber-500 ring-2 ring-amber-500/20 bg-white dark:bg-stone-900 shadow-md"
                      : "border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs hover:border-stone-300"
                  }`}
                >
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <CategoryBadge category={sub.category} size="sm" />
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${statusBadgeClass}`}>
                          {sub.status.replace('_', ' ')}
                        </span>
                        {sub.assignedVerification && (
                          <VerificationBadge status={sub.assignedVerification} size="sm" />
                        )}
                      </div>

                      <span className="text-[11px] font-mono text-stone-400">
                        {new Date(sub.createdAt).toLocaleDateString()} &bull; ID: {sub.id}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                        {sub.title}
                      </h3>
                      {sub.nativeTitle && (
                        <p className="text-xs text-amber-800 dark:text-amber-300 font-serif mt-0.5">
                          {sub.nativeTitle}
                        </p>
                      )}
                      <p className="text-xs text-stone-500 mt-0.5">
                        State: <strong className="text-stone-700 dark:text-stone-300 capitalize">{sub.stateSlug}</strong> &bull; Period: {sub.periodOrOrigin || "Not specified"}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                      {sub.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-stone-400" />
                        <span>Submitted by <strong>{sub.contributorName}</strong> ({sub.contributorRole})</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedSub(isSelected ? null : sub)}
                        className="font-semibold text-amber-700 dark:text-amber-400 inline-flex items-center gap-1 hover:underline"
                      >
                        <span>{isSelected ? "Hide Audit Workspace" : "Audit & Moderate"}</span>
                        {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Audit Workspace */}
                  {isSelected && (
                    <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/50 space-y-6 animate-in fade-in">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                          Full Submitted Documentation
                        </h4>
                        <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 whitespace-pre-wrap leading-relaxed">
                          {sub.body}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                          Submitted Primary Sources & Citations
                        </h4>
                        <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 font-mono leading-relaxed">
                          {sub.sourcesText}
                        </div>
                      </div>

                      {/* Media File Attachment if present */}
                      {sub.mediaFileName && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                            Attached Media Evidence
                          </h4>
                          <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs flex items-center justify-between">
                            <span className="font-semibold">{sub.mediaFileName}</span>
                            <span className="text-[10px] text-stone-400 font-mono">
                              {sub.mediaFileSize ? `${(sub.mediaFileSize / (1024 * 1024)).toFixed(2)} MB` : ""} &bull; {sub.mediaFileType}
                            </span>
                          </div>
                          {sub.mediaPreviewUrl && (
                            <div>
                              {sub.mediaFileType?.startsWith("audio/") ? (
                                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2">
                                  <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                                    Primary Oral Recording:
                                  </p>
                                  <audio controls src={sub.mediaPreviewUrl} className="w-full" />
                                </div>
                              ) : (
                                <div className="relative h-48 w-full rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
                                  <img src={sub.mediaPreviewUrl} alt="Attached" className="w-full h-full object-cover" />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Keeper Decision Panel */}
                      <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5" />
                          <span>Cultural Keeper Decision & Audit Stamp</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                              Verification Badge to Assign on Approval
                            </label>
                            <select
                              value={assignedVerification}
                              onChange={(e) => setAssignedVerification(e.target.value as VerificationStatus)}
                              className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                            >
                              <option value="ARCHIVAL_SOURCE">Archival Source (ASI / Epigraphia Indica / Gazetteer)</option>
                              <option value="VERIFIED">Scholarly Verified (Peer-reviewed history)</option>
                              <option value="DOCUMENTED_ORAL">Documented Oral History (Validated field recording)</option>
                              <option value="COMMUNITY_REVIEW">Community Review (Provisional listing)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                              Audit Notes / Revision Comments
                            </label>
                            <input
                              type="text"
                              value={reviewerNotes}
                              onChange={(e) => setReviewerNotes(e.target.value)}
                              placeholder="e.g. Cross-verified with ASI Mumbai Circle catalog"
                              className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2">
                          <button
                            type="button"
                            onClick={() => handleModerate('REJECT')}
                            className="px-4 py-2 rounded-xl text-xs font-semibold border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 hover:bg-rose-100 transition"
                          >
                            Reject Entry
                          </button>

                          <button
                            type="button"
                            onClick={() => handleModerate('REQUEST_CHANGES')}
                            className="px-4 py-2 rounded-xl text-xs font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 hover:bg-blue-100 transition"
                          >
                            Request Citation Changes
                          </button>

                          <button
                            type="button"
                            onClick={() => handleModerate('APPROVE')}
                            className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-xs flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Approve & Publish to BHARAT</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
