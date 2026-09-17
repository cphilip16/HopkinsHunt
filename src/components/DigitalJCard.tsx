import React, { useState } from 'react';
import { Award, Sparkles, Check, Edit3, Save, Calendar, Star, BookOpen, Share2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BADGES } from '../data/badgesData';

export const DigitalJCard: React.FC = () => {
  const {
    profile,
    updateProfile,
    totalPoints,
    currentRank,
    currentSubrank,
    places,
    unlockedBadges,
    setSelectedPlace,
    setIsLoginModalOpen,
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(profile.studentName);
  const [editMajor, setEditMajor] = useState(profile.major);
  const [editYear, setEditYear] = useState(profile.classYear);
  const [editCampus, setEditCampus] = useState(profile.campus);
  const [editAvatar, setEditAvatar] = useState(profile.avatar);

  const handleSaveProfile = () => {
    updateProfile({
      studentName: editName,
      major: editMajor,
      classYear: editYear,
      campus: editCampus as any,
      avatar: editAvatar,
    });
    setIsEditing(false);
  };

  const visitedPlacesList = places.filter((p) => profile.visitedPlaceIds.includes(p.id));

  return (
    <div className="space-y-8">
      
      {/* J-Card Hero Preview */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        
        {/* The Digital J-Card */}
        <div className="w-full max-w-md mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#001D4A] via-[#002D72] to-[#0A479D] text-white shadow-2xl border-2 border-sky-400/40 overflow-hidden select-none transform transition-transform hover:scale-[1.01]">
            
            {/* Holographic foil line */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 via-sky-300/10 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Top JHU Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/20">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-hopkins-deep flex items-center justify-center font-black text-lg shadow-md">
                  JHU
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-sky-200 leading-none">
                    Johns Hopkins University
                  </h4>
                  <span className="text-[10px] text-blue-200/80 font-medium">
                    Charm City Explorer Pass
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black text-amber-300">
                <Sparkles className="w-3 h-3" />
                <span>{totalPoints} PTS</span>
              </div>
            </div>

            {/* Middle Card Body: Avatar & Student Credentials */}
            <div className="pt-6 flex items-start space-x-4">
              
              {/* Student Avatar */}
              <div className="relative">
                <div className="w-20 h-24 rounded-2xl bg-gradient-to-t from-sky-200 to-white flex items-center justify-center text-5xl shadow-lg ring-2 ring-white/30">
                  {profile.avatar}
                </div>
                <div className="absolute -bottom-2 inset-x-0 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-hopkins-deep text-sky-200 px-1.5 py-0.5 rounded border border-white/30">
                    {profile.campus}
                  </span>
                </div>
              </div>

              {/* Student Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-black text-white truncate tracking-tight">
                  {profile.studentName}
                </h3>
                <p className="text-xs text-sky-200 font-semibold truncate mt-0.5">
                  {profile.major}
                </p>
                <p className="text-[11px] text-blue-200/70 font-medium mt-0.5">
                  {profile.classYear} &bull; ID: {profile.jCardId}
                </p>

                {/* Verification Status on J-Card */}
                {profile.isVerified ? (
                  <div className="mt-1 flex items-center space-x-1 text-[11px] font-bold text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>JHU Verified &bull; {profile.jhedId || 'shopkin1'}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="mt-1 flex items-center space-x-1 text-[10px] font-bold text-amber-300 bg-amber-400/20 hover:bg-amber-400/30 px-2 py-0.5 rounded border border-amber-300/40 transition-colors"
                  >
                    <ShieldCheck className="w-3 h-3 text-amber-300" />
                    <span>Unverified Pass &bull; Verify JHU ID &rarr;</span>
                  </button>
                )}

                {/* Subrank Level Seal */}
                <div className="mt-3 inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-md font-black text-xs">
                  <span className="text-sm">{currentSubrank.insignia}</span>
                  <span className="truncate">{currentSubrank.subrankName}</span>
                </div>
              </div>

            </div>

            {/* Bottom: Barcode & Security Strip */}
            <div className="mt-7 pt-4 border-t border-white/15 flex items-center justify-between">
              <div>
                <div className="flex space-x-0.5 h-6 items-center opacity-85">
                  {[4, 2, 6, 1, 3, 5, 2, 7, 3, 2, 5, 1, 4, 3, 6, 2, 4, 1, 3].map((w, i) => (
                    <div
                      key={i}
                      className="bg-white"
                      style={{ width: `${w}px`, height: '100%' }}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-blue-200 uppercase mt-0.5 block">
                  AUTH #{profile.jCardId.replace('-', '')}942
                </span>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-300 block">
                  Rank Tier {currentRank.id}
                </span>
                <span className="text-xs font-black text-white">{currentRank.name}</span>
              </div>
            </div>

          </div>

          {/* Edit Profile Trigger */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-hopkins-heritage hover:text-blue-900 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Editing' : 'Customize Student J-Card'}</span>
            </button>
          </div>
        </div>

        {/* Profile Editor Panel (when opened) */}
        {isEditing && (
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-slate-200 animate-in fade-in">
            <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
              <Edit3 className="w-4 h-4 text-hopkins-heritage" />
              <span>Edit J-Card Credentials</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Student Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-hopkins-spirit outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Major / Degree</label>
                <input
                  type="text"
                  value={editMajor}
                  onChange={(e) => setEditMajor(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-hopkins-spirit outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Class / Year</label>
                  <input
                    type="text"
                    value={editYear}
                    onChange={(e) => setEditYear(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-hopkins-spirit outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Campus</label>
                  <select
                    value={editCampus}
                    onChange={(e) => setEditCampus(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-hopkins-spirit outline-none"
                  >
                    <option value="Homewood">Homewood</option>
                    <option value="Peabody">Peabody</option>
                    <option value="East Baltimore / Med">East Baltimore / Med</option>
                    <option value="Carey Harbor East">Carey Harbor East</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Choose Mascot Avatar</label>
                <div className="flex gap-2 text-2xl p-2 bg-slate-50 rounded-xl border border-slate-200">
                  {['🐦', '🦅', '🦉', '🦀', '🎓', '🔬', '🎨', '🚀'].map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setEditAvatar(em)}
                      className={`p-1.5 rounded-lg transition-transform ${
                        editAvatar === em ? 'bg-sky-200 scale-125' : 'hover:scale-110'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSaveProfile}
                  className="w-full py-2.5 bg-hopkins-heritage hover:bg-hopkins-deep text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save to J-Card</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Achievement Badges Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Baltimore Traveler Achievement Badges</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Unlock special pins by hitting exploration milestones across Charm City.
            </p>
          </div>
          <span className="text-xs font-bold text-hopkins-heritage bg-blue-50 px-3 py-1 rounded-full">
            {unlockedBadges.length} / {BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {BADGES.map((badge) => {
            const isUnlocked = unlockedBadges.some((b) => b.id === badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start space-x-3 ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-amber-50/50 via-white to-sky-50/30 border-amber-200 shadow-sm ring-1 ring-amber-200/50'
                    : 'bg-slate-50/50 border-slate-200 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-amber-300 to-amber-500 shadow-md ring-2 ring-white'
                      : 'bg-slate-200 text-slate-400 grayscale'
                  }`}
                >
                  {badge.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {badge.title}
                    </h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                        Earned
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {badge.description}
                  </p>
                  <span className="text-[11px] font-semibold text-slate-400 mt-1 block">
                    Requirement: {badge.requirement}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visited Passport History & Journal */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-hopkins-heritage" />
              <span>Visited Destinations & Travel Journal</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Your stamped passport of explored Baltimore neighborhoods and personal reflections.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            {visitedPlacesList.length} Stamped Locations
          </span>
        </div>

        {visitedPlacesList.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <span className="text-4xl block mb-2">🧭</span>
            <h4 className="text-sm font-bold text-slate-700">No Check-Ins Yet!</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Start exploring Charles Village, Hampden, Mount Vernon, or the Inner Harbor and check in to stamp your passport and rack up points!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {visitedPlacesList.map((place) => {
              const review = profile.placeReviews[place.id];

              return (
                <div
                  key={place.id}
                  className="p-4 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/30 to-white flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                        {place.neighborhood}
                      </span>
                      <h4
                        className="text-base font-bold text-slate-900 mt-1 cursor-pointer hover:text-hopkins-heritage"
                        onClick={() => setSelectedPlace(place)}
                      >
                        {place.name}
                      </h4>
                    </div>

                    <span className="px-2.5 py-1 bg-amber-400/20 text-amber-900 border border-amber-300 rounded-xl text-xs font-black">
                      +{place.points} PTS
                    </span>
                  </div>

                  {review && (
                    <div className="bg-white/80 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {review.date}
                        </span>
                        <span className="text-amber-500 font-bold">
                          {'★'.repeat(review.rating || 5)}
                        </span>
                      </div>
                      <p className="italic text-slate-700">"{review.notes}"</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-slate-400 truncate max-w-[200px]">
                      {place.address}
                    </span>
                    <button
                      onClick={() => setSelectedPlace(place)}
                      className="text-hopkins-heritage font-bold hover:underline"
                    >
                      View Lore &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
