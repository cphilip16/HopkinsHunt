import React, { useState } from 'react';
import {
  Navigation,
  Compass,
  Crosshair,
  Sliders,
  ChevronDown,
  X,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAMPUS_LOCATION_PRESETS, formatDistance } from '../utils/geoUtils';

export const LocationControlBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const {
    userLocation,
    locationStatus,
    startLocationTracking,
    simulateLocation,
    isSimulatedLocation,
    simulatedPresetName,
    checkInRadiusMeters,
    places,
    getPlaceDistanceInfo,
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);

  // Find nearest place to current user location
  const nearestPlaceInfo = React.useMemo(() => {
    if (!userLocation) return null;
    let closestPlace = places[0];
    let minDistance = Infinity;

    places.forEach((p) => {
      const info = getPlaceDistanceInfo(p);
      if (info.distanceMeters < minDistance) {
        minDistance = info.distanceMeters;
        closestPlace = p;
      }
    });

    return {
      place: closestPlace,
      distanceMeters: minDistance,
      formatted: formatDistance(minDistance),
      isWithinRadius: minDistance <= checkInRadiusMeters,
    };
  }, [userLocation, places, getPlaceDistanceInfo, checkInRadiusMeters]);

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Chip */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all shadow-xs ${
          isSimulatedLocation
            ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
            : locationStatus === 'active'
            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
            : locationStatus === 'requesting'
            ? 'bg-sky-50 text-sky-900 border-sky-300 animate-pulse'
            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
        }`}
        title="Click to view GPS location status and simulation controls"
      >
        <div className="flex items-center space-x-1.5">
          {isSimulatedLocation ? (
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
          ) : locationStatus === 'active' ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          ) : (
            <Navigation className="w-3.5 h-3.5 text-slate-500" />
          )}

          <span className="font-heading truncate max-w-[140px] sm:max-w-[190px]">
            {isSimulatedLocation
              ? `Sim: ${simulatedPresetName || 'Custom'}`
              : locationStatus === 'active'
              ? 'GPS Verified'
              : locationStatus === 'requesting'
              ? 'Acquiring GPS...'
              : 'GPS Verification'}
          </span>
        </div>

        <ChevronDown className="w-3 h-3 opacity-60 flex-shrink-0" />
      </button>

      {/* Dropdown Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-hopkins-heritage" />
                <span className="text-xs font-black font-heading uppercase tracking-wider text-slate-900">
                  Location Tracking & Verification
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Current GPS Status Box */}
            <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-600">Signal Mode:</span>
                <span
                  className={`font-black px-2 py-0.5 rounded-md ${
                    isSimulatedLocation
                      ? 'bg-amber-100 text-amber-900'
                      : locationStatus === 'active'
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {isSimulatedLocation
                    ? 'Field Simulator'
                    : locationStatus === 'active'
                    ? 'Live Hardware GPS'
                    : locationStatus === 'requesting'
                    ? 'Acquiring Signal...'
                    : 'Standby'}
                </span>
              </div>

              {userLocation && (
                <div className="font-mono text-[11px] text-slate-500">
                  Coordinates: {userLocation.lat.toFixed(4)}°N, {userLocation.lng.toFixed(4)}°W
                  {userLocation.accuracy && (
                    <span> (±{Math.round(userLocation.accuracy)}m accuracy)</span>
                  )}
                </div>
              )}

              {nearestPlaceInfo && (
                <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-600">Nearest Landmark:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[150px]">
                    {nearestPlaceInfo.place.name} ({nearestPlaceInfo.formatted})
                  </span>
                </div>
              )}
            </div>

            {/* Hardware GPS Refresh / Enable Button */}
            <div className="mt-3">
              <button
                onClick={() => {
                  simulateLocation(null);
                  startLocationTracking();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-hopkins-heritage hover:bg-hopkins-deep text-white text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <Crosshair className="w-4 h-4" />
                <span>Use My Real Device GPS Location</span>
              </button>
            </div>

            {/* Campus & Landmark Simulator Presets */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                <span className="flex items-center space-x-1">
                  <Sliders className="w-3.5 h-3.5 text-amber-600" />
                  <span>Simulator Presets (Testing & Grading)</span>
                </span>
                <span className="text-[10px] text-slate-400">Within 250m Radius</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {CAMPUS_LOCATION_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      simulateLocation({ lat: preset.lat, lng: preset.lng }, preset.name);
                    }}
                    className="p-2 text-left rounded-lg bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200 transition-colors"
                  >
                    <div className="font-bold text-slate-900 text-xs truncate">{preset.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{preset.campusOrArea}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Explainer Footer */}
            <div className="mt-3 p-2 rounded-lg bg-blue-50/80 text-[10px] text-slate-600 leading-snug">
              Visits are verified within <strong>250 meters</strong> of each landmark. Use presets to test progression anywhere!
            </div>
          </div>
        </>
      )}
    </div>
  );
};
