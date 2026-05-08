"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinasiData } from "@/lib/data";
import { MapPin, Star } from "lucide-react";

export default function PetaPage() {
  const [dipilih, setDipilih] = useState(destinasiData[0]);

  return (
    <main>
      <Navbar />

      <div className="pt-20 min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-6 py-8 bg-navy-800 border-b border-white/8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">Navigasi</p>
            <h1 className="font-display text-3xl font-black">Peta Wisata Lampung</h1>
          </div>
        </div>

        {/* Layout peta + sidebar */}
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Sidebar list destinasi */}
          <div className="lg:w-80 border-r border-white/8 overflow-y-auto max-h-[70vh] lg:max-h-none">
            {destinasiData.map((d) => (
              <button
                key={d.id}
                onClick={() => setDipilih(d)}
                className={`w-full text-left px-5 py-4 border-b border-white/6 transition-colors hover:bg-white/5 ${
                  dipilih.id === d.id ? "bg-gold-500/10 border-l-2 border-l-gold-500" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className={`mt-0.5 flex-shrink-0 ${
                      dipilih.id === d.id ? "text-gold-500" : "text-[#f0ede4]/30"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-[#f0ede4] leading-tight">{d.nama}</p>
                    <p className="text-xs text-[#f0ede4]/40 mt-0.5">{d.lokasi}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={11} className="text-gold-500 fill-gold-500" />
                      <span className="text-xs text-[#f0ede4]/60">{d.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Area Peta */}
          <div className="flex-1 relative bg-navy-950 min-h-[400px] flex flex-col">

            {/* Embed OpenStreetMap via iframe */}
            <iframe
              key={dipilih.id}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${dipilih.koordinat.lng - 0.3}%2C${dipilih.koordinat.lat - 0.3}%2C${dipilih.koordinat.lng + 0.3}%2C${dipilih.koordinat.lat + 0.3}&layer=mapnik&marker=${dipilih.koordinat.lat}%2C${dipilih.koordinat.lng}`}
              className="w-full flex-1 min-h-[400px] lg:min-h-0 lg:h-full"
              style={{ border: "none", filter: "invert(90%) hue-rotate(180deg)" }}
              title={`Peta ${dipilih.nama}`}
            />

            {/* Info card destinasi yang dipilih */}
            <div className="absolute bottom-4 right-4 bg-navy-900/95 backdrop-blur border border-white/15 rounded-2xl p-4 max-w-xs shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 bg-gold-500/10 rounded-full px-2 py-0.5 border border-gold-500/20">
                {dipilih.kategori}
              </span>
              <h3 className="font-display text-base font-bold mt-2 mb-1 text-[#f0ede4]">
                {dipilih.nama}
              </h3>
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={11} className="text-gold-500" />
                <span className="text-xs text-[#f0ede4]/50">{dipilih.lokasi}</span>
              </div>
              <p className="text-xs text-[#f0ede4]/50 leading-relaxed line-clamp-2 mb-3">
                {dipilih.deskripsi}
              </p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-gold-500 fill-gold-500" />
                  <span className="text-[#f0ede4] font-medium">{dipilih.rating}</span>
                  <span className="text-[#f0ede4]/40">({dipilih.ulasan.toLocaleString()})</span>
                </div>
                <span className="text-gold-500 font-medium">{dipilih.hargaMasuk}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
