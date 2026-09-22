import { Rank, Subrank } from '../types';

export const SUBRANKS: Subrank[] = [
  // Rank 1: Nestling
  {
    id: 'subrank-1',
    levelNumber: 1,
    subrankName: 'Fledgling Fencer',
    parentRankName: 'Nestling',
    minPoints: 0,
    maxPoints: 49,
    flavorText: "Day 1 of your Charm City expedition! With an oversized travel backpack, your practice foil strapped to your pack, and a freshly stamped Hopkins Travel Passport, you just stepped onto Charles Street. You might be holding the city map upside down, but your rookie adventure has officially begun!",
    unlockedPerk: 'First Departure: Charles Village rookie travel quests & freshman exploration map unlocked.',
    insignia: 'nestling-hatch',
    colorClass: 'from-sky-400 to-blue-500',
  },
  {
    id: 'subrank-2',
    levelNumber: 2,
    subrankName: 'Brody Stalker',
    parentRankName: 'Nestling',
    minPoints: 50,
    maxPoints: 99,
    flavorText: 'You survived an all-nighter on A-level and ventured out to St. Paul Street for late-night nourishment.',
    unlockedPerk: 'Unlock secret coffee shop and study nook recommendations.',
    insignia: 'brody-books',
    colorClass: 'from-sky-500 to-blue-600',
  },
  {
    id: 'subrank-3',
    levelNumber: 3,
    subrankName: 'Charles Street Sprinter',
    parentRankName: 'Nestling',
    minPoints: 100,
    maxPoints: 149,
    flavorText: 'You can jaywalk across Charles Street during rush hour without batting an eye.',
    unlockedPerk: 'Unlock Charles Village Farmers Market and BMA special event guides.',
    insignia: 'charles-runner',
    colorClass: 'from-blue-500 to-indigo-600',
  },

  // Rank 2: Homewood Hopper
  {
    id: 'subrank-4',
    levelNumber: 4,
    subrankName: 'Wyman Park Wanderer',
    parentRankName: 'Homewood Hopper',
    minPoints: 150,
    maxPoints: 224,
    flavorText: 'You traded the library stacks for afternoon strolls in the Dell and sculpture gazing at the BMA.',
    unlockedPerk: 'Digital J-Card receives Bronze Hopkins Seal badge.',
    insignia: 'wyman-dell',
    colorClass: 'from-emerald-400 to-teal-600',
  },
  {
    id: 'subrank-5',
    levelNumber: 5,
    subrankName: 'JHMI Shuttle Veteran',
    parentRankName: 'Homewood Hopper',
    minPoints: 225,
    maxPoints: 299,
    flavorText: 'You know the exact departure schedule of the free shuttle connecting Homewood, Peabody, and Med Campus.',
    unlockedPerk: 'Hopkins Shuttle transit route overlay enabled on Map.',
    insignia: 'jhmi-shuttle',
    colorClass: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'subrank-6',
    levelNumber: 6,
    subrankName: 'Peabody Harmonizer',
    parentRankName: 'Homewood Hopper',
    minPoints: 300,
    maxPoints: 399,
    flavorText: 'You have sat beneath the six tiers of cast-iron balconies at George Peabody Library feeling like you stepped into Hogwarts.',
    unlockedPerk: 'Mount Vernon cultural discount guide unlocked.',
    insignia: 'peabody-violin',
    colorClass: 'from-cyan-500 to-blue-600',
  },

  // Rank 3: Charm City Scout
  {
    id: 'subrank-7',
    levelNumber: 7,
    subrankName: 'Hampden "Hon" Hunter',
    parentRankName: 'Charm City Scout',
    minPoints: 400,
    maxPoints: 524,
    flavorText: 'You have browsed The Avenue, eaten at Golden West Cafe, and learned to say "How you doin\', Hon?"',
    unlockedPerk: 'Hampden vintage boutique & bakery secret map unlocked.',
    insignia: 'hampden-shades',
    colorClass: 'from-amber-400 to-orange-500',
  },
  {
    id: 'subrank-8',
    levelNumber: 8,
    subrankName: 'Inner Harbor Helmsman',
    parentRankName: 'Charm City Scout',
    minPoints: 525,
    maxPoints: 649,
    flavorText: 'You navigated past tourist traps straight to the historic naval decks and the coral reef at the National Aquarium.',
    unlockedPerk: 'Water taxi discount & student Friday aquarium pass tracker.',
    insignia: 'harbor-anchor',
    colorClass: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'subrank-9',
    levelNumber: 9,
    subrankName: 'Fells Point Pathologist',
    parentRankName: 'Charm City Scout',
    minPoints: 650,
    maxPoints: 799,
    flavorText: 'You can navigate 250-year-old cobblestones in sneakers without stumbling, clutching piping hot Ekiben steamed buns.',
    unlockedPerk: 'Fells Point live music & late night food circuit unlock.',
    insignia: 'fells-sailboat',
    colorClass: 'from-indigo-500 to-purple-600',
  },

  // Rank 4: Bmore Blue Jay
  {
    id: 'subrank-10',
    levelNumber: 10,
    subrankName: 'Old Bay Connoisseur',
    parentRankName: 'Bmore Blue Jay',
    minPoints: 800,
    maxPoints: 999,
    flavorText: 'You shake Old Bay seasoning onto your fries, popcorn, pizza, and bloody marys without a second thought.',
    unlockedPerk: 'Digital J-Card Silver Blue Jay Wing foil decoration.',
    insignia: 'old-bay-crab',
    colorClass: 'from-rose-500 to-red-600',
  },
  {
    id: 'subrank-11',
    levelNumber: 11,
    subrankName: 'Fort McHenry Defender',
    parentRankName: 'Bmore Blue Jay',
    minPoints: 1000,
    maxPoints: 1199,
    flavorText: 'You stood where Francis Scott Key watched the bombs bursting in air, gazing proudly back at the Baltimore skyline.',
    unlockedPerk: 'Historic Baltimore harbor fortifications badge.',
    insignia: 'fort-mchenry',
    colorClass: 'from-red-600 to-amber-700',
  },
  {
    id: 'subrank-12',
    levelNumber: 12,
    subrankName: 'Crab Feast Champion',
    parentRankName: 'Bmore Blue Jay',
    minPoints: 1200,
    maxPoints: 1399,
    flavorText: 'Hand you a wooden mallet, a crab knife, and a table lined with butcher paper—you extract jumbo lump meat with surgical precision.',
    unlockedPerk: 'Maryland Crabhouse master guide with seasonal pricing insights.',
    insignia: 'crab-mallet',
    colorClass: 'from-orange-500 to-red-700',
  },

  // Rank 5: Charm City Laureate
  {
    id: 'subrank-13',
    levelNumber: 13,
    subrankName: 'Poe\'s Raven Disciple',
    parentRankName: 'Charm City Laureate',
    minPoints: 1400,
    maxPoints: 1799,
    flavorText: 'You have embraced the gothic lore of Charm City and paid your respects at Edgar Allan Poe\'s eternal resting place.',
    unlockedPerk: 'Exclusive Raven Insignia on Digital J-Card pass.',
    insignia: 'poe-raven',
    colorClass: 'from-purple-600 to-slate-900',
  },
  {
    id: 'subrank-14',
    levelNumber: 14,
    subrankName: 'Charm City Legend',
    parentRankName: 'Charm City Laureate',
    minPoints: 1800,
    maxPoints: 2299,
    flavorText: 'Both Johns Hopkins deans and local corner-store baristas tip their hats when you walk into the room.',
    unlockedPerk: 'Gold J-Card Hall of Fame status with custom ambassador title.',
    insignia: 'charm-crown',
    colorClass: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'subrank-15',
    levelNumber: 15,
    subrankName: 'Grand Blue Jay Laureate',
    parentRankName: 'Charm City Laureate',
    minPoints: 2300,
    maxPoints: 99999,
    flavorText: 'The supreme explorer of Johns Hopkins and Baltimore! You have ventured beyond the bubble and conquered all Charm City has to offer.',
    unlockedPerk: 'Permanent University Traveler of the Century Laureate medal.',
    insignia: 'grand-laureate',
    colorClass: 'from-yellow-400 via-amber-500 to-red-600',
  },
];

