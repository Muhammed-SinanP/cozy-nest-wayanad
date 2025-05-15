import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-brand-primary px-6 py-10 text-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Follow Us</p>
        <div className="flex ml-2 cursor-pointer hover:bg-pink-600 active:bg-pink-700 hover:text-white justify-center items-center w-14 h-14 rounded-full border border-gray-50">
          <a
            href="https://www.instagram.com/cozy_nest.wayanad?igsh=MTVsM2pyaTFpd2xtZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={25} />
          </a>
        </div>
      </div>
      <div className="text-center text-xs tracking-wider">
        <p>Copyright © 2025 Cozy Nest Wayanad. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
