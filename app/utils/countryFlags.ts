const countryFlags: Record<string, string> = {
  España: "🇪🇸",
  Francia: "🇫🇷",
  Italia: "🇮🇹",
  "Estados Unidos": "🇺🇸",
  "New York": "🇺🇸",
  USA: "🇺🇸",
};

export const getCountryFlag = (country: string): string =>
  countryFlags[country] || "🌍";
