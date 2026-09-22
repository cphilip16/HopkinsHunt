import React, { useState } from 'react';
import { Sparkles, Trophy, ChevronRight, CheckCircle2, Info, ChevronDown, ChevronUp, Compass, Map, Briefcase, Landmark, Award, X, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RANKS, SUBRANKS } from '../data/ranksData';
import { CampusSkyline } from './art/CampusSkyline';
import { CuteMascot } from './art/CuteMascot';
import { MarylandRibbon } from './art/MarylandRibbon';
import { PaperAirplaneTrail } from './art/TravelDecorations';
import { RankInsigniaArt, RankBadgeArt } from './art/VectorArt';
import { HoppyMascot } from './HoppyMascot';

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

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showExtendedStats, setShowExtendedStats] = useState(false);
  const [inspectingSubrank, setInspectingSubrank] = useState<(typeof SUBRANKS)[0] | null>(null);
  const [inspectingRank, setInspectingRank] = useState<(typeof RANKS)[0] | null>(null);

  // Computed stats
  const visitedCount = profile.visitedPlaceIds.length;
  const totalPlaces = places.length;
  const completedQuestsCount = profile.completedQuestIds.length;

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-sky-200 relative overflow-hidden transition-all ${
        isCollapsed ? 'p-3.5 sm:p-4' : 'p-4 sm:p-6'
      }`}
    >
      {/* Light Blue Accent Top Trim */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400" />

      {!isCollapsed && (
        <>
          {/* Subtle background Gilman Hall & Campus Skyline Watermark */}
          <CampusSkyline
            className="absolute -bottom-2 inset-x-0 text-hopkins-heritage"
            opacity={0.08}
          />

          {/* Radial ambient glows */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-transparent pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/10 to-transparent pointer-events-none blur-3xl" />
        </>
      )}

      {/* When Collapsed: Minimal 1-row summary */}
      {isCollapsed ? (
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="relative flex items-center flex-shrink-0">
              <button
                type="button"
                onClick={() => setInspectingRank(currentRank)}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-hopkins-deep via-hopkins-heritage to-blue-900 flex items-center justify-center p-1.5 shadow-md ring-2 ring-amber-300 hover:scale-105 transition-transform cursor-pointer"
                title={`Click to inspect Rank ${currentRank.id}: ${currentRank.name} Crest`}
              >
                <RankBadgeArt rankId={currentRank.id} size={28} />
              </button>
              <button
                type="button"
                onClick={() => setInspectingSubrank(currentSubrank)}
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow-xs border border-amber-400 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                title={`Click to inspect Level ${currentSubrank.levelNumber}: ${currentSubrank.subrankName} Insignia`}
              >
                <RankInsigniaArt insignia={currentSubrank.insignia} id={currentSubrank.id} size={14} />
              </button>
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  Lv {currentSubrank.levelNumber} &bull; {currentSubrank.subrankName}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Rank {currentRank.id}: {currentRank.name}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-0.5">
                <div className="w-20 sm:w-36 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 via-blue-600 to-amber-400 rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-500 truncate">
                  {nextSubrank ? `${pointsToNext} pts to rank up` : 'Max Level'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="text-right">
              <div className="text-sm sm:text-base font-black text-hopkins-deep">
                {totalPoints} <span className="text-[10px] text-amber-700">PTS</span>
              </div>
            </div>
            <button
              onClick={() => setIsCollapsed(false)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-bold transition-all shadow-2xs hover:border-amber-300"
              title="Expand Full Rank Progress Card"
            >
              <span>Expand</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>
      ) : (
        /* Full Expanded View */
        <div className="relative z-10">
          
          {/* Top Header: Current Rank Badge, Hoppy Mascot, Point Counter & Minimize */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-sky-100">
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Major Rank Crest with Subrank Milestone Pin Overlay */}
              <div className="relative flex items-center flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setInspectingRank(currentRank)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#002D72] to-sky-700 flex items-center justify-center p-2 shadow-md ring-2 sm:ring-4 ring-sky-200 hover:scale-105 transition-all cursor-pointer focus:outline-none"
                  title={`Click to inspect Rank ${currentRank.id}: ${currentRank.name} Crest`}
                >
                  <RankBadgeArt rankId={currentRank.id} size={54} />
                </button>

                {/* Subrank Milestone Pin Overlay */}
                <button
                  type="button"
                  onClick={() => setInspectingSubrank(currentSubrank)}
                  className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-sm border-2 border-sky-300 flex items-center justify-center p-0.5 z-10 hover:scale-110 transition-all cursor-pointer focus:outline-none"
                  title={`Click to inspect Level ${currentSubrank.levelNumber}: ${currentSubrank.subrankName} Insignia`}
                >
                  <RankInsigniaArt insignia={currentSubrank.insignia} id={currentSubrank.id} size={26} />
                </button>
              </div>

              {/* Interactive Hoppy Mascot Accent */}
              <div className="hidden sm:block flex-shrink-0">
                <HoppyMascot size="md" showSpeechBubble={true} />
              </div>

              <div>
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#002D72] text-white flex items-center space-x-1.5 shadow-xs font-bubbly">
                    <Compass className="w-3.5 h-3.5 text-sky-300" />
                    <span>Rank {currentRank.id}: {currentRank.name}</span>
                  </span>
                  <span className="text-[11px] sm:text-xs font-black px-2 py-0.5 rounded-full bg-sky-100 text-[#002D72] border border-sky-200 font-bubbly">
                    Lv {currentSubrank.levelNumber} of 15
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#002D72] mt-1 tracking-tight font-bubbly">
                  {currentSubrank.subrankName}
                </h2>

                <p className="text-xs text-slate-500 italic mt-0.5 max-w-lg line-clamp-1 font-medium">
                  "{currentSubrank.flavorText}"
                </p>
              </div>
            </div>

            {/* Points display & Minimize button */}
            <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
              <button
                onClick={() => setIsCollapsed(true)}
                className="inline-flex items-center space-x-1 text-[11px] font-bold text-slate-500 hover:text-[#002D72] bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-xl border border-sky-200 transition-all order-2 md:order-1 font-bubbly"
                title="Minimize banner"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Minimize</span>
              </button>

              <div className="bg-sky-50/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl border border-sky-200 shadow-xs flex items-center md:flex-col md:items-end justify-between min-w-[150px] sm:min-w-[170px] order-1 md:order-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 flex items-center space-x-1 font-bubbly">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  <span>Exploration Score</span>
                </span>
                <div className="flex items-baseline space-x-1.5 ml-2 md:ml-0">
                  <span className="text-2xl sm:text-3xl font-black text-[#002D72] font-bubbly">
                    {totalPoints}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-sky-700">PTS</span>
                </div>
                {profile.bonusPoints > 0 && (
                  <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.2 rounded-full mt-0.5">
                    +{profile.bonusPoints} bonus pts
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Progress Bar & Next Level */}
          <div className="pt-4">
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
              <div className="text-slate-500 text-xs">
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
            <div className="w-full h-3 sm:h-4 bg-slate-200/90 rounded-full overflow-hidden p-0.5 border-2 border-amber-300/80 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-amber-400 transition-all duration-700 ease-out relative shadow-sm"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Perks & Unlock Preview */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/50 border border-emerald-300 rounded-xl p-2.5 flex items-start space-x-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-black text-emerald-950 block text-[11px]">Active Traveler Perk:</span>
                  <p className="text-emerald-900 font-medium truncate text-xs">{currentSubrank.unlockedPerk}</p>
                </div>
              </div>

              {nextSubrank ? (
                <div className="bg-gradient-to-br from-sky-50 via-blue-50/60 to-indigo-100/50 border border-sky-300 rounded-xl p-2.5 flex items-start space-x-2 shadow-2xs">
                  <Trophy className="w-4 h-4 text-hopkins-heritage flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="font-black text-hopkins-deep block text-[11px]">
                      Next Perk ({nextSubrank.minPoints} pts):
                    </span>
                    <p className="text-blue-900 font-medium truncate text-xs">{nextSubrank.unlockedPerk}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-amber-50 via-yellow-50/60 to-amber-100/50 border border-amber-300 rounded-xl p-2.5 flex items-start space-x-2 shadow-2xs">
                  <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-amber-950 block text-[11px]">Grand Laureate:</span>
                    <p className="text-amber-900 font-medium text-xs">All perks unlocked!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats Bar & Expand Details Toggle */}
          <div className="mt-4 pt-3 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2.5 text-slate-600 font-semibold flex-wrap">
              <span className="flex items-center gap-1 text-blue-900">
                <Map className="w-3.5 h-3.5 text-blue-600" />
                <span>{visitedCount}/{totalPlaces} Stamps ({Math.round((visitedCount / totalPlaces) * 100)}%)</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-amber-900">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span>{completedQuestsCount}/6 Quests</span>
              </span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-emerald-900">
                <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                <span>{profile.campus}</span>
              </span>
            </div>

            <button
              onClick={() => setShowExtendedStats(!showExtendedStats)}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-hopkins-heritage hover:text-blue-900 transition-colors py-1 px-3 rounded-xl hover:bg-blue-100/50 bg-white/80 border border-blue-200/90 shadow-2xs"
            >
              <Info className="w-3.5 h-3.5 text-hopkins-heritage" />
              <span>{showExtendedStats ? 'Hide Stats & Rank Ladder' : 'View Full Stats & All 15 Ranks'}</span>
              {showExtendedStats ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Collapsible Stats & Rank Ladder Drawer */}
          {showExtendedStats && (
            <div className="mt-4 space-y-4 animate-in fade-in">
              {/* 4 Jewel-Toned Quick Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gradient-to-br from-blue-50/90 via-sky-50/80 to-indigo-100/60 p-3.5 rounded-2xl border-2 border-blue-200/90 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] font-black text-blue-900 uppercase tracking-wider block flex items-center space-x-1.5">
                    <Map className="w-3.5 h-3.5 text-blue-600" />
                    <span>Passport Stamps</span>
                  </span>
                  <div className="text-xl font-black text-blue-950 mt-1">
                    {visitedCount} <span className="text-xs font-semibold text-blue-600">/ {totalPlaces}</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-0.5">
                    {Math.round((visitedCount / totalPlaces) * 100)}% Charm City
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50/90 via-yellow-50/80 to-orange-100/60 p-3.5 rounded-2xl border-2 border-amber-200/90 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider block flex items-center space-x-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                    <span>Expeditions</span>
                  </span>
                  <div className="text-xl font-black text-amber-950 mt-1">
                    {completedQuestsCount} <span className="text-xs font-semibold text-amber-600">/ 6</span>
                  </div>
                  <div className="text-[11px] text-amber-800 font-bold mt-0.5">
                    Quests completed
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/80 to-green-100/60 p-3.5 rounded-2xl border-2 border-emerald-200/90 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] font-black text-emerald-900 uppercase tracking-wider block flex items-center space-x-1.5">
                    <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Homebase</span>
                  </span>
                  <div className="text-base font-black text-emerald-950 truncate mt-1">
                    {profile.campus}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-0.5 truncate">
                    {profile.classYear}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50/90 via-fuchsia-50/80 to-pink-100/60 p-3.5 rounded-2xl border-2 border-purple-200/90 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] font-black text-purple-900 uppercase tracking-wider block flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-600" />
                    <span>Travel Level</span>
                  </span>
                  <div className="text-base font-black text-purple-950 truncate mt-1">
                    Lv {currentSubrank.levelNumber} &bull; {currentRank.name}
                  </div>
                  <div className="text-[11px] text-purple-700 font-bold mt-0.5 flex items-center space-x-1">
                    <span>● {profile.jCardId}</span>
                  </div>
                </div>
              </div>

              {/* Rank Ladder Dropdown Container */}
              <div className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-inner space-y-4">
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
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => setInspectingRank(rank)}
                          className="w-12 h-12 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center justify-center p-1 flex-shrink-0 hover:scale-105 transition-transform cursor-pointer focus:outline-none"
                          title={`Click to inspect ${rank.name} Crest`}
                        >
                          <RankBadgeArt rankId={rank.id} size={40} />
                        </button>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Rank {rank.id}
                          </span>
                          <h5 className="text-base font-bold text-slate-900">{rank.name}</h5>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 shadow-xs">
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
                            onClick={() => setInspectingSubrank(sub)}
                            className={`p-2.5 rounded-xl border transition-all cursor-pointer hover:scale-[1.02] ${
                              isCurrentSub
                                ? 'bg-white border-hopkins-heritage font-bold shadow-sm ring-1 ring-hopkins-heritage/30'
                                : isUnlockedSub
                                ? 'bg-white/80 border-emerald-200 text-slate-700 hover:bg-white hover:border-emerald-300'
                                : 'bg-white/40 border-slate-200 text-slate-400 hover:bg-white/70'
                            }`}
                            title={`Click to inspect ${sub.subrankName}`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center space-x-2 truncate">
                                <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-200/60 shadow-xs">
                                  <RankInsigniaArt insignia={sub.insignia} id={sub.id} size={20} />
                                </div>
                                <span className="truncate font-bold">{sub.subrankName}</span>
                              </span>
                              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">{sub.minPoints}p</span>
                            </div>
                            <p className="text-[11px] font-normal line-clamp-1 text-slate-600">{sub.unlockedPerk}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

        </div>
      )}

      {/* Subrank Inspection Modal */}
      {inspectingSubrank && (
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setInspectingSubrank(null)}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-amber-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative top ribbon */}
              <div className="absolute top-0 inset-x-0">
                <MarylandRibbon height={3} />
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setInspectingSubrank(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mt-2">
                {/* Large Insignia Badge */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-hopkins-deep via-hopkins-heritage to-slate-900 flex items-center justify-center p-3 shadow-xl ring-4 ring-amber-300 shadow-blue-900/20 mx-auto">
                  <RankInsigniaArt insignia={inspectingSubrank.insignia} id={inspectingSubrank.id} size={92} />
                </div>

                <div className="mt-4 flex items-center justify-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-hopkins-heritage text-white">
                    {inspectingSubrank.parentRankName}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Level {inspectingSubrank.levelNumber} of 15
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-2 tracking-tight">
                  {inspectingSubrank.subrankName}
                </h3>

                {/* Status and point requirement */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{inspectingSubrank.minPoints} {inspectingSubrank.maxPoints >= 99999 ? '+ pts' : `to ${inspectingSubrank.maxPoints} pts`}</span>
                  </span>
                  {totalPoints >= inspectingSubrank.minPoints ? (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Unlocked</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Locked ({inspectingSubrank.minPoints - totalPoints} pts needed)</span>
                    </span>
                  )}
                </div>

                {/* Lore / Flavor Text */}
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-left">
                  <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                    "{inspectingSubrank.flavorText}"
                  </p>
                </div>

                {/* Perk */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Unlocked Perk
                  </span>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    {inspectingSubrank.unlockedPerk}
                  </p>
                </div>

                {/* Close action */}
                <button
                  type="button"
                  onClick={() => setInspectingSubrank(null)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-hopkins-heritage hover:bg-hopkins-deep text-white font-bold text-sm shadow-md transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Major Rank Crest Inspection Modal */}
        {inspectingRank && (
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setInspectingRank(null)}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-amber-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 inset-x-0">
                <MarylandRibbon height={3} />
              </div>

              <button
                type="button"
                onClick={() => setInspectingRank(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mt-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-hopkins-deep via-hopkins-heritage to-slate-900 flex items-center justify-center p-3 shadow-xl ring-4 ring-amber-300 shadow-blue-900/20 mx-auto">
                  <RankBadgeArt rankId={inspectingRank.id} size={104} />
                </div>

                <span className="inline-block mt-4 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-hopkins-heritage text-white">
                  Rank {inspectingRank.id} of 5
                </span>

                <h3 className="text-2xl font-black text-slate-900 mt-2 tracking-tight">
                  {inspectingRank.name}
                </h3>

                <p className="text-xs text-slate-500 font-semibold mt-1">
                  Point Range: {inspectingRank.minPoints} - {inspectingRank.maxPoints >= 99999 ? '∞' : `${inspectingRank.maxPoints} pts`}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Rank Subranks (3 Tiers)
                  </span>
                  <div className="space-y-1.5 mt-2">
                    {inspectingRank.subranks.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={() => {
                          setInspectingRank(null);
                          setInspectingSubrank(sub);
                        }}
                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 hover:border-hopkins-heritage cursor-pointer transition-all"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <div className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                            <RankInsigniaArt insignia={sub.insignia} id={sub.id} size={18} />
                          </div>
                          <span className="text-xs font-bold text-slate-800 truncate">{sub.subrankName}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded flex-shrink-0">
                          {sub.minPoints}p
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectingRank(null)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-hopkins-heritage hover:bg-hopkins-deep text-white font-bold text-sm shadow-md transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

    </div>
  );
};
