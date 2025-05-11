import PropertyCard from "@/components/cards/PropertyCard";
import { allProperties } from "@/data/properties";
import { GiHouse } from "react-icons/gi";
import * as motion from "motion/react-client";
const PropertiesSection = () => {
  return (
    <div className="section">
      <h1 className="section-title">
        <GiHouse size={35} />
        Our Properties
        <GiHouse size={35} />
      </h1>

      {allProperties.map((property) => (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: property.index % 2 ? 5 : -5,
          }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={property.index}
          className="feature-section"
        >
          <h2 className="feature-title">{property.title}</h2>
          <PropertyCard
            img={property.thumbnail}
            description={property.description}
            title={property.title}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PropertiesSection;
