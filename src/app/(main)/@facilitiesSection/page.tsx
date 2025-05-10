import { facilities } from "@/data/facilities";
import Image from "next/image";
import { GiNorthStarShuriken } from "react-icons/gi";
import * as motion from "motion/react-client";

const FacilitiesSection = () => {
  return (
    <div className="section">
      <h1 className="section-title">
        <GiNorthStarShuriken size={35} />
        Our Facilities
        <GiNorthStarShuriken size={35} />
      </h1>

      {facilities.map((facility) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay:0.5,
            ease:"easeOut"
          }}
          key={facility.index}
          className="feature-section"
        >
          <h3 className="feature-title ">{facility.title}</h3>
          <div
            className={`flex flex-col ${
              facility.index % 2 ? "sm:flex-row" : "sm:flex-row-reverse"
            } justify-center items-center gap-4 max-w-3xl`}
          >
            <div className="w-80 shadow-sm h-56 relative rounded-2xl shrink-0 overflow-hidden">
              <Image
                src={facility.img}
                alt={facility.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="font-brand-title text-lg tracking-wide text-center sm:text-start">
              {facility.desciption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FacilitiesSection;
