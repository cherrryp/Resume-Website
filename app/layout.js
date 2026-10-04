import { Sarabun, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Sarabun({ subsets: ["thai", "latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

export const metadata = {
  title: "Kanyapat Chaiphad — Full Stack Developer & Software Tester",
  description: "Resume และผลงานของ Kanyapat Chaiphad นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
