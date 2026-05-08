"use client";

import { kategoriList } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Props {
  aktif: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ aktif, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {kategoriList.map((kat) => (
        <button
          key={kat.value}
          onClick={() => onChange(kat.value)}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200",
            aktif === kat.value
              ? "bg-gold-500/15 border-gold-500/50 text-gold-500"
              : "border-white/15 text-[#f0ede4]/55 hover:border-white/30 hover:text-[#f0ede4]/80"
          )}
        >
          {kat.label}
        </button>
      ))}
    </div>
  );
}
