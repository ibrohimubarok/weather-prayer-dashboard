const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'

export async function searchCity(name) {
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(name)}&count=5&language=id`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Gagal mencari kota')
  }

  const data = await response.json()
  return data.results ?? []
}

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

export async function getWeather(latitude, longitude) {
    const params = new URLSearchParams({
      latitude, longitude, current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code', timezone: 'auto'
  })

  const response = await fetch(`${WEATHER_URL}?${params}`)
  if (!response.ok) {
    throw new Error('Gagal mengambil cuaca')
  }

  return await response.json()
}

const PRAYER_URL = 'https://api.aladhan.com/v1/timings'

export async function getPrayerTimes(latitude, longitude, date) {
    const params = new URLSearchParams({
      latitude, longitude, method: 20
  })

  const response = await fetch(`${PRAYER_URL}/${date}?${params}`)
  if (!response.ok) {
    throw new Error('Gagal mengambil waktu solat')
  }

  const data = await response.json()
  return data.data ?? null
}
