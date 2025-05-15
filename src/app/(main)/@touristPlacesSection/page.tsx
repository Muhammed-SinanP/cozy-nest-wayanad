import { touristPlaces } from "@/data/touristPlaces";
import Image from "next/image";
import { GiEarthAmerica } from "react-icons/gi";
import { GiEarthAfricaEurope } from "react-icons/gi";
const bgImg = "/images/cover/wayanad.webp";
const TouristPlacesSection = () => {
  return (
    <div className="section relative">
      <Image
        src={bgImg}
        alt="Background image"
        fill
        className="brightness-75 object-cover"
        priority
      />
      <h1 className="section-title z-10">
        <GiEarthAfricaEurope size={35} className="drop-shadow" />
        Explore Wayanad
        <GiEarthAmerica size={35} className="drop-shadow" />
      </h1>

      <div className="z-10 text-center text-brand-secondary text-shadow-sm mb-10 font-brand-title text-xl tracking-wide">
        <p>
          Make the most of your stay at Cozy Nest by discovering the scenic
          wonders and cultural gems of Wayanad. From tranquil lakes to ancient
          caves and thrilling viewpoints, every destination nearby offers a
          unique experience.
        </p>
        <p className="mt-6">
          Here&apos;s a curated list of must-visit places located within an hour
          drive from our property.
        </p>
      </div>
      <ul className="mx-auto z-10 flex flex-col gap-2">
        {touristPlaces.map((place) => (
          <li
            key={place.id}
            className="font-brand-subtitle capitalize flex justify-between items-center gap-4 text-sm md:text-base text-brand-secondary tracking-wide text-shadow-sm"
          >
            {place.place}
            <span className="flex-1 border-b-2 min-w-4"></span>
            <span className="tracking-wider">{place.distance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristPlacesSection;
