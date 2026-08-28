import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { X } from "lucide-react";
import "leaflet/dist/leaflet.css";
import type { ItineraryDay } from "../data/itinerary";
import { getActivityIcon, getDayMapPoints, type MapPoint } from "../utils/mapPoints";

interface DayMapModalProps {
  day: ItineraryDay;
  onClose: () => void;
}

const makeMarkerIcon = (emoji: string, isHotel: boolean): L.DivIcon =>
  L.divIcon({
    className: "",
    html: `<div style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9999px;background:#faf8f1;border:2px solid ${
      isHotel ? "#2b6cb0" : "#1c1a17"
    };box-shadow:0 2px 5px rgba(0,0,0,0.4);font-size:14px;line-height:1;">${emoji}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

const FitBounds: React.FC<{ points: MapPoint[] }> = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (points.length === 0) {
      return;
    }
    const bounds = L.latLngBounds(
      points.map((point) => [point.coordinates.lat, point.coordinates.lon])
    );
    map.fitBounds(bounds, { padding: [56, 56] });
  }, [map, points]);

  return null;
};

const DayMapModal: React.FC<DayMapModalProps> = ({ day, onClose }) => {
  const points = getDayMapPoints(day);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Mapa de la ruta del día ${day.day}`}
      className="fixed inset-0 z-50 flex flex-col bg-board shadow-2xl"
    >
      <div className="band flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold uppercase tracking-[0.03em] text-flap">
            {day.title}
          </h3>
          <p className="text-xs text-flap/60">
            {format(new Date(day.date + "T12:00:00"), "EEEE, d 'de' MMMM", {
              locale: es,
            })}{" "}
            · {day.city}, {day.country}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar mapa"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] border border-black bg-cell text-flap shadow-[inset_0_1px_0_rgba(243,237,223,0.08)] transition-colors hover:bg-accent hover:text-board"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        {points.length > 0 ? (
          <MapContainer className="h-full w-full" scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <FitBounds points={points} />
            <Polyline
              positions={points.map((point) => [
                point.coordinates.lat,
                point.coordinates.lon,
              ])}
              pathOptions={{ color: "#2b6cb0", weight: 4, opacity: 0.9 }}
            />
            {points.map((point) => (
              <Marker
                key={`${point.name}-${point.time ?? "start"}`}
                position={[point.coordinates.lat, point.coordinates.lon]}
                icon={makeMarkerIcon(
                  point.type === "hotel" ? "🏨" : getActivityIcon(point.type),
                  point.type === "hotel"
                )}
              >
                <Popup>
                  <div className="text-xs">
                    <p className="m-0 font-semibold text-ink">
                      {point.name}
                    </p>
                    {point.time && (
                      <p className="m-0 mt-0.5 text-ink-2">{point.time}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-sheet">
            <p className="text-base font-semibold text-ink">
              No hay lugares con coordenadas para este día
            </p>
            <p className="max-w-sm text-center text-sm text-ink-2">
              Agrega coordinates a las actividades del itinerario para verlas en
              el mapa.
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default DayMapModal;
