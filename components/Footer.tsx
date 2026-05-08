import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-950 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-xl font-bold mb-3">
              Explore<span className="text-gold-500">Lampung</span>
            </div>
            <p className="text-sm text-[#f0ede4]/45 leading-relaxed max-w-xs">
              Portal wisata digital terpadu untuk menjelajahi keindahan alam,
              budaya, dan kuliner Provinsi Lampung.
            </p>
            <p className="text-xs text-gold-500/60 mt-4 font-medium tracking-wide">
              Sai Bumi Ruwa Jurai
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f0ede4]/35 mb-4">Jelajahi</h4>
            <ul className="space-y-2.5">
              {["Destinasi", "Kuliner", "Budaya", "Peta Wisata", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-[#f0ede4]/50 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f0ede4]/35 mb-4">Informasi</h4>
            <ul className="space-y-2.5">
              {["Tentang Kami", "Kontak", "Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#f0ede4]/50 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#f0ede4]/30">
            &copy; {new Date().getFullYear()} Explore Lampung. All rights reserved.
          </p>
          <p className="text-xs text-[#f0ede4]/25">
            Dibuat dengan ❤ untuk Lampung
          </p>
        </div>
      </div>
    </footer>
  );
}
