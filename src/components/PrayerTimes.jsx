const PRAYERS = [
  { key: 'Fajr', label: 'Subuh' },
  { key: 'Dhuhr', label: 'Dzuhur' },
  { key: 'Asr', label: 'Ashar' },
  { key: 'Maghrib', label: 'Maghrib' },
  { key: 'Isha', label: 'Isya' },
]

function PrayerTimes({ prayer }) {
  const { timings, date } = prayer

  return (
    <div>
      <h2>Jadwal Sholat</h2>
      <p>{date.readable}</p>
      <ul>
        {PRAYERS.map((item) => (
          <li key={item.key}>
            {item.label}: {timings[item.key]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PrayerTimes
