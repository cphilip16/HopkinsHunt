import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Sparkles,
  Award,
  Users,
  Camera,
  CheckCircle2,
  Navigation,
  Bus,
  ArrowRight,
  ArrowLeft,
  X,
  BookOpen,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MarylandRibbon } from './art/MarylandRibbon';
import { HopkinsShield } from './art/HopkinsShield';
import {
  BabyJaySticker,
  HopkinsShuttleSticker,
  TreasureChestSticker,
  MarylandCrabSticker,
  GilmanClockSticker,
  CompassRoseSticker,
  SparkleStarsSticker,
} from './art/AnimatedStickers';
import { RankBadgeArt } from './art/VectorArt';
import { PassportStamp } from './art/PassportStamp';

interface TutorialSlide {
  id: number;
  badge: string;
  badgeIcon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  keyPoints: { icon: React.ElementType; label: string; text: string }[];
  visual: React.ReactNode;
  accentGradient: string;
}

export const TutorialModal: React.FC = () => {
  const { isTutorialOpen, completeTutorial, setActiveTab } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isTutorialOpen) return null;

  const slides: TutorialSlide[] = [
    {
      id: 1,
      badge: 'Welcome to Charm City',
      badgeIcon: Compass,
      title: 'Step Beyond the Hopkins Bubble',
      tagline: 'Your official gamified guide to exploring Baltimore like a local.',
      description:
        'Hopkins has two worlds: your academic campus and the vibrant city of Baltimore. JayWalk Bmore helps you venture beyond Homewood and Peabody to discover historic neighborhoods, iconic food, world-class art, and scenic waterfronts.',
      keyPoints: [
        {
          icon: MapPin,
          label: '20+ Curated Destinations',
          text: 'From the BMA sculpture garden to Fells Point cobblestones and Fort McHenry.',
        },
        {
          icon: Award,
          label: 'Earn Recognition & Laurels',
          text: 'Every check-in awards exploration points and permanent passport stamps.',
        },
        {
          icon: Sparkles,
          label: 'Built for Hopkins Students',
          text: 'Tailored tips on student discounts, safety, and transit connection routes.',
        },
      ],
      visual: (
        <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-blue-900 via-hopkins-heritage to-slate-900 rounded-2xl flex items-center justify-center p-4 overflow-hidden border-2 border-blue-400/40 shadow-inner">
          <div className="absolute inset-0 bg-radial from-sky-400/20 via-transparent to-transparent opacity-70" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-2">
            <div className="flex items-center gap-3">
              <HopkinsShield size={46} />
              <BabyJaySticker size={64} className="transform -rotate-6" />
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-amber-300">
              Veritas Vos Liberabit &bull; Explorer Edition
            </div>
            <p className="text-[11px] text-blue-100 max-w-xs font-medium">
              Designed for Homewood, Peabody, and East Baltimore students.
            </p>
          </div>
        </div>
      ),
      accentGradient: 'from-blue-600 to-hopkins-heritage',
    },
    {
      id: 2,
      badge: 'Campus Shuttles & Discovery',
      badgeIcon: Bus,
      title: 'Filter Spots & Ride Transit Free',
      tagline: 'Hopkins shuttles and Charm City circulators take you almost everywhere for $0.',
      description:
        'Use the top filters to browse places by neighborhood, vibe, or budget. Never get stuck without a ride: active transit badges indicate stops connected to the free JHMI Shuttle and campus routes.',
      keyPoints: [
        {
          icon: Bus,
          label: 'JHMI & Homewood Shuttles',
          text: 'Free for JHU affiliates connecting Homewood, Peabody, Mount Vernon, and East Baltimore.',
        },
        {
          icon: Sparkles,
          label: 'Free Entry Spots',
          text: 'Toggle "Free Entry Only" to find admission-free museums like the BMA and Walters.',
        },
        {
          icon: Compass,
          label: 'Neighborhood Vibes',
          text: 'Filter by Hampden, Charles Village, Station North Arts, Federal Hill, and more.',
        },
      ],
      visual: (
        <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-950 rounded-2xl flex items-center justify-center p-4 overflow-hidden border-2 border-sky-400/40 shadow-inner">
          <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
            <div className="flex items-center gap-4">
              <HopkinsShuttleSticker size={58} className="transform -rotate-3" />
              <CompassRoseSticker size={50} className="transform rotate-6" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-xs">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-blue-500/30 text-sky-200 border border-sky-400/40">
                Charles Village
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-purple-500/30 text-purple-200 border border-purple-400/40">
                Mount Vernon
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-pink-500/30 text-pink-200 border border-pink-400/40">
                Hampden
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
                JHMI Shuttle Route
              </span>
            </div>
          </div>
        </div>
      ),
      accentGradient: 'from-sky-600 to-blue-700',
    },
    {
      id: 3,
      badge: 'GPS Geofencing & Verification',
      badgeIcon: Navigation,
      title: 'Field Radar & Stamping Visits',
      tagline: 'Arrive on-site within 250 meters to unlock your digital passport stamp.',
      description:
        'JayWalk uses a 250-meter GPS radar to verify your presence. Once you arrive, the Check In button turns active and stamps your passport with points and date records.',
      keyPoints: [
        {
          icon: Navigation,
          label: '250m Proximity Radar',
          text: 'Walk or transit to any landmark. The radar shows your live distance and detects arrivals.',
        },
        {
          icon: Zap,
          label: 'Live Location Simulator',
          text: 'Testing or planning from your dorm? Use the location bar at the top to simulate campus spots.',
        },
        {
          icon: CheckCircle2,
          label: 'Official Rubber Stamp',
          text: 'Each verified place stamps your Digital J-Card with an authentic Charm City seal.',
        },
      ],
      visual: (
        <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-2xl flex items-center justify-center p-4 overflow-hidden border-2 border-emerald-400/40 shadow-inner">
          <div className="relative z-10 flex items-center justify-center gap-6">
            <div className="text-center space-y-1">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto animate-pulse">
                <Navigation className="w-7 h-7 text-emerald-300" />
              </div>
              <span className="text-[10px] font-black uppercase text-emerald-300 block">
                Within 250m
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-400" />
            <div className="transform rotate-[-8deg]">
              <PassportStamp
                neighborhood="Mount Vernon"
                date="VERIFIED"
                size={80}
                color="sapphire"
                animate={false}
              />
            </div>
          </div>
        </div>
      ),
      accentGradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 4,
      badge: 'Progression & Ranks',
      badgeIcon: Award,
      title: 'Climb 15 Ranks & Unlock Perks',
      tagline: 'Advance through 5 major orders up to Grand Blue Jay Laureate.',
      description:
        'Every destination grants 15 to 45 exploration points. As your score rises, you advance through 15 specialized subranks, earning real student privileges and custom insignia artwork.',
      keyPoints: [
        {
          icon: Award,
          label: 'From Fencer to Grand Laureate',
          text: 'Start as a Fledgling Fencer (Lv 1) and rise to Grand Blue Jay Laureate (Lv 15).',
        },
        {
          icon: Sparkles,
          label: 'Exclusive Traveler Perks',
          text: 'Unlock Peabody student ticket privileges, BMA preview passes, and local café discounts.',
        },
        {
          icon: BookOpen,
          label: 'Digital J-Card Passport',
          text: 'Your progress, stamps, and honor crests are displayed on your personal J-Card.',
        },
      ],
      visual: (
        <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 rounded-2xl flex items-center justify-center p-4 overflow-hidden border-2 border-amber-400/40 shadow-inner">
          <div className="relative z-10 flex items-center justify-center gap-4">
            <div className="text-center space-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border-2 border-amber-400/50 flex items-center justify-center mx-auto shadow-md">
                <RankBadgeArt rankId={1} size={42} />
              </div>
              <span className="text-[10px] font-black text-amber-200 block">Rank 1: Fledgling</span>
            </div>
            <div className="text-amber-400 font-black text-xs">&rarr;</div>
            <div className="text-center space-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 border-2 border-white flex items-center justify-center mx-auto shadow-lg ring-2 ring-amber-300">
                <RankBadgeArt rankId={5} size={50} />
              </div>
              <span className="text-[10px] font-black text-amber-300 block">Rank 5: Laureate</span>
            </div>
          </div>
        </div>
      ),
      accentGradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 5,
      badge: 'Flock Trips & Field Scrapbook',
      badgeIcon: Users,
      title: 'Quests, Flock Pods & Photo Studio',
      tagline: 'Team up with friends, complete quests, and build your memory scrapbook.',
      description:
        'Exploration is better together! Create or join Flock Expeditions with classmates, finish curated quest routes for bonus points, and snap field photos with custom Charm City stickers.',
      keyPoints: [
        {
          icon: Users,
          label: 'Flock Expeditions',
          text: 'Organize campus group trips with shared itineraries and passenger pods.',
        },
        {
          icon: Sparkles,
          label: 'Themed Student Quests',
          text: 'Complete sets like Star-Spangled Heritage or Peabody Culture for massive bonus PTS.',
        },
        {
          icon: Camera,
          label: 'Traveler Scrapbook',
          text: 'Use the built-in Field Camera to pin photos, add stickers, and keep memories.',
        },
      ],
      visual: (
        <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950 rounded-2xl flex items-center justify-center p-4 overflow-hidden border-2 border-purple-400/40 shadow-inner">
          <div className="relative z-10 flex items-center justify-center gap-5">
            <TreasureChestSticker size={54} className="transform -rotate-6" />
            <MarylandCrabSticker size={50} className="transform rotate-6" />
            <div className="text-center space-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border-2 border-purple-400/50 flex items-center justify-center mx-auto">
                <Camera className="w-7 h-7 text-pink-300" />
              </div>
              <span className="text-[10px] font-black text-purple-200 block">Field Camera</span>
            </div>
          </div>
        </div>
      ),
      accentGradient: 'from-purple-600 to-fuchsia-600',
    },
  ];

  const current = slides[currentSlide];
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      completeTutorial();
      setActiveTab('explore');
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    completeTutorial();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutorial-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border-2 border-amber-300/80 overflow-hidden flex flex-col max-h-[92vh] relative">
        
        {/* Top Maryland Accent Ribbon */}
        <MarylandRibbon height={3} />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-hopkins-deep border border-sky-200">
              Guide &bull; Step {currentSlide + 1} of {slides.length}
            </span>
          </div>

          <button
            onClick={handleSkip}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors flex items-center space-x-1"
            title="Skip onboarding tour"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Slide Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Visual Showcase Box */}
          {current.visual}

          {/* Slide Header */}
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider text-hopkins-heritage">
              <current.badgeIcon className="w-3.5 h-3.5" />
              <span>{current.badge}</span>
            </div>
            <h2 id="tutorial-title" className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1 tracking-tight">
              {current.title}
            </h2>
            <p className="text-xs font-semibold text-slate-600 mt-0.5">
              {current.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {current.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-2 pt-1">
            {current.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs"
              >
                <div className="p-1.5 rounded-lg bg-blue-100 text-hopkins-heritage flex-shrink-0 mt-0.5">
                  <point.icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 block">
                    {point.label}
                  </span>
                  <span className="text-slate-600 font-medium">
                    {point.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          
          {/* Progress Indicator Dots */}
          <div className="flex items-center space-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide
                    ? 'w-6 bg-hopkins-heritage'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Go to step ${idx + 1}`}
                aria-label={`Step ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {!isFirst && (
              <button
                onClick={handleBack}
                className="px-3 py-2 min-h-[38px] rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-all flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-4 py-2 min-h-[38px] rounded-xl text-xs font-heading font-black text-white bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-blue-700 hover:from-blue-900 hover:to-indigo-800 shadow-md shadow-blue-900/20 ring-1 ring-white/30 transition-all flex items-center space-x-1.5"
            >
              <span>{isLast ? 'Start Exploring!' : 'Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
