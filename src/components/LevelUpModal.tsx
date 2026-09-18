import React from 'react';
import { Sparkles, Trophy, Check, X, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CuteMascot } from './art/CuteMascot';
import { HopkinsShield } from './art/HopkinsShield';
import { MarylandRibbon } from './art/MarylandRibbon';
import { WashiTape } from './art/TravelDecorations';
import { SparkleStarsSticker, MarylandCrabSticker, TreasureChestSticker } from './art/AnimatedStickers';
import { RankInsigniaArt } from './art/VectorArt';

export const LevelUpModal: React.FC = () => {
  const { levelUpData, setLevelUpData, totalPoints, setActiveTab } = useApp();

  if (!levelUpData) return null;

  const { subrank, rank, isMajorRankUp } = levelUpData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-300 overflow-hidden text-center">
        
        {/* Top Washi Tape Accents */}
        <WashiTape color="amber" angle={-2} className="-top-3 left-12 z-30" />
        <WashiTape color="rose" angle={3} className="-top-3 right-12 z-30" />

        {/* Top celebratory Maryland Ribbon */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={4} />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setLevelUpData(null)}
          className="absolute top-4 right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-20"
          aria-label="Close celebration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Chibi Baby Jay Mascot Cheer & Insignia Burst */}
        <div className="relative my-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Ambient spirit glow */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-amber-300/40 via-sky-300/30 to-rose-200/40 blur-2xl animate-pulse" />
          
          <div className="relative flex items-center justify-center space-x-3">
            <CuteMascot
              pose={isMajorRankUp ? 'scholar' : 'cheering'}
              size={110}
              speechBubble={isMajorRankUp ? 'Summa Cum Laude!' : 'Pack your bags! Level Up!'}
            />
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-hopkins-deep to-hopkins-heritage flex items-center justify-center p-2 shadow-xl ring-4 ring-amber-300 shadow-sky-500/20">
                <RankInsigniaArt insignia={subrank.insignia} id={subrank.id} size={54} />
              </div>
              <div className="absolute -top-3 -right-3 pointer-events-none">
                <SparkleStarsSticker size={28} />
              </div>
              <div className="absolute -bottom-3 -left-3 pointer-events-none">
                {isMajorRankUp ? (
                  <TreasureChestSticker size={32} />
                ) : (
                  <MarylandCrabSticker size={24} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Titles */}
        <div className="mt-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isMajorRankUp ? 'Major Rank Achieved!' : 'Hopkins Level Up!'}</span>
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
