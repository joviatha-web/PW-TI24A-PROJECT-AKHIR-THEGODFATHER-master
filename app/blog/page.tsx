import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const artikelList = [
  {
    slug: "panduan-wisata-pahawang",
    judul: "Panduan Lengkap Wisata Pulau Pahawang 2025",
    ringkasan:
      "Semua yang perlu kamu tahu sebelum berkunjung ke surga snorkeling Lampung — dari cara menuju ke sana, biaya, hingga spot foto terbaik.",
    kategori: "Panduan",
    tanggal: "15 April 2025",
    waktuBaca: "5 menit",
    emoji: "🏝️",
    warna: "from-[#1a2e4e] to-[#0d1e3d]",
  },
  {
    slug: "kuliner-wajib-lampung",
    judul: "10 Kuliner Wajib Coba Saat ke Lampung",
    ringkasan:
      "Dari seruit yang gurih, tempoyak yang unik, hingga kopi robusta terbaik Indonesia — jangan pulang sebelum mencicipi ini semua.",
    kategori: "Kuliner",
    tanggal: "10 April 2025",
    waktuBaca: "4 menit",
    emoji: "🍽️",
    warna: "from-[#2e1a0d] to-[#1e0d06]",
  },
  {
    slug: "way-kambas-gajah-sumatera",
    judul: "Bertemu Gajah Sumatera di Way Kambas",
    ringkasan:
      "Pengalaman tak terlupakan mengunjungi Elephant Conservation Center dan melihat langsung upaya pelestarian gajah Sumatera di habitat aslinya.",
    kategori: "Wisata Alam",
    tanggal: "5 April 2025",
    waktuBaca: "6 menit",
    emoji: "🐘",
    warna: "from-[#1a4e3d] to-[#0d2e1f]",
  },
  {
    slug: "mitos-krakatau",
    judul: "Krakatau: Antara Mitos, Sejarah, dan Petualangan",
    ringkasan:
      "Menguak sejarah letusan dahsyat 1883 dan pesona Anak Krakatau yang masih aktif hingga kini. Tips aman mendaki gunung berapi aktif ini.",
    kategori: "Sejarah",
    tanggal: "1 April 2025",
    waktuBaca: "7 menit",
    emoji: "🌋",
    warna: "from-[#3d1a0d] to-[#1e0d06]",
  },
  {
    slug: "kain-tapis-warisan-unesco",
    judul: "Kain Tapis: Warisan Budaya Lampung yang Mendunia",
    ringkasan:
      "Mengenal lebih dekat kain tapis — proses pembuatan yang rumit, motif-motif bermakna, dan mengapa kain ini menjadi kebanggaan Lampung.",
    kategori: "Budaya",
    tanggal: "25 Maret 2025",
    waktuBaca: "5 menit",
    emoji: "🧵",
    warna: "from-[#3d1a2e] to-[#1e0d17]",
  },
  {
    slug: "teluk-kiluan-lumba-lumba",
    judul: "Teluk Kiluan: Berburu Lumba-Lumba di Pagi Hari",
    ringkasan:
      "Destinasi tersembunyi di Tanggamus ini menawarkan pengalaman unik menyaksikan ratusan lumba-lumba liar di habitat aslinya setiap pagi.",
    kategori: "Wisata Bahari",
    tanggal: "20 Maret 2025",
    waktuBaca: "4 menit",
    emoji: "🐬",
    warna: "from-[#0d2a4e] to-[#061628]",
  },
];

const kategoriWarna: Record<string, string> = {
  Panduan: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Kuliner: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Wisata Alam": "bg-green-500/15 text-green-400 border-green-500/30",
  Sejarah: "bg-red-500/15 text-red-400 border-red-500/30",
  Budaya: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Wisata Bahari": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 px-6 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">Cerita & Tips</p>
          <h1 className="font-display text-4xl font-black mb-3">Blog Wisata</h1>
          <p className="text-[#f0ede4]/50 text-sm max-w-xl">
            Panduan perjalanan, cerita petualangan, dan tips wisata terbaik untuk menjelajahi Lampung.
          </p>
        </div>
      </div>

      {/* Artikel Utama (featured) */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Featured artikel pertama */}
          <div className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 mb-8 group cursor-pointer">
            <div className={`h-56 bg-gradient-to-br ${artikelList[0].warna} flex items-center justify-center`}>
              <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                {artikelList[0].emoji}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] uppercase tracking-widest border rounded-full px-3 py-1 ${kategoriWarna[artikelList[0].kategori]}`}>
                  {artikelList[0].kategori}
                </span>
                <span className="text-xs text-[#f0ede4]/35">⭐ Artikel Pilihan</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#f0ede4] mb-3 group-hover:text-gold-400 transition-colors">
                {artikelList[0].judul}
              </h2>
              <p className="text-[#f0ede4]/55 text-sm leading-relaxed mb-4">
                {artikelList[0].ringkasan}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#f0ede4]/35">
                <span>📅 {artikelList[0].tanggal}</span>
                <span>⏱️ {artikelList[0].waktuBaca} baca</span>
              </div>
            </div>
          </div>

          {/* Grid artikel lainnya */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artikelList.slice(1).map((artikel, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className={`h-36 bg-gradient-to-br ${artikel.warna} flex items-center justify-center`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {artikel.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${kategoriWarna[artikel.kategori]}`}>
                      {artikel.kategori}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#f0ede4] mb-2 line-clamp-2 group-hover:text-gold-400 transition-colors">
                    {artikel.judul}
                  </h3>
                  <p className="text-xs text-[#f0ede4]/45 leading-relaxed line-clamp-2 mb-4">
                    {artikel.ringkasan}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#f0ede4]/30">
                    <span>{artikel.tanggal}</span>
                    <span>{artikel.waktuBaca} baca</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter banner */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gold-500/10 to-navy-800 border border-gold-500/20 rounded-3xl p-8 text-center">
            <p className="text-xs tracking-widest uppercase text-gold-500 mb-3">Newsletter</p>
            <h2 className="font-display text-2xl font-bold mb-3">Jangan Lewatkan Artikel Terbaru</h2>
            <p className="text-[#f0ede4]/50 text-sm mb-6 max-w-sm mx-auto">
              Dapatkan tips wisata, rekomendasi destinasi, dan cerita petualangan langsung di inbox kamu.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email kamu..."
                className="flex-1 bg-white/6 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#f0ede4] placeholder:text-[#f0ede4]/30 outline-none focus:border-gold-500/50"
              />
              <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-medium px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
