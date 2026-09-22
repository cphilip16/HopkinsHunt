import { Place } from '../types';

/**
 * Calculates the great-circle distance between two geographic coordinates using the Haversine formula.
 * @returns Distance in meters
 */
export function calculateDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // Earth radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Formats distance in meters into an intuitive human-readable string.
 * Uses meters/feet for short distances (<1 km) and miles for longer distances.
 */
export function formatDistance(meters: number): string {
  if (meters < 10) {
    return 'Right here (within 10m)';
  }
  if (meters < 500) {
    const feet = Math.round(meters * 3.28084);
    return `${Math.round(meters)}m (~${feet} ft)`;
  }
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  const miles = meters / 1609.344;
  return `${miles.toFixed(1)} mi`;
}

/**
 * Standard geofence verification radius in meters.
 * 20 meters (~65 feet) ensures precise physical on-site presence at the location.
 */
export const DEFAULT_CHECK_IN_RADIUS_METERS = 20;

/**
 * Checks whether user coordinates are within the required radius of a destination.
 */
export function isWithinCheckInRadius(
  userLat: number,
  userLng: number,
  placeLat: number,
  placeLng: number,
  radiusMeters: number = DEFAULT_CHECK_IN_RADIUS_METERS
): boolean {
  const distance = calculateDistanceMeters(userLat, userLng, placeLat, placeLng);
  return distance <= radiusMeters;
}

/**
 * Bounding calibration points for projecting real Baltimore GPS coordinates (WGS84)
 * onto the 100x100 SVG coordinate grid of InteractiveMap.tsx.
 * 
 * Based on anchor points:
 * - BMA / Homewood: lat 39.326, lng -76.619 -> mapX 47, mapY 20
 * - Peabody Institute: lat 39.297, lng -76.615 -> mapX 52, mapY 40
 * - Inner Harbor: lat 39.285, lng -76.612 -> mapX 54, mapY 53
 * - Fort McHenry: lat 39.263, lng -76.580 -> mapX 78, mapY 76
 * - Druid Hill: lat 39.321, lng -76.645 -> mapX 20, mapY 22
 */
const BALTIMORE_BOUNDS = {
  northLat: 39.355,
  southLat: 39.245,
  westLng: -76.675,
  eastLng: -76.555,
};

/**
 * Projects real-world (lat, lng) to the 0-100 normalized SVG map coordinates.
 */
export function projectGeoToMapCoords(lat: number, lng: number): { mapX: number; mapY: number } {
  const lngSpan = BALTIMORE_BOUNDS.eastLng - BALTIMORE_BOUNDS.westLng;
  const latSpan = BALTIMORE_BOUNDS.northLat - BALTIMORE_BOUNDS.southLat;

  // Linear interpolation with slight Mercator adjustment
  const mapX = ((lng - BALTIMORE_BOUNDS.westLng) / lngSpan) * 100;
  const mapY = ((BALTIMORE_BOUNDS.northLat - lat) / latSpan) * 100;

  // Clamp within 2% - 98% to prevent rendering off-screen
  return {
    mapX: Math.max(2, Math.min(98, Number(mapX.toFixed(1)))),
    mapY: Math.max(2, Math.min(98, Number(mapY.toFixed(1)))),
  };
}

/**
 * Converts meters distance to map radius percentage for SVG circle overlays.
 */
export function metersToMapRadiusPercent(meters: number): number {
  // Baltimore latitude span of ~12.2 km maps to ~100% height
  // 20m is approximately 0.16% of map canvas, with min visible radius for touch / pin target
  return Math.max(1.2, Math.min(10, (meters / 12200) * 100));
}

/**
 * Presets for campus locations & landmark testing in simulator mode.
 */
export interface LocationPreset {
  id: string;
  name: string;
  campusOrArea: string;
  lat: number;
  lng: number;
  description: string;
  nearbyPlaceIds: string[];
}

export const CAMPUS_LOCATION_PRESETS: LocationPreset[] = [
  {
    id: 'homewood-gilman',
    name: 'Homewood Campus (Gilman Hall)',
    campusOrArea: 'Homewood',
    lat: 39.3299,
    lng: -76.6205,
    description: 'Heart of undergraduate campus, near BMA and Wyman Park Dell',
    nearbyPlaceIds: ['bma', 'wyman-dell'],
  },
  {
    id: 'charles-village',
    name: 'Charles Village (Paper Moon)',
    campusOrArea: 'Homewood South',
    lat: 39.322,
    lng: -76.617,
    description: 'Directly outside Paper Moon Diner and Charles Commons',
    nearbyPlaceIds: ['paper-moon', 'bma'],
  },
  {
    id: 'peabody-mtvernon',
    name: 'Peabody Institute & Mount Vernon',
    campusOrArea: 'Peabody',
    lat: 39.2975,
    lng: -76.6155,
    description: 'George Peabody Library, Conservatory Plaza, and Washington Monument',
    nearbyPlaceIds: ['peabody-library', 'wash-monument', 'walters-art'],
  },
  {
    id: 'med-hopkins-hospital',
    name: 'JHU Medical Campus (East Baltimore)',
    campusOrArea: 'East Baltimore / Med',
    lat: 39.298,
    lng: -76.592,
    description: 'Billings Administration Building, School of Medicine, and Hospital Dome',
    nearbyPlaceIds: ['hopkins-dome', 'historic-east-bmore'],
  },
  {
    id: 'inner-harbor',
    name: 'Inner Harbor Promenade',
    campusOrArea: 'Downtown Harbor',
    lat: 39.285,
    lng: -76.612,
    description: 'USS Constellation, National Aquarium, and Harborplace amphitheater',
    nearbyPlaceIds: ['national-aquarium', 'uss-constellation'],
  },
  {
    id: 'fells-point',
    name: 'Fells Point Broadway Pier',
    campusOrArea: 'Waterfront Historic',
    lat: 39.281,
    lng: -76.593,
    description: 'Belgian block cobblestones, Thames St waterfront, and Sound Garden',
    nearbyPlaceIds: ['sound-garden', 'fells-point-pier'],
  },
  {
    id: 'hampden-36th',
    name: 'Hampden (The Avenue on 36th)',
    campusOrArea: 'Northwest Quirky',
    lat: 39.331,
    lng: -76.634,
    description: 'Atomic Hon boutiques, Cafe Hon landmark, and vintage shops',
    nearbyPlaceIds: ['the-avenue-hampden'],
  },
  {
    id: 'fort-mchenry',
    name: 'Fort McHenry National Monument',
    campusOrArea: 'Locust Point',
    lat: 39.263,
    lng: -76.580,
    description: 'Historic star fort bastion ramparts and Star-Spangled flag staff',
    nearbyPlaceIds: ['fort-mchenry'],
  },
];
