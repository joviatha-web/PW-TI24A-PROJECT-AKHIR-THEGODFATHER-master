"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/destinasi", label: "Destinasi" },
  { href: "/kuliner", label: "Kuliner" },
  { href: "/budaya", label: "Budaya" },
  { href: "/peta", label: "Peta" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-navy-900/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-lg font-bold text-[#f0ede4]">
          Explore<span className="text-gold-500">Lampung</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#f0ede4]/55 hover:text-gold-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/destinasi"
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
          >
            Mulai Jelajah
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#f0ede4]/70 hover:text-[#f0ede4]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#f0ede4]/70 hover:text-gold-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/destinasi"
            className="mt-2 bg-gold-500 text-navy-900 text-sm font-medium px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Mulai Jelajah
          </Link>
        </div>
      )}
    </nav>
  );
}
