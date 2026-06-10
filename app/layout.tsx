import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
// @ts-ignore: CSS import handled by Next.js
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Explore Lampung — Portal Wisata Digital Terpadu",
  description:
    "Temukan destinasi wisata terbaik, kuliner autentik, dan pengalaman budaya Lampung yang tak terlupakan.",
  keywords: [
    "wisata lampung",
    "destinasi lampung",
    "way kambas",
    "pahawang",
    "kuliner lampung",
  ],
  openGraph: {
    title: "Explore Lampung",
    description: "Portal Wisata Digital Terpadu Provinsi Lampung",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-navy-900 text-[#f0ede4] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
