"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.prefetch(`/properties/${propertyType}`);
  }, [propertyType, router]);
  function handlePropertyClick() {
    setLoading(true);
    router.push(`/properties/${propertyType}`)
  }
  return (
    <div
      onClick={handlePropertyClick}
      className="w-80 relative rounded-2xl overflow-hidden shadow-md bg-white mb-8 cursor-pointer active:scale-95 transition-all transform ease-in-out"
    >
      {loading && (
        <div className="absolute z-10 bg-black/50 w-full text-shadow-sm h-full flex flex-col gap-0.5 text-brand-secondary tracking-wider font-brand-subtitle justify-center items-center">
          <p>Opening property</p>
          <p>Please wait</p>
          <span className="loading loading-dots loading-md"></span>
        </div>
      )}
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
