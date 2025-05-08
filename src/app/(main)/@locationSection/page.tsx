import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
const locationCoverImg = "/images/cover/1.jpg";

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
          <IoLocationSharp size={35} />
          Our Location
          <IoLocationSharp size={35} />
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-white font-brand-text tracking-wider text-center text-sm">
            Our resort is nestled in the heart of nature and serene
            surroundings.
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=11.660690,76.013237"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success text-white font-brand-subtitle tracking-wider"
          >
            Get Directions
          </a>
          <iframe
            title="Resort Location"
            src="https://www.google.com/maps?q=11.660690,76.013237&hl=en&z=15&output=embed"
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
