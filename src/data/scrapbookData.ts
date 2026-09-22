import { ScrapbookPhoto } from '../types';

export const INITIAL_SCRAPBOOK_PHOTOS: ScrapbookPhoto[] = [
  {
    id: 'photo-peabody-stacks',
    placeId: 'peabody-library',
    placeName: 'George Peabody Library',
    neighborhood: 'Mount Vernon',
    dataUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/George_Peabody_Library_2023.jpg',
    timestamp: 'Yesterday at 4:15 PM',
    caption: 'Standing beneath 6 tiers of cast-iron golden balconies. Pure academic cathedral magic!',
    filter: 'vintage',
    frameStyle: 'polaroid',
    stickerKey: 'book-stack',
    likes: 18,
  },
  {
    id: 'photo-gilman-quad',
    placeId: 'bma',
    placeName: 'Gilman Quad & BMA Gardens',
    neighborhood: 'Charles Village',
    dataUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Baltimore_Museum_of_Art_entrance.jpg',
    timestamp: '2 days ago at 2:30 PM',
    caption: 'Sunbathing and reading Matisse catalogs between biostats lectures with the squad.',
    filter: 'warm-sun',
    frameStyle: 'postcard',
    stickerKey: 'baby-jay',
    likes: 24,
  },
  {
    id: 'photo-fells-waterfront',
    placeId: 'fells-point-broadway',
    placeName: 'Fells Point Waterfront',
    neighborhood: 'Fells Point',
    dataUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Fells_Point_waterfront_2019.jpg',
    timestamp: 'Sep 14, 2026 at 6:45 PM',
    caption: 'Golden hour reflections off the Patapsco River and 18th-century Belgian cobblestones.',
    filter: 'hopkins-blue',
    frameStyle: 'polaroid',
    stickerKey: 'maryland-crab',
    likes: 31,
  },
];

