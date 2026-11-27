import { useState } from 'react'
import SearchBar from './components/SearchBar'
import { searchCity } from './services/api'

function App() {
  const [results, setResults] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  async function handleSearch(name) {
    try {
      const cities = await searchCity(name)
      setResults(cities)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSelect(city) {
    setSelectedCity(city)
    setResults([])
  }

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

      {selectedCity && (
        <p>
          Kota terpilih: {selectedCity.name} ({selectedCity.latitude},{' '}
          {selectedCity.longitude})
        </p>
      )}
    </div>
  )
}

export default App
