import type { ItineraryDay, Trip, TripSummary } from "../itinerary";

export const itinerary: ItineraryDay[] = [
  {
    date: "2026-09-01",
    day: 1,
    city: "Nueva York",
    country: "Estados Unidos",
    title: "Llegada a NYC y Times Square de Noche",
    description:
      "Llegada a JFK, check-in en Long Island City, y primera noche icónica en Times Square",
    activities: [
      {
        time: "13:55",
        activity: "Llegada del vuelo Avianca desde BOG a JFK",
        type: "arrival",
        notes:
          "Vuelo directo Bogotá-JFK, 5h45m. Migración + equipaje puede tomar 45-60 min extra.",
        coordinates: { lat: 40.6446, lon: -73.7797 },
      },
      {
        time: "15:00",
        activity: "AirTrain JFK + Metro a Long Island City",
        type: "transport",
        notes:
          "AirTrain JFK ($8.50) hasta Jamaica Station, luego tren E hasta Court Sq-23 St (Long Island City). ~50-60 min total. Comprar OMNY (tap-to-pay con tarjeta/celular, no necesitan MetroCard física) o pases contactless en cualquier estación.",
        coordinates: { lat: 40.6999, lon: -73.8076 },
      },
      {
        time: "16:00",
        activity: "Check-in en LIC Manhattan View Hotel",
        type: "accommodation",
        notes:
          "39-05 29th St, Long Island City. Descansar 30-45 min y dejar maletas.",
        coordinates: { lat: 40.7533, lon: -73.9345 },
      },
      {
        time: "17:30",
        activity: "Atardecer en Gantry Plaza State Park (Long Island City)",
        type: "sightseeing",
        notes:
          "Gratis. A 8-10 min caminando del hotel. Vista espectacular del Midtown Manhattan skyline al otro lado del río, ideal para las primeras fotos del viaje sin apuro.",
        coordinates: { lat: 40.7421, lon: -73.9605 },
      },
      {
        time: "19:00",
        activity: "Metro a Times Square",
        type: "transport",
        notes: "Tren 7 desde Court Sq hasta Times Square-42 St. ~15-20 min.",
      },
      {
        time: "19:30",
        activity: "Times Square de noche",
        type: "sightseeing",
        notes:
          "Gratis. Las luces se ven mejor de noche. Caminar tranquilo, es normal que esté lleno de gente.",
        coordinates: { lat: 40.758, lon: -73.9855 },
      },
      {
        time: "20:15",
        activity: "Central Perk Coffeehouse (cafetería real de Friends)",
        type: "food",
        notes:
          "20 Times Square (esquina 7th Ave con 47th St), a 2 min caminando de donde están. Es una cafetería real y permanente (no el museo pago), con el sofá naranja icónico, café/postres temáticos. Entrada libre, solo pagan lo que consuman.",
        coordinates: { lat: 40.7593, lon: -73.9841 },
      },
      {
        time: "21:00",
        activity: "Rockefeller Center (exterior)",
        type: "sightseeing",
        notes:
          "Gratis. A 5 min caminando desde Times Square por la 6th Ave. Ver la plaza icónica de noche.",
        coordinates: { lat: 40.7587, lon: -73.9787 },
      },
      {
        time: "21:45",
        activity: "Cena: pizza estilo NY",
        type: "food",
        notes:
          "Pop's Pizza (360 W 42nd St) o Joe's Pizza (1435 Broadway) — ambas a pasos de Times Square, slice desde $4-5, muy recomendadas y rápidas.",
        coordinates: { lat: 40.7547, lon: -73.987 },
      },
    ],
    accommodation: {
      name: "LIC Manhattan View Hotel",
      area: "Long Island City, Queens",
      price: "$1,142.64 total (4 noches, ya pagado)",
      notes:
        "3 estaciones de metro cerca (7, E, M, G). 15 min en tren directo a Midtown.",
      address: "39-05 29th St, Long Island City, NY 11101, USA",
      coordinates: { lat: 40.7533, lon: -73.9345 },
    },
    transportation: {
      airport: "AirTrain JFK + tren E hasta Court Sq-23 St (~$8.50 + $2.90)",
      local: "OMNY contactless (tap con tarjeta o celular) en tren 7 hacia Manhattan",
    },
    baseBudget: 55,
    tips: "Primer día: llegan cansados del vuelo, por eso la tarde es relajada. Activen OMNY en su celular o compren tarjeta contactless antes de salir del aeropuerto para no perder tiempo.",
  },
  {
    date: "2026-09-02",
    day: 2,
    city: "Nueva York",
    country: "Estados Unidos",
    title: "West Village, Tribeca, Chinatown y Brooklyn Bridge",
    description:
      "Apartamentos icónicos de series, Washington Square Park, cruce del puente de Brooklyn y atardecer en DUMBO",
    activities: [
      {
        time: "08:00",
        activity: "Desayuno en el hotel",
        type: "food",
        notes: "Desayuno incluido en LIC Manhattan View Hotel antes de salir.",
      },
      {
        time: "08:45",
        activity: "Metro hacia West Village",
        type: "transport",
        notes:
          "Tren 7 desde Court Sq hasta Grand Central, transferir a la línea 4/5/6 hasta 14 St-Union Sq, o directo con la línea E/F según la estación. ~40-45 min con transferencia.",
      },
      {
        time: "09:30",
        activity: "Apartamento de Carrie Bradshaw (Sex and the City)",
        type: "sightseeing",
        notes:
          "66 Perry St, West Village. Es un edificio residencial real — solo foto desde la vereda, con respeto a los vecinos.",
        coordinates: { lat: 40.7354, lon: -74.0039 },
      },
      {
        time: "09:50",
        activity: "Apartamento de Friends (exterior)",
        type: "sightseeing",
        notes:
          "90 Bedford St, a 4 min caminando de Perry St. También residencial, solo foto exterior.",
        coordinates: { lat: 40.7323, lon: -74.0053 },
      },
      {
        time: "10:15",
        activity: "Washington Square Park",
        type: "sightseeing",
        notes:
          "Gratis. El arco icónico, músicos callejeros, ambiente universitario (NYU). Perfecto para caminar sin prisa.",
        coordinates: { lat: 40.7308, lon: -73.9973 },
      },
      {
        time: "11:30",
        activity: "Paseo por Greenwich Village",
        type: "sightseeing",
        notes:
          "Gratis. Calles adoquinadas, casas históricas. Caminar sin rumbo fijo por Bleecker St y alrededores.",
        coordinates: { lat: 40.7258, lon: -74.0039 },
      },
      {
        time: "12:30",
        activity: "Apartamento de Taylor Swift (exterior, Tribeca)",
        type: "sightseeing",
        notes:
          "155 Franklin St, Tribeca. ~15-20 min caminando desde el Village, o Metro A/C/E hasta Canal St. Es propiedad privada — solo fotos discretas desde la calle, sin quedarse parados frente al edificio.",
        coordinates: { lat: 40.7192, lon: -74.0081 },
      },
      {
        time: "13:15",
        activity: "Almuerzo en Chinatown",
        type: "food",
        notes:
          "Tasty Dumpling (42 Mulberry St) o Jin Mei Dumpling (25B Henry St) — dumplings frescos desde $5-15 para los dos. Efectivo recomendado en algunos locales.",
        coordinates: { lat: 40.7149, lon: -73.9995 },
      },
      {
        time: "14:15",
        activity: "Caminar por Chinatown",
        type: "sightseeing",
        notes: "Gratis. Mercados, tiendas y ambiente único a pocos pasos del almuerzo.",
        coordinates: { lat: 40.7151, lon: -73.997 },
      },
      {
        time: "15:15",
        activity: "Cruce del Puente de Brooklyn",
        type: "sightseeing",
        notes:
          "Gratis. Entrada peatonal cerca de City Hall (Metro 4/5/6 a Brooklyn Bridge-City Hall). Caminata de 20-25 min sin apuro, con vistas increíbles del Downtown Manhattan y el East River.",
        coordinates: { lat: 40.7061, lon: -73.9969 },
      },
      {
        time: "16:15",
        activity: "DUMBO, Brooklyn",
        type: "sightseeing",
        notes:
          "Gratis. El famoso ángulo fotográfico de Washington St con el puente de Manhattan al fondo. Zona muy caminable con tiendas y cafés.",
        coordinates: { lat: 40.7033, lon: -73.9881 },
      },
      {
        time: "18:30",
        activity: "Atardecer y cena en Time Out Market (rooftop)",
        type: "food",
        notes:
          "55 Water St, DUMBO. Terraza en el 5to piso con vista directa al Puente de Brooklyn y skyline de Manhattan — mejor momento para verla es justo antes/durante el atardecer. Food hall con muchas opciones, para todos los gustos y presupuestos.",
        coordinates: { lat: 40.7034, lon: -73.9921 },
      },
    ],
    accommodation: {
      name: "LIC Manhattan View Hotel",
      area: "Long Island City, Queens",
      price: "$1,142.64 total (4 noches, ya pagado)",
      address: "39-05 29th St, Long Island City, NY 11101, USA",
      coordinates: { lat: 40.7533, lon: -73.9345 },
    },
    transportation: {
      local:
        "Caminando + Metro A/C/E y 4/5/6. Día con mucha caminata plana, zapatos cómodos.",
    },
    baseBudget: 85,
    tips: "Es el día con más caminata del viaje pero todo es plano y a paso tranquilo. Si se cansan, hay estaciones de metro cerca en cada tramo para saltar una parte. Frente al apartamento de Taylor Swift no se recomienda quedarse mucho tiempo — es su casa real.",
  },
  {
    date: "2026-09-03",
    day: 3,
    city: "Nueva York",
    country: "Estados Unidos",
    title: "Central Park y Midtown Clásico",
    description:
      "Castillo Belvedere, Fuente Bethesda, escaleras del MET, Quinta Avenida y Empire State al atardecer",
    activities: [
      {
        time: "09:00",
        activity: "Entrada a Central Park (lado oeste, 79th St)",
        type: "transport",
        notes: "Metro 1 hasta 79 St, caminar 5 min hacia el parque.",
        coordinates: { lat: 40.7821, lon: -73.9717 },
      },
      {
        time: "09:20",
        activity: "Castillo de Belvedere",
        type: "sightseeing",
        notes:
          "Gratis. Vista panorámica desde la torre hacia el Central Park. Abre a las 10am — llegar temprano y disfrutar el camino hasta ahí.",
        coordinates: { lat: 40.7794, lon: -73.9691 },
      },
      {
        time: "10:30",
        activity: "Fuente Bethesda y Terraza Bethesda",
        type: "sightseeing",
        notes:
          "Gratis. Una de las esquinas más fotografiadas del parque, con la terraza de piedra tallada. Caminata corta desde el castillo.",
        coordinates: { lat: 40.774, lon: -73.971 },
      },
      {
        time: "11:30",
        activity: "Escaleras del MET (Metropolitan Museum of Art)",
        type: "sightseeing",
        notes:
          "Gratis sentarse en las escaleras (el ícono de Gossip Girl / El Diablo Viste a la Moda). Si quieren entrar al museo son ~$30 por persona — opcional, no es necesario para la foto de las escaleras.",
        coordinates: { lat: 40.7794, lon: -73.9632 },
      },
      {
        time: "12:30",
        activity: "Almuerzo económico tipo food cart",
        type: "food",
        notes:
          "Bajando hacia Midtown: Sharif's Famous (W 31st St & Broadway) o MOE Eats NYC (120 W 49th St) — platos halal desde $10-12, muy recomendados y abundantes.",
        coordinates: { lat: 40.7477, lon: -73.9884 },
      },
      {
        time: "13:30",
        activity: "Quinta Avenida (Fifth Avenue) y Bryant Park",
        type: "shopping",
        notes:
          "Gratis caminar. Vitrinas de lujo, arquitectura icónica. Parar en Bryant Park a descansar en las sillas verdes del jardín.",
        coordinates: { lat: 40.7535, lon: -73.983 },
      },
      {
        time: "14:15",
        activity: "Biblioteca Pública de Nueva York (NYPL)",
        type: "culture",
        notes:
          "Entrada gratuita. Edificio Stephen A. Schwarzman, justo al lado de Bryant Park. La Rose Main Reading Room es imperdible.",
        coordinates: { lat: 40.7532, lon: -73.9822 },
      },
      {
        time: "15:15",
        activity: "Gran Central Terminal",
        type: "sightseeing",
        notes:
          "Entrada gratuita. A 10 min caminando de la biblioteca. El techo celestial y el reloj de ópalo son el punto fuerte, ~20-30 min de visita.",
        coordinates: { lat: 40.7528, lon: -73.9772 },
      },
      {
        time: "16:30",
        activity: "Empire State Building",
        type: "sightseeing",
        notes:
          "Reservar entrada con horario ONLINE con anticipación (~$50-60 por persona el mirador). Ir para la puesta de sol (~19:15-19:30 en septiembre) para ver la ciudad de día y de noche desde arriba — este es el mirador que cubre el punto que dejaron abierto en su lista.",
        coordinates: { lat: 40.7484, lon: -73.9857 },
      },
      {
        time: "20:00",
        activity: "Cena en McGee's Pub (bar de HIMYM)",
        type: "food",
        notes:
          "240 W 55th St. El bar real que inspiró MacLaren's en How I Met Your Mother, con memorabilia de la serie en las paredes. Comida de pub, precios razonables ($15-20 por plato).",
        coordinates: { lat: 40.765, lon: -73.9829 },
      },
    ],
    accommodation: {
      name: "LIC Manhattan View Hotel",
      area: "Long Island City, Queens",
      price: "$1,142.64 total (4 noches, ya pagado)",
      address: "39-05 29th St, Long Island City, NY 11101, USA",
      coordinates: { lat: 40.7533, lon: -73.9345 },
    },
    transportation: {
      local: "Metro líneas 1, 4/5/6, 7. Buena parte del día es caminata dentro de Central Park y Midtown.",
    },
    baseBudget: 175,
    tips: "Reservar el Empire State Building online con anticipación, especialmente el horario de atardecer que es el más pedido. El Castillo Belvedere abre a las 10am, así que si llegan más temprano disfruten el paseo por el parque primero.",
  },
  {
    date: "2026-09-04",
    day: 4,
    city: "Nueva York",
    country: "Estados Unidos",
    title: "Harry Potter, Flatiron y Atardecer en el Ferry a Staten Island",
    description:
      "Mañana de compras temáticas, tarde tranquila en el Downtown y broche de oro: Estatua de la Libertad y skyline al atardecer",
    activities: [
      {
        time: "10:00",
        activity: "Tienda de Harry Potter",
        type: "shopping",
        notes:
          "935 Broadway (zona Flatiron). La tienda de Harry Potter más grande del mundo — cerveza de mantequilla, varitas, mercancía exclusiva. Sin costo de entrada, presupuesto según lo que compren.",
        coordinates: { lat: 40.7406, lon: -73.9896 },
      },
      {
        time: "11:15",
        activity: "Opcional: The Friends Experience (museo inmersivo pago)",
        type: "culture",
        notes:
          "130 E 23rd St, a 12 min caminando desde la tienda de Harry Potter. Réplicas de los apartamentos y el Central Perk original de la serie. Entrada de pago (~$40-50 por persona) — es opcional, ya vivieron el 'Central Perk real' el día 1 gratis con solo comprar un café. Salten esto si prefieren ir con calma.",
        coordinates: { lat: 40.7394, lon: -73.9852 },
      },
      {
        time: "12:30",
        activity: "Almuerzo en zona Flatiron/Union Square",
        type: "food",
        notes: "Cualquier deli o food hall cercano, opciones desde $10-15 por persona.",
        coordinates: { lat: 40.7359, lon: -73.9911 },
      },
      {
        time: "14:00",
        activity: "Metro hacia el Downtown / Financial District",
        type: "transport",
        notes: "Metro 4/5/6 hasta Wall St o Bowling Green. ~20 min.",
      },
      {
        time: "14:30",
        activity: "Paseo tranquilo por Wall Street y Battery Park",
        type: "sightseeing",
        notes:
          "Gratis. Ritmo relajado, sin agenda apretada — dejen que la tarde fluya, tomen café, descansen los pies antes del broche de la noche.",
        coordinates: { lat: 40.7029, lon: -74.0154 },
      },
      {
        time: "18:30",
        activity: "Llegada a Whitehall Terminal",
        type: "transport",
        notes:
          "4 Whitehall St. El ferry es gratis y sale cada 20-30 min, no necesitan reserva ni ticket.",
        coordinates: { lat: 40.7011, lon: -74.0131 },
      },
      {
        time: "19:00",
        activity: "Ferry a Staten Island (ida y vuelta) al atardecer",
        type: "experience",
        notes:
          "Gratis. Este es el paseo en barco 'wow' que buscaban (fusiona lo que pedían en los puntos 13 y 22): a la ida se ve la Estatua de la Libertad de cerca, y en el regreso ya de noche se ven las luces del skyline de Manhattan — el momento más lindo del recorrido. Sentarse del lado derecho a la ida para la mejor vista de la Estatua.",
        coordinates: { lat: 40.6892, lon: -74.0445 },
      },
      {
        time: "20:30",
        activity: "Cena de despedida cerca del Financial District",
        type: "food",
        notes:
          "Última noche completa en NYC — elijan algo con calma, sin apuro de horarios.",
        coordinates: { lat: 40.7075, lon: -74.011 },
      },
    ],
    accommodation: {
      name: "LIC Manhattan View Hotel",
      area: "Long Island City, Queens",
      price: "$1,142.64 total (4 noches, ya pagado)",
      address: "39-05 29th St, Long Island City, NY 11101, USA",
      coordinates: { lat: 40.7533, lon: -73.9345 },
    },
    transportation: {
      local: "Metro 4/5/6, R/W. Ferry a Staten Island gratuito desde Whitehall Terminal.",
    },
    baseBudget: 90,
    tips: "El templo hindú de Robbinsville, NJ quedó fuera del itinerario por decisión de ustedes: está a 1-1.5h en auto sin buena conexión de metro/tren, y les hubiera quitado medio día completo. El punto del 'ferry Pier 90 a Pier 11' se fusionó con el Ferry a Staten Island de esta noche, ya que ambos buscaban lo mismo: un paseo en barco al atardecer con vista a la Estatua de la Libertad y el skyline.",
  },
  {
    date: "2026-09-05",
    day: 5,
    city: "Nueva York",
    country: "Estados Unidos",
    title: "Salida hacia Houston",
    description: "Vuelo de salida desde LaGuardia (LGA)",
    activities: [
      {
        time: "04:45",
        activity: "Traslado al aeropuerto LaGuardia (LGA)",
        type: "transport",
        notes:
          "A esta hora tan temprana, lo más seguro y rápido es taxi/Uber desde el hotel (~15-20 min, no dependan del bus Q70 de madrugada porque la frecuencia es muy baja).",
        coordinates: { lat: 40.7533, lon: -73.9345 },
      },
      {
        time: "05:15",
        activity: "Check-in aeropuerto (2h antes del vuelo doméstico)",
        type: "transport",
        notes: "Southwest Airlines, vuelo WN1093. Hacer check-in online la noche anterior si es posible.",
        coordinates: { lat: 40.7766, lon: -73.8743 },
      },
      {
        time: "07:15",
        activity: "Salida del vuelo WN1093 a Houston (Hobby)",
        type: "transport",
        notes:
          "Boeing 737-800. Salida 7:15 AM, llegada 9:55 AM a Houston Hobby (HOU). ¡Buen viaje!",
        coordinates: { lat: 40.7766, lon: -73.8743 },
      },
    ],
    accommodation: null,
    transportation: {
      hotel_airport: "Taxi/Uber desde LIC Manhattan View Hotel a LGA (~$25-35, 15-20 min)",
      flight: "Southwest WN1093, LGA 7:15 AM → Houston Hobby 9:55 AM",
    },
    baseBudget: 30,
    tips: "Salida MUY temprana — empacar todo la noche anterior (día 4) y pedir el taxi/Uber con tiempo. No confiar en el metro/bus a esa hora de la madrugada.",
  },
];

