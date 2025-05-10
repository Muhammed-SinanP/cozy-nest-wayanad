import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const contactCoverImg = "/images/cover/contact-cover.jpg";

const ContactSection = () => {
  return (
    <div className="section relative ">
      <Image
        src={contactCoverImg}
        fill
        alt="Cover image of contact section"
        className="object-cover z-0 brightness-90"
        priority
      />

      <div className="relative z-10 ">
        <h1 className="section-title">
          <FaPhoneFlip size={35} />
          Contact Us
          <FaPhone size={35} />
        </h1>
        <div className="tracking-wider flex flex-col gap-6 items-start text-white">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Address:</p>
            <div className="flex gap-2 font-medium">
              <FaAddressCard size={15} className="mt-1" />
              <p className="text-sm leading-6">
                Thuparimula Kolani Road
                <br />
                Madakunnu PO <br />
                Kalpatta, Wayanad
                <br />
                Pin-673122
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Phone:</p>
            <div className="flex gap-2 font-medium">
              <FaPhoneAlt size={14} className="mt-1" />
              <p className="text-sm border-b">
                <a className="hover:text-teal-800" href="tel:+916282011125">6282011125</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Instagram:</p>
            <div className="flex gap-2 font-medium">
              <GrInstagram size={15} className="mt-1" />
              <p className="text-sm border-b">
                <a className="hover:text-teal-800"
                  href="https://www.instagram.com/cozy_nest.wayanad?igsh=MTVsM2pyaTFpd2xtZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cozy_nest.wayanad
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
