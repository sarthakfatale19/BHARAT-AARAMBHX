"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CulturalRepository } from "@/lib/data/repository";
import { useAuth } from "@/lib/context/auth-context";
import { ContentCategory } from "@/types/cultural";
import { 
  PlusCircle, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Info
} from "lucide-react";

export default function ContributePage() {
  const { user } = useAuth();
  const states = useMemo(() => CulturalRepository.getStates(), []);

  // Form State
  const [title, setTitle] = useState("");
  const [nativeTitle, setNativeTitle] = useState("");
  const [stateSlug, setStateSlug] = useState("maharashtra");
  const [category, setCategory] = useState<ContentCategory>("HISTORICAL");
  const [periodOrOrigin, setPeriodOrOrigin] = useState("");
  const [communitiesInvolved, setCommunitiesInvolved] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [sourcesText, setSourcesText] = useState("");
  const [contributorName, setContributorName] = useState(user.name);
  const [contributorEmail, setContributorEmail] = useState(user.email);
  const [contributorRole, setContributorRole] = useState(user.title);

  // File Upload State & Validation
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Max size: 10MB
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "audio/mpeg", "audio/wav", "application/pdf"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError("Unsupported file type. Please upload a JPEG, PNG, WEBP, MP3, WAV, or PDF document.");
      setMediaFile(null);
      setMediaPreview(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError(`File size exceeds 10MB limit (${(file.size / (1024 * 1024)).toFixed(1)}MB).`);
      setMediaFile(null);
      setMediaPreview(null);
      return;
    }

    setMediaFile(file);

    // Read file as Base64 Data URL for persistent storage and cross-session preview
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setMediaPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !summary.trim() || !body.trim() || !sourcesText.trim()) {
      setError("Please complete all required fields including the title, summary, body, and sources.");
      return;
    }

    setSubmitting(true);

    try {
      const commArray = communitiesInvolved
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c.length > 0);

      const submission = CulturalRepository.submitContribution({
        title: title.trim(),
        nativeTitle: nativeTitle.trim() || undefined,
        stateSlug,
        category,
        periodOrOrigin: periodOrOrigin.trim() || undefined,
        communitiesInvolved: commArray.length > 0 ? commArray : ["Native Community"],
        summary: summary.trim(),
        body: body.trim(),
        sourcesText: sourcesText.trim(),
        contributorName: contributorName || user.name,
        contributorEmail: contributorEmail || user.email,
        contributorRole: contributorRole || user.title,
        mediaFileName: mediaFile?.name,
        mediaFileSize: mediaFile?.size,
        mediaFileType: mediaFile?.type,
        mediaPreviewUrl: mediaPreview || undefined,
      });

      setSubmittedId(submission.id);
    } catch (err: unknown) {
      console.error(err);
      setError("An error occurred while saving your submission.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <PlusCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Preservation Pipeline</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-stone-50">
            Contribute Cultural Heritage
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Every submission is audited by verified cultural keepers and historians before being permanently indexed into the national BHARAT repository.
          </p>
        </div>

        {/* Success Banner */}
        {submittedId ? (
          <div className="p-8 rounded-3xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 space-y-4 shadow-sm animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Heritage Submission Received</h3>
                <p className="text-xs font-mono text-emerald-800 dark:text-emerald-300">
                  Audit Tracking ID: {submittedId}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Thank you, <strong className="font-semibold">{contributorName}</strong>! Your submission for &ldquo;{title}&rdquo; has entered the BHARAT peer-review moderation queue. Cultural keepers and historians can now audit your primary sources and assign appropriate epistemic verification badges.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/admin/moderation"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition"
              >
                <span>View in Moderation Queue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSubmittedId(null);
                  setTitle("");
                  setSummary("");
                  setBody("");
                  setSourcesText("");
                  setMediaFile(null);
                  setMediaPreview(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-medium border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-200"
              >
                Submit Another Record
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm space-y-6"
          >
            {/* Classification Advice Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold">Important Classification Guidance:</p>
                <p className="leading-relaxed">
                  Choose <strong className="font-semibold">Historical Fact</strong> only if backed by dated epigraphy, ASI reports, or archival papers. Choose <strong className="font-semibold">Sacred Belief</strong> for theological faith, <strong className="font-semibold">Folklore</strong> for traditional tales, or <strong className="font-semibold">Oral Tradition</strong> for bardic recitations.
                </p>
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-2">
                1. Heritage Entity Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Title (English / Romanized) *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Raigad Fort & Maratha Swarajya Charters"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Native Script Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={nativeTitle}
                    onChange={(e) => setNativeTitle(e.target.value)}
                    placeholder="e.g. रायगड किल्ला व स्वराज्य सनदा"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    State or Union Territory *
                  </label>
                  <select
                    value={stateSlug}
                    onChange={(e) => setStateSlug(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  >
                    {states.map((s) => (
                      <option key={s.id} value={s.slug}>
                        {s.name} ({s.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Knowledge Classification *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ContentCategory)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  >
                    <option value="HISTORICAL">Historical Fact (Archaeologically / Epigraphically Verified)</option>
                    <option value="BELIEF">Sacred Belief (Devotional & Ritual Sanctum)</option>
                    <option value="FOLKLORE">Folklore & Myth (Scrolls, Fables & Allegories)</option>
                    <option value="ORAL_TRADITION">Oral Tradition (Bardic Genealogies & Songs)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Period or Historical Era
                  </label>
                  <input
                    type="text"
                    value={periodOrOrigin}
                    onChange={(e) => setPeriodOrOrigin(e.target.value)}
                    placeholder="e.g. 17th Century CE / Vedic / Early Chola"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Communities Involved (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={communitiesInvolved}
                    onChange={(e) => setCommunitiesInvolved(e.target.value)}
                    placeholder="e.g. Mavale, Bhandari, Suthar Guild"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Narrative Content */}
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-2">
                2. Cultural Documentation
              </h2>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Executive Summary * (2-3 sentences)
                </label>
                <textarea
                  required
                  rows={2}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Provide an objective, concise synopsis of the monument or tradition..."
                  className="w-full p-3 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Comprehensive Documentation & Body *
                </label>
                <textarea
                  required
                  rows={5}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Elaborate on the historical context, architectural motifs, bardic structure, or community rituals..."
                  className="w-full p-3 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>
            </div>

            {/* 3. Source Citations (Auditable) */}
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-2">
                <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>3. Archival Citations & Sources *</span>
                </h2>
                <span className="text-[11px] text-amber-700 dark:text-amber-400 font-mono">
                  Mandatory for Verification
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Primary Sources, Inscriptions, or Field Recordings *
                </label>
                <textarea
                  required
                  rows={3}
                  value={sourcesText}
                  onChange={(e) => setSourcesText(e.target.value)}
                  placeholder="e.g. Epigraphia Indica Vol. IV; ASI Annual Report 1904; Field recording of Shahir Dongre, Borunda Archives #441..."
                  className="w-full p-3 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>
            </div>

            {/* 4. Media Upload with Validation */}
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-2">
                4. Primary Photographic or Audio Evidence
              </h2>

              <div className="p-6 rounded-2xl border-2 border-dashed border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-center space-y-3">
                <UploadCloud className="w-8 h-8 text-stone-400 mx-auto" />
                <div>
                  <label
                    htmlFor="media-upload"
                    className="cursor-pointer text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    Click to select file
                  </label>
                  <span className="text-xs text-stone-500"> or drag and drop</span>
                  <p className="text-[11px] text-stone-400 mt-1">
                    JPEG, PNG, WEBP, MP3, WAV, or PDF up to 10MB
                  </p>
                </div>
                <input
                  id="media-upload"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/webp,audio/mpeg,audio/wav,application/pdf"
                  className="hidden"
                />
              </div>

              {fileError && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{fileError}</span>
                </div>
              )}

              {mediaFile && !fileError && (
                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                        {mediaFile.name}
                      </p>
                      <p className="text-[10px] text-stone-500">
                        {(mediaFile.size / (1024 * 1024)).toFixed(2)} MB &bull; {mediaFile.type}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold">Validated</span>
                </div>
              )}

              {mediaPreview && (
                <div className="space-y-2">
                  {mediaFile?.type.startsWith("image/") ? (
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700">
                      <img src={mediaPreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ) : mediaFile?.type.startsWith("audio/") ? (
                    <div className="p-4 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 space-y-2">
                      <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                        Primary Audio Recording Preview:
                      </p>
                      <audio controls src={mediaPreview} className="w-full" />
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400">
                      Archival Document Attached: {mediaFile?.name}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 5. Contributor Identification */}
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-2">
                5. Contributor Attribution
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contributorName}
                    onChange={(e) => setContributorName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contributorEmail}
                    onChange={(e) => setContributorEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Role / Institutional Affiliation
                  </label>
                  <input
                    type="text"
                    value={contributorRole}
                    onChange={(e) => setContributorRole(e.target.value)}
                    placeholder="e.g. Village Elder, BORI Scholar"
                    className="w-full px-3 py-2 rounded-xl text-xs border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-md transition disabled:opacity-50"
              >
                {submitting ? "Transmitting to Moderation..." : "Submit to BHARAT Archive"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
