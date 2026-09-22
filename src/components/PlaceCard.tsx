import React, { useState } from 'react';
import { showImageFallback } from '../utils/imageFallback';
import { MapPin, Bus, Check, Sparkles, Clock, Award, ChevronRight, ChevronDown, ChevronUp, Pin, Camera, Navigation } from 'lucide-react';
import { Place } from '../types';
import { useApp } from '../context/AppContext';
import { PassportStamp } from './art/PassportStamp';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { profile, toggleCheckIn, setSelectedPlace, openCameraForPlace, getPlaceDistanceInfo } = useApp();
  const isVisited = profile.visitedPlaceIds.includes(place.id);
  const userReview = profile.placeReviews[place.id];
  const distanceInfo = getPlaceDistanceInfo(place);
  const [showLore, setShowLore] = useState(false);

  return (
    <div
      className={`group rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 relative ${
        isVisited
          ? 'border-sky-400 ring-2 ring-sky-200'
          : 'border-sky-100 hover:border-sky-300'
      }`}
    >
      {/* Snapshot Image Container */}
      <div
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() => setSelectedPlace(place)}
      >
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
          onError={showImageFallback}
        />

        {/* Soft gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Top Badges: Proximity Pill & Points Stamp */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#002D72]/90 text-white backdrop-blur-md shadow-sm border border-white/20 flex items-center gap-1 font-bubbly">
              <MapPin className="w-3 h-3 text-sky-300" />
              <span>{place.neighborhood}</span>
            </span>

            {place.campusProximity && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-[#002D72] shadow-sm font-bubbly">
                {place.campusProximity}
              </span>
            )}
          </div>

          {/* Points Badge */}
          <div className="px-2.5 py-1 rounded-xl bg-sky-400 text-[#002D72] font-black text-xs shadow-md font-bubbly">
            +{place.points} PTS
          </div>
        </div>

        {/* Bottom Snapshot Overlay: Destination Name & Time */}
        <div className="absolute bottom-3 inset-x-3 text-white">
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-sky-200 mb-0.5">
            <span className="capitalize">{place.category}</span>
            <span>&bull;</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-0.5 text-sky-300" />
              {place.estimatedTime}
            </span>
            {distanceInfo.hasLocation && (
              <>
                <span>&bull;</span>
                <span className={distanceInfo.isWithinRadius ? 'text-emerald-300 font-extrabold' : 'text-sky-200'}>
                  {distanceInfo.formattedDistance}
                </span>
              </>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-snug drop-shadow-md font-bubbly">
            {place.name}
          </h3>
        </div>

        {/* Official Stamp Overlay when Visited */}
        {isVisited && (
          <div className="absolute bottom-2 right-2 z-20 pointer-events-none transform translate-y-1">
            <PassportStamp
              neighborhood={place.neighborhood}
              date={userReview?.date || 'VISITED'}
              size={82}
              rotation={-12}
              color="sapphire"
              animate={true}
            />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        
        {/* Description & Progressive Lore / Transit */}
        <div className="space-y-2">
          <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
            {place.description}
          </p>

          {/* Transit & Lore Toggle Row */}
          <div className="flex items-center justify-between gap-1.5 text-[11px] pt-1 border-t border-slate-100">
            <div className="flex items-center space-x-1 text-slate-500 font-medium min-w-0 flex-1 truncate">
              <Bus className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span className="truncate">{place.transitTip}</span>
            </div>

            {/* Hopkins Lore Toggle */}
            <button
              onClick={() => setShowLore(!showLore)}
              className="inline-flex items-center space-x-1 text-[10px] font-bold text-[#002D72] hover:text-sky-600 bg-sky-50 px-2 py-0.5 rounded-lg border border-sky-100 transition-colors shrink-0 font-bubbly"
              title="Toggle Hopkins Student Lore"
            >
              <span>{showLore ? 'Hide' : 'Lore'}</span>
              {showLore ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Student Perk if available */}
          {place.studentPerk && (
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-[#002D72] bg-sky-50 px-2.5 py-1 rounded-xl border border-sky-100">
              <Award className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span className="line-clamp-1">{place.studentPerk}</span>
            </div>
          )}

          {/* Collapsible Hopkins Student Lore Quote */}
          {showLore && (
            <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-[11px] text-[#002D72] animate-in fade-in duration-150">
              <div className="font-extrabold flex items-center space-x-1 text-sky-900 mb-0.5 font-bubbly">
                <img src="/blue-jay-mascot.png" alt="Hoppy" className="w-4 h-4 object-contain inline-block mr-1" />
                <span>Hopkins Lore:</span>
              </div>
              <p className="italic text-slate-700 font-medium leading-relaxed">
                "{place.hopkinsLore}"
              </p>
            </div>
          )}
        </div>

        {/* Action Button: Check In / Stamped & Camera Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          
          <button
            onClick={() => toggleCheckIn(place.id)}
            className={`flex-1 py-2.5 px-3 min-h-[42px] rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-1.5 font-bubbly shadow-xs ${
              isVisited
                ? 'bg-sky-600 hover:bg-sky-700 text-white'
                : distanceInfo.isWithinRadius
                ? 'bg-[#002D72] hover:bg-[#001D4A] text-white ring-2 ring-sky-300'
                : 'bg-[#002D72] hover:bg-[#001D4A] text-white'
            }`}
            title={
              isVisited
                ? 'Stamped in your passport (click to undo)'
                : distanceInfo.isWithinRadius
                ? `You are within 20m! Click to stamp passport (+${place.points} PTS)`
                : `You are ${distanceInfo.formattedDistance} away. Must be within 20m to stamp.`
            }
          >
            {isVisited ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Stamped in Passport</span>
              </>
            ) : distanceInfo.isWithinRadius ? (
              <>
                <Check className="w-4 h-4 stroke-[3] text-sky-300" />
                <span>Stamp Visit (+{place.points} PTS)</span>
              </>
            ) : (
              <>
                <Navigation className="w-4 h-4 text-sky-300" />
                <span>Check In ({distanceInfo.formattedDistance})</span>
              </>
            )}
          </button>

          {/* Photo Proof Snap Button */}
          <button
            onClick={() => openCameraForPlace(place)}
            className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl border border-sky-200 text-[#002D72] bg-sky-50 hover:bg-sky-100 transition-colors shadow-xs"
            title="Snap Photo with Field Camera"
            aria-label={`Snap photo at ${place.name}`}
          >
            <Camera className="w-4 h-4 text-sky-600" />
          </button>

          {/* Details Button */}
          <button
            onClick={() => setSelectedPlace(place)}
            className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:text-[#002D72] bg-white hover:bg-sky-50 transition-colors"
            title="View Details"
            aria-label={`View details for ${place.name}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Personal travel reflection if checked in */}
        {isVisited && userReview?.notes && (
          <div className="text-[11px] text-[#002D72] italic bg-sky-50 p-2.5 rounded-xl border border-sky-200 flex items-start space-x-1.5">
            <Pin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#002D72] not-italic block text-[10px]">Travel Note ({userReview.date}):</span>
              "{userReview.notes}"
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
