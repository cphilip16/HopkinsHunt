import React, { useState } from 'react';
import { Sparkles, Trophy, ChevronRight, CheckCircle2, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RANKS, SUBRANKS } from '../data/ranksData';

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
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/40 rounded-3xl p-6 sm:p-8 shadow-jhu border border-blue-100 relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-gradient-to-br from-hopkins-spirit/10 to-transparent pointer-events-none blur-2xl" />

      <div className="relative z-10">
        
        {/* Top Header: Current Rank Badge & Point Counter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-hopkins-deep to-hopkins-heritage flex items-center justify-center text-3xl sm:text-4xl shadow-lg ring-4 ring-white shadow-blue-900/15 flex-shrink-0">
              {currentSubrank.insignia}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-hopkins-heritage text-white">
                  Rank {currentRank.id}: {currentRank.name}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Subrank Lv {currentSubrank.levelNumber} of 15
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                {currentSubrank.subrankName}
              </h2>

              <p className="text-sm text-slate-600 italic mt-0.5 max-w-xl">
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
            <div className="flex items-center space-x-1.5 text-slate-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                Progress to{' '}
                <strong className="text-slate-900">
                  {nextSubrank ? nextSubrank.subrankName : 'Maximum Laureate Honor!'}
                </strong>
              </span>
            </div>
            <div className="text-slate-500">
              {nextSubrank ? (
                <span>
                  <strong className="text-hopkins-heritage">{pointsToNext} pts</strong> needed
                </span>
              ) : (
                <span className="text-emerald-600 font-bold">Max Level Achieved!</span>
              )}
            </div>
          </div>

          {/* Bar track */}
          <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-hopkins-spirit via-blue-500 to-hopkins-heritage transition-all duration-700 ease-out relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>

          {/* Perks & Unlock Preview */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-900">Current Level Perk:</span>
                <p className="text-emerald-800 mt-0.5">{currentSubrank.unlockedPerk}</p>
              </div>
            </div>

            {nextSubrank ? (
              <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-3 flex items-start space-x-2.5">
                <Trophy className="w-4 h-4 text-hopkins-heritage flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-hopkins-deep">
                    Next Unlock ({nextSubrank.minPoints} pts):
                  </span>
                  <p className="text-blue-900 mt-0.5">{nextSubrank.unlockedPerk}</p>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-start space-x-2.5">
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

        {/* Quick Stats Grid */}
        <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          <div className="bg-white/80 p-3 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Explored
            </span>
            <div className="text-xl font-black text-slate-900 mt-0.5">
              {visitedCount} <span className="text-xs font-semibold text-slate-400">/ {totalPlaces}</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {Math.round((visitedCount / totalPlaces) * 100)}% of Baltimore
            </div>
          </div>

          <div className="bg-white/80 p-3 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Student Quests
            </span>
            <div className="text-xl font-black text-slate-900 mt-0.5">
              {completedQuestsCount} <span className="text-xs font-semibold text-slate-400">/ 6</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Multi-spot journeys
            </div>
          </div>

          <div className="bg-white/80 p-3 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Campus Affiliation
            </span>
            <div className="text-base font-bold text-hopkins-heritage truncate mt-0.5">
              {profile.campus}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {profile.classYear}
            </div>
          </div>

          <div className="bg-white/80 p-3 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              J-Card Explorer ID
            </span>
            <div className="text-sm font-mono font-bold text-slate-800 mt-0.5">
              {profile.jCardId}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5 flex items-center space-x-1">
              <span>● Active Traveler</span>
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
