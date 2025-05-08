import { amenities } from "@/data/amenities";
import Image from "next/image";
import { MdEventAvailable } from "react-icons/md";
const campfire = "/images/cover/campfire.jpg"
const AmenitiesSection = () => {
  return (
    <div className="section relative overflow-hidden">
      <Image
        src={campfire}
        fill
        alt="Campfire image"
        className="object-cover z-0"
        priority
      />

      <div className="z-10 relative ">
        <h1 className="section-title">
          <MdEventAvailable size={35} />
          Amenities
          <MdEventAvailable size={35} />
        </h1>

        <div className="flex justify-center flex-wrap gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.index}
              className="flex items-center bg-gray-100 shadow-md gap-2 p-2 mx-4 rounded-lg"
            >
              <div className="bg-white p-2 rounded-lg">{amenity.icon}</div>
              <p className=" tracking-wide font-brand-subtitle">
                {amenity.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
