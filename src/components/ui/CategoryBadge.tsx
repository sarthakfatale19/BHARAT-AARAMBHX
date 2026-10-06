import React from "react";
import { ContentCategory } from "@/types/cultural";
import { Landmark, Sparkles, BookOpen, Mic } from "lucide-react";

interface CategoryBadgeProps {
  category: ContentCategory;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

export const CATEGORY_CONFIG: Record<
  ContentCategory,
  {
    label: string;
    description: string;
    bgClass: string;
    textClass: string;
    borderClass: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  HISTORICAL: {
    label: "Historical Fact",
    description: "Epigraphically & archaeologically verified records, monuments, and dated treaties.",
    bgClass: "bg-amber-50 dark:bg-amber-950/40",
    textClass: "text-amber-800 dark:text-amber-300",
    borderClass: "border-amber-300 dark:border-amber-800",
    icon: Landmark
  },
  BELIEF: {
    label: "Sacred Belief",
    description: "Living faith, devotional theology, ritual sanctum, and sacred community convictions.",
    bgClass: "bg-purple-50 dark:bg-purple-950/40",
    textClass: "text-purple-800 dark:text-purple-300",
    borderClass: "border-purple-300 dark:border-purple-800",
    icon: Sparkles
  },
  FOLKLORE: {
    label: "Folklore & Myth",
    description: "Traditional village fables, visual scrolls, performance motifs, and moral allegories.",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40",
    textClass: "text-emerald-800 dark:text-emerald-300",
    borderClass: "border-emerald-300 dark:border-emerald-800",
    icon: BookOpen
  },
  ORAL_TRADITION: {
    label: "Oral Tradition",
    description: "Spoken-word genealogies, bardic ballads, and living community memory.",
    bgClass: "bg-cyan-50 dark:bg-cyan-950/40",
    textClass: "text-cyan-800 dark:text-cyan-300",
    borderClass: "border-cyan-300 dark:border-cyan-800",
    icon: Mic
  }
};

export function CategoryBadge({ category, size = "md", showTooltip = true }: CategoryBadgeProps) {
  const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.HISTORICAL;
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-xs font-medium gap-1.5",
    lg: "px-3 py-1.5 text-sm font-semibold gap-2"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-all ${config.bgClass} ${config.textClass} ${config.borderClass} ${sizeClasses[size]}`}
      title={showTooltip ? config.description : undefined}
    >
      <Icon className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />
      <span>{config.label}</span>
    </span>
  );
}
