import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Check, ChevronDown } from "lucide-react";
import { getTripById, trips } from "../data/trips";

const TripSelector: React.FC = () => {
  const { pathname } = useLocation();
  const tripId = pathname.split("/").filter(Boolean)[1];
  const currentTrip = getTripById(tripId);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mb-5 flex justify-center pt-3">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Seleccionar itinerario"
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg shadow-purple-950/20 ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        {currentTrip ? (
          <>
            <span className="text-base leading-none">{currentTrip.flag}</span>
            <span>{currentTrip.title}</span>
          </>
        ) : (
          <span>Seleccionar itinerario</span>
        )}
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full left-1/2 z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-xl bg-white py-1 shadow-xl shadow-purple-950/25 ring-1 ring-black/10"
        >
          {trips.map((trip) => {
            const active = trip.id === tripId;
            return (
              <Link
                key={trip.id}
                to={`/trip/${trip.id}`}
                role="option"
                aria-selected={active}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-800 hover:bg-purple-50"
                }`}
              >
                <span className="text-base leading-none">{trip.flag}</span>
                <span className="flex-1 truncate">{trip.title}</span>
                {active && <Check size={16} />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TripSelector;
