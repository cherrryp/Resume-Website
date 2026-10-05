import { Sarabun, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const sans = Sarabun({ subsets: ["thai", "latin"], weight: ["300", "400", "500", "600", "800"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

export const metadata = {
  title: `${profile.name} — ${profile.headline}`,
  description: "Resume และผลงานของ Kanyapat Chaiphad นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
