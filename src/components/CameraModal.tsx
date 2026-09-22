import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  X,
  RefreshCw,
  Sparkles,
  Download,
  BookmarkPlus,
  Check,
  MapPin,
  Sliders,
  Image as ImageIcon,
  RotateCcw,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
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
import { MarylandRibbon } from './art/MarylandRibbon';

// Audio click synthesizer using Web Audio API
const playShutterSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Crisp camera shutter sound (click-clack)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (e) {
    // AudioContext not permitted or supported
  }
};

type FrameStyle = 'polaroid' | 'postcard' | 'classic-stamp';
type PhotoFilter = 'normal' | 'vintage' | 'warm-sun' | 'hopkins-blue' | 'noir';

const FILTER_STYLES: Record<PhotoFilter, { label: string; filterCss: string }> = {
  normal: { label: 'Natural', filterCss: 'none' },
  vintage: { label: 'Kodachrome', filterCss: 'sepia(0.4) contrast(1.15) brightness(1.05)' },
  'warm-sun': { label: 'Golden Hour', filterCss: 'brightness(1.08) saturate(1.45) contrast(1.05)' },
  'hopkins-blue': { label: 'Hopkins Blue', filterCss: 'contrast(1.1) saturate(1.2) hue-rotate(-15deg)' },
  noir: { label: 'Poe Noir', filterCss: 'grayscale(1) contrast(1.3) brightness(0.95)' },
};

