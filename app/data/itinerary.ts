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
  weather?: {
    temperatureMin: number;
    temperatureMax: number;
    weatherCode: number;
    icon: string;
    description: string;
  };
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
  weather?: {
    temperatureMin: number;
    temperatureMax: number;
    weatherCode: number;
    icon: string;
    description: string;
  };
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
          "Tomar Metro Línea 8 hasta Nuevos Ministerios, luego Línea 10 hasta Gran Vía (cerca del hotel)",
      },
    ],
    accommodation: {
      name: "Airbnb con Ahmed",
      area: "Centro",
      price: "€61/noche",
      notes:
        "Cerca del Metro y Gran Vía, a distancia caminable de las principales atracciones",
      address: "C. de la Ballesta, 18, Centro, 28004 Madrid, Spain",
    },
    transportation: {
      airport: "Metro Línea 8 + Línea 10 hasta Gran Vía (€4.50-5.00)",
      local: "Tarjeta Metro 10 viajes (€12.20)",
    },
    baseBudget: 80,
    tips: "Descansar bien esta noche. Comprar tarjeta Metro en el aeropuerto. El apartamento está cerca de Gran Vía.",
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
        activity: "La Rosaleda - Parque del Retiro",
        type: "sightseeing",
        notes:
          "Gratis. Hermoso jardín de rosas. Perfecto para fotos y paseo matutino.",
      },
      {
        time: "10:30",
        activity: "Palacio de Cristal - Parque del Retiro",
        type: "sightseeing",
        notes:
          "Gratis. Estructura de cristal icónica. Imperdible para fotos y exposiciones de arte.",
      },
      {
        time: "11:30",
        activity: "Puerta de Alcalá",
        type: "sightseeing",
        notes:
          "Gratis. Monumento emblemático de Madrid. Perfecta para fotos icónicas.",
      },
      {
        time: "12:00",
        activity: "Banco de España",
        type: "sightseeing",
        notes: "Gratis. Edificio histórico imponente. Vista exterior y fotos.",
      },
      {
        time: "12:30",
        activity: "Caminar por Gran Vía",
        type: "sightseeing",
        notes:
          "Gratis. La Broadway madrileña. Arquitectura, tiendas y ambiente urbano.",
      },
      {
        time: "13:30",
        activity: "Almuerzo en el Museo del Jamón",
        type: "food",
        notes:
          "Tapas tradicionales en el famoso Museo del Jamón. Presupuesto: €25-30 por ambos",
      },
      {
        time: "15:00",
        activity: "Terraza Corte Inglés",
        type: "sightseeing",
        notes:
          "Gratis subir. Vista panorámica de Madrid desde la terraza. Excelente para fotos.",
      },
      {
        time: "16:00",
        activity: "Plaza Mayor",
        type: "sightseeing",
        notes:
          "Gratis. Plaza histórica principal de Madrid. Excelente para fotos.",
      },
      {
        time: "17:00",
        activity: "Palacio Real",
        type: "sightseeing",
        notes:
          "€13 entrada. Reservar tickets sin cola online. Visita de 2-3 horas.",
      },
    ],
    accommodation: {
      name: "Airbnb con Ahmed",
      area: "Centro",
      price: "€61/noche",
      address: "C. de la Ballesta, 18, Centro, 28004 Madrid, Spain",
    },
    transportation: {
      local: "Metro/Caminando. Todas las atracciones bien conectadas.",
    },
    baseBudget: 55,
    tips: "Usar zapatos cómodos para caminar mucho. Reservar tickets del Palacio Real online. Ruta optimizada siguiendo el mapa.",
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
        time: "09:15",
        activity: "Tren RENFE AVANT a Toledo",
        type: "transport",
        notes:
          "Tren RENFE AVANT desde Madrid-Puerta de Atocha-Almudena Grandes. €22.20 por persona (€44.40 total para 2).",
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
        time: "18:45",
        activity: "Tren RENFE AVANT de regreso a Madrid",
        type: "transport",
        notes:
          "Tren RENFE AVANT Toledo a Madrid-Puerta de Atocha-Almudena Grandes. €22.20 por persona.",
      },
    ],
    accommodation: {
      name: "Airbnb con Ahmed",
      area: "Centro",
      price: "€61/noche",
      address: "C. de la Ballesta, 18, Centro, 28004 Madrid, Spain",
    },
    transportation: {
      primary:
        "Tren RENFE AVANT Madrid-Toledo (€44.40 ida y vuelta para 2 personas)",
      local: "Caminando en Toledo (centro histórico muy caminable)",
    },
    baseBudget: 106,
    tips: "Usar zapatos muy cómodos - muchos adoquines. Llevar agua.",
  },
  {
    date: "2025-09-17",
    day: 4,
    city: "Barcelona",
    country: "España",
    title: "Llegada a Barcelona y Centro Histórico",
    description: "Viaje matutino, Las Ramblas, Barrio Gótico y Barceloneta",
    activities: [
      {
        time: "08:00",
        activity: "Check out y hacia Estación Atocha",
        type: "transport",
        notes: "Tomar Metro Línea 1 hasta Atocha Renfe",
      },
      {
        time: "10:02",
        activity: "Tren OUIGO de alta velocidad a Barcelona",
        type: "transport",
        notes:
          "Tren OUIGO Madrid-Puerta de Atocha-Almudena Grandes a Barcelona-Sants. 3h02 minutos. €78 para 2 personas.",
      },
      {
        time: "13:04",
        activity: "Llegada a Barcelona y check-in",
        type: "accommodation",
        notes: "Tomar Metro L3 desde Sants hasta estación Liceu",
      },
      {
        time: "14:00",
        activity: "Almuerzo en Restaurante Ocaña",
        type: "food",
        notes:
          "Almuerzo en Ocaña, Pl. Reial, 13-15, Ciutat Vella. Cocina mediterránea con vista a la Plaza Real.",
      },
      {
        time: "15:30",
        activity: "Paseo por Las Ramblas",
        type: "sightseeing",
        notes:
          "Gratis. Famosa calle peatonal. Cuidado con carteristas. Artistas callejeros y ambiente único.",
      },
      {
        time: "16:30",
        activity: "Barrio Gótico (Barri Gòtic)",
        type: "sightseeing",
        notes:
          "Gratis. Callejones medievales, murallas romanas, Catedral de Barcelona y Plaza del Rey.",
      },
      {
        time: "18:00",
        activity: "Parc de la Ciutadella",
        type: "sightseeing",
        notes:
          "Gratis. Parque histórico con la cascada monumental y el Arco de Triunfo de Barcelona.",
      },
      {
        time: "19:30",
        activity: "Playa Barceloneta",
        type: "sightseeing",
        notes:
          "Gratis. Paseo por la playa más famosa de Barcelona. Perfecto para el atardecer.",
      },
      {
        time: "21:00",
        activity: "Cena en la Barceloneta",
        type: "food",
        notes:
          "Cena de mariscos junto a la playa. Probar paella o fideuà con vistas al mar.",
      },
    ],
    accommodation: {
      name: "Apartamento en L'Hospitalet de Llobregat",
      area: "L'Hospitalet de Llobregat",
      price: "€81.76/noche",
      notes: "Zona residencial cerca de Barcelona, bien conectado por Metro",
      address:
        "Carrer de Besa, 15 Bajos 1, L'Hospitalet de Llobregat, Catalunya 08904, España",
    },
    transportation: {
      madrid_barcelona: "Tren OUIGO de alta velocidad (€78 para 2 personas)",
      local: "Pase TMB 3 días (€23.70)",
    },
    baseBudget: 144,
    tips: "Obtener tarjeta de transporte TMB en estación Sants. Reservar mesa en Ocaña con anticipación.",
  },
  {
    date: "2025-09-18",
    day: 5,
    city: "Barcelona",
    country: "España",
    title: "Ruta Completa de Gaudí",
    description: "Sagrada Família, Park Güell, Casa Batlló y Fuente Mágica",
    activities: [
      {
        time: "09:00",
        activity: "Sagrada Família",
        type: "culture",
        notes:
          "€26 con acceso a la torre. ¡Reservar entrada con horario online! Visita de 2-3 horas. Obra maestra de Gaudí.",
      },
      {
        time: "12:30",
        activity: "Park Güell",
        type: "sightseeing",
        notes:
          "€10 entrada a zona monumental. Reservar online. Parque cubierto de mosaicos con vistas panorámicas de Barcelona.",
      },
      {
        time: "15:00",
        activity: "Almuerzo en El Corte Inglés",
        type: "food",
        notes:
          "Almuerzo en El Corte Inglés, Pl. de Catalunya, 14, L'Eixample. Alternativa: Mercado de la Boquería (Las Ramblas) para tapas y productos locales.",
      },
      {
        time: "16:30",
        activity: "Casa Batlló",
        type: "culture",
        notes:
          "€29 entrada. Increíble edificio modernista de Gaudí en Passeig de Gràcia. Visita de 1.5 horas.",
      },
      {
        time: "18:30",
        activity: "Paseo por Passeig de Gràcia",
        type: "sightseeing",
        notes:
          "Gratis. Avenida de tiendas de lujo y arquitectura modernista. Casa Milà (La Pedrera) vista exterior.",
      },
      {
        time: "20:30",
        activity: "Cena cerca de Plaza España",
        type: "food",
        notes:
          "Cena catalana tradicional cerca de la Fuente Mágica. Prepararse para el espectáculo nocturno.",
      },
      {
        time: "22:00",
        activity: "Espectáculo de la Fuente Mágica",
        type: "entertainment",
        notes:
          "Gratis. Espectáculo de luz, agua y música en Montjuïc. Horarios: cada 30 min desde las 21:00-23:00.",
      },
    ],
    accommodation: {
      name: "Apartamento en L'Hospitalet de Llobregat",
      area: "L'Hospitalet de Llobregat",
      price: "€81.76/noche",
    },
    transportation: {
      local: "Metro y caminando. Usar pase TMB de 3 días.",
    },
    baseBudget: 80,
    tips: "¡Reservar Sagrada Família, Park Güell y Casa Batlló online con anticipación! Usar zapatos cómodos. La Fuente Mágica funciona desde las 21:00.",
  },
  {
    date: "2025-09-19",
    day: 6,
    city: "París",
    country: "Francia",
    title: "Llegada a París y Lugares Destacados",
    description:
      "Vuelo matutino y visita a Torre Eiffel, Arco del Triunfo y Louvre",
    activities: [
      {
        time: "04:30",
        activity: "Traslado al aeropuerto de Barcelona",
        type: "transport",
        notes: "Salida temprana. Metro o taxi al aeropuerto El Prat.",
      },
      {
        time: "06:10",
        activity: "Vuelo Barcelona a París (Transavia)",
        type: "transport",
        notes: "Transavia 6:10-8:10. Vuelo de 2 horas.",
      },
      {
        time: "08:10",
        activity: "Llegada a París y viaje a la ciudad",
        type: "transport",
        notes:
          "Desde aeropuerto Charles de Gaulle. RER B hasta centro + Metro al hotel.",
      },
      {
        time: "10:30",
        activity: "Check-in y desayuno tardío",
        type: "accommodation",
        notes: "Desayuno/brunch en café parisino cerca del hotel.",
      },
      {
        time: "14:00",
        activity: "Torre Eiffel",
        type: "sightseeing",
        notes:
          "€29 hasta la cima en ascensor. ¡Reservar online! Empezar temprano para evitar multitudes.",
      },
      {
        time: "16:00",
        activity: "Arco del Triunfo y Campos Elíseos",
        type: "sightseeing",
        notes:
          "€13 para subir al Arco del Triunfo. Famosa avenida para compras y pasear.",
      },
      {
        time: "17:30",
        activity: "Museo del Louvre",
        type: "culture",
        notes:
          "€17 entrada. Reservar online previamente. Enfocarse en lo destacado: Mona Lisa, Venus de Milo. Cierra a las 21:00.",
      },
      {
        time: "20:30",
        activity: "Cena cerca del Louvre",
        type: "food",
        notes: "Cena tardía en bistró francés tradicional.",
      },
    ],
    accommodation: {
      name: "Apartamento en Le Kremlin-Bicêtre",
      area: "Le Kremlin-Bicêtre",
      price: "€84.76/noche",
      notes:
        "Zona residencial al sur de París, bien conectado por Metro Línea 7",
      address:
        "2 Rue Pierre et Marie Curie, Le Kremlin-Bicêtre, Île-de-France 94270, Francia",
    },
    transportation: {
      flight: "Barcelona-París CDG Transavia 6:10-8:10 (€50-80)",
      airport: "RER B desde CDG + Metro (€11.45)",
      local: "Pase semanal Navigo (€30)",
    },
    baseBudget: 140,
    tips: "Salida muy temprana - preparar equipaje la noche anterior. Verificar restricciones de equipaje Transavia. Obtener pase Navigo en CDG. Reservar Torre Eiffel y Louvre online.",
  },
  {
    date: "2025-09-20",
    day: 7,
    city: "París",
    country: "Francia",
    title: "Versalles y París Nocturno",
    description: "Excursión a Versalles y visita nocturna de París",
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
        activity: "Área de Notre-Dame",
        type: "sightseeing",
        notes:
          "Gratis. Ver exterior (en restauración). Paseo por la Île de la Cité.",
      },
      {
        time: "18:30",
        activity: "Crucero por el río Sena",
        type: "sightseeing",
        notes: "€15-17. Crucero de 1 hora. Forma relajante de ver París.",
      },
      {
        time: "19:45",
        activity: "Cena con vistas al Sena",
        type: "food",
        notes: "Cena francesa tradicional cerca del río.",
      },
      {
        time: "21:30",
        activity: "Torre Eiffel iluminada",
        type: "sightseeing",
        notes:
          "Gratis. Torre Eiffel con luces nocturnas. Espectáculo cada hora.",
      },
    ],
    accommodation: {
      name: "Apartamento en Le Kremlin-Bicêtre",
      area: "Le Kremlin-Bicêtre",
      price: "€84.76/noche",
    },
    transportation: {
      versailles: "Tren RER C (€7.30 ida y vuelta)",
      local: "Metro con pase Navigo",
    },
    baseBudget: 90,
    tips: "Reservar tickets de Versalles online. Usar zapatos muy cómodos. Torre Eiffel se ilumina cada hora al anochecer.",
  },

  {
    date: "2025-09-21",
    day: 8,
    city: "Roma",
    country: "Italia",
    title: "Viaje a Roma",
    description: "Tren de alta velocidad París a Roma",
    activities: [
      {
        time: "06:30",
        activity: "Traslado al aeropuerto Charles de Gaulle",
        type: "transport",
        notes:
          "RER B desde centro de París. Salida temprana para vuelo matutino.",
      },
      {
        time: "09:05",
        activity: "Vuelo París a Roma (Wizz Air)",
        type: "transport",
        notes: "Wizz Air 9:05-11:10. Vuelo de 2h 5min.",
      },
      {
        time: "11:10",
        activity: "Llegada a Roma Fiumicino",
        type: "arrival",
        notes: "Hora local italiana (1 hora de diferencia con París).",
      },
      {
        time: "12:30",
        activity: "Viaje a Roma centro y check-in hotel",
        type: "accommodation",
        notes:
          "Leonardo Express hasta Termini (€14), luego Metro Línea A hasta Spagna.",
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
      name: "Apartamento con Grazia",
      area: "Via Gregorio VII",
      price: "€89.09/noche",
      notes:
        "Zona residencial cerca del Vaticano, bien conectado por transporte público",
      address: "Via Gregorio VII, 500b, Roma, Lacio 00165, Italia",
    },
    transportation: {
      paris_rome: "Vuelo Wizz Air 9:05-11:10 (€60-120)",
      airport: "Leonardo Express CDG-Termini (€14)",
      local: "Roma Pass 3 días (€38.50 - incluye transporte + atracciones)",
    },
    baseBudget: 120,
    tips: "Verificar restricciones de equipaje de Wizz Air. Obtener Roma Pass en aeropuerto Fiumicino o estación Termini.",
  },
  {
    date: "2025-09-22",
    day: 9,
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
      name: "Apartamento con Grazia",
      area: "Via Gregorio VII",
      price: "€89.09/noche",
    },
    transportation: {
      local: "Metro y caminando. Usar Roma Pass.",
    },
    baseBudget: 75,
    tips: "Reservar Coliseo online con anticipación. Empezar temprano para evitar multitudes. Usar zapatos cómodos.",
  },
  {
    date: "2025-09-23",
    day: 10,
    city: "Roma",
    country: "Italia",
    title: "Ciudad del Vaticano y Roma Clásica",
    description: "Museos Vaticanos, San Pedro y lugares emblemáticos de Roma",
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
        activity: "Colina del Aventino - Ojo de cerradura",
        type: "sightseeing",
        notes:
          "Gratis. Vista única de la Basílica de San Pedro a través del ojo de la cerradura.",
      },
      {
        time: "18:30",
        activity: "Jardín de Naranjos (Parco Savello)",
        type: "sightseeing",
        notes:
          "Gratis. Vista panorámica de Roma al atardecer. Perfecto para fotos.",
      },
      {
        time: "20:00",
        activity: "Cena en Trastevere",
        type: "food",
        notes:
          "Restaurante romano auténtico. Probar carciofi alla giudia y saltimbocca alla romana.",
      },
    ],
    accommodation: {
      name: "Apartamento con Grazia",
      area: "Via Gregorio VII",
      price: "€89.09/noche",
    },
    transportation: {
      local:
        "Metro Línea A hasta Ottaviano para el Vaticano. Metro y caminando para otros sitios.",
    },
    baseBudget: 85,
    tips: "¡Reservar Vaticano online con anticipación! Vestirse modestamente. Día intenso - usar zapatos cómodos.",
  },
  {
    date: "2025-09-24",
    day: 11,
    city: "Florencia",
    country: "Italia",
    title: "Roma a Florencia",
    description: "Tren de alta velocidad a Florencia, exploración por la tarde",
    activities: [
      {
        time: "09:43",
        activity: "Tren Italo de alta velocidad Roma a Florencia",
        type: "transport",
        notes:
          "Tren Italo 9920 Roma Termini a Firenze S.M. 1h34 minutos. €39.80 para 2 personas (€19.90 cada uno).",
      },
      {
        time: "11:17",
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
      name: "Apartamento con Lorenzo",
      area: "Centro Histórico",
      price: "€122.00/noche",
      notes: "Ubicación céntrica perfecta para explorar Florencia a pie",
      address:
        "Via degli Alfani, 13 Interno 5, Florencia, Toscana 50121, Italia",
    },
    transportation: {
      rome_florence: "Tren Italo de alta velocidad (€39.80 para 2 personas)",
      local: "Caminando (el centro histórico de Florencia es muy caminable)",
    },
    baseBudget: 93,
    tips: "Reservar subida a cúpula del Duomo online con anticipación. Florencia es muy caminable. Probar mercados locales.",
  },
  {
    date: "2025-09-25",
    day: 12,
    city: "Florencia",
    country: "Italia",
    title: "Florencia Completa",
    description: "Galería Uffizi, Academia y lo mejor de Florencia",
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
        activity: "Almuerzo en el Mercado Central",
        type: "food",
        notes:
          "Mercado gastronómico con especialidades toscanas. Probar panino con lampredotto.",
      },
      {
        time: "14:00",
        activity: "Piazzale Michelangelo",
        type: "sightseeing",
        notes:
          "Gratis. Vista panorámica espectacular de Florencia. Perfecto para fotos.",
      },
      {
        time: "15:30",
        activity: "Paseo por Oltrarno y Ponte Vecchio",
        type: "sightseeing",
        notes:
          "Gratis. Talleres artesanales y el famoso puente medieval con joyerías.",
      },
      {
        time: "17:00",
        activity: "Jardines de Boboli",
        type: "sightseeing",
        notes:
          "€10 entrada. Jardines renacentistas detrás del Palacio Pitti. 1.5 horas.",
      },
      {
        time: "19:00",
        activity: "Aperitivo florentino",
        type: "food",
        notes: "Spritz y aperitivo con vista. Zona Santo Spirito.",
      },
      {
        time: "20:30",
        activity: "Cena toscana",
        type: "food",
        notes:
          "Bistecca alla fiorentina y Chianti Classico. Trattoria tradicional.",
      },
    ],
    accommodation: {
      name: "Apartamento con Lorenzo",
      area: "Centro Histórico",
      price: "€122.00/noche",
      notes: "Ubicación céntrica perfecta para explorar Florencia a pie",
      address:
        "Via degli Alfani, 13 Interno 5, Florencia, Toscana 50121, Italia",
    },
    transportation: {
      local: "Caminando (el centro histórico de Florencia es muy caminable)",
    },
    baseBudget: 95,
    tips: "Reservar Uffizi y Academia online con anticipación. Subir a Piazzale Michelangelo al atardecer para mejores fotos.",
  },
  {
    date: "2025-09-26",
    day: 13,
    city: "Verona",
    country: "Italia",
    title: "Verona - La Ciudad de Romeo y Julieta",
    description: "Tren a Verona, Arena, Casa de Julieta y centro histórico",
    activities: [
      {
        time: "09:05",
        activity: "Tren Italo Florencia a Verona",
        type: "transport",
        notes:
          "Tren Italo 8954 Firenze S.M. a Verona P.N. 1h33 minutos. €35.80 para 2 personas (€17.90 cada uno).",
      },
      {
        time: "10:38",
        activity: "Check-in y orientación",
        type: "accommodation",
        notes: "Hotel cerca del centro histórico. Caminar desde la estación.",
      },
      {
        time: "12:00",
        activity: "Arena de Verona",
        type: "culture",
        notes:
          "€10 entrada. Anfiteatro romano del siglo I, mejor conservado que el Coliseo. 1.5 horas.",
      },
      {
        time: "14:00",
        activity: "Almuerzo en Piazza Bra",
        type: "food",
        notes: "Almuerzo con vista a la Arena. Probar risotto all'Amarone.",
      },
      {
        time: "15:30",
        activity: "Casa de Julieta y Balcón",
        type: "sightseeing",
        notes:
          "€6 entrada al museo. Icónico balcón de Romeo y Julieta. Patio gratis para fotos.",
      },
      {
        time: "16:30",
        activity: "Piazza delle Erbe",
        type: "sightseeing",
        notes:
          "Gratis. Plaza del mercado medieval con frescos y Torre dei Lamberti.",
      },
      {
        time: "17:30",
        activity: "Torre dei Lamberti",
        type: "sightseeing",
        notes:
          "€8 entrada. Subir en ascensor para vista panorámica de Verona. 84 metros de altura.",
      },
      {
        time: "18:30",
        activity: "Castelvecchio y Puente Scaligero",
        type: "culture",
        notes:
          "€6 entrada al museo. Castillo medieval y puente fortificado sobre el río Adige.",
      },
      {
        time: "20:00",
        activity: "Aperitivo en el centro histórico",
        type: "food",
        notes: "Spritz Aperol (nació en Veneto) y cicchetti locales.",
      },
      {
        time: "21:00",
        activity: "Cena veronesa",
        type: "food",
        notes: "Especialidades: pastissada de caval y vino Valpolicella.",
      },
    ],
    accommodation: {
      name: "Apartamento con Marcos",
      area: "Verona",
      price: "€56.07/noche",
      notes:
        "Apartamento en Verona con fácil acceso a las atracciones principales",
      address: "Via Ombrone, 6 9, Verona, Véneto 37136, Italia",
    },
    transportation: {
      intercity: "Tren Italo Florencia-Verona (€35.80 para 2 personas)",
      local: "Caminando (centro histórico muy compacto)",
    },
    baseBudget: 84,
    tips: "Verona es muy caminable. Si hay opera en la Arena, considerar comprar tickets. Reservar mesa para cena con anticipación.",
  },

  {
    date: "2025-09-27",
    day: 14,
    city: "Venecia y Madrid",
    country: "Italia/España",
    title: "Excursión a Venecia desde Verona, Vuelo a Madrid",
    description:
      "Viaje temprano desde Verona, día completo en Venecia, vuelo nocturno a Madrid",
    activities: [
      {
        time: "07:22",
        activity: "Tren temprano Verona a Venecia",
        type: "transport",
        notes:
          "Trenitalia Regionale 16017 Verona Porta Nuova a Venezia S. Lucia. 1h28 minutos. €20.70 para 2 personas (€10.35 cada uno).",
      },
      {
        time: "08:50",
        activity: "Llegada a Venecia y desayuno",
        type: "food",
        notes: "Desayuno italiano cerca de la estación. Café y cornetto.",
      },
      {
        time: "09:00",
        activity: "Plaza San Marcos (Piazza San Marco)",
        type: "sightseeing",
        notes:
          "Gratis. El corazón de Venecia. Arquitectura increíble. Menos multitudes temprano.",
      },
      {
        time: "09:30",
        activity: "Basílica de San Marcos",
        type: "culture",
        notes:
          "Entrada gratuita. €5 para Pala d'Oro. Mosaicos bizantinos. Reservar sin cola online.",
      },
      {
        time: "10:30",
        activity: "Palacio Ducal",
        type: "culture",
        notes:
          "€25 entrada. Reservar online. Ver Puente de los Suspiros desde adentro. 1.5 horas - visita rápida.",
      },
      {
        time: "12:30",
        activity: "Almuerzo rápido con vistas al canal",
        type: "food",
        notes:
          "Almuerzo ligero y rápido. Probar cicchetti venecianos. Tiempo limitado.",
      },
      {
        time: "12:00",
        activity: "Puente de Rialto y Mercado",
        type: "sightseeing",
        notes:
          "Gratis. Puente icónico sobre el Gran Canal. Mercado fresco cercano.",
      },
      {
        time: "13:00",
        activity: "Paseo en góndola",
        type: "experience",
        notes:
          "€80-100 por 30 minutos. Turístico pero mágico. Compartir costo con otros si es posible.",
      },
      {
        time: "14:00",
        activity: "Paseo final por Venecia y compras",
        type: "shopping",
        notes:
          "Souvenirs de cristal de Murano, últimas fotos. Tiempo limitado por el vuelo.",
      },
      {
        time: "15:00",
        activity: "Viaje al Aeropuerto de Venecia",
        type: "transport",
        notes:
          "Autobús ATVO o taxi acuático al Aeropuerto Marco Polo. 1 hora + buffer para llegar 2h antes del vuelo.",
      },
      {
        time: "16:50",
        activity: "Check-in en aeropuerto (2h antes del vuelo)",
        type: "transport",
        notes:
          "Llegar 2 horas antes del vuelo. Check-in, seguridad y embarque.",
      },
      {
        time: "18:50",
        activity: "Vuelo Venecia a Madrid (Ryanair FR1207)",
        type: "transport",
        notes: "Ryanair FR1207 18:50-21:30. Vuelo directo de 2h 40min.",
      },
      {
        time: "21:30",
        activity: "Llegada a Madrid Barajas y hotel",
        type: "accommodation",
        notes:
          "Metro Línea 8 al centro o taxi al Airbnb con Maureen. Descansar antes del vuelo de salida.",
      },
    ],
    accommodation: {
      name: "Airbnb con Maureen",
      area: "Madrid",
      price: "€64.23/noche",
      notes: "Alojamiento en Madrid para la última noche",
      address: "Avenida Quinta, # 4, Madrid, Madrid 28022, España",
    },
    transportation: {
      intercity: "Tren Trenitalia Verona-Venecia (€20.70 para 2 personas)",
      venice_airport: "Autobús ATVO (€8) o taxi acuático (€25-35)",
      flight: "Ryanair FR1207 Venecia-Madrid 18:50-21:30",
      madrid_airport: "Metro Línea 8 o taxi al Airbnb con Maureen",
    },
    baseBudget: 146,
    tips: "Salida MUY temprana desde Verona. Día muy ajustado en Venecia - llegar al aeropuerto 2h antes (16:50). Empacar la noche anterior.",
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
        time: "05:30",
        activity: "Traslado al aeropuerto",
        type: "transport",
        notes:
          "Salida MUY temprana. Metro Línea 8 o taxi. Llegar 3 horas antes del vuelo internacional.",
      },
      {
        time: "06:40",
        activity: "Check-in en aeropuerto (3h antes del vuelo)",
        type: "transport",
        notes: "Check-in internacional, seguridad, inmigración y embarque.",
      },
      {
        time: "09:40",
        activity: "Salida del vuelo a BOG",
        type: "transport",
        notes:
          "¡Fin del increíble viaje a Europa! Buen viaje a casa. Llegada 13:10 BOG.",
      },
    ],
    accommodation: null,
    transportation: {
      hotel_airport: "Metro Línea 8 o taxi (€30-40)",
    },
    baseBudget: 50,
    tips: "Hacer check-in online. Salida MUY temprana 05:30. Empacar la noche anterior. Llegar 3 horas antes para vuelo internacional. Declarar souvenirs.",
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
    "Verona",
    "Venecia",
  ],
  baseTotalBudget: 1286,
  timeDistribution: {
    spain: { days: 4, percentage: "27%" },
    france: { days: 2, percentage: "13%" },
    italy: { days: 8, percentage: "53%" },
    travel: { days: 1, percentage: "7%" },
  },
  keyTransportation: [
    "Madrid-Toledo: Tren RENFE AVANT (€44.40 ida y vuelta)",
    "Madrid-Barcelona: Tren OUIGO de alta velocidad (€78)",
    "Barcelona-París: Vuelo Transavia 6:10-8:10",
    "París-Roma: Vuelo Wizz Air 9:05-11:10",
    "Roma-Florencia: Tren Italo de alta velocidad (€39.80)",
    "Florencia-Verona: Tren Italo (€35.80)",
    "Verona-Venecia: Tren Trenitalia regional (€20.70)",
    "Venecia-Madrid: Vuelo Ryanair FR1207 18:50-21:30",
  ],
  budgetBreakdown: {
    accommodation: 970,
    localTransport: 180,
    attractions: 380,
    food: 740,
    intercityTransport: 508,
    miscellaneous: 150,
  },
};
