import React from "react";
import {
  MapPin,
  CalendarRange,
  Wallet,
  TrainFront,
  Users,
  Sparkles,
  Clock,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { ItineraryDay, Trip } from "../data/itinerary";
import { getCountryFlag } from "../utils/countryFlags";

interface TripSummaryProps {
  trip: Trip;
  peopleCount: number;
  setPeopleCount: (count: number) => void;
}

const DEFAULT_BUDGET_LABELS: Record<string, string> = {
  accommodation: "Alojamiento",
  localTransport: "Transporte local",
  attractions: "Atracciones",
  food: "Comida",
  intercityTransport: "Transporte entre ciudades",
  miscellaneous: "Varios",
};

const deriveDateRange = (itinerary: ItineraryDay[]): string => {
  if (itinerary.length === 0) return "Fechas por definir";
  const first = format(
    new Date(itinerary[0].date + "T12:00:00"),
    "d 'de' MMMM, yyyy",
    { locale: es }
  );
  const last = format(
    new Date(itinerary[itinerary.length - 1].date + "T12:00:00"),
    "d 'de' MMMM, yyyy",
    { locale: es }
  );
  return `${first} — ${last}`;
};

const StatRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <section className="px-1 py-3">
    <div className="mb-2 flex items-center gap-2">
      {icon}
      <h3 className="label">{label}</h3>
    </div>
    {children}
  </section>
);

