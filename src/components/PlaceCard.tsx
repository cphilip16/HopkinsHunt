import React from 'react';
import { MapPin, Bus, Check, Plus, Sparkles, Clock, DollarSign, Award, ChevronRight, Heart } from 'lucide-react';
import { Place } from '../types';
import { useApp } from '../context/AppContext';
import { PassportStamp } from './art/PassportStamp';
import { WashiTape, PostageStampBadge } from './art/TravelDecorations';
import {
  SteamingCoffeeSticker,
  MarylandCrabSticker,
  CompassRoseSticker,
  GilmanClockSticker,
} from './art/AnimatedStickers';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { profile, toggleCheckIn, setSelectedPlace } = useApp();
  const isVisited = profile.visitedPlaceIds.includes(place.id);
  const userReview = profile.placeReviews[place.id];

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
      className={`group rounded-3xl bg-[#FFFDF9] border transition-all duration-300 flex flex-col overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 relative ${
        isVisited
          ? 'border-emerald-300/80 ring-2 ring-emerald-200/60'
          : 'border-amber-200/70 hover:border-hopkins-spirit'
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top Badges: Neighborhood Pill & Postage Stamp Points */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center space-x-1 shadow-sm">
                <span>📍</span>
                <span>{place.neighborhood}</span>
              </span>

              {/* Contextual Animated Micro-Sticker */}
              {place.category === 'food' ? (
                <div className="hidden xs:inline-block transform -rotate-6 filter drop-shadow-sm">
                  <SteamingCoffeeSticker size={26} />
                </div>
              ) : place.category === 'museum' ? (
                <div className="hidden xs:inline-block transform rotate-6 filter drop-shadow-sm">
                  <GilmanClockSticker size={26} />
                </div>
              ) : (
                <div className="hidden xs:inline-block transform -rotate-3 filter drop-shadow-sm">
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
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-sky-200 mb-0.5">
              <span className="capitalize">{place.category}</span>
              <span>&bull;</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-0.5" />
                {place.estimatedTime}
              </span>
              <span>&bull;</span>
              <span>{place.cost}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-snug drop-shadow-md">
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
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {place.description}
          </p>

          {/* Hopkins Student Lore Quote */}
          <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/80 text-[11px] text-hopkins-deep">
            <div className="font-bold flex items-center space-x-1 text-hopkins-heritage mb-0.5">
              <span>🐦 Hopkins Lore:</span>
            </div>
            <p className="line-clamp-2 italic text-slate-700">
              "{place.hopkinsLore}"
            </p>
          </div>

          {/* Transit Advice */}
          <div className="flex items-start space-x-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl">
            <Bus className="w-3.5 h-3.5 text-hopkins-heritage flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{place.transitTip}</span>
          </div>

          {/* Student Perk if available */}
          {place.studentPerk && (
            <div className="flex items-center space-x-1 text-[11px] font-semibold text-emerald-700">
              <Award className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="line-clamp-1">{place.studentPerk}</span>
            </div>
          )}
        </div>

        {/* Actions Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          
          {/* Check-in Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleCheckIn(place.id);
            }}
            className={`flex-1 flex items-center justify-center space-x-1.5 py-3 px-4 min-h-[44px] rounded-xl text-xs font-extrabold transition-all shadow-sm ${
              isVisited
                ? 'bg-emerald-100 text-emerald-800 hover:bg-red-50 hover:text-red-700 hover:ring-1 hover:ring-red-200'
                : 'bg-hopkins-heritage hover:bg-hopkins-deep text-white shadow-blue-900/10'
            }`}
          >
            {isVisited ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700 group-hover:hidden" />
                <span className="group-hover:inline">Checked In (+{place.points}p)</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Check In (+{place.points} pts)</span>
              </>
            )}
          </button>

          {/* Details Button */}
          <button
            onClick={() => setSelectedPlace(place)}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-white transition-colors"
            title="View Details, Lore & Journal"
            aria-label={`View details for ${place.name}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Personal travel reflection sticky note if checked in */}
        {isVisited && userReview?.notes && (
          <div className="text-[11px] text-amber-950 italic bg-[#FFFBEB] p-2.5 rounded-xl border border-amber-200/80 shadow-xs flex items-start space-x-1.5">
            <span className="text-xs">📌</span>
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
