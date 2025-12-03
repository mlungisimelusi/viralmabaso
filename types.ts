export enum View {
  DASHBOARD = 'DASHBOARD',
  CONTENT_ENGINE = 'CONTENT_ENGINE',
  MARKETPLACE = 'MARKETPLACE',
  ADS_MANAGER = 'ADS_MANAGER',
  ANALYTICS = 'ANALYTICS',
  TUTOR = 'TUTOR',
  SETTINGS = 'SETTINGS'
}

export interface Metric {
  label: string;
  value: string;
  change: string; // e.g., "+12%"
  positive: boolean;
}

export interface Influencer {
  id: string;
  name: string;
  handle: string;
  niche: string;
  score: number; // Viralitics AI Score (0-100)
  followers: string;
  engagementRate: string;
  imageUrl: string;
}

export interface GeneratedContent {
  platform: string;
  script: string;
  caption: string;
  hashtags: string[];
  suggestedVisual: string;
}

export interface AdCampaign {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Optimizing';
  platform: string;
  budget: number;
  spent: number;
  roas: number;
}

export interface PlatformStatus {
  name: string;
  connected: boolean;
  icon: string; // Lucide icon name or image url
}
