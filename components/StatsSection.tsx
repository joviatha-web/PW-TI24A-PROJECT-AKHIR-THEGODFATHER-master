"use client";

import { motion } from "framer-motion";
import { statsData } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-6 px-4 bg-navy-800 rounded-2xl border border-white/7"
            >
              <div className="font-display text-3xl font-black text-gold-500 mb-1">
                {stat.angka}
              </div>
              <div className="text-xs text-[#f0ede4]/45">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
