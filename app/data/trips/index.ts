import type { Trip } from "../itinerary";
import { europeTrip } from "./europe-2025";
import { newYorkTrip } from "./new-york";

export const trips: Trip[] = [europeTrip, newYorkTrip];

export const getTripById = (id: string | undefined): Trip | undefined =>
  trips.find((trip) => trip.id === id);
