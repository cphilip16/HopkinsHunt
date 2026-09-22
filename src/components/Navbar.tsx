import React from 'react';
import { Compass, MapPin, Award, BookOpen, RotateCcw, Sparkles, ShieldCheck, LogOut, Camera, Users, HelpCircle, Trophy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HopkinsShield } from './art/HopkinsShield';
import { RankInsigniaArt, AvatarVectorArt } from './art/VectorArt';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    totalPoints,
    currentSubrank,
    currentRank,
    profile,
    resetProgress,
    loadDemoProgress,
    setIsLoginModalOpen,
    logoutStudent,
    setIsTutorialOpen,
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-[#002D72] text-white shadow-lg border-b border-sky-400/30 safe-top">
      {/* Crisp Light Blue Accent Top Bar */}
      <div className="h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Hopkins Hunt Branding */}
          <div
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('explore')}
          >
            <div className="relative flex items-center justify-center">
              <HopkinsShield size={36} className="transform group-hover:scale-105 transition-transform" />
            </div>
            
            {/* Hoppy Blue Jay Mascot Graphic */}
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10">
              <img
                src="/blue-jay-mascot.png"
                alt="Hoppy Mascot"
                className="w-full h-full object-contain emote-idle transform -rotate-3 group-hover:rotate-0 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/blue-jay.svg';
                }}
              />
            </div>

            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-bubbly flex items-center gap-1.5">
                  Hopkins Hunt
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-sky-400/20 text-sky-200 rounded-full border border-sky-300/30">
                  Campus & City
                </span>
              </div>
              <p className="text-[11px] text-sky-200/90 font-medium hidden sm:block">
                Johns Hopkins University Student Explorer &bull; Homewood & Peabody
              </p>
            </div>
          </div>

          {/* Center: Live Rank & Points Meter (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <RankInsigniaArt insignia={currentSubrank.insignia} size={30} />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    {currentRank.name}
                  </span>
                  <span className="text-[10px] text-sky-200/80">&bull; Lv {currentSubrank.levelNumber}</span>
                </div>
                <div className="text-sm font-extrabold text-white truncate max-w-[160px] font-bubbly">
                  {currentSubrank.subrankName}
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="text-right pl-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-sky-200 flex items-center justify-end space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                <span>Points</span>
              </div>
              <div className="text-lg font-black text-white tracking-tight font-bubbly">
                {totalPoints} <span className="text-xs font-semibold text-sky-200">PTS</span>
              </div>
            </div>
          </div>

          {/* Right Controls: Auth, Tutorial & Passports */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            
            {/* JHU Verification / Login Button */}
            {profile.isVerified ? (
              <div className="flex items-center space-x-1 sm:space-x-1.5 bg-sky-500/20 border border-sky-400/40 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs font-bold text-sky-200">
                <ShieldCheck className="w-4 h-4 text-sky-300" />
                <span className="hidden sm:inline">JHU Verified</span>
                <button
                  onClick={logoutStudent}
                  title="Sign out of student account"
                  className="ml-0.5 sm:ml-1 text-sky-200/70 hover:text-white p-0.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-extrabold bg-sky-400 hover:bg-sky-300 text-[#002D72] shadow-sm transition-all transform active:scale-95 font-bubbly"
              >
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#002D72]" />
                <span className="hidden xs:inline">Verify ID</span>
                <span className="xs:hidden">Verify</span>
              </button>
            )}

            {/* How to Play / Tutorial Button */}
            <button
              onClick={() => setIsTutorialOpen(true)}
              title="How to Play Hopkins Hunt (Tutorial & Rules)"
              className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm transition-all transform active:scale-95"
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">Guide</span>
            </button>

            <button
              onClick={loadDemoProgress}
              title="Load sample student progress"
              className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-sky-200 hover:text-white rounded-xl border border-white/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>Demo</span>
            </button>

            <button
              onClick={resetProgress}
              title="Reset progress to 0"
              className="hidden sm:inline-flex items-center p-2 text-xs font-semibold text-sky-300/80 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Desktop J-Card Passport Button */}
            <button
              onClick={() => setActiveTab('passport')}
              className={`hidden md:flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-sm font-bubbly ${
                activeTab === 'passport'
                  ? 'bg-white text-[#002D72] ring-2 ring-sky-300 shadow-md'
                  : 'bg-sky-400 text-[#002D72] hover:bg-sky-300'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <AvatarVectorArt avatarId={profile.avatar} size={20} />
              </div>
              <span>J-Card Pass</span>
            </button>
          </div>

        </div>

        {/* Navigation Tabs Bar (Desktop only, mobile uses BottomNav) */}
        <nav className="hidden md:flex space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar border-t border-sky-400/20">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'explore'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Spots & Guides</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'map'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>Interactive Map</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'leaderboard'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <Trophy className="w-4 h-4 text-sky-400" />
            <span>Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('quests')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'quests'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <Award className="w-4 h-4 text-sky-400" />
            <span>Quests</span>
          </button>

          <button
            onClick={() => setActiveTab('trips')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'trips'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <Users className="w-4 h-4 text-sky-400" />
            <span>Flock Trips</span>
          </button>

          <button
            onClick={() => setActiveTab('camera')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'camera'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <Camera className="w-4 h-4 text-sky-400" />
            <span>Scrapbook</span>
          </button>

          <button
            onClick={() => setActiveTab('passport')}
            className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap font-bubbly ${
              activeTab === 'passport'
                ? 'bg-white text-[#002D72] shadow-md ring-2 ring-sky-300 font-extrabold'
                : 'text-sky-100 hover:text-white hover:bg-white/10 font-bold'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>J-Card Passport</span>
            {profile.visitedPlaceIds.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] font-black bg-sky-200 text-[#002D72] rounded-full">
                {profile.visitedPlaceIds.length}
              </span>
            )}
          </button>
        </nav>

      </div>
    </header>
  );
};
