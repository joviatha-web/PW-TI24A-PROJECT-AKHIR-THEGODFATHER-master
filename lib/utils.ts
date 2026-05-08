// lib/utils.ts

import { type ClassValue, clsx } from "clsx";

// Gabungkan class names dengan clsx
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format angka rating ke bintang
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

// Format jumlah ulasan
export function formatUlasan(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

// Render bintang rating (string simbol)
export function renderBintang(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

// Map kategori ke warna latar kartu
export const kategoriWarna: Record<string, string> = {
  alam: "from-forest-700 to-forest-800",
  bahari: "from-[#1a2e4e] to-[#0d1e3d]",
  budaya: "from-[#3d1a2e] to-[#2e0d1e]",
  petualangan: "from-[#2e1a0d] to-[#4e2e1a]",
  kuliner: "from-[#2e2a0d] to-[#1e1a04]",
};

// Truncate teks
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
