import type { Activity, ItineraryDay } from "../data/itinerary";

export interface MapPoint {
  name: string;
  type: "hotel" | Activity["type"];
  coordinates: { lat: number; lon: number };
  time?: string;
}

const activityEmojis: Record<Activity["type"], string> = {
  transport: "🚇",
  food: "🍽️",
  sightseeing: "📍",
  shopping: "🛍️",
  culture: "🏛️",
  leisure: "🌳",
  accommodation: "🏨",
  rest: "☕",
  entertainment: "🎭",
  arrival: "✈️",
  experience: "✨",
};

export const getActivityIcon = (type: Activity["type"]): string =>
  activityEmojis[type] || "📍";

export const getDayMapPoints = (day: ItineraryDay): MapPoint[] => {
  const points: MapPoint[] = [];

  if (day.accommodation?.coordinates) {
    points.push({
      name: day.accommodation.name,
      type: "hotel",
      coordinates: day.accommodation.coordinates,
    });
  }

  day.activities.forEach((activity) => {
    if (activity.coordinates) {
      points.push({
        name: activity.activity,
        type: activity.type,
        coordinates: activity.coordinates,
        time: activity.time,
      });
    }
  });

  return points;
};

export const hasMapPoints = (day: ItineraryDay): boolean =>
  getDayMapPoints(day).length > 0;
