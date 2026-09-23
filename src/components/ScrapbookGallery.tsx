import React, { useState } from 'react';
import { showImageFallback } from '../utils/imageFallback';
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
      <div className="relative overflow-hidden rounded-[30px] border-[3px] border-[#d0a673] bg-[linear-gradient(140deg,#fffaf2_0%,#fef3d4_18%,#eef7ff_48%,#f9f3e5_100%)] p-5 sm:p-6 shadow-[0_32px_72px_rgba(120,88,41,0.14)]">
        <div className="absolute left-5 top-4 h-12 w-12 rotate-[-18deg] rounded-[12px] border-2 border-[#d8a96d] bg-[#fff8ed]/90 shadow-sm" />
        <div className="absolute right-6 top-5 h-10 w-10 rotate-[18deg] rounded-[10px] border-2 border-[#d8a96d] bg-[#edf5ff]/85 shadow-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(117,160,226,0.18),transparent_36%)]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-dashed border-[#d8b9d8] opacity-60" />
        <div className="absolute left-8 bottom-4 h-16 w-16 rounded-full border-[3px] border-[#d9b5b5] bg-[#fff5ef]/80 rotate-[-12deg] opacity-70" />
        <div className="absolute right-10 bottom-5 h-12 w-12 rounded-[12px] border-[3px] border-[#b9d3ef] bg-[#edf5ff]/80 rotate-[16deg] opacity-75" />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-[#fff8ee] rounded-xl border border-[#e6c98f] shadow-sm">
                <Camera className="w-5 h-5 text-[#1a4d9a]" />
              </span>
              <span className="text-xs uppercase font-extrabold tracking-[0.24em] text-[#7a633b]">
                Craft Table Journal
              </span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl mt-2 tracking-tight text-[#183c73]">
              Baltimore Memory Table
            </h2>
            <p className="text-xs sm:text-sm text-[#5f6b7a] max-w-lg mt-1 leading-relaxed">
              A scrapbook page made like a student craft table: layered paper, stickered landmarks, and little keepsakes from every Baltimore adventure.
            </p>
          </div>

          <button
            onClick={() => setIsCameraModalOpen(true)}
            className="flex-shrink-0 inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#1d4f97] to-[#4a8ad8] hover:from-[#19498d] hover:to-[#3f7ece] text-white font-heading font-black text-sm shadow-lg shadow-blue-500/20 ring-2 ring-white/60 transform active:scale-95 transition-all"
          >
            <Camera className="w-4 h-4 text-sky-100" />
            <span>Add a Memory</span>
          </button>
        </div>
      </div>

      {/* Photos Grid */}
      {scrapbookPhotos.length === 0 ? (
        <div className="relative overflow-hidden rounded-[28px] border-[3px] border-dashed border-[#d9c5a5] bg-[linear-gradient(180deg,#fffdf8_0%,#f4f9ff_100%)] p-8 shadow-[0_16px_30px_rgba(36,66,104,0.08)] text-center">
          <div className="absolute -left-3 top-5 h-14 w-14 rotate-[-16deg] rounded-[12px] border-2 border-[#d7b98d] bg-[#fff7ee]/90" />
          <div className="absolute -right-3 bottom-5 h-12 w-12 rotate-[20deg] rounded-[10px] border-2 border-[#d7b98d] bg-[#edf5ff]/90" />
          <div className="relative w-16 h-16 mx-auto rounded-full bg-[#fff8ef] border-2 border-[#e2c699] flex items-center justify-center mb-3 shadow-inner">
            <Camera className="w-8 h-8 text-[#1d4f97]" />
          </div>
          <h3 className="font-heading font-black text-base text-[#183a6b]">
            Craft table is empty
          </h3>
          <p className="text-xs text-[#55739d] mt-1 max-w-sm mx-auto">
            Add your first Baltimore memory and turn it into a little paper keepsake.
          </p>
          <button
            onClick={() => setIsCameraModalOpen(true)}
            className="mt-4 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#1d4f97] text-white text-xs font-bold shadow-md hover:bg-[#173b7a] transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Add a Memory</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scrapbookPhotos.map((photo) => {
            const placeObj = places.find((p) => p.id === photo.placeId);
            const rotation = photo.id.length % 3 === 0 ? -1.9 : photo.id.length % 3 === 1 ? 1.7 : 1.1;

            return (
              <div
                key={photo.id}
                className="group relative bg-[linear-gradient(180deg,#fffefb_0%,#f8fbff_100%)] rounded-[24px] p-3 sm:p-4 border-[2px] border-[#e7dcc7] shadow-[0_18px_28px_rgba(92,72,35,0.08)] hover:shadow-[0_24px_36px_rgba(92,72,35,0.14)] transition-all duration-200 flex flex-col overflow-hidden"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0),rgba(240,210,165,0.8),rgba(255,255,255,0.0))] opacity-80" />
                <div className="absolute -left-2 top-5 h-5 w-5 rotate-45 border border-[#d9b77a] bg-[#f6ead2]" />
                <div className="absolute -right-2 bottom-6 h-5 w-5 rotate-45 border border-[#bfd4f0] bg-[#eaf3ff]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4),transparent_38%,rgba(245,233,207,0.22)_100%)]" />
                <div className="absolute right-3 top-6 h-10 w-10 rounded-full border-[2px] border-[#e7c5d7] bg-[#fff4f7]/80 rotate-[18deg]" />
                <div className="absolute left-4 bottom-8 h-8 w-8 rounded-[8px] border-[2px] border-[#c7dff5] bg-[#edf5ff]/80 rotate-[-18deg]" />
                <div className="absolute left-5 top-10 h-3 w-11 rounded-full border border-[#f1d9a6] bg-[#fef3d4] rotate-[8deg] opacity-80" />
                <div className="absolute right-8 bottom-10 h-3 w-10 rounded-full border border-[#d7d5ef] bg-[#edf1ff] rotate-[-10deg] opacity-75" />

                {photo.frameStyle === 'postcard' && (
                  <div className="relative flex justify-between items-center pb-1.5 mb-1.5 border-b border-dashed border-[#d3dce8] text-[9px] font-mono text-[#5d738d] font-bold uppercase tracking-widest z-10">
                    <span>JHU TRAVEL AIRMAIL</span>
                    <span>BALTIMORE, MD</span>
                  </div>
                )}

                <div
                  onClick={() => setInspectedPhoto(photo)}
                  className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-slate-950 cursor-pointer border-[3px] border-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)] ring-2 ring-[#f0e7d7] z-10"
                >
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute left-1.5 top-1.5 h-4 w-4 border-l-[3px] border-t-[3px] border-[#fbf6ee] rounded-tl-md shadow-sm" />
                    <div className="absolute right-1.5 top-1.5 h-4 w-4 border-r-[3px] border-t-[3px] border-[#fbf6ee] rounded-tr-md shadow-sm" />
                    <div className="absolute left-1.5 bottom-1.5 h-4 w-4 border-l-[3px] border-b-[3px] border-[#fbf6ee] rounded-bl-md shadow-sm" />
                    <div className="absolute right-1.5 bottom-1.5 h-4 w-4 border-r-[3px] border-b-[3px] border-[#fbf6ee] rounded-br-md shadow-sm" />
                  </div>

                  <img
                    src={photo.dataUrl}
                    onError={showImageFallback}
                    alt={photo.caption}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      FILTER_CLASSES[photo.filter] || ''
                    }`}
                  />

                  {photo.stickerKey && photo.stickerKey !== 'none' && (
                    <div className="absolute bottom-2 right-2 transform rotate-6 drop-shadow-md pointer-events-none scale-110">
                      {renderSticker(photo.stickerKey)}
                    </div>
                  )}

                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-white/20 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    <span>{photo.placeName}</span>
                  </div>
                </div>

                <div className="relative pt-3 flex-1 flex flex-col justify-between z-10">
                  <div className="rounded-[14px] border-[2px] border-[#e6d8b5] bg-[linear-gradient(180deg,#fffdfa_0%,#fffaf2_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] relative overflow-hidden">
                    <div className="absolute left-2 right-2 top-1/2 border-t border-dashed border-[#dccaa3]" />
                    <div className="absolute left-1 top-1 bottom-1 border-l border-dashed border-[#dccaa3] opacity-80" />
                    <div className="absolute right-1 top-1 bottom-1 border-r border-dashed border-[#dccaa3] opacity-80" />
                    <h4 className="font-heading font-black text-[#163d74] text-sm tracking-tight line-clamp-1 uppercase relative z-10">
                      {photo.placeName}
                    </h4>
                    <p className="text-xs text-[#4d698a] font-medium italic mt-1 line-clamp-2 relative z-10" style={{ fontFamily: 'cursive, "Comic Sans MS", "Bradley Hand", serif' }}>
                      “{photo.caption}”
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-dashed border-[#dfe7f3] flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.timestamp}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => likeScrapbookPhoto(photo.id)}
                        className="inline-flex items-center space-x-1 text-slate-500 hover:text-rose-500 transition-colors"
                        title="Like this photo"
                      >
                        <Heart className="w-3.5 h-3.5 fill-rose-100 text-rose-500" />
                        <span className="text-[11px] font-bold">{photo.likes}</span>
                      </button>

                      {placeObj && (
                        <button
                          onClick={() => setSelectedPlace(placeObj)}
                          className="p-1 text-slate-400 hover:text-hopkins-heritage transition-colors"
                          title="View landmark guide"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}

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
                onError={showImageFallback}
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
                download={`hopkins-hunt-${inspectedPhoto.id}.png`}
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
