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

const makeMarkerIcon = (emoji: string): L.DivIcon =>
  L.divIcon({
    className: "",
    html: `<div style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:9999px;background:#ffffff;border:2px solid ${
      emoji === "🏨" ? "#8b5cf6" : "#4f46e5"
    };box-shadow:0 1px 4px rgba(0,0,0,0.35);font-size:14px;line-height:1;">${emoji}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
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
    map.fitBounds(bounds, { padding: [48, 48] });
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
    <div className="fixed inset-0 z-50 flex flex-col bg-white shadow-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-gray-800">
            {day.title}
          </h3>
          <p className="text-xs text-gray-500">
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
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
        >
          <X size={18} />
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
              pathOptions={{ color: "#4f46e5", weight: 3, opacity: 0.85 }}
            />
            {points.map((point) => (
              <Marker
                key={`${point.name}-${point.time ?? "start"}`}
                position={[point.coordinates.lat, point.coordinates.lon]}
                icon={makeMarkerIcon(
                  point.type === "hotel" ? "🏨" : getActivityIcon(point.type)
                )}
              >
                <Popup>
                  <div className="text-xs">
                    <p className="m-0 font-semibold text-gray-800">
                      {point.name}
                    </p>
                    {point.time && (
                      <p className="m-0 mt-0.5 text-gray-500">{point.time}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-50">
            <p className="text-lg font-semibold text-gray-700">
              No hay lugares con coordenadas para este día
            </p>
            <p className="text-sm text-gray-500">
              Agrega `coordinates` a las actividades del itinerario para
              verlas en el mapa.
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default DayMapModal;
