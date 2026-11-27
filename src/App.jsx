import './App.css'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import PrayerTimes from './components/PrayerTimes'
import { searchCity, getWeather, getPrayerTimes } from './services/api'
import { formatDateForAladhan } from './utils/formatDate'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [results, setResults] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [weather, setWeather] = useState(null)
  const [prayer, setPrayer] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

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
    <div className="app">
      <header className="header">
        <h1>Weather & Prayer Dashboard</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Terang' : '🌙 Gelap'}
        </button>
      </header>

      <SearchBar onSearch={handleSearch} />

      <ul className="results">
        {results.map((city) => (
          <li key={city.id}>
            <button onClick={() => handleSelect(city)}>
              {city.name}, {city.admin1}, {city.country}
            </button>
          </li>
        ))}
      </ul>

      <div className="cards">
        {selectedCity && weather && (
          <WeatherCard city={selectedCity} weather={weather} />
        )}
        {selectedCity && prayer && <PrayerTimes prayer={prayer} />}
      </div>
    </div>
  )
}

export default App
