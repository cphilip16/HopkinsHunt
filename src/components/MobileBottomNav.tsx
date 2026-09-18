import React from 'react';
import { Compass, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MarylandRibbon } from './art/MarylandRibbon';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab, profile, quests } = useApp();

  const completedQuestsCount = profile.completedQuestIds.length;
  const visitedCount = profile.visitedPlaceIds.length;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-hopkins-deep/95 backdrop-blur-xl border-t border-blue-900/60 shadow-2xl safe-bottom overflow-hidden">
      {/* Maryland Accent Trim on Mobile Bottom Nav */}
      <MarylandRibbon height={2} />

      <div className="flex items-center justify-around px-3 py-1.5">
        
        {/* Places Tab */}
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 min-w-[64px] min-h-[48px] ${
            activeTab === 'explore'
              ? 'text-sky-300 scale-105'
              : 'text-blue-200/70 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeTab === 'explore' ? 'bg-hopkins-spirit/20 ring-1 ring-sky-300/40' : ''}`}>
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">Places</span>
        </button>

        {/* Map Tab */}
        <button
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 min-w-[64px] min-h-[48px] ${
            activeTab === 'map'
              ? 'text-sky-300 scale-105'
              : 'text-blue-200/70 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeTab === 'map' ? 'bg-hopkins-spirit/20 ring-1 ring-sky-300/40' : ''}`}>
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">Map</span>
        </button>

        {/* Quests Tab */}
        <button
          onClick={() => setActiveTab('quests')}
          className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 min-w-[64px] min-h-[48px] ${
            activeTab === 'quests'
              ? 'text-amber-300 scale-105'
              : 'text-blue-200/70 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeTab === 'quests' ? 'bg-amber-400/20 ring-1 ring-amber-300/40' : ''}`}>
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">Quests</span>
          {completedQuestsCount < quests.length && (
            <span className="absolute top-1 right-2.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse ring-2 ring-hopkins-deep" />
          )}
        </button>

        {/* J-Card Passport Tab */}
        <button
          onClick={() => setActiveTab('passport')}
          className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 min-w-[64px] min-h-[48px] ${
            activeTab === 'passport'
              ? 'text-sky-300 scale-105'
              : 'text-blue-200/70 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeTab === 'passport' ? 'bg-sky-400/20 ring-1 ring-sky-300/40' : ''}`}>
            <span className="text-base leading-none block">{profile.avatar}</span>
          </div>
          <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">J-Card</span>
          {visitedCount > 0 && (
            <span className="absolute top-1 right-2 bg-emerald-500 text-white font-black text-[9px] px-1 py-0.2 rounded-full leading-none ring-1 ring-hopkins-deep">
              {visitedCount}
            </span>
          )}
        </button>

      </div>
    </nav>
  );
};

