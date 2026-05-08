import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinasiData } from "@/lib/data";
import { MapPin, Clock, Ticket, Star, ArrowLeft, CheckCircle } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return destinasiData.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props) {
  const dest = destinasiData.find((d) => d.slug === params.slug);
  if (!dest) return {};
  return {
    title: `${dest.nama} — Explore Lampung`,
    description: dest.deskripsi,
  };
}

export default function DetailDestinasiPage({ params }: Props) {
  const dest = destinasiData.find((d) => d.slug === params.slug);
  if (!dest) notFound();

  return (
    <main>
      <Navbar />

      {/* Hero gambar */}
      <div className="relative h-72 md:h-96 bg-gradient-to-br from-forest-700 to-navy-700 mt-16">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10" />
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <Link
            href="/destinasi"
            className="inline-flex items-center gap-2 text-xs text-[#f0ede4]/60 hover:text-gold-500 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Kembali ke Destinasi
          </Link>
          <div className="inline-block bg-gold-500/20 border border-gold-500/40 rounded-full px-3 py-1 text-[10px] text-gold-500 uppercase tracking-widest mb-3">
            {dest.kategori}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black text-[#f0ede4]">
            {dest.nama}
          </h1>
        </div>
      </div>

      {/* Konten utama */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom kiri: info utama */}
          <div className="lg:col-span-2 space-y-8">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={
                      s <= Math.round(dest.rating)
                        ? "text-gold-500 fill-gold-500"
                        : "text-white/20"
                    }
                  />
                ))}
              </div>
              <span className="text-[#f0ede4] font-bold">{dest.rating}</span>
              <span className="text-[#f0ede4]/40 text-sm">
                ({dest.ulasan.toLocaleString()} ulasan)
              </span>
            </div>

            {/* Deskripsi */}
            <div>
              <h2 className="font-display text-xl font-bold mb-3">Tentang Destinasi</h2>
              <p className="text-[#f0ede4]/65 leading-relaxed">{dest.deskripsi}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Yang Bisa Dilakukan</h2>
              <div className="grid grid-cols-2 gap-3">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                    <span className="text-sm text-[#f0ede4]/70">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom kanan: info praktis */}
          <div className="space-y-4">
            <div className="bg-navy-800 border border-white/8 rounded-2xl p-5 space-y-4">
              <h3 className="font-display text-lg font-bold">Info Praktis</h3>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#f0ede4]/40 mb-0.5">Lokasi</p>
                  <p className="text-sm text-[#f0ede4]/80">{dest.lokasi}, Lampung</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ticket size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#f0ede4]/40 mb-0.5">Harga Masuk</p>
                  <p className="text-sm text-[#f0ede4]/80">{dest.hargaMasuk}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#f0ede4]/40 mb-0.5">Jam Buka</p>
                  <p className="text-sm text-[#f0ede4]/80">{dest.jamBuka}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/8">
                <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-medium py-3 rounded-xl text-sm transition-colors duration-200">
                  Rencanakan Perjalanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
