// Weather service using Open-Meteo JavaScript SDK
import { fetchWeatherApi } from "openmeteo";

export interface WeatherData {
  temperatureMin: number;
  temperatureMax: number;
  weatherCode: number;
  time: Date;
}

export interface HourlyWeatherData {
  time: string;
  weatherCode: number;
  temperature: number;
  icon: string;
  description: string;
}

export interface DailyWeatherData {
  date: string;
  weatherCode: number;
  temperatureMin: number;
  temperatureMax: number;
  icon: string;
  hourly: HourlyWeatherData[];
}

// Weather code to icon mapping based on WMO Weather interpretation codes
export const getWeatherIcon = (weatherCode: number): string => {
  const iconMap: Record<number, string> = {
    0: "☀️", // Clear sky
    1: "🌤️", // Mainly clear
    2: "⛅", // Partly cloudy
    3: "☁️", // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Depositing rime fog
    51: "🌦️", // Light drizzle
    53: "🌦️", // Moderate drizzle
    55: "🌦️", // Dense drizzle
    56: "🌧️", // Light freezing drizzle
    57: "🌧️", // Dense freezing drizzle
    61: "🌧️", // Slight rain
    63: "🌧️", // Moderate rain
    65: "🌧️", // Heavy rain
    66: "🌧️", // Light freezing rain
    67: "🌧️", // Heavy freezing rain
    71: "🌨️", // Slight snow fall
    73: "🌨️", // Moderate snow fall
    75: "🌨️", // Heavy snow fall
    77: "🌨️", // Snow grains
    80: "🌦️", // Slight rain showers
    81: "🌦️", // Moderate rain showers
    82: "🌦️", // Violent rain showers
    85: "🌨️", // Slight snow showers
    86: "🌨️", // Heavy snow showers
    95: "⛈️", // Thunderstorm
    96: "⛈️", // Thunderstorm with slight hail
    99: "⛈️", // Thunderstorm with heavy hail
  };

  return iconMap[weatherCode] || "🌤️";
};

// City coordinates mapping - updated with exact city names from itinerary
const cityCoordinates: Record<string, { lat: number; lon: number }> = {
  Madrid: { lat: 40.4168, lon: -3.7038 },
  Toledo: { lat: 39.8628, lon: -4.0273 },
  Barcelona: { lat: 41.3851, lon: 2.1734 },
  París: { lat: 48.8566, lon: 2.3522 },
  Paris: { lat: 48.8566, lon: 2.3522 }, // Alternative spelling
  Roma: { lat: 41.9028, lon: 12.4964 },
  Rome: { lat: 41.9028, lon: 12.4964 }, // Alternative spelling
  Florencia: { lat: 43.7696, lon: 11.2558 },
  Florence: { lat: 43.7696, lon: 11.2558 }, // Alternative spelling
  Verona: { lat: 45.4384, lon: 10.9916 },
  Venecia: { lat: 45.4408, lon: 12.3155 },
  Venice: { lat: 45.4408, lon: 12.3155 }, // Alternative spelling
};

