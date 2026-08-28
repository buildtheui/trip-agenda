import React, { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Clock,
  Home,
  TrainFront,
  Lightbulb,
  ExternalLink,
  CloudSun,
  CalendarOff,
} from "lucide-react";
import type { ItineraryDay } from "../data/itinerary";
import { useWeather } from "../hooks/useWeather";
import { getCountryFlag } from "../utils/countryFlags";
import { hasMapPoints } from "../utils/mapPoints";
import DayMapModal from "./DayMapModal";
import DayFace from "./DayFace";

interface CalendarProps {
  itinerary: ItineraryDay[];
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
}

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isToday = (date: string): boolean =>
  isSameDay(new Date(date + "T12:00:00"), new Date());

const Calendar: React.FC<CalendarProps> = ({
  itinerary,
  selectedDay,
  setSelectedDay,
}) => {
  const { getItineraryWithWeather, loading, error } = useWeather(itinerary);
  const itineraryWithWeather = getItineraryWithWeather();
  const [mapDay, setMapDay] = useState<ItineraryDay | null>(null);

  const switchDay = (day: number, open: boolean) =>
    setSelectedDay(open ? day : null);

  if (itineraryWithWeather.length === 0) {
    return (
      <div className="board-panel">
        <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
          <CalendarOff size={28} className="text-flap/50" aria-hidden="true" />
          <p className="text-lg font-semibold text-flap">
            Este itinerario aún no tiene días definidos
          </p>
          <p className="max-w-sm text-sm text-flap/60">
            Pronto se agregarán las actividades, alojamientos y transporte.
          </p>
        </div>
      </div>
    );
  }

  const today = new Date();
  const anyFutureDay = itinerary.some(
    (day) => new Date(day.date + "T12:00:00") >= today
  );

  return (
    <div className="board-panel">
      {error && (
        <p
          role="status"
          className="mb-3 rounded-[3px] border border-black bg-[#241300] px-3 py-2 text-center text-xs font-semibold tracking-[0.08em] text-[#ffb35c]"
        >
          ⚠️ NO SE PUDO CARGAR LA INFORMACIÓN METEOROLÓGICA
        </p>
      )}

      <div className="flex flex-col gap-[6px]">
        {itineraryWithWeather.map((day) => {
          const isOpen = selectedDay === day.day;
          const past = new Date(day.date + "T12:00:00") < new Date();
          const detailId = `day-detail-${day.day}`;
          return (
            <div
              key={day.day}
              className={`day-rail ${isOpen ? "is-open" : ""}`}
            >
              <DayFace
                dayNumber={day.day}
                dateText={format(
                  new Date(day.date + "T12:00:00"),
                  "dd MMM",
                  { locale: es }
                ).toUpperCase()}
                city={day.city}
                country={day.country}
                flag={getCountryFlag(day.country)}
                weather={day.weather}
                weatherLoading={loading && !day.weather}
                budget={day.budget ?? `€${day.baseBudget}`}
                isOpen={isOpen}
                isPast={past && anyFutureDay && !isToday(day.date)}
                accent={isToday(day.date)}
                onToggle={() => switchDay(day.day, !isOpen)}
                onKeyNav={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    switchDay(day.day, !isOpen);
                  }
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    switchDay(day.day, true);
                  }
                }}
                onMap={
                  hasMapPoints(day)
                    ? (e) => {
                        e.stopPropagation();
                        setMapDay(day);
                      }
                    : undefined
                }
                mapLabel={`Ver mapa del día ${day.day}`}
              />

              <div id={detailId} className="sheet-wrap">
                <div className="sheet-clip">
                  <div className="sheet">
                    <div className="sheet-inner">
                      <DayDetail day={day} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {mapDay && (
        <DayMapModal day={mapDay} onClose={() => setMapDay(null)} />
      )}
    </div>
  );
};

const SectionLabel: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({
  icon,
  children,
}) => (
  <h3 className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-2">
    {icon}
    {children}
  </h3>
);

const DayDetail: React.FC<{ day: ItineraryDay }> = ({ day }) => {
  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-b pb-3" style={{ borderColor: "var(--color-rule)" }}>
        <span className="flap-cell flap-cell--lit px-2 text-[11px] font-bold tracking-[0.12em]" aria-hidden="true">
          DÍA {String(day.day).padStart(2, "0")}
        </span>
        <h2 className="text-xl font-bold leading-tight text-ink">
          {day.title}
        </h2>
        <span className="w-full text-sm font-medium text-ink-2 sm:w-auto">
          {day.city}, {day.country} ·{" "}
          {format(new Date(day.date + "T12:00:00"), "EEEE, d 'de' MMMM", {
            locale: es,
          })}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionLabel icon={<Clock size={12} className="text-accent" aria-hidden="true" />}>
            Actividades
          </SectionLabel>
          <div className="flex flex-col gap-2.5">
            {day.activities.map((activity, index) => {
              const mapsUrl = activity.coordinates
                ? `https://www.google.com/maps/search/?api=1&query=${activity.coordinates.lat},${activity.coordinates.lon}`
                : null;
              const inner = (
                <>
                  <span className="time-chip">{activity.time}</span>
                  {activity.blockIcon?.weatherIcon && (
                    <span className="text-[15px] leading-none" aria-hidden="true">
                      {activity.blockIcon.weatherIcon}
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold leading-tight text-ink">
                      {activity.activity}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-ink-2">
                      {activity.notes}
                    </span>
                  </span>
                  {mapsUrl && (
                    <ExternalLink
                      size={13}
                      className="shrink-0 text-ink-2 transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  )}
                </>
              );
              const cls =
                "group flex items-start gap-3 rounded-md border px-3 py-2 transition-colors";
              return mapsUrl ? (
                <a
                  key={index}
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir en Google Maps"
                  className={`${cls} border-black/10 bg-[#efe8d6] hover:border-accent hover:bg-white`}
                >
                  {inner}
                </a>
              ) : (
                <div key={index} className={`${cls} border-black/10 bg-[#efe8d6]`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {day.weather && (
            <div>
              <SectionLabel icon={<CloudSun size={13} className="text-accent" aria-hidden="true" />}>
                Clima del día
              </SectionLabel>
              <div className="flex items-center gap-3">
                <span className="text-[26px]" aria-hidden="true">
                  {day.weather.icon}
                </span>
                <div className="text-sm">
                  <span className="font-bold text-ink">
                    {day.weather.temperatureMax}°
                  </span>
                  <span className="mx-1 text-ink-2">/</span>
                  <span className="font-medium text-ink">{day.weather.temperatureMin}°</span>
                  <span className="ml-2 text-xs italic text-ink-2">
                    {day.weather.description}
                  </span>
                </div>
              </div>
            </div>
          )}

          {day.accommodation && (
            <div>
              <SectionLabel icon={<Home size={12} className="text-accent" aria-hidden="true" />}>
                Alojamiento
              </SectionLabel>
              <div className="rounded-md border border-black/10 bg-[#efe8d6] px-3 py-2 text-sm">
                <p className="font-bold text-ink">{day.accommodation.name}</p>
                {day.accommodation.area && (
                  <p className="mt-0.5 text-xs font-medium text-ink-2">
                    Área: {day.accommodation.area}
                  </p>
                )}
                {day.accommodation.price && (
                  <p className="mt-0.5 text-xs text-ink-2">
                    Precio: <span className="font-bold text-ink">{day.accommodation.price}</span>
                  </p>
                )}
                {day.accommodation.notes && (
                  <p className="mt-1 text-xs leading-snug text-ink-2">
                    {day.accommodation.notes}
                  </p>
                )}
              </div>
            </div>
          )}

          <div>
            <SectionLabel icon={<TrainFront size={13} className="text-accent" aria-hidden="true" />}>
              Transporte
            </SectionLabel>
            <div className="rounded-md border border-black/10 bg-[#efe8d6] px-3 py-2 text-xs leading-relaxed text-ink-2">
              {day.transportation.airport && (
                <p>
                  <span className="font-semibold text-ink">Aeropuerto:</span>{" "}
                  {day.transportation.airport}
                </p>
              )}
              {day.transportation.local && (
                <p>
                  <span className="font-semibold text-ink">Local:</span>{" "}
                  {day.transportation.local}
                </p>
              )}
              {day.transportation.intercity && (
                <p>
                  <span className="font-semibold text-ink">Entre ciudades:</span>{" "}
                  {day.transportation.intercity}
                </p>
              )}
            </div>
          </div>

          <div>
            <SectionLabel icon={<Lightbulb size={13} className="text-accent" aria-hidden="true" />}>
              Consejos
            </SectionLabel>
            <p className="text-sm italic leading-relaxed text-ink-2">{day.tips}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
