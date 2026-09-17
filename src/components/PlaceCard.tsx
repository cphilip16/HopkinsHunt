import React from 'react';
import { MapPin, Bus, Check, Plus, Sparkles, Clock, DollarSign, Award, ChevronRight } from 'lucide-react';
import { Place } from '../types';
import { useApp } from '../context/AppContext';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { profile, toggleCheckIn, setSelectedPlace } = useApp();
  const isVisited = profile.visitedPlaceIds.includes(place.id);
  const userReview = profile.placeReviews[place.id];

  return (
    <div
      className={`group rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        isVisited
          ? 'border-emerald-300/80 ring-1 ring-emerald-200 bg-gradient-to-b from-emerald-50/20 to-white'
          : 'border-slate-200 hover:border-hopkins-spirit/50'
      }`}
    >
      {/* Image Thumbnail & Overlays */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges: Neighborhood & Points Value */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
            {place.neighborhood}
          </span>

          <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>+{place.points} PTS</span>
          </div>
        </div>

        {/* Bottom Image Overlay: Name & Tagline */}
        <div className="absolute bottom-3 inset-x-3 text-white">
          <div className="flex items-center space-x-2 text-[11px] font-semibold text-sky-200 mb-0.5">
            <span className="capitalize">{place.category}</span>
            <span>&bull;</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-0.5" />
              {place.estimatedTime}
            </span>
            <span>&bull;</span>
            <span>{place.cost}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug drop-shadow-sm">
            {place.name}
          </h3>
        </div>

        {/* Visited Checkmark Ribbon */}
        {isVisited && (
          <div className="absolute top-3 right-3 sm:right-auto sm:left-3 bg-emerald-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-lg ring-2 ring-white">
            <Check className="w-3.5 h-3.5" />
            <span>Visited & Earned</span>
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
            className={`flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all shadow-sm ${
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
            className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-white transition-colors"
            title="View Details, Lore & Journal"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Personal note snippet if checked in */}
        {isVisited && userReview?.notes && (
          <div className="text-[10px] text-slate-500 italic bg-emerald-50/50 p-2 rounded-lg border border-emerald-100">
            <span className="font-semibold text-emerald-800">Your Reflection ({userReview.date}):</span> "{userReview.notes}"
          </div>
        )}

      </div>
    </div>
  );
};
