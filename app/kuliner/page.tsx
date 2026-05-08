"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { kulinerData } from "@/lib/data";
import { MapPin, Star } from "lucide-react";

export default function KulinerPage() {
  const [aktif, setAktif] = useState("semua");

  const kategori = ["semua", "makanan", "minuman", "jajanan"];

  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 px-6 bg-gradient-to-b from-[#2e1a0d] to-navy-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">Cita Rasa</p>
          <h1 className="font-display text-4xl font-black mb-3">Kuliner Lampung</h1>
          <p className="text-[#f0ede4]/50 text-sm max-w-xl">
            Nikmati kekayaan cita rasa autentik Lampung — dari seruit yang gurih hingga
            pempek khas pesisir yang legendaris.
          </p>

          {/* Filter */}
          <div className="flex gap-2 flex-wrap mt-8">
            {kategori.map((k) => (
              <button
                key={k}
                onClick={() => setAktif(k)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 capitalize ${
                  aktif === k
                    ? "bg-gold-500/15 border-gold-500/50 text-gold-500"
                    : "border-white/15 text-[#f0ede4]/55 hover:border-white/30"
                }`}
              >
                {k === "semua" ? "Semua" : k.charAt(0).toUpperCase() + k.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Kuliner */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kulinerData.map((item) => (
              <div
                key={item.id}
                className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder gambar */}
                <div className="h-48 bg-gradient-to-br from-[#3d2a0d] to-[#1e1204] flex items-center justify-center">
                  <span className="text-5xl">🍽️</span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#f0ede4] mb-1">
                    {item.nama}
                  </h3>

                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={12} className="text-gold-500" />
                    <span className="text-xs text-[#f0ede4]/50">{item.lokasi}</span>
                  </div>

                  <p className="text-sm text-[#f0ede4]/50 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={13} className="text-gold-500 fill-gold-500" />
                      <span className="text-sm font-medium text-[#f0ede4]">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gold-500 font-medium">{item.harga}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Tambahan card placeholder */}
            {[
              { nama: "Tempoyak", lokasi: "Seluruh Lampung", emoji: "🥭", desc: "Fermentasi durian khas Lampung yang unik, biasa dimasak dengan ikan atau dimakan langsung.", harga: "Rp 10.000 – 25.000", rating: 4.5 },
              { nama: "Lapis Legit Lampung", lokasi: "Bandar Lampung", emoji: "🎂", desc: "Kue lapis dengan rempah pilihan, menjadi oleh-oleh favorit wisatawan.", harga: "Rp 80.000 – 200.000", rating: 4.7 },
              { nama: "Kopi Robusta Lampung", lokasi: "Lampung Barat", emoji: "☕", desc: "Kopi robusta terbaik Indonesia, ditanam di lereng Bukit Barisan dengan cita rasa khas.", harga: "Rp 15.000 – 35.000", rating: 4.9 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-[#2a1a0d] to-[#0d0a04] flex items-center justify-center">
                  <span className="text-5xl">{item.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#f0ede4] mb-1">{item.nama}</h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={12} className="text-gold-500" />
                    <span className="text-xs text-[#f0ede4]/50">{item.lokasi}</span>
                  </div>
                  <p className="text-sm text-[#f0ede4]/50 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={13} className="text-gold-500 fill-gold-500" />
                      <span className="text-sm font-medium text-[#f0ede4]">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gold-500 font-medium">{item.harga}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
