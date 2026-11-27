const WEATHER_CODES = {
  0: { label: 'Cerah', icon: '☀️' },
  1: { label: 'Cerah berawan', icon: '🌤️' },
  2: { label: 'Berawan sebagian', icon: '⛅' },
  3: { label: 'Mendung', icon: '☁️' },
  45: { label: 'Berkabut', icon: '🌫️' },
  48: { label: 'Kabut beku', icon: '🌫️' },
  51: { label: 'Gerimis ringan', icon: '🌦️' },
  53: { label: 'Gerimis', icon: '🌦️' },
  55: { label: 'Gerimis lebat', icon: '🌦️' },
  61: { label: 'Hujan ringan', icon: '🌧️' },
  63: { label: 'Hujan', icon: '🌧️' },
  65: { label: 'Hujan lebat', icon: '🌧️' },
  80: { label: 'Hujan sporadis ringan', icon: '🌦️' },
  81: { label: 'Hujan sporadis', icon: '🌦️' },
  82: { label: 'Hujan sporadis lebat', icon: '⛈️' },
  95: { label: 'Badai petir', icon: '⛈️' },
  96: { label: 'Badai petir dan es', icon: '⛈️' },
  99: { label: 'Badai petir dan es lebat', icon: '⛈️' },
}

export function describeWeather(code) {
  return WEATHER_CODES[code] ?? { label: 'Tidak diketahui', icon: '❓' }
}
