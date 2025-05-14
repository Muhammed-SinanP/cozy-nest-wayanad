"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PropertyCard = ({
  img,
  description,
  title,
}: {
  img: string;
  description: string;
  title: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/properties/${title}`)}
      className="w-80 sm:w-80 rounded-2xl overflow-hidden shadow-md bg-white mb-8 cursor-pointer active:scale-95"
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
        <p className="text-gray-700 text-xs font-brand-text tracking-wide text-brand-primary">
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
