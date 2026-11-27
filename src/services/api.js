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
