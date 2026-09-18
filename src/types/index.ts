export type CategoryType = 
  | 'museum' 
  | 'food' 
  | 'nature' 
  | 'historic' 
  | 'nightlife' 
  | 'hopkins';

export type NeighborhoodType =
  | 'Charles Village'
  | 'Mount Vernon'
  | 'Hampden'
  | 'Inner Harbor'
  | 'Fells Point'
  | 'Federal Hill'
  | 'Station North'
  | 'Druid Hill & West'
  | 'Locust Point & Fort';

export interface Place {
  id: string;
  name: string;
  neighborhood: NeighborhoodType;
  category: CategoryType;
  points: number;
  tagline: string;
  description: string;
  hopkinsLore: string;
  transitTip: string;
  studentPerk?: string;
  estimatedTime: string;
  cost: 'Free' | '$' | '$$' | '$$$';
  coordinates: {
    lat: number;
    lng: number;
    // Normalized SVG canvas coordinates for visual interactive map (0-100%)
    mapX: number;
    mapY: number;
  };
  imageUrl: string;
  address: string;
  popularWith: string;
  tags: string[];
}

export interface Subrank {
  id: string;
  levelNumber: number; // 1 to 15
  subrankName: string;
  parentRankName: string;
  minPoints: number;
  maxPoints: number;
  flavorText: string;
  unlockedPerk: string;
  insignia: string;
  colorClass: string;
}

export interface Rank {
  id: number;
  name: string;
  badgeIcon: string;
  minPoints: number;
  maxPoints: number;
  themeColor: string;
  description: string;
  subranks: Subrank[];
}

export interface Quest {
  id: string;
  title: string;
  tagline: string;
  description: string;
  placeIds: string[];
  bonusPoints: number;
  badgeReward: string;
  icon: string;
  difficulty: 'Easy' | 'Moderate' | 'Legendary';
}

export interface Badge {
  id: string;
  title: string;
  icon: string;
  description: string;
  requirement: string;
}

export interface PlaceReview {
  date: string;
  notes: string;
  rating: number;
}

export interface GroupTripMember {
  id: string;
  name: string;
  major: string;
  classYear: string;
  avatar: string;
  joinedAt: string;
  isCreator?: boolean;
}

export interface GroupTrip {
  id: string;
  title: string;
  destinationPlaceId: string;
  destinationName: string;
  neighborhood: NeighborhoodType;
  category: CategoryType;
  meetupLocation: string;
  meetupTime: string;
  dateLabel: string;
  transitMethod: 'JHMI Shuttle' | 'Charm City Circulator' | 'Walking Flock' | 'Light Rail' | 'Hopkins Night Ride';
  maxMembers: number;
  creator: {
    name: string;
    major: string;
    classYear: string;
    avatar: string;
    campus: string;
    isJhuVerified: boolean;
  };
  members: GroupTripMember[];
  notes: string;
  bonusGroupPoints: number;
  status: 'upcoming' | 'gathering' | 'completed';
  checklist: string[];
}

export interface ScrapbookPhoto {
  id: string;
  placeId?: string;
  placeName: string;
  neighborhood?: string;
  dataUrl: string;
  timestamp: string;
  caption: string;
  filter: 'normal' | 'vintage' | 'warm-sun' | 'hopkins-blue' | 'noir';
  frameStyle: 'polaroid' | 'postcard' | 'classic-stamp';
  stickerKey?: string;
  likes: number;
}

export interface UserProfile {
  studentName: string;
  classYear: string;
  major: string;
  campus: 'Homewood' | 'Peabody' | 'East Baltimore / Med' | 'Carey Harbor East';
  jCardId: string;
  avatar: string;
  visitedPlaceIds: string[];
  placeReviews: Record<string, PlaceReview>;
  completedQuestIds: string[];
  bonusPoints: number;
  joinedTripIds?: string[];
  photos?: ScrapbookPhoto[];
  isAuthenticated: boolean;
  isVerified: boolean;
  jhedId?: string;
  email?: string;
  verificationDate?: string;
  verificationMethod?: 'email_code' | 'jhed_sso';
}
