# Hopkins Hunt

Hopkins Hunt is a playful campus adventure app built for Johns Hopkins students exploring Baltimore. The goal is simple: discover memorable places around campus and the city, earn points for visiting them, level up your student profile, and compare your progress with friends.

## Why this app exists

The app turns city exploration into a friendly challenge. Instead of a static list of recommendations, it creates a game-like experience around everyday student life: midnight study sessions, weekend neighborhood adventures, museum visits, harbor walks, and memorable food stops.

It is designed to feel like a lightweight digital passport and leaderboard for campus culture: playful, social, and motivating without requiring a backend or full production infrastructure.

## What the app includes

- Interactive destination explorer with filters for On campus, Near campus, and Off campus spots
- Searchable place cards with addresses, descriptions, point values, and map pins
- GPS-style map interface with a selected-location detail panel
- Passport-style tracking for visited locations
- Quest cards with progress tracking
- Friend leaderboard and add-friend flow
- Demo student login flow and verification screen
- Community submission form for suggesting new places
- Rank progression and point-based badges tied to the Blue Jay theme
- Mascot-inspired UI with a social, game-like presentation

## Current app theme

The experience is styled as a student scavenger hunt and local adventure game. It uses a bright blue-and-gold palette, playful UI details, and a mascot-driven design centered around the Blue Jay identity.

## Tech stack

- React + Vite
- JavaScript and JSX
- CSS for the app styling and game-like layout

## Getting started

1. Install dependencies:

   npm install

2. Start the development server:

   npm run dev

3. Open the local Vite URL shown in the terminal.

## Available scripts

- npm run dev — start the app locally
- npm run build — build the app for production
- npm run preview — preview the production build
- npm run lint — run the project linter

## Demo behavior

This version is a front-end prototype/demo. Some functionality is intentionally mock-driven, including:

- demo verification code: 123456
- sample leaderboard entries
- sample student profiles and friend data
- local in-memory state for visited spots, rank progression, and submissions

## Project roadmap

This app is a strong prototype foundation, and the next likely steps are:

- connect the app to a real backend for persistent user accounts and saved progress
- replace demo verification with a true auth flow
- store and review community spot submissions in a database
- add real location validation or geofencing for visited spots
- expand the quest system with time-based or seasonal challenges
- introduce real map data and richer place metadata
- add mobile-first polish and a more durable responsive layout

## Notes

The project is intentionally structured as a polished prototype rather than a full production backend app. If the project evolves, the README should be updated alongside any major changes to features, data flow, or app behavior.

## Project structure

- src/App.jsx — main app logic, state, and UI
- src/App.css — styling, layout, and visual design
- src/main.jsx — app entry point
- public/places — static image assets for destinations
- index.html — Vite entry document
- package.json — app scripts and dependencies
- README.md — project overview and current feature summary

## How the app is organized

This project is intentionally compact and front-end focused. The main experience lives in a single large React component with a set of in-memory arrays for places, quests, leaderboard data, and submissions. That makes it easy to prototype quickly and iterate on design, but it also means a future backend or data layer will be the main architectural step once the app moves beyond the demo stage.

## Maintainer reminder

This README should be updated whenever a significant app change lands, such as:

- new gameplay features
- major UI redesigns
- backend or auth changes
- new data sources or place categories
- major user-flow changes

Keeping this file current helps future contributors understand the product intent, current status, and next milestones without digging through all the app code.
