import { amenities } from "@/data/amenities";
import Image from "next/image";
import { MdEventAvailable } from "react-icons/md";
const campfire = "/images/cover/campfire.jpg";
import * as motion from "motion/react-client";
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
            <motion.div
              initial={{ x: amenity.index % 2 ? 100 : -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 8,
                delay: 0.4 * amenity.index,
                duration:0.5
              }}
              key={amenity.index}
              className="flex items-center bg-gray-100 shadow-md gap-2 p-2 mx-4 rounded-lg"
            >
              <div className="bg-white p-2 rounded-lg">{amenity.icon}</div>
              <p className=" tracking-wide font-brand-subtitle">
                {amenity.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
