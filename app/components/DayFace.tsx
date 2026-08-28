import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * Split-flap departure board for one day row.
 * Two rows of board type: DÍA ## · DATE | flag + city — weather (left) | budget + MAPA.
 * Only MAPA is a button; everything else is flat board type.
 */
interface DayFaceProps {
  dayNumber: number;
  dateText: string;
  city: string;
  country: string;
  flag: string;
  weather?: { icon: string; temperatureMax: number; temperatureMin: number } | null;
  weatherLoading?: boolean;
  budget?: string | null;
  isOpen: boolean;
  isPast: boolean;
  accent?: boolean;
  onToggle: () => void;
  onMap?: (e: React.MouseEvent) => void;
  onKeyNav?: (e: React.KeyboardEvent) => void;
  mapLabel?: string;
}

const DayFace: React.FC<DayFaceProps> = ({
  dayNumber,
  dateText,
  city,
  country,
  flag,
  weather,
  weatherLoading,
  budget,
  isOpen,
  isPast,
  accent = false,
  onToggle,
  onMap,
  onKeyNav,
  mapLabel,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={onKeyNav}
      className={`day-face ${isPast ? "is-past" : ""}`}
    >
      {/* Row 1 · left: DÍA ## · DATE */}
      <span className="day-block">
        <span className="k">DÍA</span>
        <span className={`num ${accent ? "accent" : ""}`}>
          {String(dayNumber).padStart(2, "0")}
        </span>
        <span className="dot" aria-hidden="true">
          ·
        </span>
        <span className="date">{dateText}</span>
      </span>

      {/* Row 1 · right: flag + city + chevron */}
      <span className="plate-wrap">
        <span
          title={`${city}, ${country}`}
          className="inline-flex items-center gap-2"
        >
          <span className="text-[14px] leading-none" aria-hidden="true">
            {flag}
          </span>
          <span className="city">{city}</span>
        </span>
        <ChevronDown
          size={16}
          className="chev"
          aria-hidden="true"
          style={{ transition: "transform 0.25s", transform: isOpen ? "rotate(180deg)" : undefined }}
        />
      </span>

      {/* Row 2 · left: weather */}
      {weatherLoading ? (
        <span className="wcell" aria-hidden="true">
          <span className="ske-block" />
          <span className="ske-block short" />
        </span>
      ) : weather ? (
        <span
          className="wcell"
          title={`${weather.temperatureMax}° / ${weather.temperatureMin}°`}
        >
          <span className="text-[15px]" aria-hidden="true">
            {weather.icon}
          </span>
          <span className="t-max num">{weather.temperatureMax}°</span>
          <span className="sep">/</span>
          <span className="t-min num">{weather.temperatureMin}°</span>
        </span>
      ) : (
        <span className="wcell dim" aria-hidden="true">
          —
        </span>
      )}

      {/* Row 2 · right: budget + MAPA */}
      <span className="right-line">
        {budget ? (
          <span className="budget num">{budget}</span>
        ) : null}

        {onMap && (
          <button
            type="button"
            aria-label={mapLabel}
            title={mapLabel}
            onClick={onMap}
            className="map-btn"
          >
            MAPA
          </button>
        )}
      </span>
    </div>
  );
};

export default DayFace;
