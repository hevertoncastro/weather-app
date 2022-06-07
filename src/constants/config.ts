import {LanguagesType, UnitsType} from '~types/settings';

export default {
  // API URL's
  WEATHER_API_BASE_URL: (
    latitude: number,
    longitude: number,
    units: UnitsType,
    language: LanguagesType,
    apiKey: string,
  ) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${language}&appid=${apiKey}`,

  // MAPS
  INITIAL_LATITUDE: 0,
  INITIAL_LONGITUDE: 0,
  ZOOM: 12,
  HEADING: 0,
  PITCH: 0,
  ALTITUDE: 15000,

  // TEXTS
  TEXTS: {
    EN: {
      SEARCH_TITLE: 'Search new place',
      SEARCH_PLACEHOLDER: 'Search',
      HUMIDITY: 'Humidity',
      WIND: 'Wind',
      VISIBILITY: 'Visibility',
    },
    PT_BR: {
      SEARCH_TITLE: 'Buscar novo local',
      SEARCH_PLACEHOLDER: 'Buscar',
      HUMIDITY: 'Umidade',
      WIND: 'Vento',
      VISIBILITY: 'Visibilidade',
    },
    ES: {
      SEARCH_TITLE: 'Buscar nuevo lugar',
      SEARCH_PLACEHOLDER: 'Buscar',
      HUMIDITY: 'Humedad',
      WIND: 'Viento',
      VISIBILITY: 'Visibilidad',
    },
  },
  WEATHER_ICONS: {
    200: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    201: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    202: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    210: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    211: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    212: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    221: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    230: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    231: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },
    232: {
      day: require('@assets/icons/11d.png'),
      night: require('@assets/icons/11n.png'),
    },

    300: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    301: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    302: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    310: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    311: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    312: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    313: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    314: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    321: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },

    500: {
      day: require('@assets/icons/10d.png'),
      night: require('@assets/icons/10n.png'),
    },
    501: {
      day: require('@assets/icons/10d.png'),
      night: require('@assets/icons/10n.png'),
    },
    502: {
      day: require('@assets/icons/10d.png'),
      night: require('@assets/icons/10n.png'),
    },
    503: {
      day: require('@assets/icons/10d.png'),
      night: require('@assets/icons/10n.png'),
    },
    504: {
      day: require('@assets/icons/10d.png'),
      night: require('@assets/icons/10n.png'),
    },
    511: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    520: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    521: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    522: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },
    531: {
      day: require('@assets/icons/09d.png'),
      night: require('@assets/icons/09n.png'),
    },

    600: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    601: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    602: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    611: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    612: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    613: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    615: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    616: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    620: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    621: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },
    622: {
      day: require('@assets/icons/13d.png'),
      night: require('@assets/icons/13n.png'),
    },

    701: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    711: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    721: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    731: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    741: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    751: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    761: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    762: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    771: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },
    781: {
      day: require('@assets/icons/50d.png'),
      night: require('@assets/icons/50n.png'),
    },

    800: {
      day: require('@assets/icons/01d.png'),
      night: require('@assets/icons/01n.png'),
    },
    801: {
      day: require('@assets/icons/02d.png'),
      night: require('@assets/icons/02n.png'),
    },
    802: {
      day: require('@assets/icons/03d.png'),
      night: require('@assets/icons/03n.png'),
    },
    803: {
      day: require('@assets/icons/04d.png'),
      night: require('@assets/icons/04n.png'),
    },
    804: {
      day: require('@assets/icons/04d.png'),
      night: require('@assets/icons/04n.png'),
    },
  } as {[key: number]: {day: any; night: any}},
};
