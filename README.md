# Explore Lampung — Portal Wisata Digital Terpadu

Portal wisata digital berbasis Next.js 15 untuk menjelajahi keindahan Provinsi Lampung.

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

## 📁 Struktur Project

```
explore-lampung/
├── app/
│   ├── layout.tsx              ← Root layout (font, metadata)
│   ├── page.tsx                ← Landing page utama
│   ├── globals.css             ← Global styles + Tailwind
│   └── destinasi/
│       ├── page.tsx            ← Daftar semua destinasi
│       └── [slug]/page.tsx     ← Detail destinasi
├── components/
│   ├── Navbar.tsx              ← Navigasi utama (responsive)
│   ├── HeroSection.tsx         ← Hero dengan animasi
│   ├── SearchBar.tsx           ← Search dengan redirect
│   ├── FeaturedSection.tsx     ← Destinasi unggulan + filter
│   ├── DestinationCard.tsx     ← Kartu destinasi
│   ├── CategoryFilter.tsx      ← Filter kategori
│   ├── StatsSection.tsx        ← Statistik portal
│   └── Footer.tsx              ← Footer lengkap
├── lib/
│   ├── data.ts                 ← Data destinasi & kuliner
│   └── utils.ts                ← Helper functions
└── public/images/              ← Gambar destinasi
```

## 🎨 Tema & Desain

- **Warna utama**: Navy dark (#0a1628) + Gold (#c9a84c) + Forest green
- **Font**: Playfair Display (heading) + DM Sans (body)
- **Animasi**: Framer Motion untuk fade-in dan transisi halus

## 📦 Dependencies Utama

| Package | Kegunaan |
|---|---|
| next 15 | Framework utama |
| framer-motion | Animasi halus |
| lucide-react | Icon set |
| tailwindcss | Styling utility |
| clsx | Conditional class names |

## 🗺️ Halaman yang Tersedia

- `/` — Landing page
- `/destinasi` — Daftar destinasi + filter + search
- `/destinasi/[slug]` — Detail setiap destinasi
- `/kuliner` *(coming soon)*
- `/budaya` *(coming soon)*
- `/peta` *(coming soon)*

## 🔧 Pengembangan Selanjutnya

1. Integrasi CMS (Sanity.io / Contentful)
2. Peta interaktif dengan Leaflet.js
3. Sistem ulasan pengguna
4. Halaman kuliner & budaya
5. Itinerary builder
6. Authentication & user profile
