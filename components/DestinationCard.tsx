import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { Destinasi } from "@/lib/data";
import { formatUlasan, kategoriWarna } from "@/lib/utils";

interface Props {
  destinasi: Destinasi;
}

export default function DestinationCard({ destinasi }: Props) {
  const warna = kategoriWarna[destinasi.kategori] || kategoriWarna.alam;

  return (
    <Link href={`/destinasi/${destinasi.slug}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-white/8 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 bg-navy-800">
        {/* Gambar / Placeholder berwarna */}
        <div
          className={`h-44 bg-gradient-to-br ${warna} relative overflow-hidden flex items-end p-3`}
        >
          {/* Overlay gelap di bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Tag kategori */}
          <span className="relative z-10 text-[10px] bg-black/50 border border-white/15 rounded-full px-3 py-1 text-[#f0ede4]/80 uppercase tracking-wide">
            {destinasi.kategori}
          </span>

          {/* Rating badge pojok kanan atas */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1">
            <Star size={11} className="text-gold-500 fill-gold-500" />
            <span className="text-[11px] font-medium text-[#f0ede4]">
              {destinasi.rating}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <h3 className="font-display text-base font-bold text-[#f0ede4] mb-1 group-hover:text-gold-400 transition-colors line-clamp-1">
            {destinasi.nama}
          </h3>

          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={12} className="text-gold-500 flex-shrink-0" />
            <span className="text-xs text-[#f0ede4]/50">{destinasi.lokasi}</span>
          </div>

          <p className="text-xs text-[#f0ede4]/45 leading-relaxed line-clamp-2 mb-3">
            {destinasi.deskripsi}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[#f0ede4]/40">
              {formatUlasan(destinasi.ulasan)} ulasan
            </span>
            <span className="text-xs text-gold-500 font-medium">
              {destinasi.hargaMasuk}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
