import React from 'react';
import { Compass, MapPin, Award, BookOpen, RotateCcw, Sparkles, ShieldCheck, LogIn, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';

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
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-hopkins-deep text-white shadow-xl border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & JHU Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('explore')}>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-hopkins-spirit to-blue-300 text-hopkins-deep shadow-md shadow-sky-500/20 ring-2 ring-white/20">
              <span className="text-2xl select-none">🐦</span>
              <span className="absolute -bottom-1 -right-1 text-xs bg-baltimore-crab text-white font-black px-1.5 py-0.5 rounded-full ring-1 ring-white">
                JHU
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-sky-200">
                  JayWalk Bmore
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-hopkins-spirit/20 text-sky-200 rounded-md border border-sky-400/30">
                  Student Explorer
                </span>
              </div>
              <p className="text-xs text-blue-200/80 font-medium hidden sm:block">
                Johns Hopkins &bull; Baltimore Travel Quests & Level Ranks
              </p>
            </div>
          </div>

          {/* Center: Live Rank & Points Meter */}
          <div className="hidden lg:flex items-center space-x-4 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-2.5">
              <span className="text-2xl">{currentSubrank.insignia}</span>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-hopkins-spirit">
                    {currentRank.name}
                  </span>
                  <span className="text-[10px] text-blue-300/80">&bull; Lv {currentSubrank.levelNumber}</span>
                </div>
                <div className="text-sm font-bold text-white truncate max-w-[160px]">
                  {currentSubrank.subrankName}
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-white/15" />

            <div className="text-right pl-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center justify-end space-x-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Exploration Score</span>
              </div>
              <div className="text-lg font-black text-amber-300 tracking-tight">
                {totalPoints} <span className="text-xs font-semibold text-white/80">PTS</span>
              </div>
            </div>
          </div>

          {/* Right Controls: Auth, Demo / Reset & Profile Pill */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* JHU Verification / Login Button */}
            {profile.isVerified ? (
              <div className="flex items-center space-x-1.5 bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">JHU Verified</span>
                <button
                  onClick={logoutStudent}
                  title="Sign out of student account"
                  className="ml-1 text-emerald-400/70 hover:text-white p-0.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-hopkins-deep shadow-md shadow-amber-400/20 ring-1 ring-white/30 transition-all transform hover:scale-105"
              >
                <ShieldCheck className="w-4 h-4 text-hopkins-deep" />
                <span>Log In & Verify</span>
              </button>
            )}

            <button
              onClick={loadDemoProgress}
              title="Load sample student progress"
              className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-sky-200 hover:text-white rounded-xl border border-white/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Demo Fill</span>
            </button>

            <button
              onClick={resetProgress}
              title="Reset progress to 0"
              className="inline-flex items-center p-2 text-xs font-semibold text-blue-300 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* J-Card Passport Button */}
            <button
              onClick={() => setActiveTab('passport')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                activeTab === 'passport'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-amber-400/20 ring-2 ring-amber-300'
                  : 'bg-hopkins-spirit text-hopkins-deep hover:bg-sky-200'
              }`}
            >
              <span className="text-base">{profile.avatar}</span>
              <span className="hidden sm:inline">J-Card & Passport</span>
              <span className="sm:hidden font-bold">{totalPoints}p</span>
            </button>
          </div>

        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar border-t border-white/10">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'explore'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Places & Guides</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'map'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Interactive Map</span>
          </button>

          <button
            onClick={() => setActiveTab('quests')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'quests'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Student Quests</span>
            <span className="ml-1 px-1.5 py-0.2 text-[10px] font-black bg-amber-400 text-hopkins-deep rounded-full">
              Bonus PTS
            </span>
          </button>

          <button
            onClick={() => setActiveTab('passport')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'passport'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Digital J-Card Pass</span>
            {profile.visitedPlaceIds.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] font-black bg-emerald-400 text-slate-900 rounded-full">
                {profile.visitedPlaceIds.length} Visited
              </span>
            )}
          </button>
        </nav>

      </div>
    </header>
  );
};
