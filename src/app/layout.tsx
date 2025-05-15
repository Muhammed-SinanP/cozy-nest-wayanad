import type { Metadata } from "next";
import "./globals.css";
import { brandTitleFont, brandSubtitleFont, brandTextFont } from "@/lib/font";
import Footer from "@/components/Footer";
import MapCTABtn from "@/components/buttons/MapCTABtn";
import CallCTABtn from "@/components/buttons/CallCTABtn";
import RouteLoader from "@/components/RouteLoader";

export const metadata: Metadata = {
  title: "Cozy Nest Wayanad | Breathe in peace, live in comfort",
  description:
    "Experience luxury and comfort at CozyNest Resort. Explore our rooms, amenities, and serene surroundings — your ideal vacation destination.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${brandTitleFont.variable} ${brandSubtitleFont.variable} ${brandTextFont.variable}`}
      >
        <RouteLoader />
        {children}

        <div className="fixed bottom-12 right-6 z-30 flex flex-col gap-4">
          <MapCTABtn />
          <CallCTABtn />
        </div>

        <Footer />
      </body>
    </html>
  );
}
