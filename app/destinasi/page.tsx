"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import { destinasiData } from "@/lib/data";

export default function DestinasiPage() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [kategori, setKategori] = useState("semua");

  const filtered = useMemo(() => {
    return destinasiData.filter((d) => {
      const matchKategori = kategori === "semua" || d.kategori === kategori;
      const matchQuery =
        !queryParam ||
        d.nama.toLowerCase().includes(queryParam.toLowerCase()) ||
        d.lokasi.toLowerCase().includes(queryParam.toLowerCase()) ||
        d.deskripsi.toLowerCase().includes(queryParam.toLowerCase());
      return matchKategori && matchQuery;
    });
  }, [kategori, queryParam]);

  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 px-6 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">Jelajahi</p>
          <h1 className="font-display text-4xl font-black mb-3">Semua Destinasi</h1>
          <p className="text-[#f0ede4]/50 text-sm mb-8">
            Ditemukan {filtered.length} destinasi wisata di Lampung
          </p>
          <div className="max-w-lg mb-6">
            <SearchBar />
          </div>
          <CategoryFilter aktif={kategori} onChange={setKategori} />
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((destinasi) => (
                <DestinationCard key={destinasi.id} destinasi={destinasi} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#f0ede4]/35">
              <p className="text-lg mb-2">Destinasi tidak ditemukan</p>
              <p className="text-sm">Coba kata kunci atau kategori lain</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
