import React from 'react';
import { Sparkles, Trophy, Check, X, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LevelUpModal: React.FC = () => {
  const { levelUpData, setLevelUpData, totalPoints, setActiveTab } = useApp();

  if (!levelUpData) return null;

  const { subrank, rank, isMajorRankUp } = levelUpData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-white via-slate-50 to-blue-50 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-sky-300 overflow-hidden text-center">
        
        {/* Top celebratory header ribbon */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-hopkins-spirit via-amber-400 to-baltimore-crab" />

        {/* Close Button */}
        <button
          onClick={() => setLevelUpData(null)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot / Insignia Burst */}
        <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-hopkins-deep to-hopkins-heritage flex items-center justify-center text-5xl sm:text-6xl shadow-xl ring-4 ring-amber-300 shadow-sky-500/20 my-2 animate-bounce">
          {subrank.insignia}
        </div>

        {/* Titles */}
        <div className="mt-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-hopkins-deep shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isMajorRankUp ? 'Major Rank Achieved!' : 'Subrank Level Up!'}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
            {subrank.subrankName}
          </h2>

          <div className="text-sm font-bold text-hopkins-heritage mt-0.5">
            Rank Tier {rank.id}: {rank.name} &bull; Level {subrank.levelNumber}
          </div>
        </div>

        {/* Flavor text quote */}
        <p className="text-xs text-slate-600 italic mt-3 max-w-md mx-auto leading-relaxed bg-white/80 p-3 rounded-2xl border border-slate-200">
          "{subrank.flavorText}"
        </p>

        {/* Unlocked Perk Box */}
        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
          <div className="flex items-center space-x-1.5 text-xs font-black uppercase text-emerald-900 mb-1">
            <Trophy className="w-4 h-4 text-emerald-600" />
            <span>New Traveler Perk Unlocked!</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed font-medium">
            {subrank.unlockedPerk}
          </p>
        </div>

        {/* Current Total Score */}
        <div className="mt-4 text-xs font-semibold text-slate-500">
          Total Score: <strong className="text-hopkins-heritage font-black">{totalPoints} PTS</strong>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => setLevelUpData(null)}
            className="flex-1 py-3 px-5 rounded-2xl bg-hopkins-heritage hover:bg-hopkins-deep text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Continue JayWalking!</span>
          </button>

          <button
            onClick={() => {
              setLevelUpData(null);
              setActiveTab('passport');
            }}
            className="py-3 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 transition-colors flex items-center justify-center space-x-1.5"
          >
            <span>View on J-Card</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
