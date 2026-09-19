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

const getCategoryActiveStyle = (value: string) => {
  switch (value) {
    case 'All':
      return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-hopkins-heritage text-white shadow-md shadow-blue-500/25 ring-2 ring-sky-300';
    case 'museum':
      return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white shadow-md shadow-indigo-500/25 ring-2 ring-indigo-300';
    case 'food':
      return 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/25 ring-2 ring-amber-300';
    case 'nature':
      return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white shadow-md shadow-emerald-500/25 ring-2 ring-emerald-300';
    case 'historic':
      return 'bg-gradient-to-r from-rose-700 via-red-600 to-amber-600 text-white shadow-md shadow-red-500/25 ring-2 ring-amber-300';
    case 'nightlife':
      return 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-md shadow-purple-500/25 ring-2 ring-pink-300';
    case 'hopkins':
      return 'bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-blue-700 text-white shadow-md shadow-blue-900/30 ring-2 ring-sky-300';
    default:
      return 'bg-hopkins-heritage text-white shadow-md ring-2 ring-amber-400';
  }
};

const getNeighborhoodActiveStyle = (value: string) => {
  switch (value) {
    case 'Charles Village':
      return 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-md ring-2 ring-amber-300';
    case 'Mount Vernon':
      return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white shadow-md ring-2 ring-indigo-300';
    case 'Hampden':
      return 'bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white shadow-md ring-2 ring-pink-300';
    case 'Inner Harbor':
      return 'bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-700 text-white shadow-md ring-2 ring-cyan-300';
    case 'Fells Point':
      return 'bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white shadow-md ring-2 ring-teal-300';
    case 'Federal Hill':
      return 'bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white shadow-md ring-2 ring-orange-300';
    case 'Station North':
      return 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-md ring-2 ring-purple-300';
    case 'Druid Hill & West':
      return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white shadow-md ring-2 ring-emerald-300';
    case 'Locust Point & Fort':
      return 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-md ring-2 ring-amber-300';
    default:
      return 'bg-gradient-to-r from-hopkins-heritage to-blue-700 text-white shadow-md ring-2 ring-sky-300';
  }
};

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
    <div className="bg-gradient-to-br from-white via-slate-50/70 to-blue-50/30 rounded-3xl p-4 sm:p-6 shadow-card-high border-2 border-slate-200/90 space-y-4">
      
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
            className="w-full pl-10 pr-10 py-3 min-h-[44px] bg-white hover:bg-slate-50 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-2xl border-2 border-slate-200 focus:border-hopkins-spirit focus:outline-none focus:ring-4 focus:ring-sky-200/50 transition-all font-medium shadow-2xs"
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
            className={`flex items-center space-x-1.5 px-3.5 py-2.5 min-h-[40px] rounded-2xl text-xs font-black border transition-all whitespace-nowrap flex-shrink-0 ${
              transitFilter
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-blue-600 shadow-md shadow-sky-500/25 ring-2 ring-sky-300'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-sky-50 hover:border-sky-300 shadow-2xs'
            }`}
          >
            <HopkinsShuttleSticker size={20} className="flex-shrink-0" />
            <span>JHMI / Free Shuttle</span>
            {transitFilter && <Check className="w-3 h-3 ml-1 text-sky-100" />}
          </button>

          <button
            onClick={() => setFreeOnlyFilter(!freeOnlyFilter)}
            className={`flex items-center space-x-1.5 px-3.5 py-2.5 min-h-[40px] rounded-2xl text-xs font-black border transition-all whitespace-nowrap flex-shrink-0 ${
              freeOnlyFilter
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-500/25 ring-2 ring-emerald-300'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-emerald-50 hover:border-emerald-300 shadow-2xs'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 fill-emerald-400" />
            <span>Free Entry Only</span>
            {freeOnlyFilter && <Check className="w-3 h-3 ml-1 text-emerald-100" />}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3.5 py-2 min-h-[40px] text-xs font-black text-rose-700 hover:bg-rose-100/80 bg-rose-50 border border-rose-200 rounded-2xl transition-colors whitespace-nowrap flex-shrink-0"
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
          {NEIGHBORHOODS.map((nh) => {
            const isSelected = selectedNeighborhood === nh.value;
            return (
              <button
                key={nh.value}
                onClick={() => setSelectedNeighborhood(nh.value)}
                className={`px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all border ${
                  isSelected
                    ? getNeighborhoodActiveStyle(nh.value)
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {nh.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Category & Vibe</span>
        </div>
        <div className="flex gap-2 overflow-x-auto touch-pan-x pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center space-x-2 px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all border ${
                  isSelected
                    ? getCategoryActiveStyle(cat.value)
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {cat.renderIcon()}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
