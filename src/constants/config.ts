export default {
  // API URL's
  WEATHER_API_BASE_URL: (
    latitude: number,
    longitude: number,
    units: 'standard' | 'metric' | 'imperial',
    apiKey: string,
  ) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`,

  // MAPS
  INITIAL_LATITUDE: 51.5074,
  INITIAL_LONGITUDE: 0.1278,
  ZOOM: 11,
  HEADING: 0,
  PITCH: 0,
  ALTITUDE: 15000,

  LANGUAGES: {
    af: 'Afrikaans',
    al: 'Albanian',
    ar: 'Arabic',
    az: 'Azerbaijani',
    bg: 'Bulgarian',
    ca: 'Catalan',
    cz: 'Czech',
    da: 'Danish',
    de: 'German',
    el: 'Greek',
    en: 'English',
    eu: 'Basque',
    fa: 'Persian (Farsi)',
    fi: 'Finnish',
    fr: 'French',
    gl: 'Galician',
    he: 'Hebrew',
    hi: 'Hindi',
    hr: 'Croatian',
    hu: 'Hungarian',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    kr: 'Korean',
    la: 'Latvian',
    lt: 'Lithuanian',
    mk: 'Macedonian',
    no: 'Norwegian',
    nl: 'Dutch',
    pl: 'Polish',
    pt: 'Portuguese',
    pt_br: 'Português Brasil',
    ro: 'Romanian',
    ru: 'Russian',
    sv: 'Swedish',
    se: 'Swedish',
    sk: 'Slovak',
    sl: 'Slovenian',
    es: 'Spanish',
    sr: 'Serbian',
    th: 'Thai',
    tr: 'Turkish',
    ua: 'Ukrainian',
    vi: 'Vietnamese',
    zh_cn: 'Chinese Simplified',
    zh_tw: 'Chinese Traditional',
    zu: 'Zulu',
  },
};
