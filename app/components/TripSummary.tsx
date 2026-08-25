import React from "react";
import {
  MapPin,
  Calendar,
  DollarSign,
  Train,
  PieChart,
  Clock,
  Users,
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
  localTransport: "Transporte Local",
  attractions: "Atracciones",
  food: "Comida",
  intercityTransport: "Transporte Entre Ciudades",
  miscellaneous: "Varios",
};

const deriveDateRange = (itinerary: ItineraryDay[]): string => {
  if (itinerary.length === 0) {
    return "Fechas por definir";
  }
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
  return `${first} - ${last}`;
};

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

  return (
    <div className="w-[350px] bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg h-fit sticky top-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {trip.flag} {trip.title}
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4 font-normal">
        {trip.subtitle}
      </p>

      {/* People Counter */}
      <div className="mb-4 p-3 bg-white/80 rounded-xl backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
          <Users size={18} className="text-blue-500" />
          <label
            htmlFor="people-count"
            className="font-semibold text-gray-800 text-sm"
          >
            Número de Viajeros:
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none rounded-md w-7 h-7 text-sm font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={peopleCount <= 1}
            >
              -
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
              className="w-11 h-7 text-center border-2 border-gray-200 rounded-md text-sm font-semibold text-gray-800 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(102,126,234,0.1)]"
            />
            <button
              onClick={() => setPeopleCount(Math.min(10, peopleCount + 1))}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none rounded-md w-7 h-7 text-sm font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-600 m-0 italic text-center">
          Los presupuestos se calculan automáticamente para {peopleCount}{" "}
          {peopleCount === 1 ? "persona" : "personas"}
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        Resumen del Viaje
      </h3>

      <div className="flex flex-col gap-3">
        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Duración
            </h3>
          </div>
          <div className="text-2xl font-bold text-blue-500 leading-none">
            {summary.totalDays}
          </div>
          <div className="text-xs text-gray-600 font-medium mb-1">Días</div>
          <p className="text-xs text-gray-800">{dateRangeLabel}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <Users size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Viajeros
            </h3>
          </div>
          <div className="text-2xl font-bold text-blue-500 leading-none">
            {peopleCount}
          </div>
          <div className="text-xs text-gray-600 font-medium mb-1">
            {peopleCount === 1 ? "Persona" : "Personas"}
          </div>
          <p className="text-xs text-gray-800">
            Presupuestos calculados para {peopleCount}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Destinos
            </h3>
          </div>
          <div className="text-2xl font-bold text-blue-500 leading-none">
            {summary.countries.length}
          </div>
          <div className="text-xs text-gray-600 font-medium mb-2">Países</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {summary.countries.map((country) => (
              <span
                key={country}
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1"
              >
                {getCountryFlag(country)}
                {country}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Presupuesto
            </h3>
          </div>
          <div className="text-2xl font-bold text-blue-500 leading-none">
            {totalBudgetLabel}
          </div>
          <div className="text-xs text-gray-600 font-medium mb-1">
            Presupuesto Total
          </div>
          <p className="text-xs text-gray-800 mt-1">{trip.budgetNote ?? ""}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <PieChart size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Distribución del Tiempo
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            {summary.timeDistribution.map((entry) => (
              <div
                key={entry.label}
                className={`flex justify-between items-center p-2 rounded-md text-xs bg-gradient-to-br ${entry.colorClass}`}
              >
                <span className="font-semibold">
                  {entry.emoji} {entry.label}
                </span>
                <span className="font-medium">
                  {entry.days} {entry.days === 1 ? "día" : "días"}
                </span>
                <span className="text-xs opacity-80">
                  ({entry.percentage})
                </span>
              </div>
            ))}
            {summary.timeDistribution.length === 0 && (
              <p className="text-xs text-gray-500 italic text-center">
                Por definir
              </p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Ciudades a Visitar
            </h3>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {summary.cities.map((city) => (
              <span
                key={city}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
              >
                {city}
              </span>
            ))}
            {summary.cities.length === 0 && (
              <p className="text-xs text-gray-500 italic">Por definir</p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <Train size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Transporte Principal
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            {summary.keyTransportation.map((transport, index) => (
              <div
                key={index}
                className="p-1 px-2 bg-gray-100 rounded-sm text-xs text-gray-700 border-l-2 border-blue-500"
              >
                <span>{transport}</span>
              </div>
            ))}
            {summary.keyTransportation.length === 0 && (
              <p className="text-xs text-gray-500 italic">Por definir</p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Desglose del Presupuesto
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            {Object.entries(summary.budgetBreakdown).map(
              ([category, amount]) => (
                <div
                  key={category}
                  className="flex justify-between items-center p-1 px-2 bg-gray-100 rounded-sm text-xs"
                >
                  <span className="text-gray-700 font-medium">
                    {budgetLabels[category] ?? category}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {trip.currency}
                    {amount}
                    {category === "accommodation" && nights > 0
                      ? ` (${nights} noches)`
                      : ""}
                  </span>
                </div>
              )
            )}
            {Object.keys(summary.budgetBreakdown).length === 0 && (
              <p className="text-xs text-gray-500 italic text-center">
                Por definir
              </p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg p-3 transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-800 m-0">
              Consejos Clave
            </h3>
          </div>
          <ul className="m-0 pl-3">
            {trip.keyTips.map((tip, index) => (
              <li
                key={index}
                className="mb-1 text-xs text-gray-700 leading-relaxed"
              >
                {tip}
              </li>
            ))}
            {trip.keyTips.length === 0 && (
              <li className="text-xs text-gray-500 italic">Por definir</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripSummaryComponent;