export const getWeatherForCity = async (
  city: string,
  date: string
): Promise<DailyWeatherData | null> => {
  try {
    // Handle special city names
    let actualCity = city;
    if (city.includes("Venecia y Madrid")) {
      actualCity = "Venecia"; // Use Venecia for the Venice/Madrid day
    } else if (city.includes("Tren") || city.includes("€")) {
      // Skip transport entries - these are not real cities
      return null;
    }

    // Clean up city name - remove any extra spaces or special characters
    actualCity = actualCity.trim();

    const coordinates = cityCoordinates[actualCity];
    if (!coordinates) {
      return null;
    }

    const { lat, lon } = coordinates;

    // Check if the date is too far in the future (more than 14 days)
    const targetDate = new Date(date);
    const today = new Date();
    const daysDifference = Math.floor(
      (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    let apiDate = date;
    if (daysDifference > 14 || daysDifference < -365) {
      // Use a recent date for demo purposes if the trip date is too far in future/past
      const demoDate = new Date();
      demoDate.setDate(demoDate.getDate() + (daysDifference % 7)); // Use a pattern based on the original date
      apiDate = demoDate.toISOString().split("T")[0];
    }

    // Parameters for Open-Meteo API - now including hourly data
    const params = {
      latitude: [lat],
      longitude: [lon],
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
      hourly: ["weather_code", "temperature_2m"],
      timezone: "auto",
      start_date: apiDate,
      end_date: apiDate,
    };

    const url = "https://api.open-meteo.com/v1/forecast";

    // Get weather data using Open-Meteo SDK
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    if (!response) {
      return null;
    }

    // Check if response is valid
    if (!response || !response.daily()) {
      throw new Error("Invalid weather data structure");
    }

    const daily = response.daily()!;
    const hourly = response.hourly()!;

    // Extract daily weather data
    const weatherCodeVar = daily.variables(0);
    const temperatureMaxVar = daily.variables(1);
    const temperatureMinVar = daily.variables(2);

    if (!weatherCodeVar || !temperatureMaxVar || !temperatureMinVar) {
      throw new Error("Missing weather variables in response");
    }

    const weatherCodeArray = weatherCodeVar.valuesArray();
    const temperatureMaxArray = temperatureMaxVar.valuesArray();
    const temperatureMinArray = temperatureMinVar.valuesArray();

    if (
      !weatherCodeArray ||
      !temperatureMaxArray ||
      !temperatureMinArray ||
      weatherCodeArray.length === 0 ||
      temperatureMaxArray.length === 0 ||
      temperatureMinArray.length === 0
    ) {
      throw new Error("Empty weather data arrays");
    }

    const weatherCode = weatherCodeArray[0];
    const temperatureMax = temperatureMaxArray[0];
    const temperatureMin = temperatureMinArray[0];

    // Extract hourly weather data
    const hourlyWeatherData: HourlyWeatherData[] = [];

    if (hourly) {
      const hourlyWeatherCodeVar = hourly.variables(0);
      const hourlyTemperatureVar = hourly.variables(1);

      if (hourlyWeatherCodeVar && hourlyTemperatureVar) {
        const hourlyWeatherCodes = hourlyWeatherCodeVar.valuesArray();
        const hourlyTemperatures = hourlyTemperatureVar.valuesArray();

        // Generate time array from bigint timestamps
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const timeArray = [
          ...Array(
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
              hourly.interval()
          ),
        ].map(
          (_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            )
        );

        if (hourlyWeatherCodes && hourlyTemperatures && timeArray) {
          for (
            let i = 0;
            i < Math.min(hourlyWeatherCodes.length, timeArray.length);
            i++
          ) {
            const hourlyWeatherCode = Math.round(hourlyWeatherCodes[i]);
            const hourlyTemperature = Math.round(hourlyTemperatures[i]);
            const hourlyTime = timeArray[i];

            hourlyWeatherData.push({
              time: hourlyTime.toISOString(),
              weatherCode: hourlyWeatherCode,
              temperature: hourlyTemperature,
              icon: getWeatherIcon(hourlyWeatherCode),
              description: getWeatherDescription(hourlyWeatherCode),
            });
          }
        }
      }
    }

    const result: DailyWeatherData = {
      date,
      weatherCode: Math.round(weatherCode),
      temperatureMax: Math.round(temperatureMax),
      temperatureMin: Math.round(temperatureMin),
      icon: getWeatherIcon(Math.round(weatherCode)),
      hourly: hourlyWeatherData,
    };

    return result;
  } catch (error) {
    return null;
  }
};

// Get weather description for activity planning
export const getWeatherDescription = (weatherCode: number): string => {
  const descriptions: Record<number, string> = {
    0: "Cielo despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Escarcha",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna intensa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    71: "Nevada ligera",
    73: "Nevada moderada",
    75: "Nevada intensa",
    80: "Chubascos ligeros",
    81: "Chubascos moderados",
    82: "Chubascos intensos",
    95: "Tormenta",
    96: "Tormenta con granizo ligero",
    99: "Tormenta con granizo intenso",
  };

  return descriptions[weatherCode] || "Condiciones variables";
};

// Utility function to get hourly data for specific time ranges
export const getHourlyDataForTimeRange = (
  hourlyData: HourlyWeatherData[],
  startHour: number,
  endHour: number
): HourlyWeatherData[] => {
  return hourlyData.filter((hour) => {
    const hourTime = new Date(hour.time);
    const hourOfDay = hourTime.getHours();
    return hourOfDay >= startHour && hourOfDay <= endHour;
  });
};

// Utility function to format time for display
export const formatHourlyTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
