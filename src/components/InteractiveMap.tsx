import React, { useState, useRef } from 'react';
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
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Move,
  Globe,
  Map,
  Satellite,
  ExternalLink,
  Layers,
  Compass,
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

type MapMode = 'google' | 'atlas';
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
    isSimulatedLocation,
    checkInRadiusMeters,
    getPlaceDistanceInfo,
    simulateLocation,
  } = useApp();

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapMode, setMapMode] = useState<MapMode>('google');
  const [googleMapType, setGoogleMapType] = useState<GoogleMapType>('roadmap');

  const [activePin, setActivePin] = useState<Place | null>(null);
  const [hoveredPin, setHoveredPin] = useState<Place | null>(null);

  // Zoom & Pan interactive states for Atlas mode
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragDistance, setDragDistance] = useState(0);

  // Zoom handlers for Atlas mode
  const handleZoomChange = (delta: number) => {
    setZoom((prevZoom) => {
      const nextZoom = Math.min(3.5, Math.max(1, Number((prevZoom + delta).toFixed(2))));
      if (nextZoom === 1) {
        setPan({ x: 0, y: 0 });
      } else {
        const width = mapContainerRef.current?.clientWidth || 600;
        const height = mapContainerRef.current?.clientHeight || 450;
        const maxPanX = width * (nextZoom - 1) * 0.55;
        const maxPanY = height * (nextZoom - 1) * 0.55;
        setPan((prevPan) => ({
          x: Math.max(-maxPanX, Math.min(maxPanX, prevPan.x)),
          y: Math.max(-maxPanY, Math.min(maxPanY, prevPan.y)),
        }));
      }
      return nextZoom;
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (mapMode !== 'atlas') return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    handleZoomChange(delta);
  };

  // Drag & Pan handlers for Atlas mode
  const handleMouseDown = (e: React.MouseEvent) => {
    if (mapMode !== 'atlas' || e.button !== 0) return;
    setIsDragging(true);
    setDragDistance(0);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mapMode !== 'atlas' || !isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setDragDistance((prev) => prev + Math.abs(e.movementX) + Math.abs(e.movementY));
    const width = mapContainerRef.current?.clientWidth || 600;
    const height = mapContainerRef.current?.clientHeight || 450;
    const maxPanX = width * (zoom - 1) * 0.55;
    const maxPanY = height * (zoom - 1) * 0.55;
    setPan({
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (mapMode !== 'atlas' || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragDistance(0);
    setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (mapMode !== 'atlas' || !isDragging || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - dragStart.x;
    const newY = e.touches[0].clientY - dragStart.y;
    setDragDistance((prev) => prev + 5);
    const width = mapContainerRef.current?.clientWidth || 600;
    const height = mapContainerRef.current?.clientHeight || 450;
    const maxPanX = width * (zoom - 1) * 0.55;
    const maxPanY = height * (zoom - 1) * 0.55;
    setPan({
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Preset quick-jump focal points
  const focusPreset = (preset: 'all' | 'homewood' | 'mount-vernon' | 'harbor') => {
    if (preset === 'all') {
      setZoom(1);
      setPan({ x: 0, y: 0 });
      return;
    }
    const width = mapContainerRef.current?.clientWidth || 600;
    const height = mapContainerRef.current?.clientHeight || 450;

    const targets = {
      homewood: { x: 47, y: 18, targetZoom: 2.5 },
      'mount-vernon': { x: 48, y: 40, targetZoom: 2.4 },
      harbor: { x: 62, y: 60, targetZoom: 2.3 },
    };

    const { x, y, targetZoom } = targets[preset];
    const panX = (50 - x) * (width / 100) * (targetZoom - 0.4);
    const panY = (50 - y) * (height / 100) * (targetZoom - 0.4);

    const maxPanX = width * (targetZoom - 1) * 0.55;
    const maxPanY = height * (targetZoom - 1) * 0.55;

    setZoom(targetZoom);
    setPan({
      x: Math.max(-maxPanX, Math.min(maxPanX, panX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, panY)),
    });
  };

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

  // Construct Dynamic Google Maps Embed URL
  const getGoogleMapsEmbedUrl = () => {
    const mapTypeParam = googleMapType === 'satellite' ? 'k' : '';
    const zoomLevel = activePin ? 17 : 14;

    let query = 'Johns Hopkins University Homewood Campus, Baltimore, MD';
    if (activePin) {
      query = `${activePin.name}, ${activePin.address}`;
    } else if (userLocation) {
      query = `${userLocation.lat},${userLocation.lng}`;
    }

    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=${mapTypeParam}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="space-y-4">
      {/* Map Explainer Banner with Google Maps Mode Switcher */}
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
              <span>Interactive Map: Google Maps & Hopkins Atlas</span>
              <span className="hidden md:inline-block"><CompassRoseSticker size={20} /></span>
            </h3>
            <p className="text-xs text-blue-200">
              Live Google Maps integration with satellite views, street layouts, and walking directions, alongside our custom Hopkins campus atlas!
            </p>
          </div>
        </div>

        {/* Mode Selector Pill: Google Maps vs Hopkins Atlas */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 text-xs font-bold">
            <button
              onClick={() => setMapMode('google')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                mapMode === 'google'
                  ? 'bg-sky-400 text-hopkins-deep shadow-md font-extrabold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </button>
            <button
              onClick={() => setMapMode('atlas')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                mapMode === 'atlas'
                  ? 'bg-sky-400 text-hopkins-deep shadow-md font-extrabold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Campus Atlas</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. GOOGLE MAPS INTEGRATED VIEW                               */}
      {/* ============================================================ */}
      {mapMode === 'google' ? (
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
              href={
                activePin
                  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activePin.name + ', ' + activePin.address
                    )}`
                  : 'https://www.google.com/maps/place/Johns+Hopkins+University/@39.3299,-76.6205,15z'
              }
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
            {visiblePlaces.slice(0, 18).map((p) => {
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

                  {/* Google Directions Quick Action */}
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activePin.coordinates.lat},${activePin.coordinates.lng}`}
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
      ) : (
        /* ============================================================ */
        /* 2. HOPKINS CAMPUS ATLAS (ILLUSTRATED CARTOGRAPHIC MAP)       */
        /* ============================================================ */
        <div
          ref={mapContainerRef}
          className={`relative w-full aspect-[4/3] min-h-[420px] sm:min-h-[500px] max-h-[700px] bg-[#0c1829] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none ${
            zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          onClick={() => {
            if (dragDistance < 6) {
              setActivePin(null);
            }
          }}
        >
          {/* Interactive Zoom & Navigation Controls Overlay */}
          <div className="absolute top-3 left-3 z-30 flex flex-col gap-2 pointer-events-auto">
            {/* Zoom In / Out / Reset Pill */}
            <div className="flex items-center bg-slate-900/90 backdrop-blur-md rounded-xl p-1 border border-slate-700 shadow-xl text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomChange(0.35);
                }}
                disabled={zoom >= 3.5}
                className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 hover:text-white transition-colors"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="px-2 py-0.5 text-[11px] font-mono font-bold text-sky-400 min-w-[42px] text-center select-none">
                {Math.round(zoom * 100)}%
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomChange(-0.35);
                }}
                disabled={zoom <= 1}
                className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 hover:text-white transition-colors"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              {zoom > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    focusPreset('all');
                  }}
                  className="ml-1 p-1.5 rounded-lg hover:bg-slate-800 text-amber-300 hover:text-amber-200 transition-colors border-l border-slate-700"
                  title="Reset Zoom & Pan"
                  aria-label="Reset View"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Geographic Preset Buttons */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900/85 backdrop-blur-md px-2 py-1.5 rounded-xl border border-slate-700 shadow-lg text-[10px] font-bold">
              <span className="text-slate-400 uppercase tracking-wider text-[9px] mr-0.5">Jump:</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  focusPreset('all');
                }}
                className={`px-2 py-0.5 rounded-lg transition-all ${
                  zoom === 1
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                All Bmore
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  focusPreset('homewood');
                }}
                className="px-2 py-0.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Homewood
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  focusPreset('mount-vernon');
                }}
                className="px-2 py-0.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Mt Vernon
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  focusPreset('harbor');
                }}
                className="px-2 py-0.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Inner Harbor
              </button>
            </div>
          </div>

          {/* Drag Hint when Zoomed in */}
          {zoom > 1 && (
            <div className="absolute bottom-3 left-3 z-20 pointer-events-none hidden sm:flex items-center space-x-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-slate-700 text-[10px] text-sky-300 font-medium animate-in fade-in">
              <Move className="w-3 h-3 text-sky-400" />
              <span>Drag to pan across Baltimore</span>
            </div>
          )}

          {/* Top-Right Brass Binoculars Observation Badge */}
          <div className="absolute top-3 right-3 z-20 hidden sm:flex items-center space-x-1.5 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 pointer-events-none">
            <BinocularsSticker size={22} />
            <span>Cartographic Atlas</span>
          </div>

          {/* Inner Zoomable & Pannable Canvas Container */}
          <div
            className="w-full h-full absolute inset-0 transition-transform duration-75 origin-center will-change-transform"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            }}
          >
            {/* Subtle City Coordinate Dot Matrix */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px',
              }}
            />

            {/* SVG Cartographic Vector Drawing Layer */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full object-contain"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="harborGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0369a1" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#075985" stopOpacity="0.95" />
                  <stop offset="80%" stopColor="#0c4a6e" stopOpacity="0.98" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="parkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#064e3b" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="campusGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f3460" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#002D72" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="lakeGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>

                <linearGradient id="shuttleGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>

                <linearGradient id="charlesStGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              {/* Waterways & Shorelines */}
              <path
                d="M 50 54 L 64 54 L 64 56 L 68 56 L 74 58 L 82 59 L 92 63 L 100 68 L 100 100 L 50 100 L 50 78 L 54 75 L 54 62 L 50 60 Z"
                fill="url(#harborGradient)"
                stroke="#38bdf8"
                strokeWidth="0.4"
                opacity="0.98"
              />
              <path d="M 51 55 L 63 55 L 67 57 L 73 59 L 82 61 L 100 70 L 100 100 L 51 100 Z" fill="#06284a" opacity="0.65" />

              {/* Historic Inner Harbor Piers */}
              <rect x="54.5" y="54" width="1.4" height="4.2" rx="0.3" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.25" />
              <rect x="57" y="54" width="1.2" height="3.8" rx="0.3" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.2" />
              <rect x="59.5" y="54" width="2.6" height="5.2" rx="0.4" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.3" />
              <polygon points="59.8,55 60.8,54.2 61.8,55" fill="#38bdf8" opacity="0.8" />
              <polygon points="60.2,57.5 61.2,56.5 62,57.5" fill="#0284c7" opacity="0.8" />
              <rect x="63.2" y="54" width="1.4" height="4.5" rx="0.3" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.2" />
              <rect x="65.8" y="54.5" width="2.2" height="4.2" rx="0.4" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.25" />

              {/* Fells Point Broadway Pier */}
              <rect x="71.5" y="58" width="2.4" height="4" rx="0.3" fill="#1e293b" stroke="#68ace5" strokeWidth="0.25" />
              <line x1="68" y1="58.5" x2="76" y2="58.5" stroke="#94a3b8" strokeWidth="0.4" strokeDasharray="1 0.8" />

              {/* Middle Branch */}
              <path d="M 32 80 Q 38 76 46 80 Q 48 88 44 100 L 28 100 Z" fill="url(#harborGradient)" stroke="#0284c7" strokeWidth="0.3" opacity="0.85" />

              {/* Jones Falls Stream */}
              <path d="M 26 14 Q 28 22 36 26 Q 42 30 44 36 L 47 48 L 52 54" fill="none" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.75" />

              {/* Druid Hill Park with Druid Lake */}
              <ellipse cx="20" cy="22" rx="13" ry="9" fill="url(#parkGradient)" stroke="#10b981" strokeWidth="0.35" />
              <ellipse cx="24" cy="24" rx="4.5" ry="2.2" fill="url(#lakeGradient)" stroke="#67e8f9" strokeWidth="0.3" />
              <text x="13" y="19" fill="#a7f3d0" fontSize="2.0" fontWeight="bold">Druid Hill Park</text>

              {/* Wyman Park Dell */}
              <path d="M 42 16 Q 40 21 43 25 Q 44 26 46 25 Q 43 21 44 16 Z" fill="#065f46" stroke="#10b981" strokeWidth="0.3" opacity="0.9" />

              {/* Sherwood Gardens */}
              <ellipse cx="48" cy="8" rx="6" ry="3.5" fill="#047857" stroke="#34d399" strokeWidth="0.3" />
              <text x="44" y="6" fill="#a7f3d0" fontSize="1.7" fontWeight="bold">Sherwood Gardens</text>

              {/* JHU Homewood Campus Precinct */}
              <rect x="42" y="14" width="9" height="9" rx="1.5" fill="url(#campusGradient)" stroke="#68ace5" strokeWidth="0.5" />
              <rect x="45" y="15" width="4" height="2.2" rx="0.4" fill="#047857" stroke="#34d399" strokeWidth="0.2" opacity="0.9" />
              <rect x="46" y="14.4" width="2.2" height="0.8" rx="0.2" fill="#991b1b" stroke="#fca5a5" strokeWidth="0.2" />
              <circle cx="47.1" cy="14.8" r="0.3" fill="#ffffff" />
              <polygon points="48,16.5 50.5,17 50.2,18.8 48,18" fill="#15803d" stroke="#86efac" strokeWidth="0.2" />
              <ellipse cx="43.5" cy="20.8" rx="1.8" ry="1.1" fill="#065f46" stroke="#f59e0b" strokeWidth="0.2" />

              {/* Mount Vernon Place */}
              <rect x="46" y="38" width="2.2" height="6.5" rx="0.4" fill="#065f46" stroke="#10b981" strokeWidth="0.25" />
              <rect x="44" y="40.2" width="6.5" height="2.2" rx="0.4" fill="#065f46" stroke="#10b981" strokeWidth="0.25" />
              <circle cx="47.1" cy="41.3" r="1.1" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.3" />
              <text x="41" y="39" fill="#fde047" fontSize="1.8" fontWeight="bold">Mt Vernon Place</text>

              {/* Patterson Park with Pagoda */}
              <rect x="78" y="46" width="14" height="11" rx="2" fill="url(#parkGradient)" stroke="#10b981" strokeWidth="0.4" />
              <ellipse cx="86" cy="53" rx="3.5" ry="1.8" fill="url(#lakeGradient)" stroke="#38bdf8" strokeWidth="0.25" />
              <text x="80" y="51" fill="#a7f3d0" fontSize="1.9" fontWeight="bold">Patterson Park</text>

              {/* Federal Hill Park */}
              <path d="M 50.5 62 Q 53 60 56 62 Q 56 67 52 67 Q 50 65 50.5 62 Z" fill="#047857" stroke="#34d399" strokeWidth="0.3" />
              <text x="44" y="65" fill="#cbd5e1" fontSize="1.9" fontWeight="bold">Federal Hill</text>

              {/* Fort McHenry Star Fort */}
              <ellipse cx="79" cy="76" rx="6.5" ry="4.5" fill="#065f46" stroke="#10b981" strokeWidth="0.35" />
              <polygon points="79,73.5 80.4,75.2 82.5,75.4 81,77 81.5,79.1 79,78 76.5,79.1 77,77 75.5,75.4 77.6,75.2" fill="#78350f" stroke="#fde047" strokeWidth="0.3" />
              <text x="73" y="82.5" fill="#fde047" fontSize="1.7" fontWeight="bold">Fort McHenry</text>

              {/* JHU Medical Campus */}
              <rect x="71" y="38" width="6.5" height="5" rx="1" fill="#1e293b" stroke="#f87171" strokeWidth="0.4" />
              <ellipse cx="74.2" cy="40.5" rx="1.5" ry="1.2" fill="#ef4444" stroke="#ffffff" strokeWidth="0.25" />
              <text x="70" y="37" fill="#fca5a5" fontSize="1.8" fontWeight="bold">JHU Medical Campus</text>

              {/* Streets Grid */}
              <line x1="47.1" y1="4" x2="47.1" y2="54" stroke="url(#charlesStGlow)" strokeWidth="0.8" opacity="0.9" />
              <line x1="49.2" y1="8" x2="49.2" y2="54" stroke="#64748b" strokeWidth="0.5" opacity="0.75" />
              <path d="M 36 14 Q 44 14 54 15" fill="none" stroke="#94a3b8" strokeWidth="0.6" opacity="0.8" />
              <line x1="38" y1="19.8" x2="62" y2="19.8" stroke="#94a3b8" strokeWidth="0.6" opacity="0.8" />
              <line x1="16" y1="30" x2="88" y2="30" stroke="#94a3b8" strokeWidth="0.7" opacity="0.85" />
              <line x1="36" y1="53.8" x2="70" y2="53.8" stroke="#f8fafc" strokeWidth="0.8" opacity="0.9" />
              <line x1="51.2" y1="54" x2="51.2" y2="70" stroke="#94a3b8" strokeWidth="0.6" opacity="0.8" />
              <line x1="72.2" y1="34" x2="72.2" y2="60" stroke="#94a3b8" strokeWidth="0.7" opacity="0.85" />
              <path d="M 52 68 Q 66 71 78 76" fill="none" stroke="#f8fafc" strokeWidth="0.6" opacity="0.85" />

              {/* Free JHMI Shuttle Line */}
              <path d="M 47.1 18 L 47.1 32 L 49.2 41 Q 56 41 74 41" fill="none" stroke="url(#shuttleGlow)" strokeWidth="1.1" strokeDasharray="2 1.4" opacity="0.95" />
              <circle cx="47.1" cy="18" r="1.4" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.4" />
              <circle cx="47.1" cy="32" r="1.1" fill="#c084fc" stroke="#ffffff" strokeWidth="0.3" />
              <circle cx="49.2" cy="41" r="1.2" fill="#facc15" stroke="#ffffff" strokeWidth="0.3" />
              <circle cx="74" cy="41" r="1.3" fill="#f87171" stroke="#ffffff" strokeWidth="0.3" />
              <text x="52" y="32" fill="#38bdf8" fontSize="1.8" fontStyle="italic" fontWeight="bold">Free JHMI Blue Jay Shuttle</text>

              {/* District Labels */}
              <text x="36" y="12" fill="#cbd5e1" fontSize="2.2" fontWeight="bold" opacity="0.85">Charles Village</text>
              <text x="22" y="14" fill="#cbd5e1" fontSize="2.2" fontWeight="bold" opacity="0.85">Hampden</text>
              <text x="36" y="34" fill="#a78bfa" fontSize="2.0" fontWeight="bold" opacity="0.9">Station North</text>
              <text x="40" y="51" fill="#38bdf8" fontSize="2.4" fontWeight="extrabold">Inner Harbor</text>
              <text x="69" y="55" fill="#cbd5e1" fontSize="2.2" fontWeight="bold" opacity="0.85">Fells Point</text>
              <text x="64" y="76" fill="#cbd5e1" fontSize="2.0" fontWeight="bold" opacity="0.8">Locust Point</text>

              {/* Active Pin 250m Radius */}
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
                  <text
                    x={activePin.coordinates.mapX}
                    y={activePin.coordinates.mapY + metersToMapRadiusPercent(checkInRadiusMeters) + 2}
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontSize="1.7"
                    fontWeight="600"
                  >
                    250m Check-in Radius
                  </text>
                </g>
              )}

              {/* Live User Location Beacon */}
              {userMapPos && (
                <g className="user-beacon pointer-events-none">
                  <circle cx={userMapPos.mapX} cy={userMapPos.mapY} r="4.2" fill="#38bdf8" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="1, 0.8" />
                  <circle cx={userMapPos.mapX} cy={userMapPos.mapY} r="2.5" fill="#0284c7" fillOpacity="0.4" />
                  <circle cx={userMapPos.mapX} cy={userMapPos.mapY} r="1.4" fill="#2563eb" stroke="#ffffff" strokeWidth="0.4" />
                  <circle cx={userMapPos.mapX} cy={userMapPos.mapY} r="0.5" fill="#ffffff" />
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
              const pinScaleCompensation = 1 / Math.pow(zoom, 0.35);

              return (
                <div
                  key={place.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center select-none"
                  style={{
                    left: `${place.coordinates.mapX}%`,
                    top: `${place.coordinates.mapY}%`,
                    zIndex: isSelected ? 35 : isHovered ? 40 : 20,
                    transform: `translate(-50%, -50%) scale(${pinScaleCompensation})`,
                    transformOrigin: 'center center',
                  }}
                  onMouseEnter={() => setHoveredPin(place)}
                  onMouseLeave={() => setHoveredPin((prev) => (prev?.id === place.id ? null : prev))}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragDistance > 6) return;
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
                    <MarkerIcon className={`w-4 h-4 ${isSelected ? 'text-white' : meta.iconColor}`} />

                    <div
                      className={`absolute -bottom-1 w-2 h-2 rotate-45 transition-colors ${
                        isVisited
                          ? 'bg-emerald-600'
                          : isSelected
                          ? 'bg-hopkins-heritage'
                          : meta.pointerBg
                      }`}
                    />

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
                      style={{
                        transform: `scale(${1 / (pinScaleCompensation * zoom)})`,
                        transformOrigin: place.coordinates.mapY < 35 ? 'top center' : 'bottom center',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePin(place);
                      }}
                    >
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

                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 shadow-sm flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-slate-950 flex-shrink-0" />
                          <span>+{place.points} PTS</span>
                        </div>

                        {isVisited && (
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-500 text-white shadow-md flex items-center space-x-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Stamped</span>
                          </div>
                        )}
                      </div>

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
          </div>

          {/* Selected Pin Detail Modal over Atlas Map */}
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

                  <button
                    onClick={() => setActivePin(null)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors z-10"
                    aria-label="Close pin preview"
                  >
                    <X className="w-4 h-4" />
                  </button>

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

                <div className="p-3.5">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {activePin.tagline}
                  </p>

                  {/* Switch to Google Maps Quick Action */}
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => setMapMode('google')}
                      className="flex-1 py-1.5 px-2 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 transition-colors"
                    >
                      <Globe className="w-3 h-3 text-sky-600" />
                      <span>View in Google Maps</span>
                    </button>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activePin.coordinates.lat},${activePin.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors"
                      title="Google Walking Directions"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                  </div>

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
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
