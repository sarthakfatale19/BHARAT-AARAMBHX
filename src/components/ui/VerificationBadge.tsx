import React from "react";
import { VerificationStatus } from "@/types/cultural";
import { ShieldCheck, Library, Radio, Clock } from "lucide-react";

interface VerificationBadgeProps {
  status: VerificationStatus;
  size?: "sm" | "md";
}

export const VERIFICATION_CONFIG: Record<
  VerificationStatus,
  {
    label: string;
    description: string;
    bgClass: string;
    textClass: string;
    borderClass: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  VERIFIED: {
    label: "Scholarly Verified",
    description: "Peer-reviewed, cross-verified with academic historiography and field epigraphy.",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/50",
    textClass: "text-emerald-800 dark:text-emerald-300",
    borderClass: "border-emerald-300 dark:border-emerald-700",
    icon: ShieldCheck
  },
  ARCHIVAL_SOURCE: {
    label: "Archival Source",
    description: "Referenced directly from ASI monuments, gazetteers, or state record rooms.",
    bgClass: "bg-blue-50 dark:bg-blue-950/50",
    textClass: "text-blue-800 dark:text-blue-300",
    borderClass: "border-blue-300 dark:border-blue-700",
    icon: Library
  },
  DOCUMENTED_ORAL: {
    label: "Documented Oral History",
    description: "Field-recorded oral testimony using validated anthropological standards.",
    bgClass: "bg-teal-50 dark:bg-teal-950/50",
    textClass: "text-teal-800 dark:text-teal-300",
    borderClass: "border-teal-300 dark:border-teal-700",
    icon: Radio
  },
  COMMUNITY_REVIEW: {
    label: "Community Review",
    description: "Submitted by community custodians, awaiting formal epigraphical sign-off.",
    bgClass: "bg-amber-50 dark:bg-amber-950/50",
    textClass: "text-amber-800 dark:text-amber-300",
    borderClass: "border-amber-300 dark:border-amber-700",
    icon: Clock
  }
};

export function VerificationBadge({ status, size = "md" }: VerificationBadgeProps) {
  const config = VERIFICATION_CONFIG[status] || VERIFICATION_CONFIG.COMMUNITY_REVIEW;
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs font-medium gap-1.5"
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border font-sans ${config.bgClass} ${config.textClass} ${config.borderClass} ${sizeClasses[size]}`}
      title={config.description}
    >
      <Icon className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />
      <span>{config.label}</span>
    </span>
  );
}
