import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { RankProgressCard } from './components/RankProgressCard';
import { PlaceFilter } from './components/PlaceFilter';
import { PlaceCard } from './components/PlaceCard';
import { InteractiveMap } from './components/InteractiveMap';
import { QuestsView } from './components/QuestsView';
import { DigitalJCard } from './components/DigitalJCard';
import { FlockTripsView } from './components/FlockTripsView';
import { ScrapbookGallery } from './components/ScrapbookGallery';
import { CameraModal } from './components/CameraModal';
import { CreateTripModal } from './components/CreateTripModal';
import { LevelUpModal } from './components/LevelUpModal';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { LocationVerificationModal } from './components/LocationVerificationModal';
import { LoginModal } from './components/LoginModal';
import { TutorialModal } from './components/TutorialModal';
import { FriendsLeaderboard } from './components/FriendsLeaderboard';
import { SuggestSpotModal } from './components/SuggestSpotModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FeatherCelebration } from './components/FeatherCelebration';
import { MarylandRibbon } from './components/art/MarylandRibbon';
import { BabyJaySticker, BinocularsSticker } from './components/art/AnimatedStickers';
import { Compass, Sparkles, MapPin } from 'lucide-react';

const AppContent: React.FC = () => {
  const {
    places,
    profile,
    activeTab,
    searchQuery,
    selectedNeighborhood,
    selectedCategory,
    transitFilter,
    freeOnlyFilter,
  } = useApp();

  const visitedPlaces = places.filter((place) => profile.visitedPlaceIds.includes(place.id));

  // Filter places for explore tab
  const filteredPlaces = places.filter((place) => {
    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = place.name.toLowerCase().includes(q);
      const matchDesc = place.description.toLowerCase().includes(q);
      const matchLore = place.hopkinsLore.toLowerCase().includes(q);
      const matchNh = place.neighborhood.toLowerCase().includes(q);
      const matchTransit = place.transitTip.toLowerCase().includes(q);
      const matchTags = place.tags.some((t) => t.toLowerCase().includes(q));

      if (!matchName && !matchDesc && !matchLore && !matchNh && !matchTransit && !matchTags) {
        return false;
      }
    }

    // Neighborhood filter
    if (selectedNeighborhood !== 'All' && place.neighborhood !== selectedNeighborhood) {
      return false;
    }

    // Category filter
    if (selectedCategory !== 'All' && place.category !== selectedCategory) {
      return false;
    }

    // Transit filter
    if (transitFilter) {
      const hasTransit =
        place.transitTip.toLowerCase().includes('jhmi') ||
        place.transitTip.toLowerCase().includes('shuttle') ||
        place.transitTip.toLowerCase().includes('circulator');
      if (!hasTransit) return false;
    }

    // Free entry filter
    if (freeOnlyFilter && place.cost !== 'Free') {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans relative selection:bg-sky-200 selection:text-[#002D72] overflow-x-hidden">
      {/* Crisp Ambient Blue Soft Glows */}
      <div className="fixed top-12 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 pb-28 md:pb-12">
        
        {/* Tab 1: Explore Places */}
        {activeTab === 'explore' && (
          <section className="space-y-6">
            {/* Student Rank & Progress Banner */}
            <RankProgressCard />

            {/* Your Travel Passport */}
            <div className="relative overflow-hidden rounded-[32px] border-[3px] border-[#123d78] bg-[radial-gradient(circle_at_top,#edf5ff_0%,#fdfefe_18%,#eaf0ff_46%,#dfeefc_100%)] p-4 shadow-[0_30px_80px_rgba(10,46,98,0.18)] sm:p-5">
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.15)_25%,transparent_55%,rgba(18,61,120,0.06)_100%)]" />
              <div className="absolute -left-2 top-6 h-20 w-20 rotate-[-18deg] rounded-full border-[6px] border-[#9bb8e8] bg-[#f2f8ff]/85 shadow-[0_0_30px_rgba(107,149,217,0.28)]" />
              <div className="absolute right-6 top-4 h-14 w-14 rotate-[22deg] rounded-[18px] border-2 border-[#8db0e5] bg-[#f4f8ff]/85" />

              <div className="relative rounded-[26px] border-[3px] border-[#abc3ea] bg-[#fbfdff]/90 p-4 sm:p-5">
                <div className="mb-4 flex flex-col gap-3 border-b border-[#bfd1ea] pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#174a8c]">Your Travel Passport</p>
                    <h2 className="mt-1 text-xl font-black tracking-tight text-[#112f59] sm:text-2xl">Baltimore Highlights</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#17355f]/25 bg-[#0f3d86] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_16px_rgba(15,61,134,0.25)]">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ee6b0] shadow-[0_0_12px_rgba(158,230,176,0.8)]" />
                    {visitedPlaces.length} memories
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {visitedPlaces.length > 0 ? (
                    visitedPlaces.map((place, index) => (
                      <div
                        key={place.id}
                        className="relative rounded-[20px] border border-[#d9e3f2] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-3 shadow-[0_14px_28px_rgba(17,47,89,0.08)]"
                        style={{ transform: `rotate(${index % 2 === 0 ? '-1.5deg' : '1.5deg'})` }}
                      >
                        <div className="absolute -left-2 top-6 h-4 w-4 rotate-45 rounded-sm border border-[#bfd2f5] bg-[#9ab9eb]" />
                        <div className="mb-2 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.18em] text-[#2f5d97]">
                          <span>Class of ’27</span>
                          <span>{place.points} pts</span>
                        </div>
                        <div className="mb-3 flex h-24 items-center justify-center rounded-[18px] border-[3px] border-[#d4e2f8] bg-[linear-gradient(135deg,#eaf3ff_0%,#fffaf0_100%)] text-4xl font-black text-[#143b76] shadow-inner">
                          {place.name.slice(0, 1).toUpperCase()}
                        </div>
                        <p className="text-[15px] font-black text-[#112f59]">{place.name}</p>
                        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#5d7ea6]">{place.neighborhood}</p>
                        <p className="mt-2 text-[12px] leading-relaxed text-[#476a93]">{place.description}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full rounded-[20px] border-[2px] border-dashed border-[#b2c6ea] bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] p-5 text-center text-[#234972] shadow-inner">
                      <p className="text-base font-black uppercase tracking-[0.18em] text-[#143b76]">Passport page blank</p>
                      <p className="mt-2 text-sm font-medium text-[#496c97]">Your first campus memory is waiting to be stamped.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <PlaceFilter />

            {/* Results Count Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-1 gap-2">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 via-hopkins-heritage to-indigo-700 text-white shadow-md shadow-blue-600/25">
                  <Compass className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span>Baltimore Recommendations</span>
                    <span className="text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
                      {filteredPlaces.length}
                    </span>
                  </h2>
                  <p className="text-xs font-semibold text-slate-500">
                    Curated spots across Baltimore & JHU campus routes
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-xl bg-white border border-blue-200/80 text-blue-900 shadow-2xs flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Sorted by proximity & points tier</span>
              </span>
            </div>

            {/* Places Grid */}
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <div className="flex justify-center mb-2">
                  <BinocularsSticker size={48} className="transform -rotate-6" />
                </div>
                <h3 className="text-base font-bold text-slate-800">No matching places found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try clearing your search query or adjusting your neighborhood and transit filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredPlaces.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Tab 2: Interactive Baltimore Map */}
        {activeTab === 'map' && (
          <section>
            <InteractiveMap />
          </section>
        )}

        {/* Tab 3: Flock Expeditions (Group Trips) */}
        {activeTab === 'trips' && (
          <section>
            <FlockTripsView />
          </section>
        )}

        {/* Tab 4: Student Quests */}
        {activeTab === 'quests' && (
          <section>
            <QuestsView />
          </section>
        )}

        {/* Tab 5: Travel Scrapbook Photo Studio */}
        {activeTab === 'camera' && (
          <section>
            <ScrapbookGallery />
          </section>
        )}

        {/* Tab 6: J-Card Passport & Badges */}
        {activeTab === 'passport' && (
          <section>
            <DigitalJCard />
          </section>
        )}

        {/* Tab 7: Friends & Classmates Leaderboard */}
        {activeTab === 'leaderboard' && (
          <section>
            <FriendsLeaderboard />
          </section>
        )}

      </main>

      {/* Global Celebratory, Detail, Camera, Auth & Tutorial Modals */}
      <TutorialModal />
      <LevelUpModal />
      <PlaceDetailModal />
      <LocationVerificationModal />
      <LoginModal />
      <CameraModal />
      <CreateTripModal />
      <SuggestSpotModal />

      {/* Interactive Hopkins Blue Jay Feather Particle Celebration */}
      <FeatherCelebration />

      {/* Mobile Bottom Navigation (Ergonomic thumb reach on mobile devices) */}
      <MobileBottomNav />

      {/* Footer */}
      <footer className="bg-white border-t border-sky-100 mt-8 sm:mt-12 text-center text-xs text-slate-500 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400" />
        <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8 space-y-2">
          <div className="flex items-center justify-center space-x-2 font-bold text-[#002D72] font-bubbly">
            <span className="inline-flex items-center gap-1.5">
              <img src="/blue-jay-mascot.png" alt="Hoppy Mascot" className="w-5 h-5 object-contain" />
              Hopkins Hunt
            </span>
            <span>&bull;</span>
            <span>Johns Hopkins University Student Exploration</span>
          </div>
          <p className="max-w-md mx-auto text-slate-400 text-[11px] leading-relaxed">
            Encouraging Hopkins students to discover the history, cuisine, arts, and scenic beauty of Baltimore.
          </p>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
