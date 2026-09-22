import React, { useState } from 'react';
import { MapPin, Bus, Check, Plus, Sparkles, Clock, DollarSign, Award, ChevronRight, ChevronDown, ChevronUp, Heart, Pin, Camera, Navigation, Radio } from 'lucide-react';
import { Place } from '../types';
import { useApp } from '../context/AppContext';
import { PassportStamp } from './art/PassportStamp';
import { WashiTape, PostageStampBadge } from './art/TravelDecorations';
import {
  SteamingCoffeeSticker,
  MarylandCrabSticker,
  CompassRoseSticker,
  GilmanClockSticker,
  BabyJaySticker,
} from './art/AnimatedStickers';

interface PlaceCardProps {
  place: Place;
}

const getNeighborhoodBadgeStyle = (nh: string) => {
  switch (nh) {
    case 'Charles Village':
      return 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-orange-500/30 ring-1 ring-white/30';
    case 'Mount Vernon':
      return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white shadow-indigo-500/30 ring-1 ring-white/30';
    case 'Hampden':
      return 'bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white shadow-pink-500/30 ring-1 ring-white/30';
    case 'Inner Harbor':
      return 'bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-700 text-white shadow-cyan-500/30 ring-1 ring-white/30';
    case 'Fells Point':
      return 'bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white shadow-teal-500/30 ring-1 ring-white/30';
    case 'Federal Hill':
      return 'bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white shadow-orange-500/30 ring-1 ring-white/30';
    case 'Station North':
      return 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-purple-500/30 ring-1 ring-white/30';
    case 'Druid Hill & West':
      return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white shadow-emerald-500/30 ring-1 ring-white/30';
    case 'Locust Point & Fort':
      return 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-red-500/30 ring-1 ring-white/30';
    default:
      return 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-blue-500/30 ring-1 ring-white/30';
  }
};

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { profile, toggleCheckIn, setSelectedPlace, openCameraForPlace, getPlaceDistanceInfo } = useApp();
  const isVisited = profile.visitedPlaceIds.includes(place.id);
  const userReview = profile.placeReviews[place.id];
  const distanceInfo = getPlaceDistanceInfo(place);
  const [showLore, setShowLore] = useState(false);

  // Pick cute pastel tape color based on category
  const washiColor =
    place.category === 'museum'
      ? 'sky'
      : place.category === 'food'
      ? 'pink'
      : place.category === 'nature'
      ? 'mint'
      : 'gold';

  return (
    <div
      className={`group rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col overflow-hidden shadow-card-high hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 relative ${
        isVisited
          ? 'border-emerald-400 ring-2 ring-emerald-300/60 shadow-emerald-500/10'
          : 'border-slate-200 hover:border-hopkins-spirit'
      }`}
    >
      {/* Decorative Pastel Washi Tape Pinned at Top Center */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-30">
        <WashiTape color={washiColor} width={88} angle={-2} />
      </div>

      {/* Snapshot Image Container with Polaroid Framing */}
      <div
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 cursor-pointer pt-2 px-2"
        onClick={() => setSelectedPlace(place)}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
          <img
            src={place.imageUrl}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Fell%27s_Point_Thames_St.jpg';
            }}
          />

          {/* Vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Top Badges: Neighborhood Pill & Postage Stamp Points */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5">
              <span className={`px-3 py-1 rounded-full text-[11px] font-black border border-white/40 flex items-center space-x-1.5 shadow-md ${getNeighborhoodBadgeStyle(place.neighborhood)}`}>
                <MapPin className="w-3 h-3 text-white" />
                <span>{place.neighborhood}</span>
              </span>

              {place.campusProximity && (
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-xs ${
                  place.campusProximity === 'On campus'
                    ? 'bg-sky-500/90 text-white border-sky-300'
                    : place.campusProximity === 'Near campus'
                    ? 'bg-amber-400/90 text-slate-950 border-amber-300 font-extrabold'
                    : 'bg-indigo-600/90 text-white border-indigo-400'
                }`}>
                  {place.campusProximity}
                </span>
              )}

              {/* Contextual Animated Micro-Sticker */}
              {place.category === 'food' ? (
                <div className="hidden xs:inline-block transform -rotate-6 filter drop-shadow-sm">
                  <SteamingCoffeeSticker size={26} />
                </div>
              ) : place.category === 'historic' ? (
                <div className="hidden xs:inline-block transform rotate-6 filter drop-shadow-sm">
                  <GilmanClockSticker size={26} />
                </div>
              ) : place.category === 'hopkins' ? (
                <div className="hidden xs:inline-block transform -rotate-12 filter drop-shadow-sm">
                  <BabyJaySticker size={24} />
                </div>
              ) : (
                <div className="hidden xs:inline-block transform -rotate-6 filter drop-shadow-sm">
                  <CompassRoseSticker size={26} />
                </div>
              )}
            </div>

            {/* Cute Perforated Postage Stamp Point Badge */}
            <div className="transform rotate-2 hover:rotate-0 transition-transform">
              <PostageStampBadge points={place.points} />
            </div>
          </div>

          {/* Bottom Snapshot Overlay: Destination Name & Tagline */}
          <div className="absolute bottom-2.5 inset-x-3 text-white">
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-sky-200 mb-0.5 flex-wrap gap-y-1">
              <span className="capitalize px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                {place.category}
              </span>
              <span>&bull;</span>
              <span className="flex items-center bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/20">
                <Clock className="w-3 h-3 mr-0.5 text-amber-300" />
                {place.estimatedTime}
              </span>
              <span>&bull;</span>
              {distanceInfo.hasLocation && (
                <span
                  className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-black backdrop-blur-md shadow-xs ${
                    distanceInfo.isWithinRadius
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white ring-1 ring-white/40'
                      : 'bg-black/60 text-amber-300 border border-white/20'
                  }`}
                >
                  <Navigation className="w-2.5 h-2.5" />
                  <span>
                    {distanceInfo.isWithinRadius
                      ? `In Range (${distanceInfo.formattedDistance})`
                      : distanceInfo.formattedDistance}
                  </span>
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-black tracking-tight text-white leading-snug drop-shadow-md">
              {place.name}
            </h3>
          </div>
        </div>

        {/* Official Rubber Passport Stamp Overlay when Visited */}
        {isVisited && (
          <div className="absolute bottom-3 right-3 z-20 pointer-events-none transform translate-y-1">
            <PassportStamp
              neighborhood={place.neighborhood}
              date={userReview?.date || 'VISITED'}
              size={88}
              rotation={-14}
              color={washiColor === 'pink' ? 'crimson' : washiColor === 'mint' ? 'emerald' : washiColor === 'sky' ? 'sapphire' : 'amber'}
              animate={true}
            />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Description & Progressive Lore / Transit */}
        <div className="space-y-2.5">
          <p className="text-xs text-slate-700 font-medium line-clamp-2 leading-relaxed">
            {place.description}
          </p>

          {/* Compact Transit Chip & Lore Toggle Row */}
          <div className="flex items-center justify-between gap-1.5 text-[11px]">
            <div className="flex items-center space-x-1.5 text-slate-600 font-medium min-w-0 flex-1">
              <Bus className="w-3.5 h-3.5 text-hopkins-heritage flex-shrink-0" />
              <span className="truncate">{place.transitTip}</span>
            </div>

            {/* Interactive Hopkins Lore Toggle */}
            <button
              onClick={() => setShowLore(!showLore)}
              className="inline-flex items-center space-x-1 text-[10px] font-bold text-hopkins-heritage hover:text-blue-900 bg-blue-50/80 hover:bg-blue-100 px-2 py-0.5 rounded-lg border border-blue-200/80 transition-colors flex-shrink-0 ml-1 cursor-pointer"
              title="Toggle Hopkins Student Lore"
            >
              <span>{showLore ? 'Hide Lore' : 'Lore'}</span>
              {showLore ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Student Perk if available */}
          {place.studentPerk && (
            <div className="flex items-center space-x-1 text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-xl border border-emerald-200/60">
              <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="line-clamp-1">{place.studentPerk}</span>
            </div>
          )}

          {/* Collapsible Hopkins Student Lore Quote */}
          {showLore && (
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50/70 to-indigo-50/50 border border-blue-200/90 text-[11px] text-hopkins-deep shadow-xs animate-in fade-in duration-200">
              <div className="font-black flex items-center space-x-1.5 text-hopkins-heritage mb-0.5 tracking-tight">
                <BabyJaySticker size={18} />
                <span>Hopkins Lore:</span>
              </div>
              <p className="italic text-slate-800 font-medium leading-relaxed">
                "{place.hopkinsLore}"
              </p>
            </div>
          )}
        </div>

        {/* Action Button: Check In / Stamped & Camera Button */}
        <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
          
          <button
            onClick={() => toggleCheckIn(place.id)}
            className={`flex-1 py-3 px-4 min-h-[44px] rounded-xl text-xs font-heading font-black transition-all flex items-center justify-center space-x-2 shadow-sm ${
              isVisited
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-600/30 ring-1 ring-white/30'
                : distanceInfo.isWithinRadius
                ? 'bg-gradient-to-r from-blue-600 via-hopkins-heritage to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-blue-600/30 ring-2 ring-emerald-400'
                : 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black shadow-amber-400/25 border border-amber-300'
            }`}
            title={
              isVisited
                ? 'Stamped in your passport (click to undo)'
                : distanceInfo.isWithinRadius
                ? `You are within 250m! Click to stamp passport (+${place.points} PTS)`
                : `You are ${distanceInfo.formattedDistance} away. Must be within 250m to stamp.`
            }
          >
            {isVisited ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Stamped in Passport</span>
              </>
            ) : distanceInfo.isWithinRadius ? (
              <>
                <Check className="w-4 h-4 stroke-[3] text-emerald-300" />
                <span>Stamp Verified Visit (+{place.points} PTS)</span>
              </>
            ) : (
              <>
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>Check In ({distanceInfo.formattedDistance})</span>
              </>
            )}
          </button>

          {/* Photo Proof Snap Button */}
          <button
            onClick={() => openCameraForPlace(place)}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-amber-300 hover:border-amber-400 text-amber-900 hover:text-amber-950 bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 shadow-xs transition-colors"
            title="Snap Photo Proof with Field Camera"
            aria-label={`Snap photo at ${place.name}`}
          >
            <Camera className="w-4 h-4 text-amber-700" />
          </button>

          {/* Details Button */}
          <button
            onClick={() => setSelectedPlace(place)}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-white transition-colors"
            title="View Details, Lore & Journal"
            aria-label={`View details for ${place.name}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Personal travel reflection sticky note if checked in */}
        {isVisited && userReview?.notes && (
          <div className="text-[11px] text-amber-950 italic bg-[#FFFBEB] p-2.5 rounded-xl border border-amber-200/80 shadow-xs flex items-start space-x-1.5">
            <Pin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 not-italic block text-[10px]">Travel Diary ({userReview.date}):</span>
              "{userReview.notes}"
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
