"use client";
import { RiMenu2Line } from "react-icons/ri";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import BookingBtn from "../buttons/BookingBtn";
import Sidebar from "../Sidebar";
const MobileHeader = ({
  screenHeightScrolled,
}: {
  screenHeightScrolled: boolean;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);
  return (
    <div
      className={`lg:hidden flex uppercase p-2 header ${
        screenHeightScrolled ? "to-[#0e3b33] shadow-md" : "to-transparent"
      }`}
    >
      <RiMenu2Line
        onClick={() => setSidebarOpen(true)}
        size={38}
        className="cursor-pointer text-brand-secondary"
      />

      <Logo />

      <BookingBtn />

      <div
        className={`fixed left-0 top-0 h-screen w-full bg-black opacity-60 transition-opacity duration-500  ${
          sidebarOpen ? "visible" : "invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default MobileHeader;
