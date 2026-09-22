import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Bus,
  Check,
  Sparkles,
  X,
  ChevronRight,
  Crosshair,
  Radio,
  ShieldCheck,
  // Landmark-specific unique marker icons
  GraduationCap,
  Landmark,
  Sun,
  Coffee,
  Flower2,
  Palette,
  Beer,
  Apple,
  Trees,
  BookOpen,
  BookMarked,
  Crown,
  Compass,
  Moon,
  GlassWater,
  Store,
  UtensilsCrossed,
  Book,
  IceCream,
  Film,
  Paintbrush,
  Flame,
  Fish,
  Anchor,
  Guitar,
  Eye,
  Footprints,
  Sandwich,
  Disc,
  Flag,
  Smile,
  ShoppingBag,
  Shield,
  Utensils,
  Leaf,
  PawPrint,
  Feather,
  Cross,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Place } from '../types';
import { HopkinsShield } from './art/HopkinsShield';
import { MarylandRibbon } from './art/MarylandRibbon';
import { HotAirBalloonSticker, CompassRoseSticker, BinocularsSticker } from './art/AnimatedStickers';
import { projectGeoToMapCoords, metersToMapRadiusPercent, formatDistance } from '../utils/geoUtils';

interface MarkerMeta {
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  iconColor: string;
  pointerBg: string;
  label: string;
}

