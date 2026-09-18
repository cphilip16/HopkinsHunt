import React, { useState } from 'react';
import {
  Camera,
  Heart,
  Download,
  Trash2,
  MapPin,
  Calendar,
  Sparkles,
  ExternalLink,
  X,
  Plus,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrapbookPhoto } from '../types';
import {
  BabyJaySticker,
  MarylandCrabSticker,
  GilmanClockSticker,
  BookStackSticker,
  StarSpangledFlagSticker,
  WaxSealSticker,
  HotAirBalloonSticker,
} from './art/AnimatedStickers';
import { HopkinsShield } from './art/HopkinsShield';

const FILTER_CLASSES: Record<string, string> = {
  normal: '',
  vintage: 'sepia-[0.4] contrast-[1.15] brightness-[1.05]',
  'warm-sun': 'brightness-[1.08] saturate-[1.45] contrast-[1.05]',
  'hopkins-blue': 'contrast-[1.1] saturate-[1.2] -hue-rotate-15',
  noir: 'grayscale contrast-[1.3] brightness-[0.95]',
};

export const ScrapbookGallery: React.FC = () => {
  const {
    scrapbookPhotos,
    deleteScrapbookPhoto,
    likeScrapbookPhoto,
    setIsCameraModalOpen,
    setSelectedPlace,
    places,
  } = useApp();

  const [inspectedPhoto, setInspectedPhoto] = useState<ScrapbookPhoto | null>(null);

  const renderSticker = (stickerKey?: string) => {
    if (!stickerKey || stickerKey === 'none') return null;
    switch (stickerKey) {
      case 'baby-jay':
        return <BabyJaySticker size={40} />;
      case 'maryland-crab':
        return <MarylandCrabSticker size={40} />;
      case 'gilman-clock':
        return <GilmanClockSticker size={40} />;
      case 'book-stack':
        return <BookStackSticker size={40} />;
      case 'star-flag':
        return <StarSpangledFlagSticker size={40} />;
      case 'wax-seal':
        return <WaxSealSticker size={36} />;
      case 'hot-air':
        return <HotAirBalloonSticker size={40} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Snap Action */}
      <div className="bg-gradient-to-r from-hopkins-heritage via-hopkins-vibrant to-hopkins-heritage rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-white/10 rounded-xl border border-white/20">
              <Camera className="w-5 h-5 text-amber-300" />
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300">
              Student Photo Keepsakes
            </span>
          </div>
          <h2 className="font-heading font-black text-xl sm:text-2xl mt-1 tracking-tight">
            Charm City Travel Scrapbook
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/90 max-w-lg mt-1 leading-relaxed">
            Every photo snapped at a Baltimore landmark earns +15 exploration points and is permanently preserved in your student passport album.
          </p>
        </div>

        <button
          onClick={() => setIsCameraModalOpen(true)}
          className="flex-shrink-0 inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-black text-sm shadow-lg shadow-amber-400/25 ring-2 ring-white/40 transform active:scale-95 transition-all"
        >
          <Camera className="w-4 h-4 text-slate-950" />
          <span>Snap New Polaroid</span>
        </button>
      </div>

      {/* Photos Grid */}
      {scrapbookPhotos.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-3">
            <Camera className="w-8 h-8 text-hopkins-heritage" />
          </div>
          <h3 className="font-heading font-bold text-base text-slate-800">
            No Scrapbook Photos Yet
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Take your first photo proof at any Baltimore landmark or upload a memory from your camera roll!
          </p>
          <button
            onClick={() => setIsCameraModalOpen(true)}
            className="mt-4 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-hopkins-heritage text-white text-xs font-bold shadow-md hover:bg-hopkins-deep transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Open Field Camera</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scrapbookPhotos.map((photo) => {
            const placeObj = places.find((p) => p.id === photo.placeId);

            return (
              <div
                key={photo.id}
                className="group relative bg-white rounded-2xl p-3 sm:p-4 shadow-card-high hover:shadow-polaroid border border-slate-300 hover:border-sky-300 transition-all duration-200 flex flex-col"
              >
                {/* Postcard Top Trim (if style is postcard) */}
                {photo.frameStyle === 'postcard' && (
                  <div className="flex justify-between items-center pb-1.5 mb-1.5 border-b border-dashed border-slate-300 text-[9px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                    <span>JHU TRAVEL AIRMAIL</span>
                    <span>BALTIMORE, MD</span>
                  </div>
                )}

                {/* Photo Image Card */}
                <div
                  onClick={() => setInspectedPhoto(photo)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 cursor-pointer shadow-inner"
                >
                  <img
                    src={photo.dataUrl}
                    alt={photo.caption}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      FILTER_CLASSES[photo.filter] || ''
                    }`}
                  />

                  {/* Corner Sticker Stamp */}
                  {photo.stickerKey && photo.stickerKey !== 'none' && (
                    <div className="absolute bottom-2 right-2 transform rotate-6 drop-shadow-md pointer-events-none">
                      {renderSticker(photo.stickerKey)}
                    </div>
                  )}

                  {/* Location badge overlay */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-white/20 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    <span>{photo.placeName}</span>
                  </div>
                </div>

                {/* Polaroid Bottom Caption Area */}
                <div className="pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-black text-slate-900 text-sm tracking-tight line-clamp-1">
                      {photo.placeName}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium italic mt-1 line-clamp-2">
                      "{photo.caption}"
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.timestamp}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* Like button */}
                      <button
                        onClick={() => likeScrapbookPhoto(photo.id)}
                        className="inline-flex items-center space-x-1 text-slate-500 hover:text-rose-500 transition-colors"
                        title="Like this photo"
                      >
                        <Heart className="w-3.5 h-3.5 fill-rose-100 text-rose-500" />
                        <span className="text-[11px] font-bold">{photo.likes}</span>
                      </button>

                      {/* View Place details */}
                      {placeObj && (
                        <button
                          onClick={() => setSelectedPlace(placeObj)}
                          className="p-1 text-slate-400 hover:text-hopkins-heritage transition-colors"
                          title="View landmark guide"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* Delete */}
                      <button
                        onClick={() => deleteScrapbookPhoto(photo.id)}
                        className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* High-Resolution Inspection Modal */}
      {inspectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200">
            <button
              onClick={() => setInspectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-lg">
              <img
                src={inspectedPhoto.dataUrl}
                alt={inspectedPhoto.caption}
                className={`w-full h-full object-cover ${
                  FILTER_CLASSES[inspectedPhoto.filter] || ''
                }`}
              />
              {inspectedPhoto.stickerKey && (
                <div className="absolute bottom-3 right-3 transform rotate-6 drop-shadow-xl">
                  {renderSticker(inspectedPhoto.stickerKey)}
                </div>
              )}
            </div>

            <div className="mt-4 text-center">
              <div className="flex items-center justify-center space-x-1.5 text-hopkins-heritage font-heading font-black text-lg">
                <MapPin className="w-4 h-4" />
                <span>{inspectedPhoto.placeName}</span>
              </div>
              <p className="text-sm text-slate-700 font-medium italic mt-1">
                "{inspectedPhoto.caption}"
              </p>
              <div className="flex items-center justify-center space-x-3 text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-slate-100">
                <span>{inspectedPhoto.timestamp}</span>
                <span>&bull;</span>
                <span className="capitalize">{inspectedPhoto.filter} lens</span>
                <span>&bull;</span>
                <span>{inspectedPhoto.likes} Blue Jay likes</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={inspectedPhoto.dataUrl}
                download={`jaywalk-${inspectedPhoto.id}.png`}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-hopkins-heritage text-white text-xs font-bold shadow-md hover:bg-hopkins-deep transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Keepsake</span>
              </a>
              <button
                onClick={() => setInspectedPhoto(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

