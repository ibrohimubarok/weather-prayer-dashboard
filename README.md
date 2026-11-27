# Weather & Prayer Dashboard

Dashboard web untuk melihat **cuaca** dan **jadwal sholat** berdasarkan kota yang dicari. Dibuat dengan React dan memakai API publik tanpa API key.

## Fitur

- Pencarian kota dengan hasil dari geocoding
- Cuaca terkini dan kondisi saat ini untuk kota terpilih
- Jadwal sholat harian (Subuh, Dzuhur, Ashar, Maghrib, Isya) berdasarkan koordinat kota
- Mode gelap
- Indikator loading dan pesan error yang jelas
- Menyimpan kota terakhir yang dicari di browser

## Teknologi

| Bagian | Teknologi |
|---|---|
| Bahasa | JavaScript (ES6+) |
| Library UI | React |
| Build tool | Vite |
| Cuaca & geocoding | [Open-Meteo API](https://open-meteo.com/) |
| Jadwal sholat | [Aladhan API](https://aladhan.com/prayer-times-api) |

Kedua API gratis dan tidak membutuhkan API key.

## Menjalankan Proyek

Prasyarat: Node.js versi 18 atau lebih baru.

```bash
# clone repositori
git clone https://github.com/<username>/weather-prayer-dashboard.git
cd weather-prayer-dashboard

# pasang dependensi
npm install

# jalankan server development
npm run dev
```

Buka `http://localhost:5173` di browser.

## Roadmap

- [x] Tahap 1: Setup project (Vite + React) dan struktur folder
- [x] Tahap 2: Mencoba API publik dan memahami bentuk datanya
- [x] Tahap 3: Pencarian kota (geocoding)
- [x] Tahap 4: Menampilkan cuaca
- [x] Tahap 5: Menampilkan jadwal sholat
- [ ] Tahap 6: Mode gelap
- [ ] Tahap 7: Loading, error handling, dan penyimpanan kota terakhir

## Sumber Data

- Data cuaca dan geocoding oleh [Open-Meteo](https://open-meteo.com/)
- Jadwal sholat oleh [Aladhan](https://aladhan.com/)
