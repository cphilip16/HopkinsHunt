import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { RankProgressCard } from './components/RankProgressCard';
import { PlaceFilter } from './components/PlaceFilter';
import { PlaceCard } from './components/PlaceCard';
import { InteractiveMap } from './components/InteractiveMap';
import { QuestsView } from './components/QuestsView';
import { DigitalJCard } from './components/DigitalJCard';
import { LevelUpModal } from './components/LevelUpModal';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { Compass, Sparkles, MapPin } from 'lucide-react';

const AppContent: React.FC = () => {
  const {
    places,
    activeTab,
    searchQuery,
    selectedNeighborhood,
    selectedCategory,
    transitFilter,
    freeOnlyFilter,
  } = useApp();

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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Top Hero: Student Rank & Progress Banner */}
        <RankProgressCard />

        {/* Tab 1: Explore Places */}
        {activeTab === 'explore' && (
          <section className="space-y-6">
            <PlaceFilter />

            {/* Results Count Header */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-hopkins-heritage" />
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Baltimore Recommendations ({filteredPlaces.length})
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Sorted by distance from Homewood & points tier
              </span>
            </div>

            {/* Places Grid */}
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <span className="text-4xl block mb-2">🔍</span>
                <h3 className="text-base font-bold text-slate-800">No matching places found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try clearing your search query or adjusting your neighborhood and transit filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Tab 3: Student Quests */}
        {activeTab === 'quests' && (
          <section>
            <QuestsView />
          </section>
        )}

        {/* Tab 4: J-Card Passport & Badges */}
        {activeTab === 'passport' && (
          <section>
            <DigitalJCard />
          </section>
        )}

      </main>

      {/* Global Celebratory & Detail Modals */}
      <LevelUpModal />
      <PlaceDetailModal />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center space-x-2 font-bold text-slate-700">
            <span>🐦 JayWalk Bmore</span>
            <span>&bull;</span>
            <span>Johns Hopkins University Student Exploration Initiative</span>
          </div>
          <p className="max-w-md mx-auto text-slate-400">
            Encouraging Hopkins students to venture beyond the campus bubble and experience the history, cuisine, arts, and vibrant spirit of Charm City!
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