export const tripSummary: TripSummary = {
  totalDays: 5,
  countries: ["Estados Unidos"],
  cities: ["Manhattan", "Brooklyn", "Queens (Long Island City)"],
  baseTotalBudget: 1592.64,
  timeDistribution: [
    {
      label: "Manhattan",
      emoji: "🗽",
      days: 3,
      percentage: "60%",
      colorClass: "from-blue-100 to-blue-200 text-blue-800",
    },
    {
      label: "Brooklyn",
      emoji: "🌉",
      days: 1,
      percentage: "20%",
      colorClass: "from-orange-100 to-orange-200 text-orange-800",
    },
    {
      label: "Queens (LIC)",
      emoji: "🏙️",
      days: 1,
      percentage: "20%",
      colorClass: "from-purple-100 to-purple-200 text-purple-800",
    },
  ],
  keyTransportation: [
    "JFK → Long Island City: AirTrain + tren E (~$8.50 + $2.90 por persona)",
    "Movimiento local: OMNY contactless en todas las líneas de metro (tap con tarjeta/celular, $2.90 por viaje)",
    "Ferry a Staten Island: gratis, sale cada 20-30 min desde Whitehall Terminal",
    "LIC → LaGuardia (LGA): taxi/Uber recomendado para el vuelo de salida muy temprano",
  ],
  budgetBreakdown: {
    accommodation: 1142.64,
    localTransport: 40,
    attractions: 110,
    food: 190,
    miscellaneous: 70,
  },
};

