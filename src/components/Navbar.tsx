import React from 'react';
import { Compass, MapPin, Award, BookOpen, RotateCcw, Sparkles, ShieldCheck, LogIn, LogOut, Camera, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HopkinsShield } from './art/HopkinsShield';
import { MarylandRibbon } from './art/MarylandRibbon';
import { CuteMascot } from './art/CuteMascot';
import { AirmailStrip } from './art/TravelDecorations';
import { BabyJaySticker, SparkleStarsSticker } from './art/AnimatedStickers';
import { RankInsigniaArt, AvatarVectorArt, RankBadgeArt } from './art/VectorArt';

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
    setIsCameraModalOpen,
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-hopkins-deep text-white shadow-xl border-b border-blue-900/60 safe-top">
      {/* Maryland & Baltimore Heraldic Accent Trim */}
      <MarylandRibbon height={3} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & JHU Identity */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer" onClick={() => setActiveTab('explore')}>
            <div className="relative flex items-center justify-center">
              {/* Authentic Hopkins Shield Crest */}
              <HopkinsShield size={36} className="transform hover:scale-105 transition-transform" />
              <span className="absolute -bottom-1 -right-1 text-[9px] sm:text-[10px] bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep font-black px-1 sm:px-1.5 py-0.2 rounded-full ring-1 ring-white shadow-sm">
                1876
              </span>
            </div>
            
            {/* Cute Animated Baby Jay Explorer Mascot Sticker */}
            <div className="hidden xs:block flex-shrink-0">
              <BabyJaySticker size={40} className="transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer" />
            </div>

            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-extrabold text-lg sm:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-sky-200 flex items-center gap-1.5">
                  <span>JayWalk Bmore</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-amber-400/20 to-sky-400/20 text-amber-200 rounded-md border border-amber-300/30">
                  Travel Passport
                </span>
              </div>
              <p className="text-[11px] text-blue-200/80 font-medium hidden sm:block">
                Charm City Exploration & Passport Stamps &bull; Homewood & Peabody
              </p>
            </div>
          </div>

          {/* Center: Live Rank & Points Meter (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-xs p-0.5">
                <RankBadgeArt rankId={currentRank.id} size={32} />
              </div>
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
                <SparkleStarsSticker size={16} />
                <span>Exploration Score</span>
              </div>
              <div className="text-lg font-black text-amber-300 tracking-tight">
                {totalPoints} <span className="text-xs font-semibold text-white/80">PTS</span>
              </div>
            </div>
          </div>

          {/* Right Controls: Auth, Demo / Reset & Profile Pill */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            
            {/* Mobile Compact Points Pill */}
            <div className="lg:hidden flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-xl border border-white/15 text-xs font-black text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{totalPoints}p</span>
            </div>

            {/* Field Camera Quick Snap Button */}
            <button
              onClick={() => setIsCameraModalOpen(true)}
              title="Open Charm City Field Camera"
              className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm transition-all transform active:scale-95"
            >
              <Camera className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Camera</span>
            </button>

            {/* JHU Verification / Login Button */}
            {profile.isVerified ? (
              <div className="flex items-center space-x-1 sm:space-x-1.5 bg-emerald-500/20 border border-emerald-400/40 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs font-bold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">JHU Verified</span>
                <button
                  onClick={logoutStudent}
                  title="Sign out of student account"
                  className="ml-0.5 sm:ml-1 text-emerald-400/70 hover:text-white p-0.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-hopkins-deep shadow-md shadow-amber-400/20 ring-1 ring-white/30 transition-all transform active:scale-95"
              >
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-hopkins-deep" />
                <span className="hidden xs:inline">Verify ID</span>
                <span className="xs:hidden">Verify</span>
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
              className="hidden sm:inline-flex items-center p-2 text-xs font-semibold text-blue-300 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Desktop J-Card Passport Button */}
            <button
              onClick={() => setActiveTab('passport')}
              className={`hidden md:flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                activeTab === 'passport'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-hopkins-deep shadow-amber-400/20 ring-2 ring-amber-300'
                  : 'bg-hopkins-spirit text-hopkins-deep hover:bg-sky-200'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <AvatarVectorArt avatarId={profile.avatar} size={20} />
              </div>
              <span>J-Card & Passport</span>
            </button>
          </div>

        </div>

        {/* Navigation Tabs Bar (Desktop only, mobile uses BottomNav) */}
        <nav className="hidden md:flex space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar border-t border-white/10">
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
            onClick={() => setActiveTab('trips')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'trips'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Flock Trips</span>
            <span className="ml-1 px-1.5 py-0.2 text-[10px] font-black bg-sky-400 text-hopkins-deep rounded-full">
              Pods
            </span>
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
            onClick={() => setActiveTab('camera')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'camera'
                ? 'bg-white text-hopkins-deep shadow-md font-bold'
                : 'text-blue-100/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Scrapbook</span>
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
      
      {/* Airmail Border Accent */}
      <AirmailStrip height={3} />
    </header>
  );
};
