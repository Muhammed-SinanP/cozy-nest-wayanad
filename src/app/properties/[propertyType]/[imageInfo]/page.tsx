import {
  privatePoolVila,
  singleBedroomVilla,
  threeBedroomVilla,
  twoBedroomVilla,
} from "@/data/properties";
import { PropertyType } from "@/types/propertyType";
import Image from "next/image";

const ImagePreview = async ({
  params,
}: {
  params: Promise<{ propertyType: string; imageInfo: string }>;
}) => {
  const { propertyType, imageInfo } = await params;
  const propertyTitle = decodeURIComponent(propertyType);
  const [unit, index] = imageInfo.split("-");
  const imgIndex = parseInt(index);

  let property: PropertyType = threeBedroomVilla;

  if (propertyTitle === "Private Pool Villa") {
    property = privatePoolVila;
  } else if (propertyTitle === "Three Bedroom Villa") {
    property = threeBedroomVilla;
  } else if (propertyTitle === "Two Bedroom Villa") {
    property = twoBedroomVilla;
  } else if (propertyTitle === "Single Bedroom Villa (4)") {
    property = singleBedroomVilla;
  }
  let img: string = property.room[imgIndex];

  if (unit === "room") {
    img = property.room[imgIndex];
  } else if (unit === "hall") {
    img = property.hall[imgIndex];
  } else if (unit === "washroom") {
    img = property.washroom[imgIndex];
  } else if (unit === "pool") {
    img = property.pool?.[imgIndex] || "";
  } else if (unit === "exterior") {
    img = property.exterior[imgIndex];
  }

  return (
    <div className="relative min-h-screen">
      <Image
        src={img}
        alt={`Image ${imgIndex + 1} of ${unit} of ${propertyTitle}`}
        fill
        className="object-contain "
      />
    </div>
  );
};

export default ImagePreview;
