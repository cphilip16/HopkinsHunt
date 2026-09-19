import React from 'react';
import { MapPin, Bus, Check, Plus, Sparkles, Clock, DollarSign, Award, ChevronRight, Heart, Pin, Camera, Navigation, Radio } from 'lucide-react';
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

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { profile, toggleCheckIn, setSelectedPlace, openCameraForPlace, getPlaceDistanceInfo } = useApp();
  const isVisited = profile.visitedPlaceIds.includes(place.id);
  const userReview = profile.placeReviews[place.id];
  const distanceInfo = getPlaceDistanceInfo(place);

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
      className={`group rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col overflow-hidden shadow-card-high hover:shadow-2xl hover:-translate-y-1 relative ${
        isVisited
          ? 'border-emerald-400 ring-2 ring-emerald-200'
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
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center space-x-1.5 shadow-sm">
                <MapPin className="w-3 h-3 text-white" />
                <span>{place.neighborhood}</span>
              </span>

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
              <span className="capitalize">{place.category}</span>
              <span>&bull;</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-0.5" />
                {place.estimatedTime}
              </span>
              <span>&bull;</span>
              {distanceInfo.hasLocation && (
                <span
                  className={`inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                    distanceInfo.isWithinRadius
                      ? 'bg-emerald-500/95 text-white shadow-xs'
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
        
        {/* Description & Hopkins Lore */}
        <div className="space-y-2.5">
          <p className="text-xs text-slate-700 font-medium line-clamp-2 leading-relaxed">
            {place.description}
          </p>

          {/* Hopkins Student Lore Quote */}
          <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-[11px] text-hopkins-deep">
            <div className="font-extrabold flex items-center space-x-1.5 text-hopkins-heritage mb-0.5">
              <BabyJaySticker size={18} />
              <span>Hopkins Lore:</span>
            </div>
            <p className="line-clamp-2 italic text-slate-800 font-medium">
              "{place.hopkinsLore}"
            </p>
          </div>

          {/* Transit Advice */}
          <div className="flex items-start space-x-1.5 text-[11px] text-slate-700 bg-slate-100/90 p-2 rounded-xl border border-slate-200/60 font-medium">
            <Bus className="w-3.5 h-3.5 text-hopkins-heritage flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{place.transitTip}</span>
          </div>

          {/* Student Perk if available */}
          {place.studentPerk && (
            <div className="flex items-center space-x-1 text-[11px] font-bold text-emerald-800">
              <Award className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="line-clamp-1">{place.studentPerk}</span>
            </div>
          )}
        </div>

        {/* Action Button: Check In / Stamped & Camera Button */}
        <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
          
          <button
            onClick={() => toggleCheckIn(place.id)}
            className={`flex-1 py-3 px-4 min-h-[44px] rounded-xl text-xs font-heading font-black transition-all flex items-center justify-center space-x-2 shadow-sm ${
              isVisited
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                : distanceInfo.isWithinRadius
                ? 'bg-gradient-to-r from-hopkins-heritage to-hopkins-deep hover:from-blue-800 hover:to-hopkins-heritage text-white shadow-blue-900/20 ring-2 ring-emerald-400/50'
                : 'bg-amber-50/90 hover:bg-amber-100 text-amber-950 border border-amber-300'
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
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Check In ({distanceInfo.formattedDistance})</span>
              </>
            )}
          </button>

          {/* Photo Proof Snap Button */}
          <button
            onClick={() => openCameraForPlace(place)}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-300 hover:border-amber-400 text-slate-700 hover:text-amber-700 bg-white hover:bg-amber-50 shadow-xs transition-colors"
            title="Snap Photo Proof with Field Camera"
            aria-label={`Snap photo at ${place.name}`}
          >
            <Camera className="w-4 h-4 text-hopkins-heritage" />
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
