import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import PrayerTimes from './components/PrayerTimes'
import { searchCity, getWeather, getPrayerTimes } from './services/api'
import { formatDateForAladhan } from './utils/formatDate'

function App() {
  const [results, setResults] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [weather, setWeather] = useState(null)
  const [prayer, setPrayer] = useState(null)

  async function handleSearch(name) {
    try {
      const cities = await searchCity(name)
      setResults(cities)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSelect(city) {
    setWeather(null)
    setPrayer(null)
    setSelectedCity(city)
    setResults([])
  }

  useEffect(() => {
    if (!selectedCity) return

    async function loadWeather() {
      try {
        const data = await getWeather(
          selectedCity.latitude,
          selectedCity.longitude
        )
        setWeather(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadWeather()
  }, [selectedCity])

  useEffect(() => {
    if (!selectedCity) return

    async function loadPrayerTimes() {
      try {
        const data = await getPrayerTimes(
          selectedCity.latitude,
          selectedCity.longitude,
          formatDateForAladhan()
        )
        setPrayer(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadPrayerTimes()
  }, [selectedCity])

  return (
    <div>
      <h1>Weather & Prayer Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      <ul>
        {results.map((city) => (
          <li key={city.id}>
            <button onClick={() => handleSelect(city)}>
              {city.name}, {city.admin1}, {city.country}
            </button>
          </li>
        ))}
      </ul>

      {selectedCity && weather && (
        <WeatherCard city={selectedCity} weather={weather} />
      )}

      {selectedCity && prayer && <PrayerTimes prayer={prayer} />}
    </div>
  )
}

export default App
