import "./css/style.css";

import { Merriweather } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";

const inter = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "VibeVirale",
  description: "Digital agency for influencers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-bg-100 text-text-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  );
}
