import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Place, UserProfile, Subrank, Rank, Quest, Badge, GroupTrip, ScrapbookPhoto } from '../types';
import { PLACES } from '../data/placesData';
import { SUBRANKS, getRankAndSubrank } from '../data/ranksData';
import { QUESTS } from '../data/questsData';
import { BADGES } from '../data/badgesData';
import { INITIAL_GROUP_TRIPS } from '../data/groupTripsData';
import { INITIAL_SCRAPBOOK_PHOTOS } from '../data/scrapbookData';

interface LevelUpData {
  subrank: Subrank;
  rank: Rank;
  isMajorRankUp: boolean;
}

export interface VerificationNotice {
  code: string;
  recipient: string;
  expiresAt: number;
}

interface AppContextType {
  places: Place[];
  profile: UserProfile;
  activeTab: 'explore' | 'map' | 'trips' | 'quests' | 'camera' | 'passport';
  setActiveTab: (tab: 'explore' | 'map' | 'trips' | 'quests' | 'camera' | 'passport') => void;
  selectedPlace: Place | null;
  setSelectedPlace: (place: Place | null) => void;
  levelUpData: LevelUpData | null;
  setLevelUpData: (data: LevelUpData | null) => void;
  totalPoints: number;
  currentRank: Rank;
  currentSubrank: Subrank;
  nextSubrank: Subrank | null;
  progressPercent: number;
  pointsToNext: number;
  unlockedBadges: Badge[];
  quests: Quest[];
  toggleCheckIn: (placeId: string) => void;
  updateReview: (placeId: string, notes: string, rating: number) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetProgress: () => void;
  loadDemoProgress: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (n: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  transitFilter: boolean;
  setTransitFilter: (val: boolean) => void;
  freeOnlyFilter: boolean;
  setFreeOnlyFilter: (val: boolean) => void;

  // Flock Expeditions (Group Trips)
  groupTrips: GroupTrip[];
  joinGroupTrip: (tripId: string) => void;
  leaveGroupTrip: (tripId: string) => void;
  createGroupTrip: (newTrip: Omit<GroupTrip, 'id' | 'members' | 'status' | 'creator'>) => void;
  checkInGroupTrip: (tripId: string) => void;
  isCreateTripModalOpen: boolean;
  setIsCreateTripModalOpen: (open: boolean) => void;

  // Scrapbook & Camera
  scrapbookPhotos: ScrapbookPhoto[];
  addScrapbookPhoto: (photo: Omit<ScrapbookPhoto, 'id' | 'timestamp' | 'likes'>) => void;
  deleteScrapbookPhoto: (id: string) => void;
  likeScrapbookPhoto: (id: string) => void;
  isCameraModalOpen: boolean;
  setIsCameraModalOpen: (open: boolean) => void;
  cameraTargetPlace: Place | null;
  setCameraTargetPlace: (place: Place | null) => void;
  openCameraForPlace: (place: Place) => void;

  // Authentication & Verification
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  verificationNotice: VerificationNotice | null;
  clearVerificationNotice: () => void;
  requestVerificationCode: (identifier: string) => string;
  verifyStudentCode: (code: string, additionalData?: Partial<UserProfile>) => { success: boolean; error?: string };
  logoutStudent: () => void;
  loginWithDemoStudent: (type: 'homewood' | 'peabody' | 'med') => void;
}

const DEFAULT_PROFILE: UserProfile = {
  studentName: 'Sydney Hopkins',
  classYear: 'Class of \'27',
  major: 'Biomedical Engineering & Public Health',
  campus: 'Homewood',
  jCardId: 'JHU-948271',
  avatar: 'baby-jay',
  visitedPlaceIds: [],
  placeReviews: {},
  completedQuestIds: [],
  bonusPoints: 0,
  isAuthenticated: false,
  isVerified: false,
  jhedId: 'shopkin1',
  email: 'shopkin1@jh.edu',
  joinedTripIds: [],
  photos: [],
};

const STORAGE_KEY = 'jaywalk_bmore_user_profile_v2';
const TRIPS_STORAGE_KEY = 'jaywalk_bmore_group_trips_v1';
const PHOTOS_STORAGE_KEY = 'jaywalk_bmore_scrapbook_photos_v1';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PROFILE,
          ...parsed,
        };
      }
    } catch (e) {
      console.error('Error reading profile from localStorage', e);
    }
    return DEFAULT_PROFILE;
  });

  const [activeTab, setActiveTab] = useState<'explore' | 'map' | 'trips' | 'quests' | 'camera' | 'passport'>('explore');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [levelUpData, setLevelUpData] = useState<LevelUpData | null>(null);

  // Group Trips & Camera Modals
  const [isCreateTripModalOpen, setIsCreateTripModalOpen] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [cameraTargetPlace, setCameraTargetPlace] = useState<Place | null>(null);

  // Group Trips state
  const [groupTrips, setGroupTrips] = useState<GroupTrip[]>(() => {
    try {
      const saved = localStorage.getItem(TRIPS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading group trips from localStorage', e);
    }
    return INITIAL_GROUP_TRIPS;
  });

  // Scrapbook Photos state
  const [scrapbookPhotos, setScrapbookPhotos] = useState<ScrapbookPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(PHOTOS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading scrapbook photos from localStorage', e);
    }
    return INITIAL_SCRAPBOOK_PHOTOS;
  });

  // Authentication states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentExpectedCode, setCurrentExpectedCode] = useState<string | null>(null);
  const [verificationNotice, setVerificationNotice] = useState<VerificationNotice | null>(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [transitFilter, setTransitFilter] = useState(false);
  const [freeOnlyFilter, setFreeOnlyFilter] = useState(false);

  // Save profile changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving profile to localStorage', e);
    }
  }, [profile]);

  // Save group trips
  useEffect(() => {
    try {
      localStorage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(groupTrips));
    } catch (e) {
      console.error('Error saving group trips to localStorage', e);
    }
  }, [groupTrips]);

  // Save scrapbook photos
  useEffect(() => {
    try {
      localStorage.setItem(PHOTOS_STORAGE_KEY, JSON.stringify(scrapbookPhotos));
    } catch (e) {
      console.error('Error saving scrapbook photos to localStorage', e);
    }
  }, [scrapbookPhotos]);

  // Calculate total points
  const placePoints = profile.visitedPlaceIds.reduce((sum, id) => {
    const p = PLACES.find((place) => place.id === id);
    return sum + (p ? p.points : 0);
  }, 0);

  const totalPoints = placePoints + profile.bonusPoints;

  const { currentRank, currentSubrank, nextSubrank, progressPercent, pointsToNext } =
    getRankAndSubrank(totalPoints);

  // Unlocked badges
  const unlockedBadges = BADGES.filter((b) => b.checkUnlocked(profile, PLACES));

  // Request a 6-digit Hopkins verification code
  const requestVerificationCode = (identifier: string): string => {
    const cleanId = identifier.trim();
    // Generate 6-digit code
    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    setCurrentExpectedCode(generated);

    const emailDisplay = cleanId.includes('@')
      ? cleanId
      : `${cleanId.toLowerCase()}@jh.edu`;

    setVerificationNotice({
      code: generated,
      recipient: emailDisplay,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 mins
    });

    return generated;
  };

  const clearVerificationNotice = () => {
    setVerificationNotice(null);
  };

  // Verify code
  const verifyStudentCode = (
    inputCode: string,
    additionalData?: Partial<UserProfile>
  ): { success: boolean; error?: string } => {
    const cleaned = inputCode.trim();

    // In demo environment, allow currentExpectedCode or master test code '187600' (JHU founding year 1876)
    const isValid = (currentExpectedCode && cleaned === currentExpectedCode) || cleaned === '187600';

    if (!isValid) {
      return {
        success: false,
        error: 'Invalid verification code. Please check the 6-digit code sent to your Hopkins inbox.',
      };
    }

    const verificationDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    setProfile((prev) => ({
      ...prev,
      ...additionalData,
      isAuthenticated: true,
      isVerified: true,
      verificationDate,
      verificationMethod: 'email_code',
    }));

    setCurrentExpectedCode(null);
    setVerificationNotice(null);

    // Confetti celebration for verified status!
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#002D72', '#68ACE5', '#F1C400', '#10B981'],
      });
    } catch (e) {
      // ignore
    }

    return { success: true };
  };

  // Logout
  const logoutStudent = () => {
    setProfile((prev) => ({
      ...prev,
      isAuthenticated: false,
      isVerified: false,
    }));
  };

  // 1-Click Demo Logins
  const loginWithDemoStudent = (type: 'homewood' | 'peabody' | 'med') => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    let demoUpdates: Partial<UserProfile> = {};

    if (type === 'homewood') {
      demoUpdates = {
        studentName: 'Sydney Hopkins',
        classYear: 'Class of \'27',
        major: 'Biomedical Engineering',
        campus: 'Homewood',
        jhedId: 'shopkin1',
        email: 'shopkin1@jh.edu',
        jCardId: 'JHU-948271',
        avatar: 'baby-jay',
        isAuthenticated: true,
        isVerified: true,
        verificationDate: today,
        verificationMethod: 'jhed_sso',
      };
    } else if (type === 'peabody') {
      demoUpdates = {
        studentName: 'Maya Lin',
        classYear: 'Class of \'26',
        major: 'Violin Performance & Composition',
        campus: 'Peabody',
        jhedId: 'mlin14',
        email: 'mlin14@jh.edu',
        jCardId: 'JHU-382910',
        avatar: 'peabody-violin',
        isAuthenticated: true,
        isVerified: true,
        verificationDate: today,
        verificationMethod: 'jhed_sso',
      };
    } else {
      demoUpdates = {
        studentName: 'Dr. David Chen',
        classYear: 'Neurology Resident',
        major: 'School of Medicine & Neuroscience',
        campus: 'East Baltimore / Med',
        jhedId: 'dchen82',
        email: 'dchen82@jh.edu',
        jCardId: 'JHU-571029',
        avatar: 'med-microscope',
        isAuthenticated: true,
        isVerified: true,
        verificationDate: today,
        verificationMethod: 'jhed_sso',
      };
    }

    setProfile((prev) => ({
      ...prev,
      ...demoUpdates,
    }));

    setIsLoginModalOpen(false);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#002D72', '#68ACE5', '#F1C400', '#10B981'],
      });
    } catch (e) {
      // ignore
    }
  };

  // Check in action
  const toggleCheckIn = (placeId: string) => {
    const isAlreadyVisited = profile.visitedPlaceIds.includes(placeId);
    const targetPlace = PLACES.find((p) => p.id === placeId);
    if (!targetPlace) return;

    const oldSubrank = currentSubrank;

    let newVisited: string[];
    let newReviews = { ...profile.placeReviews };
    let newCompletedQuests = [...profile.completedQuestIds];
    let newBonus = profile.bonusPoints;

    if (isAlreadyVisited) {
      // Remove
      newVisited = profile.visitedPlaceIds.filter((id) => id !== placeId);
      delete newReviews[placeId];

      // Re-evaluate quests
      const updatedQuests: string[] = [];
      let recalculatedBonus = 0;
      QUESTS.forEach((quest) => {
        const allCompleted = quest.placeIds.every((id) => newVisited.includes(id));
        if (allCompleted) {
          updatedQuests.push(quest.id);
          recalculatedBonus += quest.bonusPoints;
        }
      });
      newCompletedQuests = updatedQuests;
      newBonus = recalculatedBonus;
    } else {
      // Add
      newVisited = [...profile.visitedPlaceIds, placeId];
      if (!newReviews[placeId]) {
        newReviews[placeId] = {
          date: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          notes: 'Great spot! Highly recommend for Hopkins students.',
          rating: 5,
        };
      }

      // Check if newly completed any quests!
      QUESTS.forEach((quest) => {
        if (!newCompletedQuests.includes(quest.id)) {
          const allCompleted = quest.placeIds.every((id) => newVisited.includes(id));
          if (allCompleted) {
            newCompletedQuests.push(quest.id);
            newBonus += quest.bonusPoints;
          }
        }
      });
    }

    const updatedProfile: UserProfile = {
      ...profile,
      visitedPlaceIds: newVisited,
      placeReviews: newReviews,
      completedQuestIds: newCompletedQuests,
      bonusPoints: newBonus,
    };

    setProfile(updatedProfile);

    // Compute new points & level
    if (!isAlreadyVisited) {
      const newTotal =
        newVisited.reduce((sum, id) => {
          const p = PLACES.find((place) => place.id === id);
          return sum + (p ? p.points : 0);
        }, 0) + newBonus;

      const newLevelInfo = getRankAndSubrank(newTotal);

      // Trigger Confetti & Level-Up Modal if subrank increased!
      if (newLevelInfo.currentSubrank.levelNumber > oldSubrank.levelNumber) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#002D72', '#68ACE5', '#F1C400', '#D9381E'],
          });
        } catch (e) {
          // ignore if canvas not supported
        }

        const isMajorRankUp = newLevelInfo.currentRank.name !== oldSubrank.parentRankName;

        setLevelUpData({
          subrank: newLevelInfo.currentSubrank,
          rank: newLevelInfo.currentRank,
          isMajorRankUp,
        });
      }
    }
  };

  const updateReview = (placeId: string, notes: string, rating: number) => {
    setProfile((prev) => ({
      ...prev,
      placeReviews: {
        ...prev.placeReviews,
        [placeId]: {
          date: prev.placeReviews[placeId]?.date || new Date().toLocaleDateString(),
          notes,
          rating,
        },
      },
    }));
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const resetProgress = () => {
    if (window.confirm('Reset all exploration progress back to Nestling (0 points)?')) {
      setProfile(DEFAULT_PROFILE);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const loadDemoProgress = () => {
    // Set up a rich demo: 5 places checked in, 1 quest complete, ~250 points (Homewood Hopper!)
    const demoVisited = ['bma', 'paper-moon', 'wyman-park-dell', 'hampden-the-avenue', 'peabody-library'];
    const demoProfile: UserProfile = {
      ...DEFAULT_PROFILE,
      studentName: 'Alex Jayhawk',
      classYear: 'Class of \'26',
      major: 'Neuroscience & Art History',
      campus: 'Homewood',
      jhedId: 'ajayhawk1',
      email: 'ajayhawk1@jh.edu',
      isAuthenticated: true,
      isVerified: true,
      verificationDate: 'Sep 10, 2026',
      verificationMethod: 'jhed_sso',
      visitedPlaceIds: demoVisited,
      bonusPoints: 75, // Completed Bubble Burster Quest
      completedQuestIds: ['quest-bubble-burster'],
      placeReviews: {
        bma: {
          date: 'Sep 12, 2026',
          notes: 'Cone Collection is gorgeous! Sat by the outdoor fountain with iced coffee.',
          rating: 5,
        },
        'paper-moon': {
          date: 'Sep 14, 2026',
          notes: 'Bacon milkshake was wild, but totally worth the hype. Huge pancake stack.',
          rating: 5,
        },
        'wyman-park-dell': {
          date: 'Sep 15, 2026',
          notes: 'Perfect afternoon study spot with hammock between the oaks.',
          rating: 4,
        },
        'peabody-library': {
          date: 'Sep 16, 2026',
          notes: 'Took the free JHMI shuttle. Feels like studying in Hogwarts Cathedral!',
          rating: 5,
        },
      },
    };
    setProfile(demoProfile);
  };

  // Flock Expeditions (Group Trips) Handlers
  const joinGroupTrip = (tripId: string) => {
    setGroupTrips((prev) =>
      prev.map((trip) => {
        if (trip.id !== tripId) return trip;
        if (trip.members.some((m) => m.name === profile.studentName)) return trip;
        if (trip.members.length >= trip.maxMembers) return trip;

        const newMember = {
          id: `member-${Date.now()}`,
          name: profile.studentName,
          major: profile.major,
          classYear: profile.classYear,
          avatar: profile.avatar,
          joinedAt: 'Just now',
        };

        return {
          ...trip,
          members: [...trip.members, newMember],
        };
      })
    );

    setProfile((prev) => ({
      ...prev,
      joinedTripIds: [...(prev.joinedTripIds || []), tripId],
    }));

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#002D72', '#68ACE5', '#F1C400', '#E03A3E'],
      });
    } catch (e) {
      // ignore
    }
  };

  const leaveGroupTrip = (tripId: string) => {
    setGroupTrips((prev) =>
      prev.map((trip) => {
        if (trip.id !== tripId) return trip;
        return {
          ...trip,
          members: trip.members.filter((m) => m.name !== profile.studentName),
        };
      })
    );

    setProfile((prev) => ({
      ...prev,
      joinedTripIds: (prev.joinedTripIds || []).filter((id) => id !== tripId),
    }));
  };

  const createGroupTrip = (newTripData: Omit<GroupTrip, 'id' | 'members' | 'status' | 'creator'>) => {
    const newTrip: GroupTrip = {
      ...newTripData,
      id: `trip-${Date.now()}`,
      status: 'upcoming',
      creator: {
        name: profile.studentName,
        major: profile.major,
        classYear: profile.classYear,
        avatar: profile.avatar,
        campus: profile.campus,
        isJhuVerified: profile.isVerified,
      },
      members: [
        {
          id: `member-creator-${Date.now()}`,
          name: profile.studentName,
          major: profile.major,
          classYear: profile.classYear,
          avatar: profile.avatar,
          joinedAt: 'Just now',
          isCreator: true,
        },
      ],
    };

    setGroupTrips((prev) => [newTrip, ...prev]);
    setProfile((prev) => ({
      ...prev,
      bonusPoints: prev.bonusPoints + 25, // Organizer reward!
      joinedTripIds: [...(prev.joinedTripIds || []), newTrip.id],
    }));

    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#002D72', '#68ACE5', '#F1C400', '#E03A3E'],
      });
    } catch (e) {
      // ignore
    }
  };

  const checkInGroupTrip = (tripId: string) => {
    const trip = groupTrips.find((t) => t.id === tripId);
    if (!trip) return;

    setProfile((prev) => {
      const alreadyVisited = prev.visitedPlaceIds.includes(trip.destinationPlaceId);
      const newVisited = alreadyVisited ? prev.visitedPlaceIds : [...prev.visitedPlaceIds, trip.destinationPlaceId];
      return {
        ...prev,
        bonusPoints: prev.bonusPoints + trip.bonusGroupPoints,
        visitedPlaceIds: newVisited,
      };
    });

    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#002D72', '#68ACE5', '#F1C400', '#E03A3E', '#22C55E'],
      });
    } catch (e) {
      // ignore
    }
  };

  // Scrapbook Photos Handlers
  const addScrapbookPhoto = (photoData: Omit<ScrapbookPhoto, 'id' | 'timestamp' | 'likes'>) => {
    const newPhoto: ScrapbookPhoto = {
      ...photoData,
      id: `photo-${Date.now()}`,
      timestamp: 'Just now',
      likes: 1,
    };

    setScrapbookPhotos((prev) => [newPhoto, ...prev]);
    setProfile((prev) => ({
      ...prev,
      bonusPoints: prev.bonusPoints + 15, // Photo proof keepsake bonus
    }));

    try {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#68ACE5', '#F1C400', '#FFFFFF', '#002D72'],
      });
    } catch (e) {
      // ignore
    }
  };

  const deleteScrapbookPhoto = (id: string) => {
    setScrapbookPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const likeScrapbookPhoto = (id: string) => {
    setScrapbookPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const openCameraForPlace = (place: Place) => {
    setCameraTargetPlace(place);
    setIsCameraModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        places: PLACES,
        profile,
        activeTab,
        setActiveTab,
        selectedPlace,
        setSelectedPlace,
        levelUpData,
        setLevelUpData,
        totalPoints,
        currentRank,
        currentSubrank,
        nextSubrank,
        progressPercent,
        pointsToNext,
        unlockedBadges,
        quests: QUESTS,
        toggleCheckIn,
        updateReview,
        updateProfile,
        resetProgress,
        loadDemoProgress,
        searchQuery,
        setSearchQuery,
        selectedNeighborhood,
        setSelectedNeighborhood,
        selectedCategory,
        setSelectedCategory,
        transitFilter,
        setTransitFilter,
        freeOnlyFilter,
        setFreeOnlyFilter,
        groupTrips,
        joinGroupTrip,
        leaveGroupTrip,
        createGroupTrip,
        checkInGroupTrip,
        isCreateTripModalOpen,
        setIsCreateTripModalOpen,
        scrapbookPhotos,
        addScrapbookPhoto,
        deleteScrapbookPhoto,
        likeScrapbookPhoto,
        isCameraModalOpen,
        setIsCameraModalOpen,
        cameraTargetPlace,
        setCameraTargetPlace,
        openCameraForPlace,
        isLoginModalOpen,
        setIsLoginModalOpen,
        verificationNotice,
        clearVerificationNotice,
        requestVerificationCode,
        verifyStudentCode,
        logoutStudent,
        loginWithDemoStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
