import React, { useState } from 'react';
import { X, MapPin, Bus, Clock, DollarSign, Award, Sparkles, Check, Star, Calendar, Save, Stamp, Heart, Mail, Compass, BookOpen, Camera, Users, Navigation, Radio, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MarylandRibbon } from './art/MarylandRibbon';
import { CuteMascot } from './art/CuteMascot';
import { PassportStamp } from './art/PassportStamp';
import { WashiTape } from './art/TravelDecorations';
import {
  MarylandCrabSticker,
  LuggageAirmailSticker,
  SparkleStarsSticker,
  WaxSealSticker,
} from './art/AnimatedStickers';

export const PlaceDetailModal: React.FC = () => {
  const {
    selectedPlace,
    setSelectedPlace,
    profile,
    toggleCheckIn,
    updateReview,
    openCameraForPlace,
    setIsCreateTripModalOpen,
    getPlaceDistanceInfo,
    simulateLocation,
  } = useApp();

  if (!selectedPlace) return null;

  const isVisited = profile.visitedPlaceIds.includes(selectedPlace.id);
  const existingReview = profile.placeReviews[selectedPlace.id];

  const [notes, setNotes] = useState(existingReview?.notes || '');
  const [rating, setRating] = useState(existingReview?.rating || 5);
  const [saveConfirmation, setSaveConfirmation] = useState(false);
  const [isJustStamped, setIsJustStamped] = useState(false);

  const handleToggleStamp = () => {
    if (!isVisited) {
      setIsJustStamped(true);
      setTimeout(() => setIsJustStamped(false), 2000);
    }
    toggleCheckIn(selectedPlace.id);
  };

  const handleSaveNotes = () => {
    updateReview(selectedPlace.id, notes, rating);
    setSaveConfirmation(true);
    setTimeout(() => setSaveConfirmation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-t-3xl sm:rounded-3xl shadow-2xl border-2 border-amber-200/90 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        
        {/* Top Washi Tape Accents */}
        <WashiTape color="rose" angle={-3} className="-top-3 left-10 z-30 hidden sm:block" />
        <WashiTape color="amber" angle={2} className="-top-3 right-16 z-30 hidden sm:block" />

        {/* Top Maryland Accent Strip */}
        <MarylandRibbon height={3} />

        {/* Hero Image (Vintage Postcard Frame) */}
        <div className="relative h-56 sm:h-72 w-full bg-slate-900 flex-shrink-0 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => setSelectedPlace(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-30"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Points Pill (Postage Stamp Style) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-amber-400 text-hopkins-deep shadow-lg border border-dashed border-amber-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>+{selectedPlace.points} TRAVEL PTS</span>
          </div>

          {/* Rubber Passport Stamp Overlay if Visited */}
          {isVisited && (
            <div className="absolute top-3 right-16 z-20 pointer-events-none transform -rotate-12 scale-90 sm:scale-100">
              <PassportStamp
                neighborhood={selectedPlace.neighborhood}
                visitedDate="AUTHENTICATED"
                color="sapphire"
                animate={isJustStamped}
              />
            </div>
          )}

          {/* Postcard Greeting Dispatch Subhead */}
          <div className="absolute bottom-16 sm:bottom-20 left-4 text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 drop-shadow-md flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>Greetings from Baltimore</span>
            <span>&bull;</span>
            <span>JHU Explorer Field Dispatch</span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-3 inset-x-4 sm:bottom-4 text-white">
            <div className="flex items-center space-x-2 text-xs font-semibold text-sky-200 mb-1">
              <span className="px-2 py-0.5 rounded bg-white/20 uppercase tracking-wider text-[10px] font-bold">
                {selectedPlace.neighborhood}
              </span>
              <span>&bull;</span>
              <span className="capitalize">{selectedPlace.category}</span>
              <span>&bull;</span>
              <span>{selectedPlace.cost}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
              {selectedPlace.name}
            </h2>
            <p className="text-xs text-blue-100/90 font-medium mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
              {selectedPlace.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body (Travel Diary Page) */}
        <div className="p-5 sm:p-8 space-y-5 overflow-y-auto flex-1 pb-8 sm:pb-8 bg-[#FFFDF9]">
          
          {/* Action Row: Passport Check-In Desk */}
          {(() => {
            const distanceInfo = getPlaceDistanceInfo(selectedPlace);
            return (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-sky-50/50 to-amber-50 border-2 border-dashed border-amber-300 shadow-sm space-y-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
                      <Stamp className="w-3.5 h-3.5 text-hopkins-heritage" />
                      <span>Customs & Stamp Status</span>
                    </div>
                    <div className="text-sm font-black text-slate-900 mt-0.5">
                      {isVisited ? (
                        <span className="text-emerald-700 flex items-center space-x-1.5">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                          <span>Official Rubber Stamp Inked (+{selectedPlace.points} PTS)</span>
                        </span>
                      ) : distanceInfo.isWithinRadius ? (
                        <span className="text-emerald-700 flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                          <span>Verified In Range ({distanceInfo.formattedDistance}) &bull; Ready to Stamp!</span>
                        </span>
                      ) : (
                        <span className="text-amber-900 font-semibold flex items-center space-x-1.5">
                          <Navigation className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                          <span>{distanceInfo.formattedDistance} away &bull; Must be within 250m to stamp</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleToggleStamp}
                    className={`py-3 px-5 min-h-[44px] rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-2 shadow-md ${
                      isVisited
                        ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-300'
                        : distanceInfo.isWithinRadius
                        ? 'bg-gradient-to-r from-hopkins-heritage to-hopkins-deep hover:from-blue-800 hover:to-hopkins-heritage text-white shadow-blue-900/20 ring-2 ring-emerald-400/60'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isVisited ? (
                      <span>Undo Stamp</span>
                    ) : distanceInfo.isWithinRadius ? (
                      <>
                        <Stamp className="w-4 h-4 text-emerald-300" />
                        <span>Stamp My Passport (+{selectedPlace.points} PTS)</span>
                      </>
                    ) : (
                      <>
                        <Navigation className="w-4 h-4 text-amber-800" />
                        <span>Check In ({distanceInfo.formattedDistance})</span>
                      </>
                    )}
                  </button>
                </div>

                {!isVisited && !distanceInfo.isWithinRadius && (
                  <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Testing on laptop or grading indoors?</span>
                    <button
                      onClick={() =>
                        simulateLocation(
                          { lat: selectedPlace.coordinates.lat, lng: selectedPlace.coordinates.lng },
                          `${selectedPlace.name} (Direct Arrival)`
                        )
                      }
                      className="font-bold text-hopkins-heritage hover:text-hopkins-deep hover:underline flex items-center space-x-1"
                    >
                      <Compass className="w-3 h-3 text-amber-600" />
                      <span>Simulate GPS Arrival Here</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Quick Expedition Actions: Camera Snap & Flock Trip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                const place = selectedPlace;
                setSelectedPlace(null);
                openCameraForPlace(place);
              }}
              className="py-2.5 px-3 rounded-2xl bg-white border-2 border-amber-300 hover:border-amber-400 hover:bg-amber-50 text-slate-900 font-heading font-black text-xs shadow-sm flex items-center justify-center space-x-2 transition-all transform active:scale-95"
            >
              <Camera className="w-4 h-4 text-hopkins-heritage" />
              <span>Snap Photo Proof (+15 PTS)</span>
            </button>

            <button
              onClick={() => {
                setSelectedPlace(null);
                setIsCreateTripModalOpen(true);
              }}
              className="py-2.5 px-3 rounded-2xl bg-white border-2 border-sky-300 hover:border-sky-400 hover:bg-sky-50 text-slate-900 font-heading font-black text-xs shadow-sm flex items-center justify-center space-x-2 transition-all transform active:scale-95"
            >
              <Users className="w-4 h-4 text-hopkins-heritage" />
              <span>Plan Flock Trip (+25 PTS)</span>
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5 text-slate-400" />
              <span>Destination Guide</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {selectedPlace.description}
            </p>
          </div>

          {/* Baby Jay Mascot's Hopkins Lore & Student Traditions */}
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 flex items-start space-x-3.5">
            <div className="flex-shrink-0 -mt-1">
              <CuteMascot
                pose={
                  selectedPlace.category === 'food'
                    ? 'snacking'
                    : selectedPlace.category === 'museum' || selectedPlace.category === 'historic'
                    ? 'scholar'
                    : 'snapping'
                }
                size={58}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-1.5 text-xs font-black text-hopkins-heritage uppercase tracking-wider mb-1">
                <span>Baby Jay's Field Secret & Lore</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic bg-white/70 p-2.5 rounded-xl border border-sky-100">
                "{selectedPlace.hopkinsLore}"
              </p>
            </div>
          </div>

          {/* Practical Student Travel Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            
            <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
              <div className="flex items-center space-x-1.5 font-extrabold text-hopkins-heritage mb-1">
                <Bus className="w-4 h-4 text-hopkins-heritage" />
                <span>Transit from JHU</span>
              </div>
              <p className="text-slate-600">{selectedPlace.transitTip}</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
              <div className="flex items-center space-x-1.5 font-extrabold text-baltimore-crab mb-1">
                <MapPin className="w-4 h-4 text-baltimore-crab" />
                <span>Address</span>
              </div>
              <p className="text-slate-600">{selectedPlace.address}</p>
            </div>

            {selectedPlace.studentPerk && (
              <div className="p-3 bg-emerald-50/90 rounded-xl border border-emerald-300 sm:col-span-2 shadow-xs">
                <div className="flex items-center space-x-1.5 font-extrabold text-emerald-900 mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>J-Card Student Perk & Discount</span>
                </div>
                <p className="text-emerald-800">{selectedPlace.studentPerk}</p>
              </div>
            )}

          </div>

          {/* Student Travel Reflection & Journal Section */}
          <div className="pt-4 border-t-2 border-dashed border-amber-200 space-y-3">
            <h3 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Student Travel Journal & Field Notes</span>
              </span>
              {saveConfirmation && (
                <span className="text-xs font-black text-emerald-600 animate-pulse">
                  ✓ Reflection Inscribed!
                </span>
              )}
            </h3>

            <div className="flex items-center space-x-3 text-xs">
              <span className="font-bold text-slate-600">Expedition Rating:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center focus:outline-none transition-transform active:scale-110"
                    aria-label={`Rate ${star} star`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400 drop-shadow-sm'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <textarea
                rows={2}
                placeholder="Inscribe your personal memories, favorite dish recommendations, or study spot secrets..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 bg-amber-50/40 border border-amber-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none placeholder:text-slate-400 font-sans leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleSaveNotes}
                className="py-2.5 px-4 min-h-[42px] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save to Passport Diary</span>
              </button>

              <div className="flex items-center space-x-2">
                <div className="transform -rotate-6 hover:rotate-0 transition-transform">
                  <WaxSealSticker size={34} />
                </div>
                <div className="transform rotate-3 hover:rotate-0 transition-transform">
                  <LuggageAirmailSticker size={34} />
                </div>
                <div className="transform rotate-6 hover:rotate-0 transition-transform">
                  <MarylandCrabSticker size={32} />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
