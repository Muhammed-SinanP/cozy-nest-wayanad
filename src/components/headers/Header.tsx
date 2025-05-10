"use client";
import { allSectionIds, navLinks } from "@/data/nav";
import Logo from "../Logo";
import BookingBtn from "../buttons/BookingBtn";
import { scrollToSection } from "@/utils/scrollToSection";
import useActiveSection from "@/hooks/useActiveSection";

const Header = ({
  screenHeightScrolled,
}: {
  screenHeightScrolled: boolean;
}) => {
  const activeSection = useActiveSection(allSectionIds);

  return (
    <header
      className={`hidden lg:flex p-3 header ${
        screenHeightScrolled ? "to-[#0e3b33] shadow-md" : "to-transparent"
      } `}
    >
      <Logo />
      <ul className="flex gap-4 justify-center items-center text-brand-secondary">
        {navLinks.map((navLink) => (
          <li
            onClick={() => scrollToSection(navLink.sectionId)}
            key={navLink.index}
            className={`font-brand-title p-1 border-b-2 cursor-pointer hover-border-brand-secondary tracking-wider text-lg ${
              activeSection === navLink.sectionId
                ? "border-brand-secondary"
                : "border-transparent"
            }`}
          >
            {navLink.title}
          </li>
        ))}
      </ul>
      <BookingBtn />
    </header>
  );
};

export default Header;