// Unique marker mapping for every single destination
const PLACE_MARKER_MAP: Record<string, MarkerMeta> = {
  // Homewood Campus
  brody: {
    icon: GraduationCap,
    colorClass: 'bg-gradient-to-br from-[#002D72] to-[#001D4A] text-white ring-2 ring-sky-300',
    iconColor: 'text-sky-200',
    pointerBg: 'bg-[#001D4A]',
    label: 'Academic Study',
  },
  gilman: {
    icon: Landmark,
    colorClass: 'bg-gradient-to-br from-[#002D72] to-[#0A479D] text-white ring-2 ring-sky-300',
    iconColor: 'text-sky-200',
    pointerBg: 'bg-[#0A479D]',
    label: 'Memorial Reading Room',
  },
  'the-beach': {
    icon: Sun,
    colorClass: 'bg-gradient-to-br from-sky-500 to-amber-500 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-amber-500',
    label: 'Sun Lawn',
  },
  'bloomberg-center': {
    icon: Coffee,
    colorClass: 'bg-gradient-to-br from-[#002D72] to-amber-600 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-200',
    pointerBg: 'bg-amber-600',
    label: 'Student Center',
  },
  'sherwood-gardens': {
    icon: Flower2,
    colorClass: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white ring-2 ring-emerald-300',
    iconColor: 'text-emerald-100',
    pointerBg: 'bg-teal-700',
    label: 'Tulip Sanctuary',
  },

  // Charles Village & Hampden
  bma: {
    icon: Palette,
    colorClass: 'bg-gradient-to-br from-indigo-700 to-purple-800 text-white ring-2 ring-indigo-300',
    iconColor: 'text-indigo-200',
    pointerBg: 'bg-purple-800',
    label: 'Fine Art Museum',
  },
  'paper-moon': {
    icon: Sparkles,
    colorClass: 'bg-gradient-to-br from-pink-600 to-purple-600 text-white ring-2 ring-pink-300',
    iconColor: 'text-pink-100',
    pointerBg: 'bg-purple-600',
    label: 'Eclectic Diner',
  },
  'peabody-heights': {
    icon: Beer,
    colorClass: 'bg-gradient-to-br from-amber-600 to-amber-800 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-amber-800',
    label: 'Historic Brewery',
  },
  'farmers-market-32nd': {
    icon: Apple,
    colorClass: 'bg-gradient-to-br from-emerald-500 to-green-700 text-white ring-2 ring-green-300',
    iconColor: 'text-green-100',
    pointerBg: 'bg-green-700',
    label: 'Saturday Market',
  },
  'wyman-park-dell': {
    icon: Trees,
    colorClass: 'bg-gradient-to-br from-emerald-700 to-green-900 text-white ring-2 ring-emerald-400',
    iconColor: 'text-emerald-200',
    pointerBg: 'bg-green-900',
    label: 'Woodland Dell',
  },
  'the-book-thing': {
    icon: BookOpen,
    colorClass: 'bg-gradient-to-br from-blue-600 to-indigo-800 text-white ring-2 ring-blue-300',
    iconColor: 'text-blue-100',
    pointerBg: 'bg-indigo-800',
    label: 'Free Books',
  },

  // Mount Vernon
  'peabody-library': {
    icon: BookMarked,
    colorClass: 'bg-gradient-to-br from-amber-600 to-[#002D72] text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-200',
    pointerBg: 'bg-[#002D72]',
    label: 'Cathedral of Books',
  },
  'walters-art-museum': {
    icon: Crown,
    colorClass: 'bg-gradient-to-br from-indigo-800 to-slate-900 text-white ring-2 ring-indigo-300',
    iconColor: 'text-indigo-200',
    pointerBg: 'bg-slate-900',
    label: 'Historic Antiquities',
  },
  'mt-vernon-monument': {
    icon: Compass,
    colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900 text-white ring-2 ring-slate-300',
    iconColor: 'text-slate-200',
    pointerBg: 'bg-slate-900',
    label: 'Washington Monument',
  },
  'the-bun-shop': {
    icon: Moon,
    colorClass: 'bg-gradient-to-br from-blue-900 to-slate-950 text-white ring-2 ring-sky-400',
    iconColor: 'text-sky-300',
    pointerBg: 'bg-slate-950',
    label: 'Late-Night Cafe',
  },
  'owl-bar': {
    icon: GlassWater,
    colorClass: 'bg-gradient-to-br from-amber-800 to-stone-900 text-white ring-2 ring-amber-400',
    iconColor: 'text-amber-200',
    pointerBg: 'bg-stone-900',
    label: 'Belvedere Speakeasy',
  },

  // Hampden
  'hampden-the-avenue': {
    icon: Store,
    colorClass: 'bg-gradient-to-br from-sky-600 to-teal-700 text-white ring-2 ring-sky-300',
    iconColor: 'text-sky-100',
    pointerBg: 'bg-teal-700',
    label: 'The Avenue Boutiques',
  },
  'golden-west-cafe': {
    icon: UtensilsCrossed,
    colorClass: 'bg-gradient-to-br from-amber-600 to-orange-700 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-orange-700',
    label: 'Southwestern Diner',
  },
  'atomic-books': {
    icon: Book,
    colorClass: 'bg-gradient-to-br from-purple-700 to-indigo-900 text-white ring-2 ring-purple-300',
    iconColor: 'text-purple-200',
    pointerBg: 'bg-indigo-900',
    label: 'Indie Literary Shop',
  },
  'the-charmery': {
    icon: IceCream,
    colorClass: 'bg-gradient-to-br from-pink-500 to-sky-500 text-white ring-2 ring-pink-300',
    iconColor: 'text-white',
    pointerBg: 'bg-sky-500',
    label: 'Artisan Ice Cream',
  },

  // Station North
  'charles-theatre': {
    icon: Film,
    colorClass: 'bg-gradient-to-br from-rose-700 to-purple-900 text-white ring-2 ring-rose-300',
    iconColor: 'text-rose-200',
    pointerBg: 'bg-purple-900',
    label: 'Beaux-Arts Cinema',
  },
  'graffiti-alley': {
    icon: Paintbrush,
    colorClass: 'bg-gradient-to-br from-cyan-500 to-pink-600 text-white ring-2 ring-cyan-300',
    iconColor: 'text-white',
    pointerBg: 'bg-pink-600',
    label: 'Street Art Canvas',
  },
  'kong-pocha': {
    icon: Flame,
    colorClass: 'bg-gradient-to-br from-red-600 to-orange-600 text-white ring-2 ring-orange-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-orange-600',
    label: 'Korean Night Eatery',
  },

  // Inner Harbor
  'national-aquarium': {
    icon: Fish,
    colorClass: 'bg-gradient-to-br from-sky-500 to-blue-700 text-white ring-2 ring-sky-300',
    iconColor: 'text-sky-100',
    pointerBg: 'bg-blue-700',
    label: 'Aquarium & Reefs',
  },
  'historic-ships': {
    icon: Anchor,
    colorClass: 'bg-gradient-to-br from-blue-800 to-slate-900 text-white ring-2 ring-blue-300',
    iconColor: 'text-blue-200',
    pointerBg: 'bg-slate-900',
    label: 'Naval Flagships',
  },
  'hard-rock': {
    icon: Guitar,
    colorClass: 'bg-gradient-to-br from-red-700 to-slate-900 text-white ring-2 ring-red-400',
    iconColor: 'text-red-200',
    pointerBg: 'bg-slate-900',
    label: 'Power Plant Cafe',
  },
  'top-of-the-world': {
    icon: Eye,
    colorClass: 'bg-gradient-to-br from-sky-600 to-indigo-800 text-white ring-2 ring-sky-300',
    iconColor: 'text-sky-200',
    pointerBg: 'bg-indigo-800',
    label: '27th-Floor Vista',
  },

  // Fells Point
  'fells-point-square': {
    icon: Footprints,
    colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900 text-white ring-2 ring-sky-300',
    iconColor: 'text-slate-200',
    pointerBg: 'bg-slate-900',
    label: 'Broadway Square',
  },
  ekiben: {
    icon: Sandwich,
    colorClass: 'bg-gradient-to-br from-amber-500 to-orange-700 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-orange-700',
    label: 'Steamed Buns',
  },
  'sound-garden': {
    icon: Disc,
    colorClass: 'bg-gradient-to-br from-violet-700 to-slate-900 text-white ring-2 ring-violet-300',
    iconColor: 'text-violet-200',
    pointerBg: 'bg-slate-900',
    label: 'Vinyl Vault',
  },

  // Federal Hill & South Baltimore
  'federal-hill-park': {
    icon: Flag,
    colorClass: 'bg-gradient-to-br from-emerald-600 to-blue-800 text-white ring-2 ring-emerald-300',
    iconColor: 'text-emerald-100',
    pointerBg: 'bg-blue-800',
    label: 'War of 1812 Lookout',
  },
  avam: {
    icon: Smile,
    colorClass: 'bg-gradient-to-br from-amber-500 to-purple-700 text-white ring-2 ring-amber-300',
    iconColor: 'text-white',
    pointerBg: 'bg-purple-700',
    label: 'Visionary Art Museum',
  },
  'cross-street-market': {
    icon: ShoppingBag,
    colorClass: 'bg-gradient-to-br from-blue-700 to-indigo-900 text-white ring-2 ring-blue-300',
    iconColor: 'text-blue-100',
    pointerBg: 'bg-indigo-900',
    label: 'Food Hall',
  },

  // Locust Point & Fort
  'fort-mchenry': {
    icon: Shield,
    colorClass: 'bg-gradient-to-br from-blue-900 to-red-900 text-white ring-2 ring-amber-300',
    iconColor: 'text-amber-200',
    pointerBg: 'bg-red-900',
    label: 'Star-Spangled Monument',
  },
  'lp-steamers': {
    icon: Utensils,
    colorClass: 'bg-gradient-to-br from-red-600 to-orange-700 text-white ring-2 ring-red-300',
    iconColor: 'text-amber-100',
    pointerBg: 'bg-orange-700',
    label: 'Steamed Crabs',
  },

  // Druid Hill & West
  'rawlings-conservatory': {
    icon: Leaf,
    colorClass: 'bg-gradient-to-br from-emerald-600 to-teal-800 text-white ring-2 ring-emerald-300',
    iconColor: 'text-emerald-100',
    pointerBg: 'bg-teal-800',
    label: 'Victorian Palm House',
  },
  'maryland-zoo': {
    icon: PawPrint,
    colorClass: 'bg-gradient-to-br from-green-700 to-emerald-900 text-white ring-2 ring-green-300',
    iconColor: 'text-green-100',
    pointerBg: 'bg-emerald-900',
    label: 'Historic Zoo',
  },
  'edgar-allan-poe': {
    icon: Feather,
    colorClass: 'bg-gradient-to-br from-slate-800 to-purple-950 text-white ring-2 ring-purple-300',
    iconColor: 'text-purple-200',
    pointerBg: 'bg-purple-950',
    label: 'Gothic Literary Heritage',
  },

  // East Baltimore Med Campus
  'hopkins-historic-dome': {
    icon: Cross,
    colorClass: 'bg-gradient-to-br from-[#002D72] to-red-800 text-white ring-2 ring-red-300',
    iconColor: 'text-white',
    pointerBg: 'bg-red-800',
    label: 'Billings Dome Landmark',
  },
};

