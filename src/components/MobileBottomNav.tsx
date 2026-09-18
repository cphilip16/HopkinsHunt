import React from 'react';
import { Compass, MapPin, Award, Users, Camera } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MarylandRibbon } from './art/MarylandRibbon';
import { AvatarVectorArt } from './art/VectorArt';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab, profile, quests, groupTrips, setIsCameraModalOpen } = useApp();

  const completedQuestsCount = profile.completedQuestIds.length;
  const visitedCount = profile.visitedPlaceIds.length;
  const myTripsCount = groupTrips.filter((t) => t.members.some((m) => m.name === profile.studentName)).length;

  return (
    <>
      {/* Floating Action Button (FAB) for Field Camera - Accessible Everywhere */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden flex flex-col items-center">
        <button
          onClick={() => setIsCameraModalOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-300 text-slate-950 shadow-xl shadow-amber-500/30 ring-4 ring-white/90 transform active:scale-90 transition-all"
          title="Open Field Camera"
        >
          <Camera className="w-6 h-6 text-slate-950" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500 border-2 border-white"></span>
          </span>
        </button>
      </div>

      <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-hopkins-deep/95 backdrop-blur-xl border-t border-blue-900/60 shadow-2xl safe-bottom overflow-hidden">
        {/* Maryland Accent Trim on Mobile Bottom Nav */}
        <MarylandRibbon height={2} />

        <div className="flex items-center justify-around px-2 py-1.5">
          
          {/* Places Tab */}
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 min-w-[56px] min-h-[46px] ${
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
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 min-w-[56px] min-h-[46px] ${
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

          {/* Flock Trips Tab */}
          <button
            onClick={() => setActiveTab('trips')}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 min-w-[56px] min-h-[46px] ${
              activeTab === 'trips'
                ? 'text-sky-300 scale-105'
                : 'text-blue-200/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-xl transition-colors ${activeTab === 'trips' ? 'bg-sky-400/20 ring-1 ring-sky-300/40' : ''}`}>
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">Flocks</span>
            {myTripsCount > 0 && (
              <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-sky-400 ring-2 ring-hopkins-deep" />
            )}
          </button>

          {/* Quests Tab */}
          <button
            onClick={() => setActiveTab('quests')}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 min-w-[56px] min-h-[46px] ${
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
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 min-w-[56px] min-h-[46px] ${
              activeTab === 'passport'
                ? 'text-sky-300 scale-105'
                : 'text-blue-200/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-xl transition-colors flex items-center justify-center ${activeTab === 'passport' ? 'bg-sky-400/20 ring-1 ring-sky-300/40' : ''}`}>
              <AvatarVectorArt avatarId={profile.avatar} size={20} />
            </div>
            <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">J-Card</span>
            {visitedCount > 0 && (
              <span className="absolute top-1 right-1.5 bg-emerald-500 text-white font-black text-[9px] px-1 py-0.2 rounded-full leading-none ring-1 ring-hopkins-deep">
                {visitedCount}
              </span>
            )}
          </button>

        </div>
      </nav>
    </>
  );
};

