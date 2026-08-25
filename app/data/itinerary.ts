import type { HourlyWeatherData } from "~/services/weatherService";

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Activity {
  time: string;
  activity: string;
  type:
    | "transport"
    | "food"
    | "sightseeing"
    | "shopping"
    | "culture"
    | "leisure"
    | "accommodation"
    | "rest"
    | "entertainment"
    | "arrival"
    | "experience";
  notes: string;
  coordinates?: Coordinates;
  weather?: {
    temperatureMin: number;
    temperatureMax: number;
    weatherCode: number;
    icon: string;
    description: string;
  };
  hourlyWeather?: HourlyWeatherData[];
  blockIcon?: {
    time: string;
    weatherIcon?: string | null;
  };
}

export interface Accommodation {
  name: string;
  area: string;
  price: string;
  notes?: string;
  address?: string;
  coordinates?: Coordinates;
}

export interface Transportation {
  airport?: string;
  local?: string;
  intercity?: string;
  hotel_airport?: string;
  primary?: string;
  madrid_barcelona?: string;
  flight?: string;
  versailles?: string;
  paris_rome?: string;
  rome_florence?: string;
  florence_venice?: string;
  venice_airport?: string;
  madrid_airport?: string;
}

export interface ItineraryDay {
  date: string;
  day: number;
  city: string;
  country: string;
  title: string;
  description: string;
  activities: Activity[];
  accommodation: Accommodation | null;
  transportation: Transportation;
  baseBudget: number;
  budget?: string;
  tips: string;
  weather?: {
    temperatureMin: number;
    temperatureMax: number;
    weatherCode: number;
    icon: string;
    description: string;
  };
}

export interface TimeDistributionEntry {
  label: string;
  emoji: string;
  days: number;
  percentage: string;
  colorClass: string;
}

export interface TripSummary {
  totalDays: number;
  countries: string[];
  cities: string[];
  totalBudget?: string;
  baseTotalBudget: number;
  timeDistribution: TimeDistributionEntry[];
  keyTransportation: string[];
  budgetBreakdown: Record<string, number>;
}

export interface Trip {
  id: string;
  title: string;
  subtitle: string;
  flag: string;
  currency: string;
  dateRangeLabel?: string;
  budgetNote?: string;
  keyTips: string[];
  budgetCategoryLabels?: Record<string, string>;
  itinerary: ItineraryDay[];
  summary: TripSummary;
}
