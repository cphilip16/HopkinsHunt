# Hopkins Hunt

Hopkins Hunt is a mobile friendly campus exploration game for Johns Hopkins students. It turns discovering JHU and Baltimore into a shared adventure: browse places, check in, complete quests, collect badges, plan group trips, and compare progress with friends.

**Live app:** [hopkins-hunt.vercel.app](https://hopkins-hunt.vercel.app)

## What you can do

- **Explore Baltimore:** Search curated recommendations and filter them by neighborhood, category, transit access, and free admission.
- **Use the interactive map:** Find destinations, view nearby places, and open directions in Google Maps.
- **Check in at places:** Use browser location access to verify that you are near a destination and earn points.
- **Complete quests:** Visit themed groups of locations to unlock bonus points and celebrations.
- **Build your rank:** Progress through Blue Jay inspired ranks and collect illustrated badges.
- **Plan Flock Expeditions:** Create, join, leave, and check in to group trips with other students.
- **Create a travel scrapbook:** Take or upload photos and save memories from visited locations.
- **Use a digital J-Card passport:** See profile details, stamps, badges, and exploration progress.
- **Compare with friends:** View the leaderboard and add demo friends or classmates.
- **Suggest a spot:** Submit a Baltimore or campus destination for future review.
- **Follow the tutorial:** Learn the main flows through the built in onboarding experience.

## How the prototype works

Hopkins Hunt is currently a front end prototype. Student profiles, progress, friends, trips, photos, tutorial status, and suggested places are stored in the browser with `localStorage`. They stay on the same browser and device, but there is no shared database or production authentication service yet.

The login flow supports sample student profiles and a simulated Hopkins email verification experience. For local testing, the master demo code is `187600`.

Location check ins use the browser Geolocation API. The scrapbook camera uses the MediaDevices API when camera access is available. Both features require permission from the browser and work best on HTTPS or localhost.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Canvas Confetti
- Vercel deployment

## Run locally

### Prerequisites

- A current Node.js LTS release
- npm

### Setup

```bash
git clone https://github.com/cphilip16/HopkinsHunt.git
cd HopkinsHunt
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type check the project and create a production build |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
HopkinsHunt/
|-- public/                 Static images, icons, and place photography
|-- src/
|   |-- components/         Feature views, modals, navigation, and artwork
|   |-- context/            Shared app state and browser persistence
|   |-- data/               Places, quests, ranks, trips, badges, and photos
|   |-- types/              Shared TypeScript types
|   |-- utils/              Geolocation and image helpers
|   |-- App.tsx             Main application layout and tab routing
|   |-- index.css           Global styles and Tailwind layers
|   `-- main.tsx            React entry point
|-- package.json            Dependencies and npm scripts
|-- tailwind.config.js      Theme and Tailwind configuration
|-- tsconfig.json           TypeScript configuration
`-- vite.config.ts          Vite configuration
```

## Main app sections

| Section | Description |
| --- | --- |
| Explore | Recommendations, search, filters, place details, and rank progress |
| Map | Interactive Baltimore map, location controls, and directions |
| Trips | Student group outings and trip check ins |
| Quests | Multi stop challenges and bonus rewards |
| Scrapbook | Camera and uploaded memories from explored places |
| Passport | Digital J-Card, stamps, ranks, and badges |
| Leaderboard | Friends and classmate progress |

## Current limitations

- Accounts and verification are simulated.
- Data is stored only in the current browser.
- Friend additions and place submissions are local demo actions.
- Map content and place details are curated static data.
- Location verification depends on device accuracy and browser permissions.

## Contributing

Create a focused feature branch and open a pull request instead of pushing directly to `main`. Run the production build before submitting changes:

```bash
npm run build
```
