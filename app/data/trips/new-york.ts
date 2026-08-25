import type { Trip } from "../itinerary";

export const newYorkTrip: Trip = {
  id: "new-york",
  title: "Viaje a Nueva York",
  subtitle: "Tu Aventura en la Gran Manzana",
  flag: "🇺🇸",
  currency: "$",
  dateRangeLabel: "Fechas por definir",
  budgetNote: "Por definir",
  keyTips: [
    "Reservar las principales atracciones online con anticipación",
    "Obtener una MetroCard o usar pagos contactless en el metro de NY",
    "Empacar según la temporada - Nueva York puede ser extremo en invierno y verano",
  ],
  itinerary: [],
  summary: {
    totalDays: 0,
    countries: [],
    cities: [],
    baseTotalBudget: 0,
    timeDistribution: [],
    keyTransportation: [],
    budgetBreakdown: {},
  },
};
