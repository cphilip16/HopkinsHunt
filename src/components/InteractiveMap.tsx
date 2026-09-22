import React, { useState } from 'react';
import { showImageFallback } from '../utils/imageFallback';
import {
  MapPin,
  Navigation,
  Check,
  Sparkles,
  X,
  ChevronRight,
  Crosshair,
  ShieldCheck,
  Map,
  Satellite,
  ExternalLink,
  Compass,
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
import { CompassRoseSticker } from './art/AnimatedStickers';
import { formatDistance } from '../utils/geoUtils';

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

type GoogleMapType = 'roadmap' | 'satellite';

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
    getPlaceDistanceInfo,
  } = useApp();

  const [googleMapType, setGoogleMapType] = useState<GoogleMapType>('roadmap');
  const [activePin, setActivePin] = useState<Place | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const mapQuery = activePin
    ? activePin.name + ', ' + activePin.address
    : submittedQuery || (userLocation
      ? userLocation.lat + ',' + userLocation.lng
      : 'Johns Hopkins University Homewood Campus, Baltimore, MD');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchInput.trim();
    if (!query) return;
    setActivePin(null);
    setSubmittedQuery(query);
  };

  // Filter places for map pins
  const visiblePlaces = places.filter((p) => {
    if (selectedNeighborhood !== 'All' && p.neighborhood !== selectedNeighborhood) return false;
    if (transitFilter && !p.transitTip.toLowerCase().includes('jhmi') && !p.transitTip.toLowerCase().includes('shuttle')) return false;
    if (freeOnlyFilter && p.cost !== 'Free') return false;
    return true;
  });

  // Construct Dynamic Google Maps Embed URL
  const getGoogleMapsEmbedUrl = () => {
    const mapTypeParam = googleMapType === 'satellite' ? 'k' : '';
    const zoomLevel = activePin ? 17 : 14;

    return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=${mapTypeParam}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="space-y-4">
      {/* Map introduction */}
      <div className="bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-slate-900 rounded-2xl p-4 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md relative overflow-hidden">
        {/* Top Maryland Accent Ribbon */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={3} />
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-1 bg-white/10 rounded-xl flex items-center justify-center">
            <HopkinsShield size={32} />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight flex items-center gap-2">
              <span>Find a place on Google Maps</span>
              <span className="hidden md:inline-block"><CompassRoseSticker size={20} /></span>
            </h3>
            <p className="text-xs text-blue-200">
              Search for a place or address, explore the map, and get walking directions.
            </p>
          </div>
        </div>

      </div>

      <form onSubmit={handleSearch} role="search" className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
        <label htmlFor="map-search" className="block text-sm font-bold text-slate-800">Search Google Maps</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="map-search"
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Enter a place or address"
            maxLength={250}
            required
            className="flex-1 min-w-0 rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button type="submit" disabled={!searchInput.trim()} className="rounded-xl bg-hopkins-heritage px-4 py-2 text-sm font-bold text-white hover:bg-hopkins-deep disabled:opacity-50">Find on map</button>
        </div>
        <p aria-live="polite" className="text-xs text-slate-500">Showing: {mapQuery}</p>
      </form>

      {/* ============================================================ */}
      {/* 1. GOOGLE MAPS INTEGRATED VIEW                               */}
      {/* ============================================================ */}
        <div className="relative w-full aspect-[4/3] min-h-[440px] sm:min-h-[520px] max-h-[720px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
          
          {/* Top Floating Control Bar */}
          <div className="absolute top-3 inset-x-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            {/* Google Map Layer Toggle (Roadmap vs Satellite) */}
            <div className="flex items-center bg-slate-900/90 backdrop-blur-md rounded-xl p-1 border border-slate-700 shadow-xl text-white pointer-events-auto">
              <button
                onClick={() => setGoogleMapType('roadmap')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  googleMapType === 'roadmap'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>
              <button
                onClick={() => setGoogleMapType('satellite')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  googleMapType === 'satellite'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Satellite className="w-3.5 h-3.5" />
                <span>Satellite</span>
              </button>
            </div>

            {/* Direct Link to Google Maps App */}
            <a
              href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md text-white px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl text-xs font-bold transition-all pointer-events-auto"
              title="Open location in full Google Maps app or browser"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>

          {/* Location Quick-Jump Shelf */}
          <div className="absolute top-14 inset-x-3 z-20 overflow-x-auto pb-1.5 flex items-center gap-1.5 scrollbar-none pointer-events-auto">
            {visiblePlaces.map((p) => {
              const isSel = activePin?.id === p.id;
              const pMeta = getPlaceMarkerMeta(p);
              const PIcon = pMeta.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePin(p)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-md ${
                    isSel
                      ? 'bg-sky-500 text-white ring-2 ring-white scale-105'
                      : 'bg-slate-900/90 backdrop-blur-md text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  <PIcon className="w-3 h-3 text-sky-300 flex-shrink-0" />
                  <span className="truncate max-w-[130px]">{p.name}</span>
                  <span className="text-[10px] text-amber-300 font-black">+{p.points}</span>
                </button>
              );
            })}
          </div>

          {/* Live Google Maps Iframe */}
          <iframe
            title="Google Maps - Baltimore & Johns Hopkins"
            src={getGoogleMapsEmbedUrl()}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Selected Pin Detail Modal over Google Map */}
          {activePin && (() => {
            const distanceInfo = getPlaceDistanceInfo(activePin);
            const isVisited = profile.visitedPlaceIds.includes(activePin.id);
            const activeMeta = getPlaceMarkerMeta(activePin);
            const ActiveMarkerIcon = activeMeta.icon;

            return (
              <div
                className="absolute bottom-3 inset-x-3 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-84 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 z-30 overflow-hidden animate-in fade-in slide-in-from-bottom-2 select-text pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Location Photo Header */}
                <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-900">
                  <img
                    src={activePin.imageUrl}
                    alt={activePin.name}
                    className="w-full h-full object-cover"
                    onError={showImageFallback}
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
                        {distanceInfo.isWithinRadius ? 'In Range (≤20m)' : 'Out of Range'}
                      </span>
                    </div>
                  )}

                  {/* Google Directions Quick Action */}
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activePin.coordinates.lat},${activePin.coordinates.lng}&travelmode=walking`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-2 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-sky-600" />
                      <span>Google Walking Directions</span>
                    </a>
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
                </div>
              </div>
            );
          })()}

        </div>
    </div>
  );
};
