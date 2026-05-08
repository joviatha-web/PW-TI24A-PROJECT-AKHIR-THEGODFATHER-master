"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { destinasiData } from "@/lib/data";
import DestinationCard from "./DestinationCard";
import CategoryFilter from "./CategoryFilter";
import Link from "next/link";

export default function FeaturedSection() {
  const [kategoriAktif, setKategoriAktif] = useState("semua");

  const filtered =
    kategoriAktif === "semua"
      ? destinasiData.slice(0, 6)
      : destinasiData.filter((d) => d.kategori === kategoriAktif).slice(0, 6);

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">
              Destinasi Populer
            </p>
            <h2 className="font-display text-3xl font-bold text-[#f0ede4]">
              Pilihan Wisata Unggulan
            </h2>
          </div>
          <Link
            href="/destinasi"
            className="text-sm text-gold-500 hover:text-gold-400 transition-colors font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <CategoryFilter aktif={kategoriAktif} onChange={setKategoriAktif} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((destinasi, i) => (
            <motion.div
              key={destinasi.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <DestinationCard destinasi={destinasi} />
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#f0ede4]/35 text-sm">
            Tidak ada destinasi untuk kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
