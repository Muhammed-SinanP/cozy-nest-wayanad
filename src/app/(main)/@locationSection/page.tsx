import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
const locationCoverImg = "/images/cover/1.webp";

const LocationSection = () => {
  return (
    <div className="section relative">
      <Image
        src={locationCoverImg}
        fill
        alt="Cover image of location"
        className="z-0 object-cover"
        priority
      />

      <div className="relative z-10">
        <h1 className="section-title">
          <IoLocationSharp size={35} className="drop-shadow" />
          Our Location
          <IoLocationSharp size={35} className="drop-shadow" />
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-white font-brand-text tracking-wider text-center text-sm">
            Our resort is nestled in the heart of nature and serene
            surroundings.
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=11.660656909458796,76.01310845462339&waypoints=11.657992167268295,76.01884006487015|11.658775355824202,76.0148629393161"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success text-white font-brand-subtitle tracking-wider"
          >
            Get Directions
          </a>

          <iframe
            title="Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9293.615265096281!2d76.01307727401478!3d11.660056945938289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba675005f31fda1%3A0x8a90f8db686353a7!2sCozy%20nest!5e0!3m2!1sen!2sin!4v1747239024693!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-md shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