export const RANKS: Rank[] = [
  {
    id: 1,
    name: 'Nestling',
    badgeIcon: 'rank-nestling',
    minPoints: 0,
    maxPoints: 149,
    themeColor: '#68ACE5',
    description: 'Fresh to the Homewood nest. Taking the first exploratory hops around Charles Village.',
    subranks: SUBRANKS.filter((s) => s.parentRankName === 'Nestling'),
  },
  {
    id: 2,
    name: 'Homewood Hopper',
    badgeIcon: 'rank-hopper',
    minPoints: 150,
    maxPoints: 399,
    themeColor: '#007788',
    description: 'Breaking free from the campus bubble. Familiar with Peabody, Mt. Vernon, and the JHMI shuttle.',
    subranks: SUBRANKS.filter((s) => s.parentRankName === 'Homewood Hopper'),
  },
  {
    id: 3,
    name: 'Charm City Scout',
    badgeIcon: 'rank-scout',
    minPoints: 400,
    maxPoints: 799,
    themeColor: '#002D72',
    description: 'A true explorer. Navigating Hampden, the Inner Harbor, and Fells Point cobblestones like a local.',
    subranks: SUBRANKS.filter((s) => s.parentRankName === 'Charm City Scout'),
  },
  {
    id: 4,
    name: 'Bmore Blue Jay',
    badgeIcon: 'rank-bluejay',
    minPoints: 800,
    maxPoints: 1399,
    themeColor: '#D9381E',
    description: 'A Baltimore cultural authority. Seasoned in Old Bay, historic forts, and Maryland crab feasts.',
    subranks: SUBRANKS.filter((s) => s.parentRankName === 'Bmore Blue Jay'),
  },
  {
    id: 5,
    name: 'Charm City Laureate',
    badgeIcon: 'rank-laureate',
    minPoints: 1400,
    maxPoints: 99999,
    themeColor: '#F2B824',
    description: 'The pinnacle of JHU Baltimore worldliness. Master of lore, arts, seafood, and hidden landmarks.',
    subranks: SUBRANKS.filter((s) => s.parentRankName === 'Charm City Laureate'),
  },
];

