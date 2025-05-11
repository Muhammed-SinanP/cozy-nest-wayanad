import { allSectionIds, navLinks } from "@/data/nav";
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSection } from "@/utils/scrollToSection";
import { RiMenu3Line } from "react-icons/ri";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const activeSection = useActiveSection(allSectionIds);
  return (
    <div
      id="sidebar"
      className={`h-screen shadow-md w-2/3 sm:w-1/2 md:w-1/3 fixed top-0 z-30 bg-white transform -ml-2 transition-transform duration-500 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-2">
        <RiMenu3Line
          onClick={() => setSidebarOpen(false)}
          size={38}
          className="cursor-pointer text-brand-secondary"
        />
      </div>
      <ul onClick={() => setSidebarOpen(false)} className="border-t">
        {navLinks.map((navLink) => (
          <li
            key={navLink.index}
            onClick={() => scrollToSection(navLink.sectionId)}
            className={`p-2 pl-4 border-b border-gray-600 font-brand-subtitle cursor-pointer hover-bg-brand-secondary hover-text-brand-primary tracking-wider 
              ${
                activeSection === navLink.sectionId
                  ? "bg-brand-secondary text-brand-primary"
                  : "text-brand-secondary"
              }`}
          >
            {navLink.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
