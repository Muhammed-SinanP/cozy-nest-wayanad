import PropertyCard from "@/components/cards/PropertyCard";
import { allProperties } from "@/data/properties";
import { GiHouse } from "react-icons/gi";
import * as motion from "motion/react-client";
const PropertiesSection = () => {
  return (
    <div className="section">
      <h1 className="section-title">
        <GiHouse size={35} className="drop-shadow" />
        Our Properties
        <GiHouse size={35} className="drop-shadow" />
      </h1>
      <div className="grid grid-cols-12 max-w-7xl mx-auto gap-y-8 md:gap-x-16">
        {allProperties.map((property) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={property.index}
            className="property-section"
          >
            <h2 className="property-title">{property.title}</h2>
            <PropertyCard
              img={property.thumbnail}
              description={property.description}
              title={property.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