export const newYorkTrip: Trip = {
  id: "new-york",
  title: "Viaje a Nueva York",
  subtitle: "Tu Aventura en la Gran Manzana",
  flag: "🇺🇸",
  currency: "$",
  dateRangeLabel: "01 - 05 de Septiembre, 2026",
  budgetNote: "incluye el hotel ($1,142.64 ya pagado); excluye vuelos",
  keyTips: [
    "Desayunos incluidos en el hotel — no hace falta presupuestar ni buscar dónde desayunar cada día",
    "Usar OMNY (tap-to-pay con tarjeta o celular) en el metro — no necesitan MetroCard física",
    "El templo hindú de Robbinsville, NJ se dejó fuera del itinerario: queda muy lejos para moverse solo en metro",
    "El 'Central Perk' real (cafetería en Times Square) y 'The Friends Experience' (museo pago en Flatiron) son dos cosas distintas — el itinerario prioriza la cafetería real, gratis de entrada",
    "Reservar el Empire State Building online con anticipación, sobre todo el horario de atardecer",
    "El Ferry a Staten Island es gratis y es el mejor momento del viaje para ver la Estatua de la Libertad + el skyline de noche — no hace falta pagar otro tour en barco",
    "Llevar zapatos muy cómodos, sobre todo para el día 2 (West Village → Chinatown → Brooklyn Bridge → DUMBO)",
    "El vuelo de salida es muy temprano (7:15 AM) — pedir taxi/Uber, no confiar en el metro/bus de madrugada",
  ],
  itinerary,
  summary: tripSummary,
};
