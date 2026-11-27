import { describeWeather } from '../utils/weatherCodes'

function WeatherCard({ city, weather }) {
  const { current, current_units } = weather
  const condition = describeWeather(current.weather_code)

  return (
    <div>
      <h2>
        {city.name}, {city.country}
      </h2>
      <p>
        {condition.icon} {condition.label}
      </p>
      <p>
        Suhu: {current.temperature_2m}
        {current_units.temperature_2m}
      </p>
      <p>
        Kelembapan: {current.relative_humidity_2m}
        {current_units.relative_humidity_2m}
      </p>
      <p>
        Angin: {current.wind_speed_10m} {current_units.wind_speed_10m}
      </p>
    </div>
  )
}

export default WeatherCard
