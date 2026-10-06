import React from "react";

interface HeritageEmblemProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function HeritageEmblem({ className = "", size = "md" }: HeritageEmblemProps) {
  const sizeMap = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-14 h-14",
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 p-1.5 shadow-sm shadow-amber-500/30 ${currentSize} ${className}`}
      aria-label="National Cultural Emblem"
      role="img"
    >
      {/* Precision Vector Ashoka / Dharma Chakra Silhouette */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Central Hub */}
        <circle cx="50" cy="50" r="11" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="#d97706" />

        {/* 24 Radiant Spokes */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={i} transform={`rotate(${angle} 50 50)`}>
              <line
                x1="50"
                y1="39"
                x2="50"
                y2="9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="50" cy="7" r="1.5" fill="currentColor" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
