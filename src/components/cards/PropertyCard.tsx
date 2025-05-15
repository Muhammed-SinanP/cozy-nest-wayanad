"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PropertyCard = ({
  img,
  description,
  title,
}: {
  img: string;
  description: string;
  title: string;
}) => {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");

  const propertyType = slugify(title);
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/properties/${propertyType}`);
  }, [propertyType, router]);

  return (
    <div
      onClick={() => router.push(`/properties/${propertyType}`)}
      className="w-80 sm:w-80 rounded-2xl overflow-hidden shadow-md bg-white mb-8 cursor-pointer active:scale-95 transition-all transform ease-in-out"
    >
      <div className="relative h-56 md:h-48">
        <Image
          src={img}
          fill
          alt="Private pool villa thumbnail"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="p-4">
        <p className="text-gray-700 text-xs font-brand-text tracking-wide select-none text-brand-primary">
          {description}
        </p>
        <div className="mt-1 text-center">
          <button className="btn mt-1 md:btn-sm text-xs tracking-wide font-brand-subtitle uppercase bg-brand-primary text-brand-secondary">
            Show property photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
