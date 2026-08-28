# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The owner, planning and traveling: one traveler who builds the itinerary before the trip and opens it on the road to know what to do next, what it costs, and what the weather says. Confirmed future direction: other travelers once the calendar is generic enough, so every capability today should read as a product others could use, not a private scratchpad.

## Product Purpose

A trip calendar that holds the whole trip day by day. Each day carries the itinerary with per-activity times and notes, where to sleep, how to move, what it costs, and what the weather will be like hour by hour — so the owner never has to keep the plan in their head or switch apps. Success is opening it at any moment, on any day of the trip, and instantly knowing what is next.

## Positioning

What a generic trip planner does not do: the calendar, hourly weather, per-day budget, maps, transport, and tips all hang off the same concrete day and activity. Nothing is a separate tab or an export — the whole trip lives in one calendar place.

## Operating Context

- Used from a browser on desktop and while traveling on mobile, including on slow hotel wifi.
- Planning happens before the trip (building/reading days, checking weather); the trip itself is the main consumption scene.
- Content today is Spanish; the owner plans trips out of Colombia/Bogotá (home trips: Europe, New York).
- Codebase: React Router 7 (SSR) + Tailwind CSS 4 + TypeScript, deployed via Docker or Vercel.

## Capabilities and Constraints

- Two routes: index redirects to the latest trip; `/trip/:tripId` renders the trip (TripSelector, Calendar, TripSummary).
- Weather is live from the Open-Meteo API (client-side, hourly per day/activity); maps via Leaflet (DayMapModal).
- Trips are hardcoded typed data in `app/data/trips/` (`ItineraryDay`, `Activity`, `Accommodation`, `Transportation`); adding a trip currently means adding a data file, not a form. No backend, no auth, no user accounts — multi-user is future, not present.
- Budgets: per-day `baseBudget` plus rendered budget lines; accommodation and transport costs recorded per day.
- Constraint: itinerary content must remain real — dates, places, times, names, and prices reflect actual planned trips and must never be fictionalized.

## Evidence on Hand

- Real itineraries: `app/data/trips/europe-2025.ts` (Madrid → Rome → Florence → Venice, 1200 lines), `app/data/trips/new-york.ts` (507 lines).
- No marketing copy, testimonials, or press exist. Future design must not fabricate them.

## Product Principles

1. **One place for the whole trip.** Every fact about a trip ends up on its day; if a detail can't be found on a day, the model is incomplete.
2. **Real, not generic.** Dates, places, names, and prices are real trips. Nothing becomes a placeholder or example.
3. **Useful before and during.** The same calendar must be pleasant to plan with at home and fast to read from a phone on the street.
4. **Own the weather at the hour level.** Weather affects when to move and what to pack; it rides on each activity block.
5. **Built personal, designed universal.** Features read cleanly to any traveler, because the intent is to open it up later.

## Accessibility & Inclusion

No product-specific requirement was established. The owner reads the trip on a phone in daylight and at night; legibility under real-world glare and dimness is treated as a daily-use need.