export function getRankAndSubrank(points: number): {
  currentRank: Rank;
  currentSubrank: Subrank;
  nextSubrank: Subrank | null;
  progressPercent: number;
  pointsToNext: number;
} {
  // Find current subrank
  let currentSubrank = SUBRANKS[0];
  let subrankIndex = 0;

  for (let i = 0; i < SUBRANKS.length; i++) {
    const s = SUBRANKS[i];
    if (points >= s.minPoints) {
      currentSubrank = s;
      subrankIndex = i;
    }
  }

  const currentRank = RANKS.find((r) => r.name === currentSubrank.parentRankName) || RANKS[0];
  const nextSubrank = subrankIndex < SUBRANKS.length - 1 ? SUBRANKS[subrankIndex + 1] : null;

  let progressPercent = 100;
  let pointsToNext = 0;

  if (nextSubrank) {
    const range = nextSubrank.minPoints - currentSubrank.minPoints;
    const progressInCurrent = points - currentSubrank.minPoints;
    progressPercent = Math.min(100, Math.max(0, Math.round((progressInCurrent / range) * 100)));
    pointsToNext = Math.max(0, nextSubrank.minPoints - points);
  }

  return {
    currentRank,
    currentSubrank,
    nextSubrank,
    progressPercent,
    pointsToNext,
  };
}
