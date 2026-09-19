import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Check, Sparkles, X, ChevronRight, Crosshair, Radio, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Place } from '../types';
import { HopkinsShield } from './art/HopkinsShield';
import { MarylandRibbon } from './art/MarylandRibbon';
import { HotAirBalloonSticker, CompassRoseSticker, BinocularsSticker } from './art/AnimatedStickers';
import { PassportStamp } from './art/PassportStamp';
import { projectGeoToMapCoords, metersToMapRadiusPercent, formatDistance } from '../utils/geoUtils';

export const InteractiveMap: React.FC = () => {
  const {
    places,
    profile,
    toggleCheckIn,
    verifyAndCheckIn,
    setSelectedPlace,
    selectedNeighborhood,
    transitFilter,
    freeOnlyFilter,
    userLocation,
    locationStatus,
    isSimulatedLocation,
    simulatedPresetName,
    checkInRadiusMeters,
    getPlaceDistanceInfo,
    simulateLocation,
  } = useApp();

  const [activePin, setActivePin] = useState<Place | null>(null);

  // User projected coordinates on map canvas
  const userMapPos = userLocation
    ? projectGeoToMapCoords(userLocation.lat, userLocation.lng)
    : null;

  // Filter places for map pins
  const visiblePlaces = places.filter((p) => {
    if (selectedNeighborhood !== 'All' && p.neighborhood !== selectedNeighborhood) return false;
    if (transitFilter && !p.transitTip.toLowerCase().includes('jhmi') && !p.transitTip.toLowerCase().includes('shuttle')) return false;
    if (freeOnlyFilter && p.cost !== 'Free') return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Map Explainer Banner */}
      <div className="bg-gradient-to-r from-hopkins-deep to-hopkins-heritage rounded-2xl p-4 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md relative overflow-hidden">
        {/* Top Maryland Accent Ribbon */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={3} />
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-1 bg-white/10 rounded-xl flex items-center justify-center">
            <HopkinsShield size={32} />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight flex items-center gap-1.5">
              <span>Interactive Baltimore & JHU Campus Map</span>
              <span className="hidden md:inline-block"><CompassRoseSticker size={20} /></span>
            </h3>
            <p className="text-xs text-blue-200">
              Pins show travel spots across Baltimore with 250m GPS geofencing verification. The dashed line traces the free JHMI Shuttle route!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs font-semibold">
            <span className="flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Visited ({profile.visitedPlaceIds.length})</span>
            </span>
            <span className="flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span>Unvisited</span>
            </span>
          </div>

          {/* Floating Hot Air Balloon in Sky */}
          <div className="hidden sm:block flex-shrink-0">
            <HotAirBalloonSticker size={46} />
          </div>
        </div>
      </div>

      {/* SVG Canvas Map Container */}
      <div className="relative w-full aspect-[4/3] min-h-[380px] sm:min-h-[460px] max-h-[640px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none">
        
        {/* Top-Right Brass Binoculars Observation Badge */}
        <div className="absolute top-3 right-3 z-20 hidden sm:flex items-center space-x-1.5 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 pointer-events-none">
          <BinocularsSticker size={22} />
          <span>Field Observation</span>
        </div>
        
        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* SVG Drawing Layer */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full object-contain"
          preserveAspectRatio="none"
        >
          {/* Waterway: Baltimore Inner Harbor & Patapsco River */}
          <path
            d="M 50 60 Q 55 56 60 55 Q 68 55 75 58 Q 85 62 90 70 Q 95 80 100 85 L 100 100 L 50 100 Z"
            fill="#0f2b48"
            opacity="0.9"
          />
          <path
            d="M 50 60 Q 58 52 64 54 Q 72 56 80 52 L 100 52 L 100 100 L 50 100 Z"
            fill="#0c233b"
            opacity="0.8"
          />

          {/* Northwest Greenery: Druid Hill Park */}
          <ellipse cx="20" cy="22" rx="14" ry="10" fill="#143622" opacity="0.6" />
          <text x="14" y="23" fill="#4ade80" fontSize="2.2" opacity="0.7" fontWeight="bold">
            Druid Hill Park
          </text>

          {/* East Greenery: Patterson Park */}
          <rect x="80" y="48" width="12" height="10" rx="2" fill="#143622" opacity="0.6" />
          <text x="82" y="54" fill="#4ade80" fontSize="2.2" opacity="0.7" fontWeight="bold">
            Patterson Park
          </text>

          {/* Neighborhood Region Labels */}
          <text x="38" y="12" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Charles Village
          </text>
          <text x="24" y="14" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Hampden
          </text>
          <text x="44" y="36" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Mount Vernon
          </text>
          <text x="42" y="50" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Inner Harbor
          </text>
          <text x="68" y="52" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Fells Point
          </text>
          <text x="48" y="66" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Federal Hill
          </text>
          <text x="74" y="74" fill="#94a3b8" fontSize="2.4" fontWeight="600" opacity="0.7">
            Locust Point & Fort
          </text>

          {/* Free JHMI Shuttle Route (Homewood -> Station North -> Peabody -> East Baltimore) */}
          <path
            d="M 47 18 L 48 32 L 51 40 Q 56 41 74 41"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="0.7"
            strokeDasharray="1.5, 1"
            opacity="0.85"
          />
          <text x="52" y="32" fill="#38bdf8" fontSize="1.8" fontStyle="italic" opacity="0.9">
            JHMI Shuttle Route
          </text>

          {/* JHU Campus Anchors */}
          {/* Homewood Campus */}
          <circle cx="47" cy="18" r="2.2" fill="#002D72" stroke="#68ACE5" strokeWidth="0.8" />
          <text x="49.5" y="18.5" fill="#68ACE5" fontSize="2.5" fontWeight="bold">
            Homewood Campus (JHU)
          </text>

          {/* Peabody Institute */}
          <circle cx="51" cy="40" r="1.8" fill="#002D72" stroke="#F1C400" strokeWidth="0.7" />
          <text x="53.5" y="40.5" fill="#F1C400" fontSize="2.2" fontWeight="bold">
            Peabody Institute
          </text>

          {/* Johns Hopkins Hospital / Med Campus */}
          <circle cx="74" cy="41" r="2" fill="#002D72" stroke="#E03A3E" strokeWidth="0.8" />
          <text x="76.5" y="41.5" fill="#E03A3E" fontSize="2.2" fontWeight="bold">
            JHU Medical Campus
          </text>

          {/* Active Pin 250m Geofence Radius */}
          {activePin && (
            <g className="pointer-events-none">
              <circle
                cx={activePin.coordinates.mapX}
                cy={activePin.coordinates.mapY}
                r={metersToMapRadiusPercent(checkInRadiusMeters)}
                fill="#38bdf8"
                fillOpacity="0.18"
                stroke="#38bdf8"
                strokeWidth="0.5"
                strokeDasharray="1.2, 1"
              />
              <circle
                cx={activePin.coordinates.mapX}
                cy={activePin.coordinates.mapY}
                r={metersToMapRadiusPercent(checkInRadiusMeters) * 1.05}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="0.2"
                opacity="0.5"
              />
              <text
                x={activePin.coordinates.mapX}
                y={activePin.coordinates.mapY + metersToMapRadiusPercent(checkInRadiusMeters) + 2}
                textAnchor="middle"
                fill="#38bdf8"
                fontSize="1.7"
                fontWeight="600"
                opacity="0.9"
              >
                250m Check-in Radius
              </text>
            </g>
          )}

          {/* Navigation Line Connecting User to Selected Pin */}
          {userMapPos && activePin && (
            <line
              x1={userMapPos.mapX}
              y1={userMapPos.mapY}
              x2={activePin.coordinates.mapX}
              y2={activePin.coordinates.mapY}
              stroke="#38bdf8"
              strokeWidth="0.4"
              strokeDasharray="1, 1"
              opacity="0.75"
              className="pointer-events-none"
            />
          )}

          {/* Live User Location Beacon */}
          {userMapPos && (
            <g className="user-beacon pointer-events-none">
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="4.2"
                fill="#38bdf8"
                fillOpacity="0.2"
                stroke="#60a5fa"
                strokeWidth="0.3"
                strokeDasharray="1, 0.8"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="2.5"
                fill="#0284c7"
                fillOpacity="0.4"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="1.4"
                fill="#2563eb"
                stroke="#ffffff"
                strokeWidth="0.4"
              />
              <circle
                cx={userMapPos.mapX}
                cy={userMapPos.mapY}
                r="0.5"
                fill="#ffffff"
              />
              <g transform={`translate(${userMapPos.mapX}, ${userMapPos.mapY - 2.8})`}>
                <rect
                  x="-9"
                  y="-3.2"
                  width="18"
                  height="3.8"
                  rx="1.9"
                  fill="#0f172a"
                  fillOpacity="0.9"
                  stroke="#38bdf8"
                  strokeWidth="0.25"
                />
                <text
                  x="0"
                  y="-0.8"
                  textAnchor="middle"
                  fill="#68ace5"
                  fontSize="1.7"
                  fontWeight="bold"
                >
                  {isSimulatedLocation ? 'Simulated Spot' : 'You Are Here'}
                </text>
              </g>
            </g>
          )}
        </svg>

        {/* Interactive Place Pins (Absolute HTML overlays with touch target padding) */}
        {visiblePlaces.map((place) => {
          const isVisited = profile.visitedPlaceIds.includes(place.id);
          const isSelected = activePin?.id === place.id;

          return (
            <div
              key={place.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group z-20 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              style={{
                left: `${place.coordinates.mapX}%`,
                top: `${place.coordinates.mapY}%`,
              }}
              onClick={() => setActivePin(isSelected ? null : place)}
            >
              {/* Pin Bubble */}
              <div
                className={`relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 shadow-lg ${
                  isVisited
                    ? 'bg-emerald-500 text-white ring-4 ring-emerald-400/40 scale-100 hover:scale-125'
                    : isSelected
                    ? 'bg-amber-400 text-hopkins-deep ring-4 ring-white scale-125'
                    : 'bg-white text-slate-800 ring-2 ring-blue-500/40 hover:scale-125 hover:ring-white'
                }`}
              >
                {isVisited ? (
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                ) : (
                  <span className="text-[10px] font-black px-0.5">
                    {place.points}p
                  </span>
                )}
              </div>

              {/* Pin label (visible on hover) */}
              <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-black/90 text-white text-[11px] font-bold px-2 py-1 rounded-md whitespace-nowrap shadow-xl z-30 pointer-events-none">
                {place.name} (+{place.points} pts)
              </div>
            </div>
          );
        })}

        {/* Selected Pin Popup Card */}
        {activePin && (() => {
          const distanceInfo = getPlaceDistanceInfo(activePin);
          const isVisited = profile.visitedPlaceIds.includes(activePin.id);

          return (
            <div className="absolute bottom-3 inset-x-3 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 z-30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-start justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                  {activePin.neighborhood}
                </span>
                <button
                  onClick={() => setActivePin(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Close pin preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-sm font-extrabold text-slate-900 mt-1.5 leading-snug">
                {activePin.name}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                {activePin.tagline}
              </p>

              {/* Proximity / Distance Badge */}
              {distanceInfo && (
                <div
                  className={`mt-2 flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg border ${
                    distanceInfo.isWithinRadius
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-amber-50 border-amber-200 text-amber-800'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{formatDistance(distanceInfo.distanceMeters)} away</span>
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      distanceInfo.isWithinRadius
                        ? 'bg-emerald-200/80 text-emerald-900'
                        : 'bg-amber-200/80 text-amber-900'
                    }`}
                  >
                    {distanceInfo.isWithinRadius ? 'In Range (≤250m)' : 'Out of Range'}
                  </span>
                </div>
              )}

              <div className="mt-2 text-[11px] text-hopkins-heritage bg-blue-50 p-2 rounded-lg flex items-center space-x-1.5 font-medium">
                <Bus className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="line-clamp-1">{activePin.transitTip}</span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => toggleCheckIn(activePin.id)}
                  className={`flex-1 py-2.5 px-3 min-h-[40px] rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    isVisited
                      ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800'
                      : distanceInfo?.isWithinRadius
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                      : 'bg-hopkins-heritage hover:bg-hopkins-deep text-white shadow-sm'
                  }`}
                >
                  {isVisited ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Visited</span>
                    </>
                  ) : distanceInfo?.isWithinRadius ? (
                    <>
                      <ShieldCheck className="w-4 h-4 text-emerald-200" />
                      <span>Verify & Stamp (+{activePin.points} pts)</span>
                    </>
                  ) : (
                    <>
                      <Crosshair className="w-3.5 h-3.5" />
                      <span>Check In (+{activePin.points} pts)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSelectedPlace(activePin)}
                  className="py-2.5 px-3.5 min-h-[40px] bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center space-x-1"
                >
                  <span>Full Lore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {!isVisited && distanceInfo && !distanceInfo.isWithinRadius && (
                <button
                  onClick={() =>
                    simulateLocation(
                      { lat: activePin.coordinates.lat, lng: activePin.coordinates.lng },
                      activePin.name
                    )
                  }
                  className="mt-2 w-full py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-hopkins-heritage border border-blue-200 rounded-lg text-[10px] font-semibold flex items-center justify-center space-x-1 transition-colors"
                >
                  <Radio className="w-3 h-3 text-blue-600" />
                  <span>Teleport Here (Test 250m Arrival)</span>
                </button>
              )}
            </div>
          );
        })()}

      </div>
    </div>
  );
};
