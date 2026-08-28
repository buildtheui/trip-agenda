import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Plane } from "lucide-react";
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
    <div ref={containerRef} className="band relative">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Seleccionar itinerario"
          className="plate"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-board text-flap shadow-[inset_0_1px_0_rgba(243,237,223,0.08),inset_0_-2px_2px_rgba(0,0,0,0.45)]">
            <Plane size={13} aria-hidden="true" />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.04em]">
            {currentTrip ? currentTrip.title : "Seleccionar itinerario"}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {open && (
        <div
          role="listbox"
          className="absolute left-1/2 top-full z-50 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-bl-xl rounded-br-xl border border-t-0 border-black bg-board py-2 shadow-[0_28px_60px_-18px_rgba(0,0,0,0.65)]"
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
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                  active
                    ? "bg-[#faf8f1] text-ink"
                    : "text-flap hover:bg-white/5"
                }`}
              >
                <span className="text-base leading-none">{trip.flag}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold leading-tight">
                    {trip.title}
                  </span>
                  {trip.dateRangeLabel && (
                    <span
                      className={`block text-[11px] leading-tight ${
                        active ? "text-ink/60" : "text-flap/50"
                      }`}
                    >
                      {trip.dateRangeLabel}
                    </span>
                  )}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-[0.12em] ${
                    active ? "text-ink/50" : "text-flap/40"
                  }`}
                >
                  {trip.summary.totalDays} DÍAS
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TripSelector;
