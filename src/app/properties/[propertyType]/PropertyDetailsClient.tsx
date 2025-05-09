"use client";
import { PropertyType } from "@/types/propertyType";
import useActiveSection from "@/hooks/useActiveSection";
import { allPropertyUnitSections } from "@/data/nav";
import {
  privatePoolVila,
  singleBedroomVilla,
  twoBedroomVilla,
  threeBedroomVilla,
} from "@/data/properties";

import PropertyUnitCard from "@/components/cards/PropertyUnitCard";
import PropertyUnitBtn from "@/components/buttons/PropertyUnitBtn";

const PropertyDetailsClient = ({ title }: { title: string }) => {
  let property: PropertyType = threeBedroomVilla;
  if (title === "Private Pool Villa") {
    property = privatePoolVila;
  } else if (title === "Three Bedroom Villa") {
    property = threeBedroomVilla;
  } else if (title === "Two Bedroom Villa") {
    property = twoBedroomVilla;
  } else if (title === "Single Bedroom Villa (4)") {
    property = singleBedroomVilla;
  }

  const activeSection = useActiveSection(allPropertyUnitSections);
  return (
    <div>
      <div className="fixed top-0 w-full shadow-sm z-20">
        <div className="bg-brand-primary flex justify-center items-center p-2 sm:p-3 text-brand-secondary">
          <h1 className="text-2xl sm:text-3xl font-brand-title p-2 select-none">
            {title}
          </h1>
        </div>

        <div className="p-2 flex justify-center flex-wrap gap-2 bg-gray-200">
          <PropertyUnitBtn
            title="room"
            targetSection="room-section"
            activeSection={activeSection ?? ""}
          />
          <PropertyUnitBtn
            title="hall"
            targetSection="hall-section"
            activeSection={activeSection ?? ""}
          />
          <PropertyUnitBtn
            title="washroom"
            targetSection="washroom-section"
            activeSection={activeSection ?? ""}
          />
          {property === privatePoolVila && (
            <PropertyUnitBtn
              title="private pool"
              targetSection="pool-section"
              activeSection={activeSection ?? ""}
            />
          )}
          <PropertyUnitBtn
            title="exterior"
            targetSection="exterior-section"
            activeSection={activeSection ?? ""}
          />
        </div>
      </div>

      <div className="pt-32">
        <PropertyUnitCard title="room" images={property.room} />
        <PropertyUnitCard title="hall" images={property.hall} />
        <PropertyUnitCard title="washroom" images={property.washroom} />
        {property === privatePoolVila && (
          <PropertyUnitCard title="pool" images={property.pool ?? []} />
        )}
        <PropertyUnitCard title="exterior" images={property.exterior} />
      </div>
    </div>
  );
};

export default PropertyDetailsClient;
