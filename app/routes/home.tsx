import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import TripSummary from '../components/TripSummary';
import { itinerary, tripSummary } from '../data/itinerary';

export function meta() {
  return [
    { title: "Calendario de Viaje por Europa" },
    { name: "description", content: "Planificador de itinerario para tu viaje por Europa" },
  ];
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [peopleCount, setPeopleCount] = useState<number>(2);

  // Calculate budgets based on number of people
  const calculateBudgets = (baseBudget: number, people: number): number => {
    return Math.round(baseBudget * people);
  };

  const updatedItinerary = itinerary.map(day => ({
    ...day,
    budget: `€${calculateBudgets(day.baseBudget, peopleCount)}`
  }));

  const updatedTripSummary = {
    ...tripSummary,
    totalBudget: `€${calculateBudgets(tripSummary.baseTotalBudget, peopleCount)} (excluyendo vuelos)`,
    budgetBreakdown: Object.fromEntries(
      Object.entries(tripSummary.budgetBreakdown).map(([key, value]) => [
        key, calculateBudgets(value as number, peopleCount)
      ])
    )
  };

  return (
    <div className="min-h-screen p-4">
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
            summary={updatedTripSummary} 
            peopleCount={peopleCount}
            setPeopleCount={setPeopleCount}
          />
        </div>
      </main>
    </div>
  );
}
