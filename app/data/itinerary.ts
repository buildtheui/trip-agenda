export interface Activity {
  time: string;
  activity: string;
  type:
    | "transport"
    | "food"
    | "sightseeing"
    | "shopping"
    | "culture"
    | "leisure"
    | "accommodation"
    | "rest"
    | "entertainment"
    | "arrival"
    | "experience";
  notes: string;
}

export interface Accommodation {
  name: string;
  area: string;
  price: string;
  notes?: string;
  address?: string;
}

export interface Transportation {
  airport?: string;
  local?: string;
  intercity?: string;
  hotel_airport?: string;
  primary?: string;
  madrid_barcelona?: string;
  flight?: string;
  versailles?: string;
  paris_rome?: string;
  rome_florence?: string;
  florence_venice?: string;
  venice_airport?: string;
  madrid_airport?: string;
}

export interface ItineraryDay {
  date: string;
  day: number;
  city: string;
  country: string;
  title: string;
  description: string;
  activities: Activity[];
  accommodation: Accommodation | null;
  transportation: Transportation;
  baseBudget: number;
  budget?: string;
  tips: string;
}

export interface TripSummary {
  totalDays: number;
  countries: string[];
  cities: string[];
  totalBudget?: string;
  baseTotalBudget: number;
  timeDistribution: {
    spain: { days: number; percentage: string };
    france: { days: number; percentage: string };
    italy: { days: number; percentage: string };
    travel: { days: number; percentage: string };
  };
  keyTransportation: string[];
  budgetBreakdown: Record<string, number>;
}

