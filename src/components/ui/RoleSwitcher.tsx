"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/context/auth-context";
import { UserRole } from "@/types/cultural";
import { Shield, Sparkles, Check } from "lucide-react";

export function RoleSwitcher() {
  const { role, setRole, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const roles: { key: UserRole; title: string; subtitle: string }[] = [
    {
      key: "visitor",
      title: "Citizen Explorer (Guest)",
      subtitle: "Public read access, search, and Sanskriti AI guide"
    },
    {
      key: "contributor",
      title: "Field Contributor",
      subtitle: "Can submit new heritage profiles and oral recordings"
    },
    {
      key: "cultural_keeper",
      title: "Cultural Keeper / Historian",
      subtitle: "Can audit citations and moderate pending submissions"
    },
    {
      key: "admin",
      title: "Chief Administrator",
      subtitle: "Full platform permissions, system settings, and analytics"
    }
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition font-medium"
        title="Switch RBAC Persona for instant prototype evaluation"
      >
        <Shield className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
        <span className="capitalize">{role.replace("_", " ")}</span>
        <span className="text-[10px] bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1.5 py-0.2 rounded font-mono">
          RBAC
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-2 z-50 animate-in fade-in zoom-in-95">
            <div className="px-3 py-2 border-b border-stone-100 dark:border-stone-800">
              <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                SIH Jury Evaluation Persona
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Current: {user.name} ({user.title})
              </p>
            </div>

            <div className="p-1 space-y-1">
              {roles.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => {
                    setRole(r.key);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg text-xs transition flex items-start justify-between ${
                    role === r.key
                      ? "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800"
                      : "hover:bg-stone-50 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{r.title}</p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
                      {r.subtitle}
                    </p>
                  </div>
                  {role === r.key && (
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-2 border-t border-stone-100 dark:border-stone-800 text-[10px] text-stone-400 text-center">
              Audits multi-persona authorization boundaries for SIH evaluation
            </div>
          </div>
        </>
      )}
    </div>
  );
}
