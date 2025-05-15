import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";
const logoImg = "/images/logo/logo.webp";

const Logo = () => {
  return (
    <Image
      onClick={() => scrollToSection("hero-section")}
      src={logoImg}
      alt="logo"
      width={100}
      height={100}
      className="cursor-pointer"
    />
  );
};

export default Logo;