export const CameraModal: React.FC = () => {
  const {
    isCameraModalOpen,
    setIsCameraModalOpen,
    cameraTargetPlace,
    setCameraTargetPlace,
    places,
    addScrapbookPhoto,
  } = useApp();

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [hasCameraStream, setHasCameraStream] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [isFlashing, setIsFlashing] = useState(false);
  const [capturedPhotoUrl, setCapturedPhotoUrl] = useState<string | null>(null);

  // Customization states
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>(cameraTargetPlace?.id || places[0]?.id || '');
  const [frameStyle, setFrameStyle] = useState<FrameStyle>('polaroid');
  const [activeFilter, setActiveFilter] = useState<PhotoFilter>('warm-sun');
  const [selectedSticker, setSelectedSticker] = useState<string>('baby-jay');
  const [caption, setCaption] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  // Sync selected place when modal opens with target place
  useEffect(() => {
    if (cameraTargetPlace) {
      setSelectedPlaceId(cameraTargetPlace.id);
      setCaption(`Exploring ${cameraTargetPlace.name} with fellow Blue Jays!`);
    } else if (places.length > 0) {
      setSelectedPlaceId(places[0].id);
      setCaption('Field snapshot on our Charm City exploration journey!');
    }
  }, [cameraTargetPlace, places]);

  // Start / Stop camera stream
  useEffect(() => {
    let stream: MediaStream | null = null;

    if (isCameraModalOpen && !capturedPhotoUrl) {
      const startCamera = async () => {
        try {
          if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setCameraError('Direct camera hardware not available in this browser. You can upload or simulate photos!');
            return;
          }

          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: facingMode },
              width: { ideal: 1280 },
              height: { ideal: 720 },
            },
            audio: false,
          });

          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setHasCameraStream(true);
            setCameraError(null);
          }
        } catch (err) {
          console.log('Camera access notice:', err);
          setCameraError('Camera access not granted or unavailable. You can upload an image or use our scenic simulator!');
          setHasCameraStream(false);
        }
      };

      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraModalOpen, facingMode, capturedPhotoUrl]);

  if (!isCameraModalOpen) return null;

  const currentPlace = places.find((p) => p.id === selectedPlaceId) || places[0];

  // Capture shutter snap
  const takeSnapshot = () => {
    if (soundEnabled) {
      playShutterSound();
    }

    // Trigger visual camera flash
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 400);

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video && hasCameraStream && video.videoWidth > 0) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedPhotoUrl(dataUrl);
        return;
      }
    }

    // Fallback: Use high-res place image if no live camera stream
    const fallbackImage = currentPlace?.imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/5/56/Baltimore_Museum_of_Art_entrance.jpg';
    setCapturedPhotoUrl(fallbackImage);
  };

  // Upload local photo from device
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCapturedPhotoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset and retake photo
  const retakePhoto = () => {
    setCapturedPhotoUrl(null);
    setIsSaved(false);
  };

  // Close modal and clean up
  const closeModal = () => {
    setIsCameraModalOpen(false);
    setCapturedPhotoUrl(null);
    setCameraTargetPlace(null);
    setIsSaved(false);
  };

  // Save to student scrapbook
  const handleSaveToScrapbook = () => {
    if (!capturedPhotoUrl) return;

    addScrapbookPhoto({
      placeId: currentPlace?.id,
      placeName: currentPlace?.name || 'Baltimore Exploration',
      neighborhood: currentPlace?.neighborhood,
      dataUrl: capturedPhotoUrl,
      caption: caption.trim() || `Field snapshot at ${currentPlace?.name || 'Charm City'}!`,
      filter: activeFilter,
      frameStyle,
      stickerKey: selectedSticker,
    });

    setIsSaved(true);
  };

  // Download high-res keepsake
  const handleDownload = () => {
    if (!capturedPhotoUrl) return;
    const link = document.createElement('a');
    link.download = `hopkins-hunt-${currentPlace?.id || 'snap'}-${Date.now()}.png`;
    link.href = capturedPhotoUrl;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      {/* Hidden processing canvas & file input */}
      <canvas ref={canvasRef} className="hidden" />
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        className="hidden"
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in duration-200">
        
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-hopkins-deep px-4 sm:px-6 py-3.5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-xl border border-white/20">
              <Camera className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg tracking-tight flex items-center gap-2">
                <span>Charm City Field Camera</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-hopkins-deep">
                  Photo Proof
                </span>
              </h3>
              <p className="text-[11px] text-blue-200 font-medium">
                Snap & collect student travel polaroids across Baltimore
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title={soundEnabled ? 'Mute shutter sound' : 'Unmute shutter sound'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={closeModal}
              className="p-1.5 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <MarylandRibbon height={3} />

        {/* Viewfinder / Preview Section */}
        <div className="p-4 sm:p-6 bg-slate-100">
          
          {/* Main Photo Frame / Canvas Display */}
          <div className="relative mx-auto max-w-md bg-white rounded-2xl p-3 sm:p-4 shadow-polaroid border border-slate-300/80 transition-all">
            
            {/* White Camera Flash Overlay */}
            {isFlashing && (
              <div className="absolute inset-0 bg-white z-30 rounded-2xl camera-flash-active pointer-events-none" />
            )}

            {/* Polaroid / Postcard Header Trim */}
            {frameStyle === 'postcard' && (
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-slate-300 text-[10px] font-mono text-slate-500 font-semibold uppercase">
                <span className="flex items-center gap-1">
                  <HopkinsShield size={14} /> JHU TRAVEL AIRMAIL
                </span>
                <span>POSTAGE PAID &bull; 21218</span>
              </div>
            )}

            {/* The Image Viewport */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-inner flex items-center justify-center">
              
              {!capturedPhotoUrl ? (
                // Live Video Stream or Scenic Simulator
                hasCameraStream ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ filter: FILTER_STYLES[activeFilter].filterCss }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={currentPlace.imageUrl}
                      alt={currentPlace.name}
                      style={{ filter: FILTER_STYLES[activeFilter].filterCss }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 flex flex-col justify-between p-3">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded-md bg-black/60 text-white font-mono text-[10px] tracking-wider uppercase backdrop-blur-sm border border-white/20">
                          REC &bull; SIMULATED VIEWFINDER
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px]">
                          {currentPlace.neighborhood}
                        </span>
                      </div>
                      <div className="text-white">
                        <div className="text-xs font-black tracking-tight">{currentPlace.name}</div>
                        <div className="text-[10px] text-blue-200">Point device or upload real photo below!</div>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                // Captured Photo View
                <div className="relative w-full h-full">
                  <img
                    src={capturedPhotoUrl}
                    alt="Captured snapshot"
                    style={{ filter: FILTER_STYLES[activeFilter].filterCss }}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Placed Sticker Stamp on Photo */}
              {selectedSticker !== 'none' && (
                <div className="absolute bottom-3 right-3 transform rotate-6 drop-shadow-lg pointer-events-none z-10 transition-transform">
                  {selectedSticker === 'baby-jay' && <BabyJaySticker size={52} />}
                  {selectedSticker === 'maryland-crab' && <MarylandCrabSticker size={52} />}
                  {selectedSticker === 'gilman-clock' && <GilmanClockSticker size={52} />}
                  {selectedSticker === 'book-stack' && <BookStackSticker size={52} />}
                  {selectedSticker === 'star-flag' && <StarSpangledFlagSticker size={52} />}
                  {selectedSticker === 'wax-seal' && <WaxSealSticker size={48} />}
                  {selectedSticker === 'hot-air' && <HotAirBalloonSticker size={52} />}
                </div>
              )}

              {/* Viewfinder Reticle (when not captured) */}
              {!capturedPhotoUrl && (
                <div className="absolute inset-0 pointer-events-none border-2 border-white/20 m-4 rounded-lg flex items-center justify-center">
                  <div className="w-10 h-10 border-t-2 border-l-2 border-white/60 absolute top-0 left-0" />
                  <div className="w-10 h-10 border-t-2 border-r-2 border-white/60 absolute top-0 right-0" />
                  <div className="w-10 h-10 border-b-2 border-l-2 border-white/60 absolute bottom-0 left-0" />
                  <div className="w-10 h-10 border-b-2 border-r-2 border-white/60 absolute bottom-0 right-0" />
                  <div className="w-3 h-3 rounded-full border-2 border-amber-400 bg-amber-400/20" />
                </div>
              )}
            </div>

            {/* Bottom Polaroid Label & Verification Inscription */}
            <div className="pt-3 text-center">
              <div className="font-heading font-black text-slate-900 text-sm tracking-tight flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-hopkins-heritage" />
                <span>{currentPlace.name}</span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium italic mt-0.5">
                {caption || 'A memorable Baltimore journey with Johns Hopkins Blue Jays.'}
              </p>
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-2 pt-2 border-t border-slate-100">
                <span>HOPKINS HUNT PASSPORT</span>
                <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

          </div>

          {/* Shutter & Capture Controls */}
          {!capturedPhotoUrl ? (
            <div className="mt-5 flex items-center justify-center space-x-4">
              
              {/* Upload Existing Photo Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-white text-slate-700 border border-slate-300 shadow-sm hover:bg-slate-50 transition-all transform active:scale-95"
                title="Upload photo from your device"
              >
                <ImageIcon className="w-5 h-5 text-hopkins-heritage" />
                <span className="text-[8px] font-bold mt-0.5">Upload</span>
              </button>

              {/* Big Shutter Snap Button */}
              <button
                onClick={takeSnapshot}
                className="group relative flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-hopkins-heritage via-hopkins-accent to-sky-400 text-white p-1 shadow-xl shadow-hopkins-heritage/30 transform active:scale-90 transition-all"
                title="Snap photo proof!"
              >
                <div className="w-full h-full rounded-full border-4 border-white flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-colors">
                  <Camera className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              </button>

              {/* Switch Facing Mode / Flip Camera */}
              <button
                onClick={() => setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))}
                className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-white text-slate-700 border border-slate-300 shadow-sm hover:bg-slate-50 transition-all transform active:scale-95"
                title="Flip camera"
              >
                <RefreshCw className="w-5 h-5 text-hopkins-heritage" />
                <span className="text-[8px] font-bold mt-0.5">Flip</span>
              </button>

            </div>
          ) : (
            // Post-Capture Confirmation Bar
            <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={retakePhoto}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Retake</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download</span>
              </button>

              <button
                onClick={handleSaveToScrapbook}
                disabled={isSaved}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black shadow-md transition-all ${
                  isSaved
                    ? 'bg-emerald-500 text-white cursor-default'
                    : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 ring-2 ring-amber-300/60 transform active:scale-95'
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                    <span>Saved to J-Card (+15 PTS)</span>
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="w-4 h-4 text-slate-950" />
                    <span>Save to Scrapbook (+15 PTS)</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>

        {/* Customization Controls Studio (Filters, Stickers, Location, Frame) */}
        <div className="p-4 sm:p-6 bg-white space-y-4 border-t border-slate-200">
          
          {/* Location Picker */}
          <div>
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
              Expedition Landmark & Location
            </label>
            <select
              value={selectedPlaceId}
              onChange={(e) => setSelectedPlaceId(e.target.value)}
              className="w-full text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            >
              {places.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name} ({place.neighborhood}) &bull; +{place.points} PTS
                </option>
              ))}
            </select>
          </div>

          {/* Caption Input */}
          <div>
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
              Polaroid Caption & Memory
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Study sprint with the flock before violin recital!"
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            />
          </div>

          {/* Filter Pills */}
          <div>
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
              Retro Lens Filter
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {(Object.keys(FILTER_STYLES) as PhotoFilter[]).map((filterKey) => (
                <button
                  key={filterKey}
                  onClick={() => setActiveFilter(filterKey)}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-bold text-center transition-all border ${
                    activeFilter === filterKey
                      ? 'bg-hopkins-heritage text-white border-hopkins-deep shadow-sm'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {FILTER_STYLES[filterKey].label}
                </button>
              ))}
            </div>
          </div>

          {/* Keepsake Frame Style */}
          <div>
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
              Keepsake Frame Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFrameStyle('polaroid')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                  frameStyle === 'polaroid'
                    ? 'bg-hopkins-spirit/20 border-hopkins-heritage text-hopkins-heritage ring-1 ring-hopkins-heritage'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Polaroid Classic
              </button>
              <button
                onClick={() => setFrameStyle('postcard')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                  frameStyle === 'postcard'
                    ? 'bg-hopkins-spirit/20 border-hopkins-heritage text-hopkins-heritage ring-1 ring-hopkins-heritage'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Airmail Postcard
              </button>
              <button
                onClick={() => setFrameStyle('classic-stamp')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                  frameStyle === 'classic-stamp'
                    ? 'bg-hopkins-spirit/20 border-hopkins-heritage text-hopkins-heritage ring-1 ring-hopkins-heritage'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Heritage Stamp
              </button>
            </div>
          </div>

          {/* Sticker Stamps Selector */}
          <div>
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
              Add Hopkins & Baltimore Sticker Stamp
            </label>
            <div className="flex items-center space-x-2 overflow-x-auto py-1.5 no-scrollbar">
              <button
                onClick={() => setSelectedSticker('none')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border flex-shrink-0 ${
                  selectedSticker === 'none'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                None
              </button>

              {[
                { id: 'baby-jay', label: 'Baby Jay', icon: <BabyJaySticker size={24} /> },
                { id: 'maryland-crab', label: 'MD Crab', icon: <MarylandCrabSticker size={24} /> },
                { id: 'gilman-clock', label: 'Gilman Clock', icon: <GilmanClockSticker size={24} /> },
                { id: 'book-stack', label: 'Peabody Books', icon: <BookStackSticker size={24} /> },
                { id: 'star-flag', label: '15-Star Flag', icon: <StarSpangledFlagSticker size={24} /> },
                { id: 'wax-seal', label: 'Veritas Seal', icon: <WaxSealSticker size={24} /> },
                { id: 'hot-air', label: 'Hopkins Balloon', icon: <HotAirBalloonSticker size={24} /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedSticker(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border flex-shrink-0 transition-all ${
                    selectedSticker === item.id
                      ? 'bg-amber-400 text-slate-950 border-amber-500 ring-2 ring-amber-300 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

