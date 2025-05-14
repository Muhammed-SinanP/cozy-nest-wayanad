import { facilities } from "@/data/facilities";
import Image from "next/image";
import { GiNorthStarShuriken } from "react-icons/gi";
import * as motion from "motion/react-client";

const FacilitiesSection = () => {
  return (
    <div className="min-h-screen py-8 flex flex-col">
      <h1 className="section-title">
        <GiNorthStarShuriken size={35} className="drop-shadow" />
        Our Facilities
        <GiNorthStarShuriken size={35} className="drop-shadow" />
      </h1>
      <div className="flex flex-col gap-5 overflow-hidden">
        {facilities.map((facility) => (
          <motion.div
            key={facility.index}
            initial={{ x: facility.index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex ${
              facility.index % 2 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`flex flex-col justify-center items-center ${
                facility.index % 2
                  ? "md:items-end rounded-r-xl"
                  : "md:items-start rounded-l-xl"
              }  bg-brand-secondary min-w-2/3 p-5`}
            >
              <h3 className="facility-title">{facility.title}</h3>
              <div
                className={`flex flex-col  ${
                  facility.index % 2 ? "md:flex-row " : "md:flex-row-reverse "
                } justify-center items-center md:items-start gap-4 `}
              >
                <div className="w-80 shadow-sm h-56 relative rounded-xl shrink-0 overflow-hidden">
                  <Image
                    src={facility.img}
                    alt={facility.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <p className="max-w-80 sm:max-w-96 font-brand-title text-lg tracking-wide text-center md:text-start">
                  {facility.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
