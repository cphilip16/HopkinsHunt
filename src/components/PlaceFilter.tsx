import React from 'react';
import { Search, Filter, Bus, Check, Sparkles, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NeighborhoodType, CategoryType } from '../types';

import {
  BabyJaySticker,
  MarylandCrabSticker,
  GilmanClockSticker,
  SteamingCoffeeSticker,
  HopkinsShuttleSticker,
  BookStackSticker,
  BinocularsSticker,
  SparkleStarsSticker,
} from './art/AnimatedStickers';

const NEIGHBORHOODS: { label: string; value: string }[] = [
  { label: 'All Neighborhoods', value: 'All' },
  { label: 'Charles Village (Homewood)', value: 'Charles Village' },
  { label: 'Mount Vernon (Peabody)', value: 'Mount Vernon' },
  { label: 'Hampden ("Hon" Ave)', value: 'Hampden' },
  { label: 'Inner Harbor & Downtown', value: 'Inner Harbor' },
  { label: 'Fells Point & Cobblestones', value: 'Fells Point' },
  { label: 'Federal Hill & South Bmore', value: 'Federal Hill' },
  { label: 'Station North Arts', value: 'Station North' },
  { label: 'Druid Hill & West', value: 'Druid Hill & West' },
  { label: 'Locust Point & Fort', value: 'Locust Point & Fort' },
];

const CATEGORIES: {
  label: string;
  value: string;
  renderIcon: () => React.ReactNode;
}[] = [
  {
    label: 'All Vibes',
    value: 'All',
    renderIcon: () => <SparkleStarsSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Museums & Art',
    value: 'museum',
    renderIcon: () => <BookStackSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Iconic Bites & Cafes',
    value: 'food',
    renderIcon: () => <SteamingCoffeeSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Parks & Nature',
    value: 'nature',
    renderIcon: () => <BinocularsSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Historic Landmarks',
    value: 'historic',
    renderIcon: () => <GilmanClockSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Arts & Nightlife',
    value: 'nightlife',
    renderIcon: () => <MarylandCrabSticker size={18} className="flex-shrink-0" />,
  },
  {
    label: 'Hopkins Lore',
    value: 'hopkins',
    renderIcon: () => <BabyJaySticker size={18} className="flex-shrink-0" />,
  },
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
    <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-card-high border border-slate-300 space-y-4">
      
      {/* Search and Quick Toggle Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search spots, 'JHMI shuttle', food, or lore..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 min-h-[44px] bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-2 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Transit & Free Entry Quick Filters */}
        <div className="flex items-center gap-2 overflow-x-auto touch-pan-x pb-1 md:pb-0 no-scrollbar">
          <button
            onClick={() => setTransitFilter(!transitFilter)}
            className={`flex items-center space-x-1.5 px-3.5 py-2.5 min-h-[40px] rounded-2xl text-xs font-bold border transition-all whitespace-nowrap flex-shrink-0 ${
              transitFilter
                ? 'bg-hopkins-heritage text-white border-hopkins-deep shadow-md'
                : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <HopkinsShuttleSticker size={20} className="flex-shrink-0" />
            <span>JHMI / Free Shuttle</span>
            {transitFilter && <Check className="w-3 h-3 ml-1 text-sky-300" />}
          </button>

          <button
            onClick={() => setFreeOnlyFilter(!freeOnlyFilter)}
            className={`flex items-center space-x-1.5 px-3.5 py-2.5 min-h-[40px] rounded-2xl text-xs font-bold border transition-all whitespace-nowrap flex-shrink-0 ${
              freeOnlyFilter
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-md'
                : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 fill-emerald-400" />
            <span>Free Entry Only</span>
            {freeOnlyFilter && <Check className="w-3 h-3 ml-1 text-emerald-200" />}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 min-h-[40px] text-xs font-extrabold text-red-700 hover:bg-red-50 rounded-2xl transition-colors whitespace-nowrap flex-shrink-0"
            >
              Reset Filters
            </button>
          )}
        </div>

      </div>

      {/* Neighborhood Filters Scrollbar */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
          <Filter className="w-3.5 h-3.5 text-hopkins-heritage" />
          <span>Neighborhood</span>
        </div>
        <div className="flex gap-2 overflow-x-auto touch-pan-x pb-1 no-scrollbar">
          {NEIGHBORHOODS.map((nh) => (
            <button
              key={nh.value}
              onClick={() => setSelectedNeighborhood(nh.value)}
              className={`px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all border ${
                selectedNeighborhood === nh.value
                  ? 'bg-hopkins-heritage text-white border-hopkins-deep shadow-md shadow-blue-900/20 ring-2 ring-sky-300'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {nh.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Category & Vibe</span>
        </div>
        <div className="flex gap-2 overflow-x-auto touch-pan-x pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`flex items-center space-x-2 px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all border ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-hopkins-deep to-hopkins-heritage text-white border-blue-900 shadow-md ring-2 ring-amber-400'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {cat.renderIcon()}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
