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
    <div className="card">
      <h2>Jadwal Sholat</h2>
      <p className="muted">{date.readable}</p>
      <ul className="prayer-list">
        {PRAYERS.map((item) => (
          <li key={item.key}>
            <span>{item.label}</span>
            <strong>{timings[item.key]}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PrayerTimes
