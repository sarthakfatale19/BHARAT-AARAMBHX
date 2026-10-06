export type ContentCategory = 
  | 'HISTORICAL'       // Archaeologically/epigraphically/textually verified events, monuments, records
  | 'BELIEF'           // Faith, ritual, sacred theological convictions and living practices
  | 'FOLKLORE'         // Traditional fables, myths, cautionary tales, performance motifs
  | 'ORAL_TRADITION';  // Spoken word histories, bardic narratives, community memories, folk songs

export type VerificationStatus = 
  | 'VERIFIED'          // Backed by peer-reviewed academic or archival citations
  | 'COMMUNITY_REVIEW'  // Under review by native cultural knowledge keepers
  | 'DOCUMENTED_ORAL'   // Documented through verified oral history methodology / field recordings
  | 'ARCHIVAL_SOURCE';  // Sourced directly from historical gazetteers, ASI, or national archives

export type IndianRegion = 
  | 'Northern India'
  | 'Southern India'
  | 'Western India'
  | 'Eastern India'
  | 'North East India'
  | 'Central India';

export type UserRole = 
  | 'visitor'
  | 'contributor'
  | 'cultural_keeper'
  | 'admin';

export interface SourceCitation {
  id: string;
  culturalItemId: string;
  title: string;
  citationType: 'ACADEMIC_PAPER' | 'ARCHIVAL_DOCUMENT' | 'ASI_RECORD' | 'GAZETTEER' | 'ORAL_TESTIMONY';
  authorOrInstitution: string;
  publicationYear?: number;
  urlOrArchiveRef?: string;
  excerpt?: string;
  verifiedBy?: string;
}

export interface CulturalItem {
  id: string;
  stateId: string;
  stateSlug: string;
  stateName: string;
  title: string;
  slug: string;
  nativeTitle?: string;
  nativeScript?: string;
  category: ContentCategory;
  verificationStatus: VerificationStatus;
  summary: string;
  body: string;
  periodOrOrigin?: string;
  communitiesInvolved: string[];
  primaryLanguageCode: string;
  tags: string[];
  heroImageUrl?: string;
  audioRecordingUrl?: string;
  sources: SourceCitation[];
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface StateOrUT {
  id: string;
  name: string;
  slug: string;
  code: string;
  capital: string;
  region: IndianRegion;
  officialLanguages: string[];
  summary: string;
  heroImageUrl: string;
  isSeedState: boolean;
  geographicContext?: string;
  historicalEpochs?: string[];
  livingTraditionCount?: number;
}

export interface LivingHeritageItem {
  id: string;
  title: string;
  slug: string;
  stateName: string;
  stateSlug: string;
  heritageType: 'CRAFT' | 'PERFORMING_ARTS' | 'CULINARY' | 'RITUAL' | 'TEXTILE';
  description: string;
  culturalSignificance: string;
  communitiesPracticing: string[];
  giStatus?: string; // Geographical Indication tag if any
  status: 'THRIVING' | 'ENDANGERED' | 'REVIVED';
  heroImageUrl?: string;
  sources: string[];
}

export interface StoryItem {
  id: string;
  title: string;
  slug: string;
  stateName: string;
  stateSlug: string;
  tellerOrCommunity: string;
  traditionType: 'BARDIC' | 'COMMUNITY_MEMORY' | 'SACRED_LEGEND' | 'FOLK_EPIC';
  summary: string;
  fullNarrative: string;
  culturalContext: string;
  languageOrDialect: string;
  audioDuration?: string;
  recordedBy?: string;
  recordingYear?: number;
  sources: SourceCitation[];
}

export interface ContributionSubmission {
  id: string;
  title: string;
  nativeTitle?: string;
  stateSlug: string;
  category: ContentCategory;
  periodOrOrigin?: string;
  communitiesInvolved: string[];
  summary: string;
  body: string;
  sourcesText: string;
  contributorName: string;
  contributorEmail: string;
  contributorRole: string;
  mediaFileName?: string;
  mediaFileSize?: number;
  mediaFileType?: string;
  mediaPreviewUrl?: string;
  status: 'PENDING' | 'APPROVED' | 'CHANGES_REQUESTED' | 'REJECTED';
  reviewerNotes?: string;
  assignedVerification?: VerificationStatus;
  createdAt: string;
  reviewedAt?: string;
}

export interface SanskritiAIResponse {
  answer: string;
  classificationBreakdown: {
    category: ContentCategory;
    explanation: string;
  }[];
  citedSources: SourceCitation[];
  groundedItems: {
    title: string;
    slug: string;
    category: ContentCategory;
    stateName: string;
  }[];
  confidenceScore: number;
  disclaimer: string;
}
