"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { UserRole } from "@/types/cultural";
import { createClient } from "@/lib/supabase/client";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  title: string;
  institution?: string;
  avatarUrl?: string;
}

const DEMO_USERS: Record<UserRole, UserProfile> = {
  visitor: {
    id: "user-visitor",
    name: "Guest Explorer",
    email: "explorer@bharat-archive.in",
    role: "visitor",
    title: "Cultural Seeker",
    institution: "Independent Citizen"
  },
  contributor: {
    id: "user-contributor",
    name: "Ananya Roy",
    email: "ananya.roy@heritage-research.org",
    role: "contributor",
    title: "Field Oral Ethnographer",
    institution: "Brahmaputra Heritage Trust"
  },
  cultural_keeper: {
    id: "user-keeper",
    name: "Shri Narayan Sharma",
    email: "n.sharma@bori-archives.in",
    role: "cultural_keeper",
    title: "Senior Epigraphy Custodian",
    institution: "Bhandarkar Oriental Research Institute"
  },
  admin: {
    id: "user-admin",
    name: "Dr. Radhika Sen",
    email: "dr.radhika.sen@bharat.gov.in",
    role: "admin",
    title: "Chief Cultural Director & Curator",
    institution: "National Archaeological & Cultural Commission"
  }
};

interface AuthContextType {
  user: UserProfile;
  role: UserRole;
  setRole: (role: UserRole) => void;
  isAuthenticated: boolean;
  loginAsDemoUser: (role: UserRole) => void;
  signOut: () => void;
  hasPermission: (requiredRole: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_HIERARCHY: Record<UserRole, number> = {
  visitor: 1,
  contributor: 2,
  cultural_keeper: 3,
  admin: 4
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>(() => {
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("bharat_user_role") as UserRole | null;
      if (savedRole && DEMO_USERS[savedRole]) {
        return savedRole;
      }
    }
    return "visitor";
  });

  const [user, setUser] = useState<UserProfile>(() => {
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("bharat_user_role") as UserRole | null;
      if (savedRole && DEMO_USERS[savedRole]) {
        return DEMO_USERS[savedRole];
      }
    }
    return DEMO_USERS.visitor;
  });

  useEffect(() => {
    // Check Supabase user if configured
    const supabase = createClient();
    if (supabase) {
      supabase.auth.getUser().then(({ data }) => {
        if (data?.user) {
          setUser({
            id: data.user.id,
            name: data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "Authenticated Citizen",
            email: data.user.email || "",
            role: (data.user.user_metadata?.role as UserRole) || "contributor",
            title: "Community Member"
          });
        }
      });
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    setUser(DEMO_USERS[newRole]);
    if (typeof window !== "undefined") {
      localStorage.setItem("bharat_user_role", newRole);
    }
  };

  const loginAsDemoUser = (targetRole: UserRole) => {
    setRole(targetRole);
  };

  const signOut = () => {
    setRole("visitor");
  };

  const hasPermission = (requiredRole: UserRole): boolean => {
    return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY[requiredRole];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        setRole,
        isAuthenticated: role !== "visitor",
        loginAsDemoUser,
        signOut,
        hasPermission
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
