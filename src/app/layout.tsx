import type { Metadata } from "next";
import "./globals.css";
import { brandTitleFont, brandSubtitleFont, brandTextFont } from "@/lib/font";
import Footer from "@/components/Footer"
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
const mapIcon = "/images/icons/map.png";

export const metadata: Metadata = {
  title: "Cozy Nest Wayanad | Breathe in peace, live in comfort",
  description:
    "Experience luxury and comfort at CozyNest Resort. Explore our rooms, amenities, and serene surroundings — your ideal vacation destination.",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
 
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandTitleFont.variable} ${brandSubtitleFont.variable} ${brandTextFont.variable}`}
      >
        {children}

        <div className="fixed bottom-12 right-6 z-30 flex flex-col gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=11.660690,76.013237"
            target="_blank"
            rel="noopener noreferrer"
            className="go-to-btn text-red-600 bg-white"
          >
            {/* <FaLocationDot size={25} /> */}
            <Image src={mapIcon} width={30} height={30} alt="Map icon" />
          </a>
          <a
            href="tel:+916282011125"
            className="go-to-btn bg-blue-600 text-white"
          >
            <FaPhoneAlt size={22} />
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