const getPlaceMarkerMeta = (place: Place): MarkerMeta => {
  if (PLACE_MARKER_MAP[place.id]) {
    return PLACE_MARKER_MAP[place.id];
  }
  switch (place.category) {
    case 'hopkins':
      return {
        icon: GraduationCap,
        colorClass: 'bg-gradient-to-br from-[#002D72] to-[#001D4A] text-white ring-2 ring-sky-300',
        iconColor: 'text-sky-200',
        pointerBg: 'bg-[#001D4A]',
        label: 'Hopkins Landmark',
      };
    case 'museum':
      return {
        icon: Palette,
        colorClass: 'bg-gradient-to-br from-indigo-700 to-purple-800 text-white ring-2 ring-indigo-300',
        iconColor: 'text-indigo-200',
        pointerBg: 'bg-purple-800',
        label: 'Museum & Art',
      };
    case 'nature':
      return {
        icon: Leaf,
        colorClass: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white ring-2 ring-emerald-300',
        iconColor: 'text-emerald-100',
        pointerBg: 'bg-teal-700',
        label: 'Parks & Nature',
      };
    case 'food':
      return {
        icon: Utensils,
        colorClass: 'bg-gradient-to-br from-amber-600 to-orange-700 text-white ring-2 ring-amber-300',
        iconColor: 'text-amber-100',
        pointerBg: 'bg-orange-700',
        label: 'Food & Dining',
      };
    case 'historic':
      return {
        icon: Landmark,
        colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900 text-white ring-2 ring-sky-300',
        iconColor: 'text-slate-200',
        pointerBg: 'bg-slate-900',
        label: 'Historic Site',
      };
    case 'nightlife':
      return {
        icon: GlassWater,
        colorClass: 'bg-gradient-to-br from-purple-800 to-slate-950 text-white ring-2 ring-purple-300',
        iconColor: 'text-purple-200',
        pointerBg: 'bg-slate-950',
        label: 'Nightlife & Lounges',
      };
    default:
      return {
        icon: MapPin,
        colorClass: 'bg-gradient-to-br from-sky-600 to-blue-800 text-white ring-2 ring-sky-300',
        iconColor: 'text-white',
        pointerBg: 'bg-blue-800',
        label: 'Travel Spot',
      };
  }
};

