import React, { useState } from 'react';
import { Sparkles, Trophy, ChevronRight, CheckCircle2, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RANKS, SUBRANKS } from '../data/ranksData';
import { CampusSkyline } from './art/CampusSkyline';
import { CuteMascot } from './art/CuteMascot';
import { MarylandRibbon } from './art/MarylandRibbon';
import { PaperAirplaneTrail } from './art/TravelDecorations';

export const RankProgressCard: React.FC = () => {
  const {
    totalPoints,
    currentRank,
    currentSubrank,
    nextSubrank,
    progressPercent,
    pointsToNext,
    profile,
    places,
  } = useApp();

  const [showRankLadder, setShowRankLadder] = useState(false);

  // Computed stats
  const visitedCount = profile.visitedPlaceIds.length;
  const totalPlaces = places.length;
  const completedQuestsCount = profile.completedQuestIds.length;

  return (
    <div className="bg-gradient-to-br from-white via-[#FFFDF9] to-blue-50/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-jhu border border-amber-200/60 relative overflow-hidden">
      
      {/* Top Maryland & Baltimore Ribbon Accent */}
      <div className="absolute top-0 inset-x-0">
        <MarylandRibbon height={3} />
      </div>

      {/* Subtle background Gilman Hall & Campus Skyline Watermark */}
      <CampusSkyline
        className="absolute -bottom-2 inset-x-0 text-hopkins-heritage"
        opacity={0.10}
      />
      
      {/* Radial ambient glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-gradient-to-br from-hopkins-spirit/15 to-transparent pointer-events-none blur-2xl" />

      <div className="relative z-10">
        
        {/* Top Header: Current Rank Badge, Chibi Mascot & Point Counter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-amber-200/60">
          
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-hopkins-deep to-hopkins-heritage flex items-center justify-center text-2xl sm:text-4xl shadow-lg ring-2 sm:ring-4 ring-white shadow-blue-900/15 flex-shrink-0">
              {currentSubrank.insignia}
            </div>

            {/* Chibi Baby Jay Explorer Mascot Accent */}
            <div className="hidden sm:block flex-shrink-0">
              <CuteMascot pose="explorer" size={78} bubbleText="Ready to explore!" />
            </div>

            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-hopkins-heritage text-white flex items-center space-x-1">
                  <span>🧭</span>
                  <span>Rank {currentRank.id}: {currentRank.name}</span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-500">
                  Lv {currentSubrank.levelNumber} of 15
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                {currentSubrank.subrankName}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 italic mt-0.5 max-w-xl line-clamp-2 sm:line-clamp-none">
                "{currentSubrank.flavorText}"
              </p>
            </div>
          </div>

          {/* Points display */}
          <div className="bg-white px-5 py-4 rounded-2xl border border-slate-200 shadow-sm flex md:flex-col items-center justify-between md:items-end min-w-[180px]">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Points
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-3xl sm:text-4xl font-black text-hopkins-heritage">
                {totalPoints}
              </span>
              <span className="text-sm font-bold text-slate-400">PTS</span>
            </div>
            {profile.bonusPoints > 0 && (
              <span className="text-[11px] font-semibold text-emerald-600">
                +{profile.bonusPoints} bonus quest pts
              </span>
            )}
          </div>

        </div>

        {/* Progress Bar & Next Level */}
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
            <div className="flex items-center space-x-2 text-slate-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                Flight Path to{' '}
                <strong className="text-slate-900 font-black">
                  {nextSubrank ? nextSubrank.subrankName : 'Maximum Laureate Honor!'}
                </strong>
              </span>
              <PaperAirplaneTrail className="hidden sm:inline-flex" />
            </div>
            <div className="text-slate-500">
              {nextSubrank ? (
                <span>
                  <strong className="text-hopkins-heritage">{pointsToNext} travel pts</strong> to rank up!
                </span>
              ) : (
                <span className="text-emerald-600 font-bold">Max Level Achieved!</span>
              )}
            </div>
          </div>

          {/* Bar track styled like flight journey */}
          <div className="w-full h-4 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-amber-200/70 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-hopkins-heritage transition-all duration-700 ease-out relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute inset-0 bg-white/25 animate-pulse" />
            </div>
          </div>

          {/* Perks & Unlock Preview */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3 flex items-start space-x-2.5 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-900">Active Traveler Perk:</span>
                <p className="text-emerald-800 mt-0.5">{currentSubrank.unlockedPerk}</p>
              </div>
            </div>

            {nextSubrank ? (
              <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-3 flex items-start space-x-2.5 shadow-2xs">
                <Trophy className="w-4 h-4 text-hopkins-heritage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-hopkins-deep">
                    Next Perk Unlock ({nextSubrank.minPoints} pts):
                  </span>
                  <p className="text-blue-900 mt-0.5">{nextSubrank.unlockedPerk}</p>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 flex items-start space-x-2.5 shadow-2xs">
                <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-900">Grand Laureate:</span>
                  <p className="text-amber-800 mt-0.5">
                    You have unlocked all traveler perks across Johns Hopkins & Baltimore!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cutesy Quick Stats Grid */}
        <div className="mt-6 pt-6 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-200/80 shadow-xs">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block flex items-center space-x-1">
              <span>🗺️</span>
              <span>Passport Stamps</span>
            </span>
            <div className="text-xl font-black text-slate-900 mt-1">
              {visitedCount} <span className="text-xs font-semibold text-slate-400">/ {totalPlaces}</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-bold mt-0.5">
              {Math.round((visitedCount / totalPlaces) * 100)}% Charm City
            </div>
          </div>

          <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-200/80 shadow-xs">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block flex items-center space-x-1">
              <span>🎒</span>
              <span>Expeditions</span>
            </span>
            <div className="text-xl font-black text-slate-900 mt-1">
              {completedQuestsCount} <span className="text-xs font-semibold text-slate-400">/ 6</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Quests completed
            </div>
          </div>

          <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-200/80 shadow-xs">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block flex items-center space-x-1">
              <span>🏛️</span>
              <span>Homebase</span>
            </span>
            <div className="text-base font-black text-hopkins-heritage truncate mt-1">
              {profile.campus}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 truncate">
              {profile.classYear}
            </div>
          </div>

          <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-200/80 shadow-xs">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block flex items-center space-x-1">
              <span>⭐</span>
              <span>Travel Level</span>
            </span>
            <div className="text-base font-black text-amber-800 truncate mt-1">
              Lv {currentSubrank.levelNumber} &bull; {currentRank.name}
            </div>
            <div className="text-[11px] text-emerald-600 font-bold mt-0.5 flex items-center space-x-1">
              <span>● {profile.jCardId}</span>
            </div>
          </div>

        </div>

        {/* Toggle Full Rank Ladder Hierarchy */}
        <div className="mt-5 text-center">
          <button
            onClick={() => setShowRankLadder(!showRankLadder)}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-hopkins-heritage hover:text-blue-800 transition-colors py-1 px-3 rounded-lg hover:bg-blue-100/50"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showRankLadder ? 'Hide Full 15-Subrank Ladder' : 'View All 15 Baltimore Traveler Ranks & Perks'}</span>
            {showRankLadder ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Rank Ladder Dropdown */}
        {showRankLadder && (
          <div className="mt-4 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-inner space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Hopkins &bull; Baltimore Traveler Rank Progression (15 Subranks)
            </h4>

            <div className="space-y-3">
              {RANKS.map((rank) => {
                const isCurrentMajorRank = currentRank.id === rank.id;
                const isCompletedRank = totalPoints > rank.maxPoints;

                return (
                  <div
                    key={rank.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isCurrentMajorRank
                        ? 'border-hopkins-spirit bg-sky-50/50 ring-2 ring-hopkins-spirit/30'
                        : isCompletedRank
                        ? 'border-emerald-200 bg-emerald-50/30'
                        : 'border-slate-200 bg-slate-50/50 opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-2xl">{rank.badgeIcon}</span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Rank {rank.id}
                          </span>
                          <h5 className="text-base font-bold text-slate-900">{rank.name}</h5>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                        {rank.minPoints} - {rank.maxPoints >= 99999 ? '∞' : `${rank.maxPoints} pts`}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {rank.subranks.map((sub) => {
                        const isCurrentSub = currentSubrank.id === sub.id;
                        const isUnlockedSub = totalPoints >= sub.minPoints;

                        return (
                          <div
                            key={sub.id}
                            className={`p-2 rounded-lg border ${
                              isCurrentSub
                                ? 'bg-white border-hopkins-heritage font-bold shadow-sm'
                                : isUnlockedSub
                                ? 'bg-white/60 border-emerald-200 text-slate-700'
                                : 'bg-white/40 border-slate-200 text-slate-400'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span>
                                {sub.insignia} {sub.subrankName}
                              </span>
                              <span className="text-[10px] font-semibold">{sub.minPoints}p</span>
                            </div>
                            <p className="text-[11px] font-normal line-clamp-1">{sub.unlockedPerk}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
