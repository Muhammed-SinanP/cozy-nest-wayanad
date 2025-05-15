"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PropertyUnitCard = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  const pathname = usePathname();
  return (
    <div id={`${title}-section`} className="property-unit-section">
      <div className="property-unit-card">
        <h2 className="propery-unit-card-title">{title}</h2>
        <div className="mt-4 grid grid-cols-12 gap-4">
          {images.map((img, i) => (
            <Link
              href={`${pathname}/${title}-${i}`}
              key={i}
              className="relative col-span-6 h-40 sm:h-56 md:col-span-4 md:h-64 2xl:col-span-3 rounded-md overflow-hidden"
            >
              <Image
                src={img}
                alt={`Image ${i + 1} of ${title}`}
                fill
                className="object-cover"
                priority
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyUnitCard;
