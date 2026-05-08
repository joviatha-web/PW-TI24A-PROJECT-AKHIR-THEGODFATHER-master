"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/destinasi?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-3 bg-white/6 border border-white/15 hover:border-white/25 backdrop-blur-sm rounded-2xl px-5 py-3.5 transition-colors duration-200 focus-within:border-gold-500/50"
    >
      <Search size={18} className="text-[#f0ede4]/40 flex-shrink-0" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari destinasi, kuliner, atau aktivitas..."
        className="flex-1 bg-transparent text-[#f0ede4] text-sm placeholder:text-[#f0ede4]/35 outline-none"
      />
      <button
        type="submit"
        className="bg-gold-500 hover:bg-gold-400 text-navy-900 text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex-shrink-0"
      >
        Cari
      </button>
    </form>
  );
}