export const InteractiveMap: React.FC = () => {
  const {
    places,
    profile,
    toggleCheckIn,
    setSelectedPlace,
    selectedNeighborhood,
    transitFilter,
    freeOnlyFilter,
    userLocation,
    isSimulatedLocation,
    checkInRadiusMeters,
    getPlaceDistanceInfo,
    simulateLocation,
  } = useApp();

  const [activePin, setActivePin] = useState<Place | null>(null);
  const [hoveredPin, setHoveredPin] = useState<Place | null>(null);

  // User projected coordinates on map canvas
  const userMapPos = userLocation
    ? projectGeoToMapCoords(userLocation.lat, userLocation.lng)
    : null;

  // Filter places for map pins
  const visiblePlaces = places.filter((p) => {
    if (selectedNeighborhood !== 'All' && p.neighborhood !== selectedNeighborhood) return false;
    if (transitFilter && !p.transitTip.toLowerCase().includes('jhmi') && !p.transitTip.toLowerCase().includes('shuttle')) return false;
    if (freeOnlyFilter && p.cost !== 'Free') return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Map Explainer Banner */}
      <div className="bg-gradient-to-r from-hopkins-deep to-hopkins-heritage rounded-2xl p-4 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md relative overflow-hidden">
        {/* Top Maryland Accent Ribbon */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={3} />
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-1 bg-white/10 rounded-xl flex items-center justify-center">
            <HopkinsShield size={32} />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight flex items-center gap-1.5">
              <span>Interactive Baltimore & JHU Campus Map</span>
              <span className="hidden md:inline-block"><CompassRoseSticker size={20} /></span>
            </h3>
            <p className="text-xs text-blue-200">
              Each spot features a unique marker. Hover or click any location to preview its photo, travel lore, and 250m GPS geofencing radius!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs font-semibold">
            <span className="flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Visited ({profile.visitedPlaceIds.length})</span>
            </span>
            <span className="flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
              <span>Unvisited</span>
            </span>
          </div>

          {/* Floating Hot Air Balloon in Sky */}
          <div className="hidden sm:block flex-shrink-0">
            <HotAirBalloonSticker size={46} />
          </div>
        </div>
      </div>

      {/* SVG Canvas Map Container */}
      <div
        className="relative w-full aspect-[4/3] min-h-[380px] sm:min-h-[460px] max-h-[640px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none"
        onClick={() => {
          // Deselect active pin when clicking map background
          setActivePin(null);
        }}
      >
        {/* Top-Right Brass Binoculars Observation Badge */}
        <div className="absolute top-3 right-3 z-20 hidden sm:flex items-center space-x-1.5 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 pointer-events-none">
          <BinocularsSticker size={22} />
          <span>Field Observation</span>
        </div>
        
        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* SVG Drawing Layer */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full object-contain"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="harborGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#0f2b48" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="parkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#047857" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="shuttleGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>

          {/* Waterway: Baltimore Inner Harbor & Patapsco River with Gradient Fill */}
          <path
            d="M 50 60 Q 55 56 60 55 Q 68 55 75 58 Q 85 62 90 70 Q 95 80 100 85 L 100 100 L 50 100 Z"
            fill="url(#harborGradient)"
            stroke="#38bdf8"
            strokeWidth="0.4"
            opacity="0.95"
          />
          <path
            d="M 50 60 Q 58 52 64 54 Q 72 56 80 52 L 100 52 L 100 100 L 50 100 Z"
            fill="#0c233b"
            opacity="0.75"
          />

          {/* Water Shimmer Waves */}
          <path d="M 58 64 Q 65 62 72 65" fill="none" stroke="#38bdf8" strokeWidth="0.3" strokeDasharray="1, 1.5" opacity="0.6" />
          <path d="M 75 75 Q 82 73 90 76" fill="none" stroke="#67e8f9" strokeWidth="0.3" strokeDasharray="1.2, 2" opacity="0.6" />

          {/* Northwest Greenery: Druid Hill Park */}
          <ellipse cx="20" cy="22" rx="14" ry="10" fill="url(#parkGradient)" stroke="#10b981" strokeWidth="0.3" />
          <text x="14" y="23" fill="#6ee7b7" fontSize="2.3" opacity="0.9" fontWeight="bold">
            Druid Hill Park
          </text>

          {/* East Greenery: Patterson Park */}
          <rect x="80" y="48" width="12" height="10" rx="2" fill="url(#parkGradient)" stroke="#10b981" strokeWidth="0.3" />
          <text x="82" y="54" fill="#6ee7b7" fontSize="2.3" opacity="0.9" fontWeight="bold">
            Patterson Park
          </text>

          {/* Neighborhood Region Labels */}
          <text x="38" y="12" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Charles Village
          </text>
          <text x="24" y="14" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Hampden
          </text>
          <text x="44" y="36" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Mount Vernon
          </text>
          <text x="42" y="50" fill="#38bdf8" fontSize="2.4" fontWeight="bold" opacity="0.9">
            Inner Harbor
          </text>
          <text x="68" y="52" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Fells Point
          </text>
          <text x="48" y="66" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Federal Hill
          </text>
          <text x="74" y="74" fill="#cbd5e1" fontSize="2.4" fontWeight="bold" opacity="0.8">
            Locust Point & Fort
          </text>

          {/* Free JHMI Shuttle Route (Homewood -> Station North -> Peabody -> East Baltimore) */}
          <path
            d="M 47 18 L 48 32 L 51 40 Q 56 41 74 41"
            fill="none"
            stroke="url(#shuttleGlow)"
            strokeWidth="0.9"
            strokeDasharray="1.8, 1.2"
            opacity="0.95"
          />
          <text x="52" y="32" fill="#38bdf8" fontSize="1.9" fontStyle="italic" fontWeight="bold" opacity="0.95">
            JHMI Shuttle Route
          </text>

          {/* JHU Campus Anchors with Pulsing Luminous Halos */}
          {/* Homewood Campus */}
          <circle cx="47" cy="18" r="3.4" fill="#38bdf8" fillOpacity="0.2" className="animate-pulse" />
          <circle cx="47" cy="18" r="2.2" fill="#002D72" stroke="#68ACE5" strokeWidth="0.8" />
          <text x="49.5" y="18.5" fill="#93c5fd" fontSize="2.5" fontWeight="bold">
            Homewood Campus (JHU)
          </text>

          {/* Peabody Institute */}
          <circle cx="51" cy="40" r="3.0" fill="#facc15" fillOpacity="0.2" className="animate-pulse" />
          <circle cx="51" cy="40" r="1.8" fill="#002D72" stroke="#F1C400" strokeWidth="0.8" />
          <text x="53.5" y="40.5" fill="#fde047" fontSize="2.3" fontWeight="bold">
            Peabody Institute
          </text>

          {/* Johns Hopkins Hospital / Med Campus */}
          <circle cx="74" cy="41" r="3.2" fill="#f87171" fillOpacity="0.2" className="animate-pulse" />
          <circle cx="74" cy="41" r="2" fill="#002D72" stroke="#E03A3E" strokeWidth="0.8" />
          <text x="76.5" y="41.5" fill="#fca5a5" fontSize="2.3" fontWeight="bold">
            JHU Medical Campus
          </text>

          {/* Active Pin 250m Geofence Radius */}
          {activePin && (
            <g className="pointer-events-none">
              <circle
                cx={activePin.coordinates.mapX}
                cy={activePin.coordinates.mapY}
                r={metersToMapRadiusPercent(checkInRadiusMeters)}
                fill="#38bdf8"
                fillOpacity="0.18"
                stroke="#38bdf8"
                strokeWidth="0.5"
                strokeDasharray="1.2, 1"
              />
              <circle
                cx={activePin.coordinates.mapX}
                cy={activePin.coordinates.mapY}
                r={metersToMapRadiusPercent(checkInRadiusMeters) * 1.05}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="0.2"
                opacity="0.5"
              />
              <text
                x={activePin.coordinates.mapX}
                y={activePin.coordinates.mapY + metersToMapRadiusPercent(checkInRadiusMeters) + 2}
                textAnchor="middle"
                fill="#38bdf8"
                fontSize="1.7"
                fontWeight="600"
                opacity="0.9"
              >
                250m Check-in Radius
              </text>
            </g>
          )}

          {/* Navigation Line Connecting User to Selected Pin */}
          {userMapPos && activePin && (
            <line
              x1={userMapPos.mapX}
              y1={userMapPos.mapY}
              x2={activePin.coordinates.mapX}
              y2={activePin.coordinates.mapY}
              stroke="#38bdf8"
              strokeWidth="0.4"
              strokeDasharray="1, 1"
              opacity="0.75"
              className="pointer-events-none"
            />
          )}

          {/* Live User Location Beacon */}
          {userMapPos && (
            <g className="user-beacon pointer-events-none">
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="4.2"
                fill="#38bdf8"
                fillOpacity="0.2"
                stroke="#60a5fa"
                strokeWidth="0.3"
                strokeDasharray="1, 0.8"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="2.5"
                fill="#0284c7"
                fillOpacity="0.4"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="1.4"
                fill="#2563eb"
                stroke="#ffffff"
                strokeWidth="0.4"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="0.5"
                fill="#ffffff"
              />
              <g transform={`translate(${userMapPos.mapX}, ${userMapPos.mapY - 2.8})`}>
                <rect
                  x="-9"
                  y="-3.2"
                  width="18"
                  height="3.8"
                  rx="1.9"
                  fill="#0f172a"
                  fillOpacity="0.9"
                  stroke="#38bdf8"
                  strokeWidth="0.25"
                />
                <text
                  x="0"
                  y="-0.8"
                  textAnchor="middle"
                  fill="#68ace5"
                  fontSize="1.7"
                  fontWeight="bold"
                >
                  {isSimulatedLocation ? 'Simulated Spot' : 'You Are Here'}
                </text>
              </g>
            </g>
          )}
        </svg>

        {/* Interactive Place Pins with Unique Markers & Photo Popups */}
        {visiblePlaces.map((place) => {
          const isVisited = profile.visitedPlaceIds.includes(place.id);
          const isSelected = activePin?.id === place.id;
          const isHovered = hoveredPin?.id === place.id;
          const meta = getPlaceMarkerMeta(place);
          const MarkerIcon = meta.icon;

          return (
            <div
              key={place.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center select-none"
              style={{
                left: `${place.coordinates.mapX}%`,
                top: `${place.coordinates.mapY}%`,
                zIndex: isSelected ? 35 : isHovered ? 40 : 20,
              }}
              onMouseEnter={() => setHoveredPin(place)}
              onMouseLeave={() => setHoveredPin((prev) => (prev?.id === place.id ? null : prev))}
              onClick={(e) => {
                e.stopPropagation();
                setActivePin(isSelected ? null : place);
              }}
            >
              {/* Unique Marker Pin */}
              <div
                className={`relative flex items-center justify-center rounded-2xl w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 shadow-md ${
                  isVisited
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-300 scale-100 hover:scale-125'
                    : isSelected
                    ? 'bg-hopkins-heritage text-white ring-4 ring-sky-300 scale-125 shadow-xl'
                    : `${meta.colorClass} hover:scale-125 hover:shadow-xl`
                }`}
                style={{
                  filter: isSelected
                    ? 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.75))'
                    : undefined,
                }}
                title={`${place.name} (${meta.label})`}
              >
                {/* Unique Landmark Icon */}
                <MarkerIcon className={`w-4 h-4 ${isSelected ? 'text-white' : meta.iconColor}`} />

                {/* Bottom Pointer Triangle */}
                <div
                  className={`absolute -bottom-1 w-2 h-2 rotate-45 transition-colors ${
                    isVisited
                      ? 'bg-emerald-600'
                      : isSelected
                      ? 'bg-hopkins-heritage'
                      : meta.pointerBg
                  }`}
                />

                {/* Visited Checkmark or Points Pill */}
                {isVisited ? (
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-white shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                ) : (
                  <div className="absolute -top-1.5 -right-1.5 text-[8px] font-black px-1 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200">
                    {place.points}
                  </div>
                )}
              </div>

              {/* Floating Location Photo Popup (Visible on Hover) */}
              {isHovered && !isSelected && (
                <div
                  className={`absolute z-40 w-60 sm:w-68 bg-white rounded-2xl shadow-2xl border-2 border-sky-300 overflow-hidden pointer-events-auto transition-all duration-200 animate-in fade-in zoom-in-95 ${
                    place.coordinates.mapY < 35 ? 'top-full mt-3' : 'bottom-full mb-3'
                  } ${
                    place.coordinates.mapX < 25
                      ? 'left-0'
                      : place.coordinates.mapX > 75
                      ? 'right-0'
                      : 'left-1/2 -translate-x-1/2'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePin(place);
                  }}
                >
                  {/* Location Photo */}
                  <div className="relative w-full h-28 sm:h-32 bg-slate-900 overflow-hidden">
                    <img
                      src={place.imageUrl}
                      alt={place.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/places/brody-learning-commons.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    {/* Proximity & Neighborhood Badges */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
                        {place.neighborhood}
                      </span>
                      {place.campusProximity && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-sky-500 text-white shadow-sm">
                          {place.campusProximity}
                        </span>
                      )}
                    </div>

                    {/* Points Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 shadow-sm flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-slate-950 flex-shrink-0" />
                      <span>+{place.points} PTS</span>
                    </div>

                    {/* Visited Status Indicator */}
                    {isVisited && (
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-500 text-white shadow-md flex items-center space-x-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Stamped</span>
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-3 bg-white text-left">
                    <div className="flex items-center space-x-1.5 text-[10px] font-extrabold text-hopkins-heritage uppercase tracking-wider">
                      <MarkerIcon className="w-3 h-3 text-sky-600" />
                      <span>{meta.label}</span>
                    </div>
                    <h5 className="font-heading font-black text-xs sm:text-sm text-slate-900 leading-snug line-clamp-1 mt-0.5">
                      {place.name}
                    </h5>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {place.tagline}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-sky-700">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-sky-500" />
                        <span>Click for details & check-in</span>
                      </span>
                      <ChevronRight className="w-3 h-3 text-sky-400" />
                    </div>
                  </div>

                  {/* Little Triangle Pointer */}
                  <div
                    className={`absolute w-3 h-3 bg-white border-sky-300 transform rotate-45 ${
                      place.coordinates.mapY < 35
                        ? '-top-1.5 border-t-2 border-l-2'
                        : '-bottom-1.5 border-b-2 border-r-2'
                    } ${
                      place.coordinates.mapX < 25
                        ? 'left-6'
                        : place.coordinates.mapX > 75
                        ? 'right-6'
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Selected Pin Popup Card (Visible on Click) */}
        {activePin && (() => {
          const distanceInfo = getPlaceDistanceInfo(activePin);
          const isVisited = profile.visitedPlaceIds.includes(activePin.id);
          const activeMeta = getPlaceMarkerMeta(activePin);
          const ActiveMarkerIcon = activeMeta.icon;

          return (
            <div
              className="absolute bottom-3 inset-x-3 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-84 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 z-30 overflow-hidden animate-in fade-in slide-in-from-bottom-2 select-text"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Location Photo Header */}
              <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-900">
                <img
                  src={activePin.imageUrl}
                  alt={activePin.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/places/brody-learning-commons.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/25 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setActivePin(null)}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors z-10"
                  aria-label="Close pin preview"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Neighborhood & Proximity Badges */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-white/90 text-slate-800 shadow-sm backdrop-blur-sm">
                    {activePin.neighborhood}
                  </span>
                  {activePin.campusProximity && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-sky-500 text-white shadow-sm">
                      {activePin.campusProximity}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-sky-200 uppercase tracking-wider mb-0.5">
                    <ActiveMarkerIcon className="w-3.5 h-3.5 text-sky-300" />
                    <span>{activeMeta.label}</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white leading-snug drop-shadow-md">
                    {activePin.name}
                  </h4>
                </div>
              </div>

              {/* Popup Content */}
              <div className="p-3.5">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {activePin.tagline}
                </p>

                {/* Proximity / Distance Badge */}
                {distanceInfo && (
                  <div
                    className={`mt-2 flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg border ${
                      distanceInfo.isWithinRadius
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-amber-50 border-amber-200 text-amber-800'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{formatDistance(distanceInfo.distanceMeters)} away</span>
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        distanceInfo.isWithinRadius
                          ? 'bg-emerald-200/80 text-emerald-900'
                          : 'bg-amber-200/80 text-amber-900'
                      }`}
                    >
                      {distanceInfo.isWithinRadius ? 'In Range (≤250m)' : 'Out of Range'}
                    </span>
                  </div>
                )}

                <div className="mt-2 text-[11px] text-hopkins-heritage bg-blue-50 p-2 rounded-lg flex items-center space-x-1.5 font-medium">
                  <Bus className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="line-clamp-1">{activePin.transitTip}</span>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => toggleCheckIn(activePin.id)}
                    className={`flex-1 py-2.5 px-3 min-h-[40px] rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      isVisited
                        ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800'
                        : distanceInfo?.isWithinRadius
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                        : 'bg-hopkins-heritage hover:bg-hopkins-deep text-white shadow-sm'
                    }`}
                  >
                    {isVisited ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Visited</span>
                      </>
                    ) : distanceInfo?.isWithinRadius ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-200" />
                        <span>Verify & Stamp (+{activePin.points} pts)</span>
                      </>
                    ) : (
                      <>
                        <Crosshair className="w-3.5 h-3.5" />
                        <span>Check In (+{activePin.points} pts)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedPlace(activePin)}
                    className="py-2.5 px-3.5 min-h-[40px] bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center space-x-1"
                  >
                    <span>Full Lore</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {!isVisited && distanceInfo && !distanceInfo.isWithinRadius && (
                  <button
                    onClick={() =>
                      simulateLocation(
                        { lat: activePin.coordinates.lat, lng: activePin.coordinates.lng },
                        activePin.name
                      )
                    }
                    className="mt-2 w-full py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-hopkins-heritage border border-blue-200 rounded-lg text-[10px] font-semibold flex items-center justify-center space-x-1 transition-colors"
                  >
                    <Radio className="w-3 h-3 text-blue-600" />
                    <span>Teleport Here (Test 250m Arrival)</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
};
