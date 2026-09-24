export type StampColor = 'emerald' | 'sapphire' | 'crimson' | 'amber';

export interface PlaceStampTarget {
  id?: string;
  name?: string;
  neighborhood?: string;
}

export interface PlaceStampConfig {
  title: string;
  label: string;
  color: StampColor;
}

const GENERIC_WORDS = new Set([
  'the',
  'and',
  'of',
  'for',
  'with',
  'at',
  'in',
  'on',
  'to',
  'a',
  'an',
  'from',
  'hall',
  'center',
  'commons',
  'house',
  'garden',
  'lawn',
  'museum',
  'brewery',
  'market',
  'point',
  'station',
  'park',
  'diner',
  'grove',
  'plaza',
  'campus',
  'student',
  'club',
  'field',
  'library',
  'school',
  'building',
  'square',
  'row',
  'street',
  'pier',
  'avenue',
  'hotel',
  'district',
  'place',
]);

const SPECIAL_TITLE_OVERRIDES: Record<string, string> = {
  brody: 'BRODY',
  gilman: 'GILMAN',
  aquarium: 'AQUARIUM',
  bma: 'BMA',
  harbor: 'HARBOR',
  beach: 'BEACH',
  peabody: 'PEABODY',
  sherwood: 'SHERWOOD',
  wyman: 'WYMAN',
  book: 'BOOK',
  paper: 'PAPER',
  farmers: 'FARMERS',
  mount: 'MOUNT',
  charles: 'CHARLES',
  fells: 'FELLS',
  federal: 'FEDERAL',
  station: 'STATION',
  druid: 'DRUID',
  locust: 'LOCUST',
};

const neighborhoodPalette: Record<string, StampColor> = {
  'Charles Village': 'sapphire',
  'Mount Vernon': 'amber',
  'Hampden': 'crimson',
  'Inner Harbor': 'emerald',
  'Fells Point': 'sapphire',
  'Federal Hill': 'amber',
  'Station North': 'crimson',
  'Druid Hill & West': 'emerald',
  'Locust Point & Fort': 'sapphire',
  Baltimore: 'sapphire',
};

export function getPlaceStampConfig(place: PlaceStampTarget): PlaceStampConfig {
  if (!place) {
    return {
      title: 'JHU',
      label: 'BALTIMORE',
      color: 'sapphire',
    };
  }

  const placeName = (place.name || '').trim();
  const neighborhood = (place.neighborhood || 'Baltimore').trim();
  const normalizedName = placeName.toLowerCase();

  let title = 'JHU';

  const directMatch = Object.entries(SPECIAL_TITLE_OVERRIDES).find(([key]) =>
    normalizedName.includes(key)
  );

  if (directMatch) {
    title = directMatch[1];
  } else {
    const words = placeName
      .replace(/[^a-zA-Z0-9&\s]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.toLowerCase())
      .filter((word) => word && !GENERIC_WORDS.has(word));

    const chosenWord = words[0] || 'JHU';
    title = chosenWord;
  }

  const compactTitle = title.length > 9 ? title.slice(0, 9).toUpperCase() : title.toUpperCase();

  return {
    title: compactTitle,
    label: neighborhood.toUpperCase(),
    color: neighborhoodPalette[neighborhood] || 'sapphire',
  };
}
