import React from 'react';
import { Search, Bus, Sparkles, X, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const NEIGHBORHOODS: { label: string; value: string }[] = [
  { label: 'All Areas', value: 'All' },
  { label: 'Charles Village (Homewood)', value: 'Charles Village' },
  { label: 'Mount Vernon (Peabody)', value: 'Mount Vernon' },
  { label: 'Hampden', value: 'Hampden' },
  { label: 'Inner Harbor', value: 'Inner Harbor' },
  { label: 'Fells Point', value: 'Fells Point' },
  { label: 'Federal Hill', value: 'Federal Hill' },
  { label: 'Station North', value: 'Station North' },
  { label: 'Druid Hill & West', value: 'Druid Hill & West' },
  { label: 'Locust Point & Fort', value: 'Locust Point & Fort' },
];

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Vibes', value: 'All' },
  { label: 'Hopkins Core', value: 'hopkins' },
  { label: 'Museums & Art', value: 'museum' },
  { label: 'Food & Cafés', value: 'food' },
  { label: 'Parks & Nature', value: 'nature' },
  { label: 'Historic', value: 'historic' },
  { label: 'Arts & Nightlife', value: 'nightlife' },
];

export const PlaceFilter: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedNeighborhood,
    setSelectedNeighborhood,
    selectedCategory,
    setSelectedCategory,
    transitFilter,
    setTransitFilter,
    freeOnlyFilter,
    setFreeOnlyFilter,
  } = useApp();

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedNeighborhood !== 'All' ||
    selectedCategory !== 'All' ||
    transitFilter ||
    freeOnlyFilter;

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedNeighborhood('All');
    setSelectedCategory('All');
    setTransitFilter(false);
    setFreeOnlyFilter(false);
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-sky-100 space-y-4">
      {/* Search and Quick Filters */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600" />
          <input
            type="text"
            placeholder="Search spots, 'Brody', 'shuttle', food, or history..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-sky-50/40 hover:bg-sky-50/70 focus:bg-white text-sm text-[#002D72] placeholder-slate-400 rounded-2xl border border-sky-200 focus:border-sky-400 focus:outline-none focus:ring-3 focus:ring-sky-100 transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Transit & Free Entry Quick Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          <button
            onClick={() => setTransitFilter(!transitFilter)}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap font-bubbly ${
              transitFilter
                ? 'bg-[#002D72] text-white shadow-sm'
                : 'bg-sky-50 text-[#002D72] border border-sky-200 hover:bg-sky-100/70'
            }`}
          >
            <Bus className="w-3.5 h-3.5 text-sky-400" />
            <span>JHMI Shuttle</span>
          </button>

          <button
            onClick={() => setFreeOnlyFilter(!freeOnlyFilter)}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap font-bubbly ${
              freeOnlyFilter
                ? 'bg-[#002D72] text-white shadow-sm'
                : 'bg-sky-50 text-[#002D72] border border-sky-200 hover:bg-sky-100/70'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Free Entry Only</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              Reset
            </button>
          )}
        </div>

      </div>

      {/* Category Pills Row */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pt-1 border-t border-slate-100">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap font-bubbly ${
                isActive
                  ? 'bg-[#002D72] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Neighborhood Pills Row */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0 mr-1 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-sky-600" />
          <span>Area:</span>
        </span>
        {NEIGHBORHOODS.map((nh) => {
          const isActive = selectedNeighborhood === nh.value;
          return (
            <button
              key={nh.value}
              onClick={() => setSelectedNeighborhood(nh.value)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-sky-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-[#002D72] hover:bg-sky-50'
              }`}
            >
              {nh.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
