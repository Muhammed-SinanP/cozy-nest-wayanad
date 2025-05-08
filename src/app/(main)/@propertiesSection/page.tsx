import PropertyCard from "@/components/cards/PropertyCard";
import { allProperties } from "@/data/properties";
import { GiHouse } from "react-icons/gi";

const PropertiesSection = () => {
  return (
    <div className="section">
      <h1 className="section-title">
        <GiHouse size={35} />
        Our Properties
        <GiHouse size={35} />
      </h1>

      {allProperties.map((property) => (
        <div key={property.index} className="feature-section">
          <h2 className="feature-title">{property.title}</h2>
          <PropertyCard
            img={property.thumbnail}
            description={property.description}
            title={property.title}
          />
        </div>
      ))}
    </div>
  );
};

export default PropertiesSection;
