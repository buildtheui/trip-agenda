import { useState, useEffect } from "react";
import type { ItineraryDay } from "../data/itinerary";
import {
  getWeatherForCity,
  getWeatherDescription,
  type DailyWeatherData,
  type HourlyWeatherData,
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

      day.activities.forEach((activity) => {
        activity.hourlyWeather = dayWeather.hourly;
        activity.blockIcon = {
          time: activity.time,
          weatherIcon: getIconForTime(dayWeather.hourly, activity.time),
        };
      });

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

/**
 * Gets the weather icon for a specific time by finding the floor hour interval
 * @param hourlyData - Array of hourly weather data
 * @param time - Time in 24-hour format (e.g., "09:30", "14:15")
 * @returns The weather icon string for the floor hour, or null if not found
 */
export const getIconForTime = (
  hourlyData: HourlyWeatherData[],
  time: string
): string | null => {
  // Parse the input time to get the hour
  const [hourStr, minuteStr] = time.split(":");
  const targetHour = parseInt(hourStr, 10);
  const targetMinute = parseInt(minuteStr, 10);

  // Validate input
  if (
    isNaN(targetHour) ||
    isNaN(targetMinute) ||
    targetHour < 0 ||
    targetHour > 23 ||
    targetMinute < 0 ||
    targetMinute > 59
  ) {
    return null;
  }

  // Find the hourly data entry that matches the floor hour
  const matchingEntry = hourlyData.find((entry) => {
    const entryDate = new Date(entry.time);
    const entryHour = entryDate.getHours();
    return entryHour === targetHour;
  });

  return matchingEntry ? matchingEntry.icon : null;
};

/**
 * Gets the complete weather data for a specific time by finding the floor hour interval
 * @param hourlyData - Array of hourly weather data
 * @param time - Time in 24-hour format (e.g., "09:30", "14:15")
 * @returns The weather data object for the floor hour, or null if not found
 */
export const getWeatherDataForTime = (
  hourlyData: HourlyWeatherData[],
  time: string
): HourlyWeatherData | null => {
  // Parse the input time to get the hour
  const [hourStr, minuteStr] = time.split(":");
  const targetHour = parseInt(hourStr, 10);
  const targetMinute = parseInt(minuteStr, 10);

  // Validate input
  if (
    isNaN(targetHour) ||
    isNaN(targetMinute) ||
    targetHour < 0 ||
    targetHour > 23 ||
    targetMinute < 0 ||
    targetMinute > 59
  ) {
    return null;
  }

  // Find the hourly data entry that matches the floor hour
  const matchingEntry = hourlyData.find((entry) => {
    const entryDate = new Date(entry.time);
    const entryHour = entryDate.getHours();
    return entryHour === targetHour;
  });

  return matchingEntry || null;
};

/**
 * Gets weather icons for multiple times
 * @param hourlyData - Array of hourly weather data
 * @param times - Array of times in 24-hour format
 * @returns Array of icons in the same order as the input times
 */
export const getIconsForTimes = (
  hourlyData: HourlyWeatherData[],
  times: string[]
): (string | null)[] => {
  return times.map((time) => getIconForTime(hourlyData, time));
};
