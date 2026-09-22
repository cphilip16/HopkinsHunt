# Hopkins Hunt

Hopkins Hunt is a mobile friendly web prototype that helps Johns Hopkins students discover affordable places around campus and Baltimore and figure out how to get there. Exploration challenges, badges, and a personal scrapbook support the main discovery experience.

**Live app:** [hopkins-hunt.vercel.app](https://hopkins-hunt.vercel.app)

## The student problem

Johns Hopkins students, especially those new to campus or Baltimore, need a quick way to find an affordable place to visit and understand how to reach it. Hopkins Hunt brings curated campus and city recommendations, cost and transit information, and Google Maps directions into one flow.

The core task is deliberately small: **find a suitable place → review its details → get directions.** The target user is a Hopkins student looking for somewhere to go between classes or during their free time. Testing should establish whether the app makes this task clear and useful.

## Core flow and instructor demo

1. Open the public app above; no local installation or Vercel account is required.
2. In Explore, search or filter for a free destination around campus or Baltimore.
3. Open a place and review its location, cost, and transit information.
4. In Map, search for the place or its address, or select a curated destination.
5. Open Google Maps or walking directions for the destination.

Quests, ranks, and the scrapbook are supporting features. Trips, friends, and accounts are local prototype experiences; they do not coordinate or synchronize information between students.

## User testing and iteration

**Status: student testing results have not yet been recorded in this repository.** The following is a plan and recording template, not a claim that testing has happened.

Ask a few Johns Hopkins students, ideally including someone unfamiliar with Baltimore, to try the deployed app on their usual devices. Give each person this task without walking them through the interface:

> Find a free place around Hopkins or Baltimore that you would like to visit, check its details, and open walking directions.

Observe whether they finish without help, how long it takes, and where they hesitate or get stuck. Ask what information was missing and whether they would use the app for this task. Record participants using anonymous labels such as P1.

For each session, copy and complete this record:

- **Date, participant label, and relevant student context:** To record.
- **Device/browser and app version or commit:** To record.
- **Task completion, time taken, and help needed:** To record.
- **Observed confusion and participant feedback:** To record.
- **Team decision and change made:** To record after reviewing feedback.
- **Related commit or PR:** Link the actual implementation.
- **Retest result:** Record whether the change resolved the issue.

Choose a focused improvement from the observations, implement it on a feature branch, and repeat the task to check the result. Keep both the original observation and the retest outcome so the iteration is visible.

### Changes already made

[PR #13](https://github.com/cphilip16/HopkinsHunt/pull/13) includes removal of the top Camera shortcut, the duplicate scrapbook in J Pass, and Campus Atlas, plus location search in Google Maps. These changes followed project-owner requests. They are development progress, but are not documented student-testing findings.

## AI-assisted development

OpenAI Codex was used to inspect the codebase, implement navigation and map changes, update documentation, run build checks, and assist with commits, preview deployment checks, and pull requests. The project owner selected the requested changes and merged the release PR.

For the navigation and map update, `npm.cmd run build` passed TypeScript checking and the Vite production build, and the Vercel deployment completed successfully. These technical checks do not replace testing the app with students.

The team remains responsible for product decisions, understanding the code and prototype limitations, reviewing AI-generated changes, and verifying the student experience. Add any other AI tools actually used and examples of suggestions the team accepted, changed, or rejected as the project continues.

## What you can do

- **Explore Baltimore:** Search curated recommendations and filter them by neighborhood, category, transit access, and free admission.
- **Use the interactive map:** Search any place or address on the embedded Google Map, jump to curated destinations, and open Google Maps or walking directions.
- **Check in at places:** Use browser location access to verify that you are near a destination and earn points.
- **Complete quests:** Visit themed groups of locations to unlock bonus points and celebrations.
- **Build your rank:** Progress through Blue Jay inspired ranks and collect illustrated badges.
- **Plan Flock Expeditions:** Create, join, leave, and check in to group trips with other students.
- **Create a travel scrapbook:** Take or upload photos and save memories from visited locations in the dedicated Scrapbook tab.
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