export const itinerary: ItineraryDay[] = [
  {
    date: "2025-09-14",
    day: 1,
    city: "Madrid",
    country: "España",
    title: "Día de Llegada",
    description: "Llegada al Aeropuerto de Madrid Barajas",
    activities: [
      {
        time: "23:30",
        activity: "Llegada del vuelo desde BOG",
        type: "transport",
        notes:
          "Tomar Metro Línea 8 hasta Nuevos Ministerios, luego Línea 10 hasta Tribunal (cerca del hotel)",
      },
    ],
    accommodation: {
      name: "Hotel Petit Palace Tribunal",
      area: "Malasaña",
      price: "€65/noche",
      notes:
        "Cerca del Metro, a distancia caminable de las principales atracciones",
      address: "Cerca de la Estación de Metro Tribunal",
    },
    transportation: {
      airport: "Metro Línea 8 + Línea 10 (€4.50-5.00)",
      local: "Tarjeta Metro 10 viajes (€12.20)",
    },
    baseBudget: 80,
    tips: "Descansar bien esta noche. Comprar tarjeta Metro en el aeropuerto.",
  },
  {
    date: "2025-09-15",
    day: 2,
    city: "Madrid",
    country: "España",
    title: "Centro Histórico de Madrid",
    description: "Explorar Palacio Real, Plaza Mayor y Parque del Retiro",
    activities: [
      {
        time: "09:00",
        activity: "Desayuno cerca del hotel",
        type: "food",
        notes: "Probar churros con chocolate en la Chocolatería San Ginés",
      },
      {
        time: "10:00",
        activity: "Palacio Real",
        type: "sightseeing",
        notes:
          "€13 entrada. Reservar tickets sin cola online. Visita de 2-3 horas.",
      },
      {
        time: "13:00",
        activity: "Almuerzo en Plaza Mayor",
        type: "food",
        notes: "Tapas tradicionales. Presupuesto: €25-30 por ambos",
      },
      {
        time: "15:00",
        activity: "Parque del Retiro y Palacio de Cristal",
        type: "sightseeing",
        notes:
          "Gratis. Perfecto para fotos y descanso. Alquilar barca si se desea.",
      },
      {
        time: "17:30",
        activity: "Museo del Prado",
        type: "culture",
        notes:
          "€15 entrada. Gratis 18:00-20:00 Lu-Sa. Enfocarse en Velázquez, Goya.",
      },
      {
        time: "19:30",
        activity: "Templo de Debod (atardecer)",
        type: "sightseeing",
        notes:
          "Gratis. Mejores vistas del atardecer en Madrid. Viaje corto en Metro.",
      },
    ],
    accommodation: {
      name: "Hotel Petit Palace Tribunal",
      area: "Malasaña",
      price: "€65/noche",
    },
    transportation: {
      local: "Metro/Caminando. Todas las atracciones bien conectadas.",
    },
    baseBudget: 70,
    tips: "Usar zapatos cómodos. Reservar tickets del Palacio online. Siesta 14:00-16:00.",
  },
  {
    date: "2025-09-16",
    day: 3,
    city: "Toledo",
    country: "España",
    title: "Excursión a Toledo",
    description: "Ciudad medieval Patrimonio de la Humanidad UNESCO",
    activities: [
      {
        time: "08:30",
        activity: "Tren a Toledo",
        type: "transport",
        notes:
          "Tren RENFE desde Estación Atocha. 33 minutos. €13.90 ida y vuelta.",
      },
      {
        time: "10:00",
        activity: "Catedral de Toledo",
        type: "culture",
        notes:
          "€12.50 entrada. Una de las catedrales góticas más hermosas de España.",
      },
      {
        time: "12:00",
        activity: "Exploración del Barrio Judío",
        type: "sightseeing",
        notes: "Gratis. Sinagogas antiguas y calles medievales estrechas.",
      },
      {
        time: "13:30",
        activity: "Almuerzo en el Barrio Judío",
        type: "food",
        notes: "Cocina castellana tradicional. Probar perdiz o cordero.",
      },
      {
        time: "15:00",
        activity: "Alcázar de Toledo",
        type: "culture",
        notes: "€5 entrada. Museo militar con excelentes vistas de la ciudad.",
      },
      {
        time: "16:30",
        activity: "Mirador del Valle",
        type: "sightseeing",
        notes: "Gratis. Vista panorámica impresionante. Perfecto para fotos.",
      },
      {
        time: "18:30",
        activity: "Tren de regreso a Madrid",
        type: "transport",
        notes: "De vuelta a Madrid para cenar y descansar.",
      },
    ],
    accommodation: {
      name: "Hotel Petit Palace Tribunal",
      area: "Malasaña",
      price: "€65/noche",
    },
    transportation: {
      primary: "Tren RENFE Madrid-Toledo (€13.90 ida y vuelta)",
      local: "Caminando en Toledo (centro histórico muy caminable)",
    },
    baseBudget: 75,
    tips: "Usar zapatos muy cómodos - muchos adoquines. Llevar agua. Reservar tickets de tren con anticipación.",
  },
  {
    date: "2025-09-17",
    day: 4,
    city: "Barcelona",
    country: "España",
    title: "Viaje a Barcelona",
    description: "Viaje matutino, exploración de Barcelona por la tarde",
    activities: [
      {
        time: "08:00",
        activity: "Check out y hacia Estación Atocha",
        type: "transport",
        notes: "Tomar Metro Línea 1 hasta Atocha Renfe",
      },
      {
        time: "09:30",
        activity: "Tren de alta velocidad a Barcelona",
        type: "transport",
        notes:
          "Tren AVE 2.5-3 horas. €39-59. Reservar con anticipación para mejores precios.",
      },
      {
        time: "12:30",
        activity: "Llegada a Barcelona y check-in",
        type: "accommodation",
        notes: "Tomar Metro L3 desde Sants hasta estación Liceu",
      },
      {
        time: "14:00",
        activity: "Almuerzo en el Barrio Gótico",
        type: "food",
        notes: "Almuerzo catalán tradicional. Probar pa amb tomàquet.",
      },
      {
        time: "15:30",
        activity: "Barrio Gótico (Barri Gòtic)",
        type: "sightseeing",
        notes:
          "Gratis. Callejones medievales, murallas romanas, exterior de la Catedral.",
      },
      {
        time: "17:00",
        activity: "Paseo por Las Ramblas",
        type: "sightseeing",
        notes: "Gratis. Famosa calle peatonal. Cuidado con carteristas.",
      },
      {
        time: "18:30",
        activity: "Catedral de Barcelona",
        type: "culture",
        notes:
          "€9 entrada o gratis en ciertos horarios. Hermosa arquitectura gótica.",
      },
      {
        time: "20:00",
        activity: "Cena en el Barrio Gótico",
        type: "food",
        notes: "Cena temprana. Probar tapas y vino local.",
      },
    ],
    accommodation: {
      name: "Hotel Barcelona Gothic",
      area: "Barrio Gótico",
      price: "€75/noche",
      notes:
        "A distancia caminable de las principales atracciones, Metro cercano",
      address: "Cerca de la Estación de Metro Liceu",
    },
    transportation: {
      madrid_barcelona: "Tren AVE de alta velocidad (€39-59)",
      local: "Pase TMB 3 días (€23.70)",
    },
    baseBudget: 120,
    tips: "Reservar tren AVE con anticipación. Obtener tarjeta de transporte TMB en estación Sants.",
  },
  {
    date: "2025-09-18",
    day: 5,
    city: "Barcelona",
    country: "España",
    title: "Gaudí y Lugares Destacados de Barcelona",
    description: "Sagrada Família, Park Güell y playa",
    activities: [
      {
        time: "09:00",
        activity: "Sagrada Família",
        type: "culture",
        notes:
          "€26 con acceso a la torre. ¡Reservar entrada con horario online! 2-3 horas.",
      },
      {
        time: "12:00",
        activity: "Casa Batlló",
        type: "culture",
        notes: "€29 entrada. Increíble edificio de Gaudí. 1.5 horas.",
      },
      {
        time: "14:00",
        activity: "Descanso para almorzar",
        type: "food",
        notes: "Almuerzo ligero cerca de Passeig de Gràcia",
      },
      {
        time: "15:00",
        activity: "Park Güell",
        type: "sightseeing",
        notes:
          "€10 entrada a zona monumental. Reservar online. Parque cubierto de mosaicos con vistas de la ciudad.",
      },
      {
        time: "17:00",
        activity: "Descanso en el hotel",
        type: "rest",
        notes: "Tiempo de siesta. Prepararse para la noche.",
      },
      {
        time: "18:30",
        activity: "Paseo por la Playa de la Barceloneta",
        type: "sightseeing",
        notes: "Gratis. Hermoso paseo junto al mar. Excelente para fotos.",
      },
      {
        time: "20:00",
        activity: "Cena de mariscos en la Barceloneta",
        type: "food",
        notes: "Mariscos frescos junto a la playa. Probar paella o fideuà.",
      },
      {
        time: "21:30",
        activity: "Espectáculo de la Fuente Mágica",
        type: "entertainment",
        notes:
          "Gratis. Espectáculo de luz y música. Consultar horarios online.",
      },
    ],
    accommodation: {
      name: "Hotel Barcelona Gothic",
      area: "Barrio Gótico",
      price: "€75/noche",
    },
    transportation: {
      local: "Metro y caminando. Usar pase TMB de 3 días.",
    },
    baseBudget: 85,
    tips: "¡Reservar todas las atracciones de Gaudí online con anticipación! Usar zapatos cómodos. Llevar agua.",
  },
  {
    date: "2025-09-19",
    day: 6,
    city: "París",
    country: "Francia",
    title: "Viaje a París",
    description: "Vuelo matutino Barcelona a París Orly",
    activities: [
      {
        time: "07:00",
        activity: "Vuelo Barcelona a París Orly",
        type: "transport",
        notes: "Vueling/EasyJet ~€50-80. Vuelo de 1h 25min.",
      },
      {
        time: "10:00",
        activity: "Llegada a París Orly y viaje a la ciudad",
        type: "transport",
        notes: "Orlybus hasta Denfert-Rochereau (€9.50), luego Metro al hotel.",
      },
      {
        time: "12:00",
        activity: "Check-in y almuerzo",
        type: "accommodation",
        notes: "Almuerzo ligero cerca del hotel en el Barrio Latino.",
      },
      {
        time: "14:00",
        activity: "Exploración del área de Notre-Dame",
        type: "sightseeing",
        notes: "Gratis. Ver exterior (en restauración). Sainte-Chapelle cerca.",
      },
      {
        time: "15:30",
        activity: "Sainte-Chapelle",
        type: "culture",
        notes: "€11.50 entrada. Deslumbrantes vidrieras. ¡Imperdible!",
      },
      {
        time: "17:00",
        activity: "Paseo por el río Sena",
        type: "sightseeing",
        notes: "Gratis. Hermoso paseo ribereño. Excelente para fotos.",
      },
      {
        time: "18:30",
        activity: "Cena en el Barrio Latino",
        type: "food",
        notes:
          "Bistró francés tradicional. Probar coq au vin o boeuf bourguignon.",
      },
    ],
    accommodation: {
      name: "Hotel des Grands Boulevards",
      area: "Barrio Latino",
      price: "€85/noche",
      notes:
        "Ubicación central, cerca del Metro, a distancia caminable de atracciones",
    },
    transportation: {
      flight: "Barcelona-París Orly (€50-80)",
      airport: "Orlybus + Metro (€12)",
      local: "Pase semanal Navigo (€30)",
    },
    baseBudget: 130,
    tips: "Verificar restricciones de vuelo. Obtener pase Navigo en estación de Metro. Reservar Sainte-Chapelle online.",
  },
  {
    date: "2025-09-20",
    day: 7,
    city: "París",
    country: "Francia",
    title: "Lugares Destacados Clásicos de París",
    description: "Torre Eiffel, Louvre y Montmartre",
    activities: [
      {
        time: "09:00",
        activity: "Torre Eiffel",
        type: "sightseeing",
        notes:
          "€29 hasta la cima en ascensor. ¡Reservar online! Empezar temprano para evitar multitudes.",
      },
      {
        time: "11:00",
        activity: "Jardines del Trocadéro",
        type: "sightseeing",
        notes: "Gratis. Mejores fotos de la Torre Eiffel desde aquí.",
      },
      {
        time: "12:00",
        activity: "Crucero por el río Sena",
        type: "sightseeing",
        notes: "€15-17. Crucero de 1 hora. Forma relajante de ver París.",
      },
      {
        time: "13:30",
        activity: "Descanso para almorzar",
        type: "food",
        notes: "Almuerzo ligero cerca del área del Louvre.",
      },
      {
        time: "14:30",
        activity: "Museo del Louvre",
        type: "culture",
        notes:
          "€17 entrada. Reservar online previamente. Enfocarse en lo destacado: Mona Lisa, Venus de Milo. Máximo 3 horas.",
      },
      {
        time: "17:30",
        activity: "Descanso en el hotel",
        type: "rest",
        notes: "Pausa antes de las actividades nocturnas.",
      },
      {
        time: "19:00",
        activity: "Montmartre y Sacré-Cœur",
        type: "sightseeing",
        notes:
          "Gratis. Tomar funicular (€1.90). Hermosas vistas y ambiente bohemio.",
      },
      {
        time: "20:30",
        activity: "Cena en Montmartre",
        type: "food",
        notes: "Cocina francesa tradicional con vistas.",
      },
    ],
    accommodation: {
      name: "Hotel des Grands Boulevards",
      area: "Barrio Latino",
      price: "€85/noche",
    },
    transportation: {
      local: "Metro con pase Navigo",
    },
    baseBudget: 95,
    tips: "Reservar Torre Eiffel y Louvre online con anticipación. Zapatos cómodos esenciales. Mantenerse hidratado.",
  },
  {
    date: "2025-09-21",
    day: 8,
    city: "París",
    country: "Francia",
    title: "Versalles y Campos Elíseos",
    description: "Excursión al Palacio de Versalles y noche en París central",
    activities: [
      {
        time: "08:30",
        activity: "Tren a Versalles",
        type: "transport",
        notes:
          "Tren RER C desde París central. €7.30 ida y vuelta. 45 minutos.",
      },
      {
        time: "10:00",
        activity: "Palacio de Versalles",
        type: "culture",
        notes:
          "€20 entrada. Reservar tickets sin cola online. Visita de 3-4 horas.",
      },
      {
        time: "13:00",
        activity: "Almuerzo en Versalles",
        type: "food",
        notes: "Almuerzo ligero en los jardines del palacio o pueblo cercano.",
      },
      {
        time: "14:00",
        activity: "Jardines de Versalles",
        type: "sightseeing",
        notes:
          "Gratis (excepto días de fuentes musicales). Hermosos jardines, perfectos para caminar.",
      },
      {
        time: "16:00",
        activity: "Regreso a París",
        type: "transport",
        notes: "Tren RER C de vuelta a París central.",
      },
      {
        time: "17:30",
        activity: "Campos Elíseos y Arco del Triunfo",
        type: "sightseeing",
        notes:
          "€13 para subir al Arco del Triunfo. Famosa avenida para compras y pasear.",
      },
      {
        time: "19:30",
        activity: "Cena de despedida en París",
        type: "food",
        notes: "Cena especial. Probar platos franceses clásicos y vino.",
      },
    ],
    accommodation: {
      name: "Hotel des Grands Boulevards",
      area: "Barrio Latino",
      price: "€85/noche",
    },
    transportation: {
      versailles: "Tren RER C (€7.30 ida y vuelta)",
      local: "Metro con pase Navigo",
    },
    baseBudget: 85,
    tips: "Reservar tickets de Versalles online. Usar zapatos muy cómodos. Llevar snacks y agua.",
  },
  {
    date: "2025-09-22",
    day: 9,
    city: "Roma",
    country: "Italia",
    title: "Viaje a Roma",
    description: "Tren de alta velocidad París a Roma",
    activities: [
      {
        time: "07:15",
        activity: "Tren nocturno Thello París-Roma",
        type: "transport",
        notes:
          "Sale de Gare de Lyon. €35-150 según clase. Viaje de 14 horas con opciones de cama.",
      },
      {
        time: "14:30",
        activity: "Llegada a Roma Termini",
        type: "arrival",
        notes:
          "Alternativa: Volar París-Roma (€60-120, 2.5h) si prefieren no tomar tren nocturno.",
      },
      {
        time: "15:30",
        activity: "Check-in hotel y descanso",
        type: "accommodation",
        notes: "Metro Línea A desde Termini hasta estación Spagna.",
      },
      {
        time: "17:00",
        activity: "Área de la Escalinata de España",
        type: "sightseeing",
        notes: "Gratis. Famosas escalinatas y área de compras exclusivas.",
      },
      {
        time: "18:00",
        activity: "Fontana de Trevi",
        type: "sightseeing",
        notes:
          "Gratis. ¡Lanzar una moneda para la buena suerte! Mejores fotos temprano en la mañana o noche.",
      },
      {
        time: "19:30",
        activity: "Cena de bienvenida en Roma",
        type: "food",
        notes:
          "Cocina romana tradicional. Probar carbonara, cacio e pepe o amatriciana.",
      },
    ],
    accommodation: {
      name: "Hotel Artemide",
      area: "Cerca de Termini/Escalinata de España",
      price: "€95/noche",
      notes:
        "Ubicación central, cerca del Metro, a distancia caminable de atracciones",
    },
    transportation: {
      paris_rome: "Tren nocturno Thello (€35-150) o vuelo (€60-120)",
      local: "Roma Pass 3 días (€38.50 - incluye transporte + atracciones)",
    },
    baseBudget: 120,
    tips: "Considerar vuelo vs tren nocturno según preferencia de comodidad. Obtener Roma Pass en aeropuerto/estación.",
  },
  {
    date: "2025-09-23",
    day: 10,
    city: "Roma",
    country: "Italia",
    title: "Roma Antigua",
    description: "Coliseo, Foro Romano y Panteón",
    activities: [
      {
        time: "08:30",
        activity: "Coliseo",
        type: "culture",
        notes:
          "€16 entrada (gratis con Roma Pass). Reservar sin cola online. 2-3 horas.",
      },
      {
        time: "11:00",
        activity: "Foro Romano y Monte Palatino",
        type: "culture",
        notes:
          "Incluido con ticket del Coliseo. Corazón antiguo de Roma. 2 horas.",
      },
      {
        time: "13:30",
        activity: "Almuerzo cerca del Foro",
        type: "food",
        notes: "Almuerzo romano tradicional. Probar supplì y maritozzo.",
      },
      {
        time: "15:00",
        activity: "Panteón",
        type: "culture",
        notes:
          "Entrada gratuita. Maravilla de la ingeniería antigua. 45 minutos.",
      },
      {
        time: "16:00",
        activity: "Piazza Navona",
        type: "sightseeing",
        notes:
          "Gratis. Hermosa plaza barroca con fuentes. Excelente para fotos.",
      },
      {
        time: "17:30",
        activity: "Descanso en el hotel",
        type: "rest",
        notes: "Pausa de la tarde.",
      },
      {
        time: "19:00",
        activity: "Noche en Trastevere",
        type: "sightseeing",
        notes: "Barrio encantador. Cruzar el puente Ponte Sisto.",
      },
      {
        time: "20:00",
        activity: "Cena en Trastevere",
        type: "food",
        notes: "Restaurante romano auténtico. Probar saltimbocca alla romana.",
      },
    ],
    accommodation: {
      name: "Hotel Artemide",
      area: "Cerca de Termini/Escalinata de España",
      price: "€95/noche",
    },
    transportation: {
      local: "Metro y caminando. Usar Roma Pass.",
    },
    baseBudget: 75,
    tips: "Reservar Coliseo online con anticipación. Empezar temprano para evitar multitudes. Usar zapatos cómodos.",
  },
  {
    date: "2025-09-24",
    day: 11,
    city: "Roma",
    country: "Italia",
    title: "Ciudad del Vaticano",
    description: "Museos Vaticanos, Capilla Sixtina y San Pedro",
    activities: [
      {
        time: "08:00",
        activity: "Museos Vaticanos y Capilla Sixtina",
        type: "culture",
        notes:
          "€20 entrada. ¡Reservar sin cola online es esencial! 3-4 horas. Código de vestimenta requerido.",
      },
      {
        time: "12:30",
        activity: "Basílica de San Pedro",
        type: "culture",
        notes:
          "Entrada gratuita. €10 para subir a la cúpula. Una de las iglesias más grandes del mundo.",
      },
      {
        time: "14:30",
        activity: "Almuerzo cerca del Vaticano",
        type: "food",
        notes:
          "Almuerzo ligero. Muchas trampas turísticas aquí - elegir cuidadosamente.",
      },
      {
        time: "16:00",
        activity: "Castel Sant'Angelo",
        type: "culture",
        notes:
          "€15 entrada (gratis con Roma Pass). Antigua fortaleza papal con excelentes vistas.",
      },
      {
        time: "17:30",
        activity: "Ponte Sant'Angelo",
        type: "sightseeing",
        notes:
          "Gratis. Hermoso puente con estatuas de ángeles. Excelentes fotos.",
      },
      {
        time: "18:30",
        activity: "Campo de' Fiori",
        type: "sightseeing",
        notes: "Gratis. Plaza animada con mercado (mañanas) y vida nocturna.",
      },
      {
        time: "20:00",
        activity: "Cena cerca de Campo de' Fiori",
        type: "food",
        notes: "Restaurante romano local. Probar carciofi alla giudia.",
      },
    ],
    accommodation: {
      name: "Hotel Artemide",
      area: "Cerca de Termini/Escalinata de España",
      price: "€95/noche",
    },
    transportation: {
      local:
        "Metro Línea A hasta Ottaviano para el Vaticano. Caminando para otros sitios.",
    },
    baseBudget: 70,
    tips: "¡Reservar Vaticano online con anticipación! Vestirse modestamente (no shorts/camisetas sin mangas). Llevar agua.",
  },
  {
    date: "2025-09-25",
    day: 12,
    city: "Florencia",
    country: "Italia",
    title: "Viaje a Florencia",
    description: "Tren de alta velocidad a Florencia, exploración por la tarde",
    activities: [
      {
        time: "08:30",
        activity: "Tren de alta velocidad Roma a Florencia",
        type: "transport",
        notes:
          "Trenitalia Frecce. 1.5 horas. €19-45. Reservar con anticipación para mejores precios.",
      },
      {
        time: "10:30",
        activity: "Llegada a Florencia y check-in",
        type: "accommodation",
        notes:
          "Estación Santa Maria Novella. Caminar al hotel en el centro histórico.",
      },
      {
        time: "12:00",
        activity: "Almuerzo en Florencia",
        type: "food",
        notes: "Probar sopa ribollita y bistecca alla fiorentina.",
      },
      {
        time: "13:30",
        activity: "Complejo del Duomo",
        type: "culture",
        notes:
          "€20 ticket completo (cúpula, museo, baptisterio). Reservar subida a cúpula online.",
      },
      {
        time: "15:30",
        activity: "Subida a la cúpula del Duomo",
        type: "sightseeing",
        notes:
          "463 escalones. Vistas increíbles de Florencia. Reservar entrada con horario online.",
      },
      {
        time: "17:00",
        activity: "Ponte Vecchio",
        type: "sightseeing",
        notes: "Gratis. Famoso puente medieval con joyerías.",
      },
      {
        time: "18:00",
        activity: "Barrio Oltrarno",
        type: "sightseeing",
        notes: "Gratis. Talleres artesanales y ambiente auténtico florentino.",
      },
      {
        time: "19:30",
        activity: "Cena en Oltrarno",
        type: "food",
        notes: "Trattoria local. Probar pasta pici y vino Chianti.",
      },
    ],
    accommodation: {
      name: "Hotel Davanzati",
      area: "Centro Histórico",
      price: "€110/noche",
      notes: "A distancia caminable de todas las atracciones, cerca del Duomo",
    },
    transportation: {
      rome_florence: "Tren de alta velocidad Frecce (€19-45)",
      local: "Caminando (el centro histórico de Florencia es muy caminable)",
    },
    baseBudget: 85,
    tips: "Reservar subida a cúpula del Duomo online con anticipación. Florencia es muy caminable. Probar mercados locales.",
  },
  {
    date: "2025-09-26",
    day: 13,
    city: "Venecia",
    country: "Italia",
    title: "Florencia a Venecia",
    description: "Mañana en Florencia, tarde en Venecia",
    activities: [
      {
        time: "08:00",
        activity: "Galería Uffizi",
        type: "culture",
        notes:
          "€20 entrada. ¡Reservar online es esencial! Botticelli, Miguel Ángel, Leonardo. 2-3 horas.",
      },
      {
        time: "11:00",
        activity: "Visita rápida a la Accademia (David de Miguel Ángel)",
        type: "culture",
        notes:
          "€12 entrada. Reservar online. Visita de 1 hora para ver la famosa estatua de David.",
      },
      {
        time: "12:30",
        activity: "Tren a Venecia",
        type: "transport",
        notes: "Trenitalia. 2 horas. €19-35. Directo a Venecia Santa Lucia.",
      },
      {
        time: "15:30",
        activity: "Llegada a Venecia y check-in",
        type: "accommodation",
        notes:
          "Taxi acuático o vaporetto desde la estación. ¡Venecia no tiene coches!",
      },
      {
        time: "17:00",
        activity: "Plaza San Marcos (Piazza San Marco)",
        type: "sightseeing",
        notes: "Gratis. El corazón de Venecia. Arquitectura increíble.",
      },
      {
        time: "18:00",
        activity: "Basílica de San Marcos",
        type: "culture",
        notes:
          "Entrada gratuita. €5 para Pala d'Oro. Mosaicos bizantinos. Reservar sin cola online.",
      },
      {
        time: "19:30",
        activity: "Aperitivo con vistas al canal",
        type: "food",
        notes: "Spritz Aperol y cicchetti (tapas venecianas).",
      },
      {
        time: "20:30",
        activity: "Cena cerca de San Marcos",
        type: "food",
        notes:
          "Risotto de mariscos y vino local. Esperar precios más altos en Venecia.",
      },
    ],
    accommodation: {
      name: "Hotel ai Reali",
      area: "Cerca de San Marcos",
      price: "€120/noche",
      notes: "Ubicación central, fácil acceso a las principales atracciones",
    },
    transportation: {
      florence_venice: "Tren Trenitalia (€19-35)",
      local: "Pase vaporetto (autobús acuático) 3 días (€40)",
    },
    baseBudget: 110,
    tips: "Reservar Uffizi y San Marcos online. Venecia es cara - presupuestar en consecuencia. Obtener pase vaporetto.",
  },
  {
    date: "2025-09-27",
    day: 14,
    city: "Venecia y Madrid",
    country: "Italia/España",
    title: "Mañana en Venecia, Regreso a Madrid",
    description: "Exploración final de Venecia, vuelo nocturno a Madrid",
    activities: [
      {
        time: "09:00",
        activity: "Palacio Ducal",
        type: "culture",
        notes:
          "€25 entrada. Reservar online. Ver Puente de los Suspiros desde adentro. 2 horas.",
      },
      {
        time: "11:30",
        activity: "Puente de Rialto y Mercado",
        type: "sightseeing",
        notes:
          "Gratis. Puente icónico sobre el Gran Canal. Mercado fresco cercano.",
      },
      {
        time: "12:30",
        activity: "Paseo en góndola",
        type: "experience",
        notes:
          "€80-100 por 30 minutos. Turístico pero mágico. Compartir costo con otros si es posible.",
      },
      {
        time: "13:30",
        activity: "Almuerzo con vistas al canal",
        type: "food",
        notes: "Última comida italiana. Probar sarde in saor y tiramisú.",
      },
      {
        time: "15:00",
        activity: "Paseo final por Venecia y compras",
        type: "shopping",
        notes: "Souvenirs de cristal de Murano, últimas fotos.",
      },
      {
        time: "16:30",
        activity: "Viaje al Aeropuerto de Venecia",
        type: "transport",
        notes: "Autobús ATVO o taxi acuático al Aeropuerto Marco Polo. 1 hora.",
      },
      {
        time: "19:00",
        activity: "Vuelo Venecia a Madrid",
        type: "transport",
        notes: "Vuelo directo. 2.5 horas. €80-150.",
      },
      {
        time: "22:00",
        activity: "Llegada a Madrid y hotel",
        type: "accommodation",
        notes:
          "Metro al centro de la ciudad. Descansar antes del vuelo de salida.",
      },
    ],
    accommodation: {
      name: "Hotel Aeropuerto Madrid",
      area: "Cerca del Aeropuerto",
      price: "€70/noche",
      notes: "Fácil acceso al aeropuerto para salida matutina",
    },
    transportation: {
      venice_airport: "Autobús ATVO (€8) o taxi acuático (€25-35)",
      flight: "Venecia-Madrid (€80-150)",
      madrid_airport: "Metro o taxi al hotel del aeropuerto",
    },
    baseBudget: 180,
    tips: "Reservar Palacio Ducal online. Permitir tiempo extra para transporte al aeropuerto de Venecia. Empacar souvenirs con cuidado.",
  },
  {
    date: "2025-09-28",
    day: 15,
    city: "Madrid",
    country: "España",
    title: "Salida",
    description: "Vuelo de salida a Bogotá",
    activities: [
      {
        time: "07:00",
        activity: "Traslado al aeropuerto",
        type: "transport",
        notes: "Permitir 2 horas antes del vuelo internacional.",
      },
      {
        time: "09:30",
        activity: "Salida del vuelo a BOG",
        type: "transport",
        notes: "¡Fin del increíble viaje a Europa! Buen viaje a casa.",
      },
    ],
    accommodation: null,
    transportation: {
      hotel_airport: "Metro Línea 8 o taxi (€30-40)",
    },
    baseBudget: 50,
    tips: "Hacer check-in online. Llegar 3 horas antes para vuelo internacional. Declarar cualquier souvenir.",
  },
];

export const tripSummary: TripSummary = {
  totalDays: 15,
  countries: ["España", "Francia", "Italia"],
  cities: [
    "Madrid",
    "Toledo",
    "Barcelona",
    "París",
    "Roma",
    "Florencia",
    "Venecia",
  ],
  baseTotalBudget: 1485,
  timeDistribution: {
    spain: { days: 4, percentage: "27%" },
    france: { days: 3, percentage: "20%" },
    italy: { days: 7, percentage: "47%" },
    travel: { days: 1, percentage: "6%" },
  },
  keyTransportation: [
    "Madrid-Barcelona: Tren AVE de alta velocidad",
    "Barcelona-París: Vuelo a Orly",
    "París-Roma: Tren nocturno o vuelo",
    "Roma-Florencia: Tren de alta velocidad",
    "Florencia-Venecia: Tren regional",
    "Venecia-Madrid: Vuelo directo",
  ],
  budgetBreakdown: {
    accommodation: 1220,
    localTransport: 180,
    attractions: 350,
    food: 700,
    intercityTransport: 400,
    miscellaneous: 135,
  },
};
