import React, { useState } from "react";
import { useParams } from "react-router";
import Calendar from "../components/Calendar";
import TripSummary from "../components/TripSummary";
import TripSelector from "../components/TripSelector";
import { getTripById } from "../data/trips";
import type { Route } from "./+types/trip.$tripId";

export function meta({ params }: Route.MetaArgs) {
  const trip = getTripById(params.tripId);
  if (!trip) {
    return [{ title: "Itinerario no encontrado" }];
  }
  return [
    { title: `Calendario de Viaje - ${trip.title}` },
    { name: "description", content: trip.subtitle },
  ];
}

export default function TripPage() {
  const { tripId } = useParams();
  const trip = getTripById(tripId);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [peopleCount, setPeopleCount] = useState<number>(2);

  if (!trip) {
    return (
      <div className="min-h-screen p-4 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Itinerario no encontrado
        </h1>
        <p className="text-sm text-gray-600">
          El itinerario que buscas no existe.
        </p>
        <TripSelector />
      </div>
    );
  }

  const calculateBudgets = (baseBudget: number, people: number): number => {
    return Math.round(baseBudget * people);
  };

  const updatedItinerary = trip.itinerary.map((day) => ({
    ...day,
    budget: `${trip.currency}${calculateBudgets(day.baseBudget, peopleCount)}`,
  }));

  const updatedTripSummary = {
    ...trip.summary,
    totalBudget: `${trip.currency}${calculateBudgets(
      trip.summary.baseTotalBudget,
      peopleCount
    )}`,
    budgetBreakdown: Object.fromEntries(
      Object.entries(trip.summary.budgetBreakdown).map(([key, value]) => [
        key,
        calculateBudgets(value as number, peopleCount),
      ])
    ),
  };

  const updatedTrip = {
    ...trip,
    itinerary: updatedItinerary,
    summary: updatedTripSummary,
  };

  return (
    <div className="min-h-screen p-4">
      <TripSelector />
      <main className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-5 w-full mx-0 px-2">
        <div className="w-full min-w-0">
          <Calendar
            itinerary={updatedItinerary}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>

        <div className="w-[350px] min-w-[350px] xl:w-[350px] max-xl:max-w-[350px] max-xl:mx-auto max-xl:static">
          <TripSummary
            trip={updatedTrip}
            peopleCount={peopleCount}
            setPeopleCount={setPeopleCount}
          />
        </div>
      </main>
    </div>
  );
}
