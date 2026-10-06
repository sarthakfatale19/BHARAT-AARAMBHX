"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Compass, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Mic, 
  Search, 
  PlusCircle, 
  Shield, 
  Menu, 
  X,
  Sun,
  Moon
} from "lucide-react";
import { RoleSwitcher } from "@/components/ui/RoleSwitcher";
import { HeritageEmblem } from "@/components/ui/HeritageEmblem";
import { useAuth } from "@/lib/context/auth-context";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { hasPermission } = useAuth();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize theme from DOM/localStorage
  useEffect(() => {
    try {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    } catch {
      // Browser storage fallback
    }
  }, []);

  // Keyboard shortcut listener: Pressing '/' focuses search or navigates to /search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        if (pathname === "/search" && searchInputRef.current) {
          searchInputRef.current.focus();
        } else {
          router.push("/search");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);


  const navLinks = [
    { href: "/states", label: "States & UTs", icon: Compass },
    { href: "/culture", label: "Culture", icon: BookOpen },
    { href: "/living-heritage", label: "Living Heritage", icon: Layers },
    { href: "/stories", label: "Stories & Bards", icon: Mic },
    { href: "/sanskriti-ai", label: "Sanskriti AI", icon: Sparkles, badge: "AI" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-6 xl:gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <HeritageEmblem size="md" />
              <div className="flex flex-col">
                <span className="font-serif font-black tracking-wider text-xl text-stone-900 dark:text-stone-50 leading-none">
                  BHARAT
                </span>
                <span className="text-[10px] tracking-widest text-amber-700 dark:text-amber-400 font-semibold uppercase mt-0.5">
                  India, In Its Own Words
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-amber-500/10 text-amber-900 dark:text-amber-300 font-semibold"
                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-bold bg-amber-500 text-white dark:bg-amber-600 px-1.5 py-0.2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center ml-2 gap-3">
            {/* Quick Search with working '/' shortcut */}
            <Link
              href="/search"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-600 transition"
              title="Search monuments, bards, traditions, and epigraphy (Press '/' key)"
            >
              <Search className="w-3.5 h-3.5 text-stone-400" />
              <span>Search BHARAT...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-500 font-semibold shadow-2xs">
                /
              </kbd>
            </Link>

            {/* Contribute CTA */}
            <Link
              href="/contribute"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-xs transition"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Contribute</span>
            </Link>

            {/* Admin / Moderation link if permitted */}
            {hasPermission("cultural_keeper") && (
              <Link
                href="/admin"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                  pathname.startsWith("/admin")
                    ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-transparent font-semibold"
                    : "border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                <span>Admin & Mod</span>
              </Link>
            )}

            {/* RBAC Persona Switcher for easy testing */}
            <RoleSwitcher />
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <RoleSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/search"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400"
          >
            <Search className="w-4 h-4" />
            <span>Search BHARAT archives...</span>
          </Link>

          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium ${
                    pathname.startsWith(link.href)
                      ? "bg-amber-500/10 text-amber-900 dark:text-amber-300 font-semibold"
                      : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-amber-600" />
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-stone-100 dark:border-stone-800 space-y-2">
            <Link
              href="/contribute"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-amber-600 text-white"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Contribute Heritage</span>
            </Link>

            {hasPermission("cultural_keeper") && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-medium border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
              >
                <Shield className="w-4 h-4 text-amber-500" />
                <span>Admin & Moderation</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
