import React from 'react';
import { Award, Check, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Quest } from '../types';

export const QuestsView: React.FC = () => {
  const { quests, places, profile, toggleCheckIn, setSelectedPlace } = useApp();

  return (
    <div className="space-y-6">
      
      {/* Quests Header */}
      <div className="bg-gradient-to-r from-blue-900 via-hopkins-heritage to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-hopkins-deep mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bonus Travel Expeditions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Hopkins Explorer Quests
          </h2>
          <p className="text-sm text-blue-100/90 mt-2 leading-relaxed">
            Curated journeys that take you beyond Homewood. Complete all destinations in an expedition to unlock massive bonus point multipliers and prestigious J-Card badge pins!
          </p>
        </div>

        <div className="absolute top-0 right-0 -mt-10 -mr-10 text-9xl opacity-10 pointer-events-none select-none">
          🧭
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

          return (
            <div
              key={quest.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg ${
                isCompleted
                  ? 'bg-gradient-to-br from-emerald-50/50 via-white to-sky-50/30 border-emerald-300 ring-2 ring-emerald-200'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div>
                {/* Header: Icon, Title & Bonus Points */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-slate-100 flex-shrink-0">
                      {quest.icon}
                    </span>
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
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600">
                      Expedition Progress: {completedCount} / {quest.placeIds.length} spots
                    </span>
                    <span className={isCompleted ? 'text-emerald-600' : 'text-hopkins-heritage'}>
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted
                          ? 'bg-emerald-500'
                          : 'bg-gradient-to-r from-hopkins-spirit to-hopkins-heritage'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Places checklist */}
                <div className="mt-4 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Required Locations
                  </span>
                  <div className="space-y-1.5">
                    {questPlaces.map((place) => {
                      if (!place) return null;
                      const placeVisited = profile.visitedPlaceIds.includes(place.id);

                      return (
                        <div
                          key={place.id}
                          className={`flex items-center justify-between p-2 rounded-xl text-xs border transition-all ${
                            placeVisited
                              ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900 font-semibold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
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
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold ${
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
                {isCompleted && (
                  <span className="text-emerald-600 font-bold">Awarded to J-Card!</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
