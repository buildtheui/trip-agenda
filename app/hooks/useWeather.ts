import { useState, useEffect } from "react";
import type { ItineraryDay } from "../data/itinerary";
import {
  getWeatherForCity,
  getWeatherDescription,
  type DailyWeatherData,
} from "../services/weatherService";

export const useWeather = (itinerary: ItineraryDay[]) => {
  const [weatherData, setWeatherData] = useState<Map<string, DailyWeatherData>>(
    new Map()
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const weatherMap = new Map<string, DailyWeatherData>();

        // Fetch weather for each unique city/date combination
        const uniqueCityDates = new Set<string>();
        itinerary.forEach((day) => {
          const key = `${day.city}-${day.date}`;
          uniqueCityDates.add(key);
        });

        // Fetch weather data for all unique city/date combinations
        await Promise.all(
          Array.from(uniqueCityDates).map(async (cityDate) => {
            // Find the date part (should be YYYY-MM-DD, so we need to find where the date starts)
            // Dates are in format YYYY-MM-DD, so we look for a pattern like "-YYYY-"
            const dateMatch = cityDate.match(/-(\d{4}-\d{2}-\d{2})$/);
            if (!dateMatch) {
              return;
            }

            const fullDate = dateMatch[1];
            const city = cityDate.replace(`-${fullDate}`, "");

            try {
              const weather = await getWeatherForCity(city, fullDate);
              if (weather) {
                weatherMap.set(cityDate, weather);
              }
            } catch (err) {
              // Silently handle errors - weather is optional
            }
          })
        );

        setWeatherData(weatherMap);
      } catch (err) {
        setError("No se pudo cargar la información meteorológica");
      } finally {
        setLoading(false);
      }
    };

    if (itinerary.length > 0) {
      fetchWeatherData();
    }
  }, [itinerary]);

  // Get enhanced itinerary with weather data
  const getItineraryWithWeather = (): ItineraryDay[] => {
    return itinerary.map((day) => {
      const weatherKey = `${day.city}-${day.date}`;
      const dayWeather = weatherData.get(weatherKey);

      if (!dayWeather) {
        return day;
      }

      // Add weather to day
      const dayWithWeather: ItineraryDay = {
        ...day,
        weather: {
          temperatureMin: dayWeather.temperatureMin,
          temperatureMax: dayWeather.temperatureMax,
          weatherCode: dayWeather.weatherCode,
          icon: dayWeather.icon,
          description: getWeatherDescription(dayWeather.weatherCode),
        },
      };
      return dayWithWeather;
    });
  };

  return {
    weatherData,
    loading,
    error,
    getItineraryWithWeather,
  };
};
