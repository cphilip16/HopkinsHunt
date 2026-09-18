import React, { useState } from 'react';
import { X, MapPin, Bus, Clock, DollarSign, Award, Sparkles, Check, Star, Calendar, Save } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PlaceDetailModal: React.FC = () => {
  const { selectedPlace, setSelectedPlace, profile, toggleCheckIn, updateReview } = useApp();

  if (!selectedPlace) return null;

  const isVisited = profile.visitedPlaceIds.includes(selectedPlace.id);
  const existingReview = profile.placeReviews[selectedPlace.id];

  const [notes, setNotes] = useState(existingReview?.notes || '');
  const [rating, setRating] = useState(existingReview?.rating || 5);
  const [saveConfirmation, setSaveConfirmation] = useState(false);

  const handleSaveNotes = () => {
    updateReview(selectedPlace.id, notes, rating);
    setSaveConfirmation(true);
    setTimeout(() => setSaveConfirmation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        
        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 w-full bg-slate-900 flex-shrink-0">
          <img
            src={selectedPlace.imageUrl}
            alt={selectedPlace.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Fell%27s_Point_Thames_St.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => setSelectedPlace(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Points Pill */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>+{selectedPlace.points} POINTS</span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-3 inset-x-4 sm:bottom-4 text-white">
            <div className="flex items-center space-x-2 text-xs font-semibold text-sky-200 mb-1">
              <span className="px-2 py-0.5 rounded bg-white/20 uppercase tracking-wider text-[10px]">
                {selectedPlace.neighborhood}
              </span>
              <span>&bull;</span>
              <span className="capitalize">{selectedPlace.category}</span>
              <span>&bull;</span>
              <span>{selectedPlace.cost}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
              {selectedPlace.name}
            </h2>
            <p className="text-xs text-blue-100/90 font-medium mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
              {selectedPlace.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-5 overflow-y-auto flex-1 pb-8 sm:pb-8">
          
          {/* Action Row: Check In & Status */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Visit Status
              </div>
              <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                {isVisited ? (
                  <span className="text-emerald-600 flex items-center space-x-1">
                    <Check className="w-4 h-4" />
                    <span>Visited & Stamped (+{selectedPlace.points} pts added)</span>
                  </span>
                ) : (
                  <span className="text-slate-600">Not visited yet</span>
                )}
              </div>
            </div>

            <button
              onClick={() => toggleCheckIn(selectedPlace.id)}
              className={`py-3 px-5 min-h-[44px] rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-2 shadow-sm ${
                isVisited
                  ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                  : 'bg-hopkins-heritage hover:bg-hopkins-deep text-white shadow-blue-900/10'
              }`}
            >
              {isVisited ? (
                <span>Undo Check-In</span>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Check In (+{selectedPlace.points} PTS)</span>
                </>
              )}
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              About This Destination
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedPlace.description}
            </p>
          </div>

          {/* JHU Lore & Student Traditions */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
            <div className="flex items-center space-x-2 text-xs font-extrabold text-hopkins-heritage uppercase tracking-wider mb-1.5">
              <span>🐦 Hopkins Student Lore & Tradition</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "{selectedPlace.hopkinsLore}"
            </p>
          </div>

          {/* Practical Student Travel Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-1.5 font-bold text-slate-700 mb-1">
                <Bus className="w-4 h-4 text-hopkins-heritage" />
                <span>Transit from JHU</span>
              </div>
              <p className="text-slate-600">{selectedPlace.transitTip}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-1.5 font-bold text-slate-700 mb-1">
                <MapPin className="w-4 h-4 text-baltimore-crab" />
                <span>Address</span>
              </div>
              <p className="text-slate-600">{selectedPlace.address}</p>
            </div>

            {selectedPlace.studentPerk && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 sm:col-span-2">
                <div className="flex items-center space-x-1.5 font-bold text-emerald-900 mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>J-Card Student Perk & Discount</span>
                </div>
                <p className="text-emerald-800">{selectedPlace.studentPerk}</p>
              </div>
            )}

          </div>

          {/* Student Travel Reflection & Journal Section */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center justify-between">
              <span>Your Student Passport Reflection</span>
              {saveConfirmation && (
                <span className="text-xs font-bold text-emerald-600 animate-pulse">
                  ✓ Reflection Saved!
                </span>
              )}
            </h3>

            <div className="flex items-center space-x-3 text-xs">
              <span className="font-bold text-slate-600">Your Rating:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center text-xl focus:outline-none"
                    aria-label={`Rate ${star} star`}
                  >
                    <span className={star <= rating ? 'text-amber-400' : 'text-slate-300'}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <textarea
                rows={2}
                placeholder="Write your personal memories, study spot tips, or dish recommendations..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none"
              />
            </div>

            <button
              onClick={handleSaveNotes}
              className="py-2.5 px-4 min-h-[42px] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Journal Entry</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
