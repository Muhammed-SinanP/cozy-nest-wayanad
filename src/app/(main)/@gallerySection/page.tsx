"use client";
import { gallery } from "@/data/gallery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdImages } from "react-icons/io";
const GallerySection = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen relative py-8 flex flex-col items-center">
      <h1 className="section-title z-10 pb-10 pt-2">
        <IoMdImages size={35} />
        Our Gallery
        <IoMdImages size={35} />
      </h1>
      <div className="w-full grid grid-cols-12">
        {gallery.map((img) => (
          <div
            key={img.index}
            className="relative h-52 col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden"
          >
            <Image
              onClick={() => router.push(`gallery/${img.index}`)}
              src={img.src}
              fill
              alt={`Image ${img.index} gallery`}
              className="object-cover cursor-pointer md:brightness-90 hover:brightness-100 hover:scale-105 active:scale-100 transform transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
