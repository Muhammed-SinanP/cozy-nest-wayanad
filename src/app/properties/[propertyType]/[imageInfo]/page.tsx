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
  const propertyTitle = propertyType.replaceAll("-"," ");
  const [unit, index] = imageInfo.split("-");
  const imgIndex = parseInt(index);

   
  let property: PropertyType = threeBedroomVilla;

  if (propertyTitle === "private pool villa") {
    property = privatePoolVila;
  } else if (propertyTitle === "three bedroom villa") {
    property = threeBedroomVilla;
  } else if (propertyTitle === "two bedroom villa") {
    property = twoBedroomVilla;
  } else if (propertyTitle === "single bedroom villa 4") {
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
