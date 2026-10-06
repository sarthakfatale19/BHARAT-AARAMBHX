import { 
  StateOrUT, 
  CulturalItem, 
  LivingHeritageItem, 
  StoryItem, 
  ContributionSubmission, 
  ContentCategory, 
  VerificationStatus,
  IndianRegion 
} from "@/types/cultural";
import { STATES_AND_UTS, CULTURAL_ITEMS, LIVING_HERITAGE, STORIES } from "./seed-data";

// Persistent storage keys
const SUBMISSIONS_STORAGE_KEY = "bharat_submissions_v1";
const CUSTOM_ITEMS_STORAGE_KEY = "bharat_custom_items_v1";

const INITIAL_SUBMISSIONS: ContributionSubmission[] = [
  {
    id: "sub-001",
    title: "Chhatrapati Shivaji's Raigad Coronation Epigraphy & English Factory Records",
    nativeTitle: "रायगड राज्याभिषेक शिलालेख व तत्कालीन नोंदी",
    stateSlug: "maharashtra",
    category: "HISTORICAL",
    periodOrOrigin: "June 6, 1674 CE",
    communitiesInvolved: ["Maratha Court", "Kashi Scholars (Gaga Bhatt)", "English East India Company Envoys"],
    summary: "Epigraphic and primary documentation of the 1674 coronation ceremony of Shivaji Maharaj at Raigad as recorded by Henry Oxinden in British East India Company factory diaries.",
    body: "On 6 June 1674 (Jyeshtha Shukla Trayodashi), Chhatrapati Shivaji Maharaj was formally crowned sovereign king (Chhatrapati) of the Maratha realm at Raigad Fort. Henry Oxinden, deputy governor of Bombay, attended as an English ambassador, leaving a detailed 17th-century diary recording the royal darbar, the distribution of gold hon coins, and the sacred ceremonies performed by Gaga Bhatt of Varanasi.",
    sourcesText: "English Factory Records, Surat and Bombay Volume 1670-1677, British Museum Sloane MS 2724; Sabhasad Bakhar Raigad section.",
    contributorName: "Dr. Arvind Deshmukh",
    contributorEmail: "arvind.deshmukh@history-archive.in",
    contributorRole: "Archival Researcher, Pune",
    mediaFileName: "raigad_coronation_drawing.jpg",
    mediaFileSize: 1420000,
    mediaFileType: "image/jpeg",
    mediaPreviewUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    status: "APPROVED",
    assignedVerification: "ARCHIVAL_SOURCE",
    reviewerNotes: "Cross-referenced with Oxford University Press edition of English Records on Shivaji. Primary historical source verified.",
    createdAt: "2026-02-10T11:00:00Z",
    reviewedAt: "2026-02-12T14:30:00Z"
  },
  {
    id: "sub-002",
    title: "The Bhaona Mask Performance Tradition of Natun Samaguri Satra",
    nativeTitle: "নতুন চামগুৰি সত্ৰৰ মুখা শিল্প",
    stateSlug: "assam",
    category: "FOLKLORE",
    periodOrOrigin: "16th Century to Present",
    communitiesInvolved: ["Bhakats of Samaguri Satra", "Mising and Assamese youth"],
    summary: "Step-by-step documentation of how bamboo frames, cow dung, clay, and jute fibers are shaped into the ten-headed Ravana and Garuda masks for Majuli's all-night theatrical Bhaonas.",
    body: "In the Samaguri Satra on Majuli Island, hereditary masters craft three classes of masks: Bar-mukha (giant body-length masks), Luthuri-mukha (medium-sized mask with movable jaws), and Mukh-mukha (face-only masks). The materials are entirely biodegradable and harvested from the Brahmaputra alluvial silt and indigenous bamboo groves.",
    sourcesText: "Field documentation conducted by Sangeet Natak Akademi research fellow; Srimanta Sankaradeva Kalakshetra archives Guwahati.",
    contributorName: "Pranab Goswami",
    contributorEmail: "pranab.goswami@majuli-heritage.org",
    contributorRole: "Community Cultural Keeper, Majuli",
    mediaFileName: "samaguri_bhaona_mask.jpg",
    mediaFileSize: 2850000,
    mediaFileType: "image/jpeg",
    mediaPreviewUrl: "https://images.unsplash.com/photo-1606820260383-7474b1742055?auto=format&fit=crop&w=800&q=80",
    status: "PENDING",
    reviewerNotes: "Awaiting epigraphical team review on the 16th century timeline documentation.",
    createdAt: "2026-03-01T09:15:00Z"
  },
  {
    id: "sub-003",
    title: "The Kavad Portable Shrine Storytelling of Bassi",
    nativeTitle: "बस्सी की कावड़ यात्रा परंपरा",
    stateSlug: "rajasthan",
    category: "ORAL_TRADITION",
    periodOrOrigin: "circa 15th Century CE",
    communitiesInvolved: ["Suthar carpenters of Bassi", "Kavadiya Bhat oral bards"],
    summary: "A painted wooden cupboard shrine with multiple folding panels. The Kavadiya Bhat singer unfolds panel by panel, reciting genealogies and epics before village patrons.",
    body: "The Kavad is a wooden folding temple box manufactured exclusively by the Suthar woodcarvers of Bassi village near Chittorgarh. Measuring between 1 to 3 feet in height, it possesses up to twelve doors that open consecutively. As the bard unlatches each door, a new chapter of devotion is unveiled.",
    sourcesText: "Kavad: The Painted Mobile Temple of Rajasthan by Nina Sabnani (IDC IIT Bombay monograph).",
    contributorName: "Hemraj Suthar",
    contributorEmail: "hemraj@bassi-crafts.org",
    contributorRole: "Artisan Descendant",
    status: "PENDING",
    createdAt: "2026-03-08T16:20:00Z"
  }
];

