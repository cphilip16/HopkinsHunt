import { Badge, UserProfile, Place } from '../types';

export const BADGES: (Badge & { checkUnlocked: (profile: UserProfile, places: Place[]) => boolean })[] = [
  {
    id: 'first-step',
    title: 'First Flight',
    icon: 'badge-first-step',
    description: 'Checked into your very first Baltimore destination.',
    requirement: 'Check into 1 place',
    checkUnlocked: (profile) => profile.visitedPlaceIds.length >= 1,
  },
  {
    id: 'dorm-escapee',
    title: 'Dorm Escapee',
    icon: 'badge-dorm-escapee',
    description: 'Visited at least 3 spots outside the Homewood library stacks.',
    requirement: 'Check into 3 places',
    checkUnlocked: (profile) => profile.visitedPlaceIds.length >= 3,
  },
  {
    id: 'shuttle-navigator',
    title: 'JHMI Shuttle Pro',
    icon: 'badge-shuttle-navigator',
    description: 'Took advantage of free Hopkins transit to explore beyond Homewood.',
    requirement: 'Visit 2 places with JHMI Shuttle transit',
    checkUnlocked: (profile, places) => {
      const visitedPlaces = places.filter((p) => profile.visitedPlaceIds.includes(p.id));
      const shuttleSpots = visitedPlaces.filter((p) => p.transitTip.toLowerCase().includes('jhmi'));
      return shuttleSpots.length >= 2;
    },
  },
  {
    id: 'thrifty-scholar',
    title: 'Thrifty Blue Jay',
    icon: 'badge-thrifty-scholar',
    description: 'Discovered the finest zero-cost cultural gems Baltimore has to offer.',
    requirement: 'Visit 4 Free entry destinations',
    checkUnlocked: (profile, places) => {
      const visitedPlaces = places.filter((p) => profile.visitedPlaceIds.includes(p.id));
      const freeSpots = visitedPlaces.filter((p) => p.cost === 'Free');
      return freeSpots.length >= 4;
    },
  },
  {
    id: 'museum-connoisseur',
    title: 'Curator of Charm',
    icon: 'badge-museum-connoisseur',
    description: 'Immersed yourself in the world-class arts and historic galleries of Baltimore.',
    requirement: 'Visit 3 museum destinations',
    checkUnlocked: (profile, places) => {
      const visitedPlaces = places.filter((p) => profile.visitedPlaceIds.includes(p.id));
      const museums = visitedPlaces.filter((p) => p.category === 'museum');
      return museums.length >= 3;
    },
  },
  {
    id: 'old-bay-crustacean',
    title: 'Old Bay Aficionado',
    icon: 'badge-old-bay-crustacean',
    description: 'Savored authentic Baltimore eats and Maryland seafood delicacies.',
    requirement: 'Visit 3 food spots in Baltimore',
    checkUnlocked: (profile, places) => {
      const visitedPlaces = places.filter((p) => profile.visitedPlaceIds.includes(p.id));
      const foodSpots = visitedPlaces.filter((p) => p.category === 'food');
      return foodSpots.length >= 3;
    },
  },
  {
    id: 'point-club-500',
    title: '500-Point High Flyer',
    icon: 'badge-point-club-500',
    description: 'Surpassed 500 total travel exploration points across Baltimore.',
    requirement: 'Earn 500+ total points',
    checkUnlocked: (profile, places) => {
      const placePoints = profile.visitedPlaceIds.reduce((sum, id) => {
        const place = places.find((p) => p.id === id);
        return sum + (place ? place.points : 0);
      }, 0);
      return placePoints + profile.bonusPoints >= 500;
    },
  },
  {
    id: 'quest-champion',
    title: 'Quest Master',
    icon: 'badge-quest-champion',
    description: 'Successfully completed at least two official student exploration quests.',
    requirement: 'Complete 2 Quests',
    checkUnlocked: (profile) => profile.completedQuestIds.length >= 2,
  },
  {
    id: 'baltimore-baron',
    title: 'True Baltimorean',
    icon: 'badge-baltimore-baron',
    description: 'Visited over 10 distinct places across Charm City.',
    requirement: 'Visit 10 different locations',
    checkUnlocked: (profile) => profile.visitedPlaceIds.length >= 10,
  }
];
