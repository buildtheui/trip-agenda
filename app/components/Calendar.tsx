import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { MapPin, Clock, Home, Train, Lightbulb } from "lucide-react";
import type { ItineraryDay } from "../data/itinerary";

interface CalendarProps {
  itinerary: ItineraryDay[];
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
}

const getCountryFlag = (country: string): string => {
  const flags: Record<string, string> = {
    España: "🇪🇸",
    Francia: "🇫🇷",
    Italia: "🇮🇹",
  };
  return flags[country] || "🌍";
};

const Calendar: React.FC<CalendarProps> = ({
  itinerary,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5 text-center">
        Tu Itinerario Diario
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 justify-stretch">
        {itinerary.map((day) => (
          <div
            key={day.day}
            className={`
              min-w-[350px] w-full min-h-[170px] p-4 rounded-xl cursor-pointer 
              transition-all duration-300 border-2 border-transparent relative overflow-hidden
              ${
                selectedDay === day.day
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white transform -translate-y-1 shadow-xl shadow-blue-500/25 border-blue-500 min-h-auto"
                  : "bg-gradient-to-br from-gray-50 to-gray-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-400"
              }
            `}
            onClick={() =>
              setSelectedDay(selectedDay === day.day ? null : day.day)
            }
          >
            <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
              <div
                className={`text-sm font-semibold px-2 py-1 rounded-full min-w-[45px] text-center ${
                  selectedDay === day.day
                    ? "bg-white/20 backdrop-blur-lg"
                    : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                }`}
              >
                Día {day.day}
              </div>
              <div
                className={`text-xs font-medium ${selectedDay === day.day ? "text-white/90" : "text-gray-600"}`}
              >
                {format(new Date(day.date), "EEEE, d MMM", { locale: es })}
              </div>
              <div className="text-base">{getCountryFlag(day.country)}</div>
            </div>

            <div>
              <h3
                className={`text-base font-semibold mb-1 leading-tight ${
                  selectedDay === day.day ? "text-white" : "text-gray-800"
                }`}
              >
                {day.title}
              </h3>

              <div
                className={`flex items-center gap-1 mb-1 text-xs ${
                  selectedDay === day.day ? "text-white/90" : "text-gray-600"
                }`}
              >
                <MapPin size={12} />
                <span>
                  {day.city}, {day.country}
                </span>
              </div>

              <p
                className={`text-xs mb-2 leading-relaxed ${
                  selectedDay === day.day ? "text-white/80" : "text-gray-600"
                }`}
              >
                {day.description}
              </p>

              <div
                className={`flex items-center gap-1 text-xs font-semibold ${
                  selectedDay === day.day ? "text-white/90" : "text-green-600"
                }`}
              >
                <span>💰</span>
                <span>{day.budget || `€${day.baseBudget}`}</span>
              </div>
            </div>

            {selectedDay === day.day && (
              <div className="mt-4 pt-4 border-t-2 border-white/20 backdrop-blur-lg">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-white/95 flex items-center gap-2">
                    <Clock size={16} />
                    Actividades
                  </h4>
                  {day.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex gap-3 mb-3 p-2 bg-white/10 rounded-lg backdrop-blur-lg"
                    >
                      <div className="flex items-center gap-1 text-xs font-semibold text-white/80 min-w-[50px]">
                        <Clock size={10} />
                        {activity.time}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white/95 text-xs">
                            {activity.activity}
                          </span>
                        </div>
                        <p className="text-xs text-white/80 m-0 leading-tight">
                          {activity.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-white/95 flex items-center gap-2">
                    <Home size={16} />
                    Alojamiento
                  </h4>
                  {day.accommodation ? (
                    <div className="flex gap-2 items-start p-2 bg-white/10 rounded-lg backdrop-blur-lg">
                      <div className="flex-1">
                        <strong className="text-white/95 text-xs">
                          {day.accommodation.name}
                        </strong>
                        <p className="my-1 text-xs text-white/80">
                          <strong>Área:</strong> {day.accommodation.area}
                        </p>
                        <p className="my-1 text-xs text-white/80">
                          <strong>Precio:</strong> {day.accommodation.price}
                        </p>
                        {day.accommodation.notes && (
                          <p className="my-1 text-xs text-white/80">
                            {day.accommodation.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-lg">
                      <p className="text-xs text-white/80">
                        No hay alojamiento programado para este día
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-white/95 flex items-center gap-2">
                    <Train size={16} />
                    Transporte
                  </h4>
                  <div className="flex gap-2 items-start p-2 bg-white/10 rounded-lg backdrop-blur-lg">
                    <div className="flex-1">
                      {day.transportation.airport && (
                        <p className="my-1 text-xs text-white/80">
                          <strong>Aeropuerto:</strong>{" "}
                          {day.transportation.airport}
                        </p>
                      )}
                      <p className="my-1 text-xs text-white/80">
                        <strong>Local:</strong> {day.transportation.local}
                      </p>
                      {day.transportation.intercity && (
                        <p className="my-1 text-xs text-white/80">
                          <strong>Entre ciudades:</strong>{" "}
                          {day.transportation.intercity}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-lg">
                  <h4 className="text-sm font-semibold mb-2 text-white/95 flex items-center gap-2">
                    <Lightbulb size={16} />
                    Consejos
                  </h4>
                  <p className="m-0 text-xs text-white/90 leading-relaxed italic">
                    {day.tips}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
