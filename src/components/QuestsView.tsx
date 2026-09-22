import React from 'react';
import { Award, Check, Sparkles, MapPin, ChevronRight, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Quest } from '../types';
import { CuteMascot } from './art/CuteMascot';
import { MarylandRibbon } from './art/MarylandRibbon';
import { WashiTape } from './art/TravelDecorations';
import { PassportStamp } from './art/PassportStamp';
import {
  CompassRoseSticker,
  LuggageAirmailSticker,
  BabyJaySticker,
  TreasureChestSticker,
  HopkinsShuttleSticker,
  HotAirBalloonSticker,
  BookStackSticker,
  StarSpangledFlagSticker,
  MarylandCrabSticker,
} from './art/AnimatedStickers';
import { QuestIconArt } from './art/VectorArt';

export const QuestsView: React.FC = () => {
  const { quests, places, profile, toggleCheckIn, setSelectedPlace } = useApp();

  const getQuestSticker = (quest: Quest, isCompleted: boolean) => {
    if (isCompleted) {
      return <TreasureChestSticker size={26} />;
    }
    if (quest.id === 'quest-hopkins-triangle') {
      return <HopkinsShuttleSticker size={24} />;
    }
    if (quest.id === 'quest-peabody-culture') {
      return <BookStackSticker size={24} />;
    }
    if (quest.id === 'quest-star-spangled') {
      return <StarSpangledFlagSticker size={24} />;
    }
    if (quest.id === 'quest-fells-point-flavor') {
      return <MarylandCrabSticker size={24} />;
    }
    if (quest.difficulty === 'Easy') {
      return <HotAirBalloonSticker size={24} />;
    }
    return <LuggageAirmailSticker size={24} />;
  };

  const getQuestCardBg = (difficulty: string, completed: boolean) => {
    if (completed) {
      return 'bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/40 border-2 border-emerald-400 ring-2 ring-emerald-300/60 shadow-emerald-500/15';
    }
    switch (difficulty) {
      case 'Easy':
        return 'bg-gradient-to-br from-sky-50 via-blue-50/60 to-indigo-50/40 border-2 border-sky-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10';
      case 'Moderate':
        return 'bg-gradient-to-br from-amber-50 via-yellow-50/60 to-orange-50/40 border-2 border-amber-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10';
      case 'Legendary':
      case 'Hard':
        return 'bg-gradient-to-br from-purple-50 via-fuchsia-50/60 to-pink-50/40 border-2 border-purple-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10';
      default:
        return 'bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border-2 border-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Quests Header */}
      <div className="bg-gradient-to-r from-blue-900 via-hopkins-heritage to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Top Maryland Accent Strip */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={3} />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-hopkins-deep mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bonus Travel Expeditions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Hopkins Explorer Quests
          </h2>
          <p className="text-sm text-blue-100/90 mt-2 leading-relaxed">
            Curated journeys that take you beyond Homewood. Complete all destinations in an expedition to unlock massive bonus point multipliers and collectible J-Card passport pins!
          </p>
        </div>

        {/* Cute Baby Jay Explorer Mascot Art + Treasure Chest Backdrop */}
        <div className="absolute right-4 -bottom-2 pointer-events-none hidden sm:flex items-end space-x-2">
          <TreasureChestSticker size={76} className="transform -rotate-6 filter drop-shadow-xl mb-1" />
          <CuteMascot
            pose="explorer"
            size={120}
            speechBubble="Let's go explore Bmore!"
            className="transform -rotate-3 drop-shadow-xl"
          />
        </div>
      </div>

      {/* Quests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quests.map((quest) => {
          const questPlaces = quest.placeIds
            .map((id) => places.find((p) => p.id === id))
            .filter(Boolean);

          const completedCount = quest.placeIds.filter((id) =>
            profile.visitedPlaceIds.includes(id)
          ).length;

          const isCompleted = completedCount === quest.placeIds.length;
          const progressPercent = Math.round((completedCount / quest.placeIds.length) * 100);

          const tapeColor = quest.difficulty === 'Easy' ? 'teal' : quest.difficulty === 'Moderate' ? 'amber' : 'rose';

          return (
            <div
              key={quest.id}
              className={`relative rounded-3xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-card-high hover:-translate-y-1 pt-6 ${getQuestCardBg(quest.difficulty, isCompleted)}`}
            >
              {/* Top Washi Tape Scrapbook Accent */}
              <WashiTape color={tapeColor as any} angle={quest.difficulty === 'Easy' ? -2 : quest.difficulty === 'Moderate' ? 1.5 : -1.5} className="-top-3 left-8 z-20" />

              {/* Rubber Passport Stamp on Completion with Tactile Slam Animation */}
              {isCompleted && (
                <div className="absolute top-1 right-2 sm:right-4 pointer-events-none z-20 scale-75 transform rotate-6">
                  <PassportStamp
                    neighborhood="COMPLETED"
                    visitedDate="EXPEDITION CLEARED"
                    color="emerald"
                    animate={true}
                  />
                </div>
              )}

              <div>
                {/* Header: Icon, Title & Bonus Points */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="p-1.5 rounded-2xl bg-slate-100 flex-shrink-0 flex items-center justify-center">
                        <QuestIconArt questId={quest.id} icon={quest.icon} size={42} />
                      </div>
                      {/* Animated Micro Sticker */}
                      <div className="absolute -bottom-2.5 -right-2.5">
                        {getQuestSticker(quest, isCompleted)}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            quest.difficulty === 'Easy'
                              ? 'bg-sky-100 text-sky-800'
                              : quest.difficulty === 'Moderate'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {quest.difficulty}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500 text-white flex items-center space-x-1">
                            <Check className="w-2.5 h-2.5" />
                            <span>Completed!</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 mt-1 leading-snug">
                        {quest.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-amber-400/20 text-amber-900 border border-amber-300 text-xs font-black">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>+{quest.bonusPoints} PTS</span>
                    </div>
                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">
                      Bonus Reward
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {quest.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <div className="flex items-center justify-between text-xs font-black mb-1.5">
                    <span className="text-slate-700">
                      Expedition Progress: {completedCount} / {quest.placeIds.length} spots
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'}`}>
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/80 border border-slate-200/90 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-500 shadow-xs ${
                        isCompleted
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                          : 'bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Places checklist */}
                <div className="mt-4 space-y-2">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    Required Locations
                  </span>
                  <div className="space-y-1.5">
                    {questPlaces.map((place) => {
                      if (!place) return null;
                      const placeVisited = profile.visitedPlaceIds.includes(place.id);

                      return (
                        <div
                          key={place.id}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs border transition-all ${
                            placeVisited
                              ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950 font-bold shadow-2xs'
                              : 'bg-white/90 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 shadow-2xs'
                          }`}
                        >
                          <div
                            className="flex items-center space-x-2 cursor-pointer hover:underline flex-1"
                            onClick={() => setSelectedPlace(place)}
                          >
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${
                                placeVisited
                                  ? 'bg-emerald-500 text-white'
                                  : 'border border-slate-300 bg-white'
                              }`}
                            >
                              {placeVisited ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : null}
                            </div>
                            <span className="truncate">{place.name}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-[11px] font-bold text-slate-500">
                              +{place.points}p
                            </span>
                            <button
                              onClick={() => toggleCheckIn(place.id)}
                              className={`px-3 py-1.5 min-h-[34px] flex items-center justify-center rounded-lg text-[10px] font-extrabold ${
                                placeVisited
                                  ? 'bg-emerald-200/70 text-emerald-800'
                                  : 'bg-hopkins-heritage text-white hover:bg-hopkins-deep'
                              }`}
                            >
                              {placeVisited ? 'Done' : 'Check In'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Reward Badge Pin Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>
                    Pin Reward: <strong className="text-slate-800">{quest.badgeReward}</strong>
                  </span>
                </div>
                {isCompleted ? (
                  <div className="flex items-center space-x-1.5 text-emerald-600 font-bold">
                    <TreasureChestSticker size={18} />
                    <span>Awarded to J-Card!</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md font-medium">
                    +{quest.bonusPoints} bonus pts
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