const TripSummaryComponent: React.FC<TripSummaryProps> = ({
  trip,
  peopleCount,
  setPeopleCount,
}) => {
  const { summary } = trip;
  const dateRangeLabel = trip.dateRangeLabel ?? deriveDateRange(trip.itinerary);
  const nights = trip.itinerary.filter((day) => day.accommodation).length;
  const budgetLabels = trip.budgetCategoryLabels ?? DEFAULT_BUDGET_LABELS;
  const totalBudgetLabel =
    summary.totalBudget ?? `${trip.currency}${summary.baseTotalBudget}`;
  const budgetRows = Object.entries(summary.budgetBreakdown).filter(
    ([, value]) => value !== 0
  );

  return (
    <section className="rounded-lg border bg-sheet text-ink shadow-[0_18px_44px_-24px_rgba(38,30,16,0.55)]">
      {/* Trip identity */}
      <header className="border-b px-5 pb-3 pt-4">
        <h2 className="text-xl font-bold leading-tight tracking-[-0.01em]">
          {trip.flag} {trip.title}
        </h2>
        <p className="mt-1 text-sm text-ink-2">{trip.subtitle}</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2">
          <span className="time-chip">{dateRangeLabel}</span>
        </div>
      </header>

      <div className="divide-y px-4">
        {/* Travelers counter */}
        <StatRow icon={<Users size={14} className="text-accent" aria-hidden="true" />} label="Viajeros">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Restar un viajero"
              onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
              disabled={peopleCount <= 1}
              className="h-8 w-8 rounded-md border border-rule-deep bg-[#efe8d6] text-base font-bold text-ink transition-colors hover:border-accent hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>
            <input
              id="people-count"
              type="number"
              min="1"
              max="10"
              value={peopleCount}
              onChange={(e) =>
                setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="num h-10 w-14 rounded-md border border-rule-deep bg-white text-center text-lg font-bold text-ink"
              style={{ caretColor: "var(--color-accent)" }}
            />
            <button
              type="button"
              aria-label="Sumar un viajero"
              onClick={() => setPeopleCount(Math.min(10, peopleCount + 1))}
              className="h-8 w-8 rounded-md border border-rule-deep bg-[#efe8d6] text-base font-bold text-ink transition-colors hover:border-accent hover:bg-white"
            >
              +
            </button>
          </div>
          <label
            htmlFor="people-count"
            className="mt-1.5 block text-center text-[11px] italic text-ink-2"
          >
            Presupuestos calculados para {peopleCount}{" "}
            {peopleCount === 1 ? "persona" : "personas"}
          </label>
        </StatRow>

        {/* Duration */}
        <StatRow
          icon={<CalendarRange size={14} className="text-accent" aria-hidden="true" />}
          label="Duración"
        >
          <div className="flex items-baseline justify-between">
            <p className="num text-4xl font-bold leading-none">{summary.totalDays}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-2">
              días
            </p>
          </div>
          <div className="leader mt-2 text-sm">
            <span>{dateRangeLabel}</span>
            <span className="fill" aria-hidden="true"></span>
            <span className="font-medium text-ink-2">
              {nights} {nights === 1 ? "noche" : "noches"}
            </span>
          </div>
        </StatRow>

        {/* Budget */}
        <StatRow
          icon={<Wallet size={14} className="text-accent" aria-hidden="true" />}
          label="Presupuesto"
        >
          <p className="num text-4xl font-bold leading-none text-accent-deep">
            {totalBudgetLabel}
          </p>
          <p className="mt-1.5 text-[11px] italic text-ink-2">
            {trip.budgetNote ? <span>{trip.budgetNote}</span> : "Presupuesto total"}
          </p>
          <div className="mt-2 flex flex-col gap-1">
            {budgetRows.map(([category, amount]) => (
              <div key={category} className="leader text-xs">
                <span>{budgetLabels[category] ?? category}</span>
                <span className="fill" aria-hidden="true"></span>
                <span className="num font-bold">
                  {trip.currency}
                  {amount}
                  {category === "accommodation" && nights > 0
                    ? ` · ${nights} ${nights === 1 ? "noche" : "noches"}`
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </StatRow>

        {/* Destinations */}
        <StatRow
          icon={<MapPin size={14} className="text-accent" aria-hidden="true" />}
          label={`Destinos · ${summary.cities.length} ${summary.cities.length === 1 ? "ciudad" : "ciudades"}`}
        >
          <div className="flex flex-wrap gap-1.5">
            {summary.countries.map((country) => (
              <span key={country} className="chip">
                {getCountryFlag(country)} {country}
              </span>
            ))}
            {summary.countries.length === 0 && (
              <span className="text-xs italic text-ink-2">Por definir</span>
            )}
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {summary.cities.map((city) => (
              <span
                key={city}
                className="rounded-md border border-black/10 bg-[#efe8d6] px-2 py-0.5 text-xs font-medium"
              >
                {city}
              </span>
            ))}
            {summary.cities.length === 0 && (
              <span className="text-xs italic text-ink-2">Por definir</span>
            )}
          </div>
        </StatRow>

        {/* Time distribution */}
        <StatRow
          icon={<Clock size={14} className="text-accent" aria-hidden="true" />}
          label="Distribución del tiempo"
        >
          {summary.timeDistribution.length === 0 ? (
            <p className="text-xs italic text-ink-2">Por definir</p>
          ) : (
            <div className="flex flex-col gap-2">
              <div
                className="flex h-3 w-full gap-px overflow-hidden rounded-full"
                role="img"
                aria-label="Distribución de días por país"
              >
                {summary.timeDistribution.map((entry, index) => (
                  <span
                    key={entry.label}
                    className="h-full min-w-0"
                    style={{
                      flexGrow: Number(entry.percentage.replace("%", "")),
                      background: "var(--color-accent)",
                      opacity: index % 2 === 0 ? 0.55 : 1,
                    }}
                    title={`${entry.emoji} ${entry.label}: ${entry.days} días (${entry.percentage})`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {summary.timeDistribution.map((entry) => (
                  <div key={entry.label} className="leader text-xs">
                    <span>
                      {entry.emoji} {entry.label}
                    </span>
                    <span className="fill" aria-hidden="true"></span>
                    <span className="font-bold num">{entry.percentage}</span>
                    <span className="num font-medium text-ink-2">
                      {entry.days} {entry.days === 1 ? "día" : "días"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </StatRow>

        {/* Key transportation */}
        <StatRow
          icon={<TrainFront size={14} className="text-accent" aria-hidden="true" />}
          label="Transporte principal"
        >
          {summary.keyTransportation.length === 0 ? (
            <p className="text-xs italic text-ink-2">Por definir</p>
          ) : (
            <ul className="flex flex-col gap-1.5">
              {summary.keyTransportation.map((transport, index) => (
                <li
                  key={index}
                  className="text-[13px] leading-snug text-ink"
                >
                  <span className="mr-1.5 text-accent" aria-hidden="true">
                    ▸
                  </span>
                  {transport}
                </li>
              ))}
            </ul>
          )}
        </StatRow>

        {/* Key tips */}
        <StatRow
          icon={<Sparkles size={14} className="text-accent" aria-hidden="true" />}
          label="Consejos clave"
        >
          {trip.keyTips.length === 0 ? (
            <p className="text-xs italic text-ink-2">Por definir</p>
          ) : (
            <ul className="flex flex-col gap-1.5">
              {trip.keyTips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-[13px] leading-snug text-ink">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {tip}
                </li>
              ))}
            </ul>
          )}
        </StatRow>
      </div>

      <footer className="border-t px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-2/70">
        {trip.flag} {trip.currency} — tablón de partidas
      </footer>
    </section>
  );
};

export default TripSummaryComponent;