// In-memory fallback stores
let memorySubmissions: ContributionSubmission[] = [...INITIAL_SUBMISSIONS];
let memoryCustomItems: CulturalItem[] = [];

function getSubmissionsStore(): ContributionSubmission[] {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memorySubmissions = parsed;
          return parsed;
        }
      }
    } catch {
      // Fall through to memory
    }
  }
  return memorySubmissions;
}

function saveSubmissionsStore(subs: ContributionSubmission[]) {
  memorySubmissions = subs;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(subs));
    } catch {
      // Ignore quota errors in demo sandbox
    }
  }
}

function getCustomItemsStore(): CulturalItem[] {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(CUSTOM_ITEMS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          memoryCustomItems = parsed;
          return parsed;
        }
      }
    } catch {
      // Fall through to memory
    }
  }
  return memoryCustomItems;
}

function saveCustomItemsStore(items: CulturalItem[]) {
  memoryCustomItems = items;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CUSTOM_ITEMS_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore quota errors
    }
  }
}

function getAllCulturalItems(): CulturalItem[] {
  const custom = getCustomItemsStore();
  return [...custom, ...CULTURAL_ITEMS];
}

export const CulturalRepository = {
  // States & UTs
  getStates(): StateOrUT[] {
    return STATES_AND_UTS;
  },

  getStateBySlug(slug: string): StateOrUT | undefined {
    return STATES_AND_UTS.find((s) => s.slug === slug.toLowerCase());
  },

  getStatesByRegion(region: IndianRegion): StateOrUT[] {
    return STATES_AND_UTS.filter((s) => s.region === region);
  },

  // Cultural Items (Including verified community-promoted items)
  getCulturalItems(filter?: {
    search?: string;
    stateSlug?: string;
    category?: ContentCategory;
    verificationStatus?: VerificationStatus;
    tag?: string;
  }): CulturalItem[] {
    let result = getAllCulturalItems();

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.body.toLowerCase().includes(q) ||
          item.stateName.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          item.communitiesInvolved.some((c) => c.toLowerCase().includes(q))
      );
    }

    if (filter?.stateSlug && filter.stateSlug !== "all") {
      result = result.filter((item) => item.stateSlug === filter.stateSlug);
    }

    if (filter?.category && filter.category !== ("ALL" as unknown as ContentCategory)) {
      result = result.filter((item) => item.category === filter.category);
    }

    if (filter?.verificationStatus && filter.verificationStatus !== ("ALL" as unknown as VerificationStatus)) {
      result = result.filter((item) => item.verificationStatus === filter.verificationStatus);
    }

    if (filter?.tag) {
      const tagLower = filter.tag.toLowerCase();
      result = result.filter((item) => item.tags.some((t) => t.toLowerCase() === tagLower));
    }

    return result;
  },

  getCulturalItemBySlug(slug: string): CulturalItem | undefined {
    return getAllCulturalItems().find((item) => item.slug === slug);
  },

  getItemsByState(stateSlug: string): CulturalItem[] {
    return getAllCulturalItems().filter((item) => item.stateSlug === stateSlug);
  },

  // Living Heritage
  getLivingHeritage(type?: string): LivingHeritageItem[] {
    if (!type || type === "ALL") return LIVING_HERITAGE;
    return LIVING_HERITAGE.filter((item) => item.heritageType === type);
  },

  getLivingHeritageBySlug(slug: string): LivingHeritageItem | undefined {
    return LIVING_HERITAGE.find((item) => item.slug === slug);
  },

  // Stories
  getStories(traditionType?: string): StoryItem[] {
    if (!traditionType || traditionType === "ALL") return STORIES;
    return STORIES.filter((item) => item.traditionType === traditionType);
  },

  getStoryBySlug(slug: string): StoryItem | undefined {
    return STORIES.find((item) => item.slug === slug);
  },

  // Contributions & Moderation (Persistent)
  getContributions(statusFilter?: 'ALL' | 'PENDING' | 'APPROVED' | 'CHANGES_REQUESTED' | 'REJECTED'): ContributionSubmission[] {
    const store = getSubmissionsStore();
    if (!statusFilter || statusFilter === 'ALL') return store;
    return store.filter((s) => s.status === statusFilter);
  },

  getContributionById(id: string): ContributionSubmission | undefined {
    return getSubmissionsStore().find((s) => s.id === id);
  },

  submitContribution(data: Omit<ContributionSubmission, 'id' | 'createdAt' | 'status'>): ContributionSubmission {
    const current = getSubmissionsStore();
    const newSubmission: ContributionSubmission = {
      ...data,
      id: `sub-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'PENDING'
    };
    const updated = [newSubmission, ...current];
    saveSubmissionsStore(updated);
    return newSubmission;
  },

  moderateContribution(
    id: string,
    action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES',
    reviewerNotes: string,
    assignedVerification?: VerificationStatus
  ): { success: boolean; submission?: ContributionSubmission; itemAdded?: CulturalItem } {
    const current = [...getSubmissionsStore()];
    const subIndex = current.findIndex((s) => s.id === id);
    if (subIndex === -1) return { success: false };

    const sub = { ...current[subIndex] };

    if (action === 'APPROVE') {
      sub.status = 'APPROVED';
      sub.reviewedAt = new Date().toISOString();
      sub.reviewerNotes = reviewerNotes;
      sub.assignedVerification = assignedVerification || 'COMMUNITY_REVIEW';

      // Automatically promote to active cultural item in the archive!
      const stateObj = STATES_AND_UTS.find((s) => s.slug === sub.stateSlug);
      const newItem: CulturalItem = {
        id: `item-${Date.now()}`,
        stateId: stateObj?.id || "state-gen",
        stateSlug: sub.stateSlug,
        stateName: stateObj?.name || sub.stateSlug,
        title: sub.title,
        slug: sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        nativeTitle: sub.nativeTitle,
        category: sub.category,
        verificationStatus: sub.assignedVerification,
        summary: sub.summary,
        body: sub.body,
        periodOrOrigin: sub.periodOrOrigin || "Documented Living Tradition",
        communitiesInvolved: sub.communitiesInvolved,
        primaryLanguageCode: "en",
        tags: ["Community Preserved", sub.category, stateObj?.region || "India"],
        heroImageUrl: sub.mediaPreviewUrl || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
        sources: [
          {
            id: `src-${Date.now()}`,
            culturalItemId: `item-${Date.now()}`,
            title: sub.sourcesText.slice(0, 100),
            citationType: sub.assignedVerification === 'ARCHIVAL_SOURCE' ? 'ARCHIVAL_DOCUMENT' : 'ORAL_TESTIMONY',
            authorOrInstitution: sub.contributorName,
            publicationYear: new Date().getFullYear(),
            urlOrArchiveRef: sub.sourcesText,
            verifiedBy: `Verified by Cultural Moderation Keeper (${reviewerNotes || 'Approved with citations'})`
          }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const customItems = getCustomItemsStore();
      saveCustomItemsStore([newItem, ...customItems]);

      current[subIndex] = sub;
      saveSubmissionsStore(current);
      return { success: true, submission: sub, itemAdded: newItem };
    } else if (action === 'REQUEST_CHANGES') {
      sub.status = 'CHANGES_REQUESTED';
      sub.reviewedAt = new Date().toISOString();
      sub.reviewerNotes = reviewerNotes;
      current[subIndex] = sub;
      saveSubmissionsStore(current);
      return { success: true, submission: sub };
    } else {
      sub.status = 'REJECTED';
      sub.reviewedAt = new Date().toISOString();
      sub.reviewerNotes = reviewerNotes;
      current[subIndex] = sub;
      saveSubmissionsStore(current);
      return { success: true, submission: sub };
    }
  },

  // Platform Metrics
  getPlatformStats() {
    const allItems = getAllCulturalItems();
    const allSubs = getSubmissionsStore();
    const totalItems = allItems.length;
    const verifiedCount = allItems.filter((i) => i.verificationStatus === 'VERIFIED' || i.verificationStatus === 'ARCHIVAL_SOURCE').length;
    const totalSources = allItems.reduce((acc, curr) => acc + curr.sources.length, 0);
    const pendingSubmissions = allSubs.filter((s) => s.status === 'PENDING').length;
    const stateCount = STATES_AND_UTS.length;

    return {
      totalItems,
      verifiedCount,
      verificationRate: Math.round((verifiedCount / totalItems) * 100),
      totalSources,
      pendingSubmissions,
      stateCount,
      livingHeritageCount: LIVING_HERITAGE.length,
      storiesCount: STORIES.length
    };
  }
};
