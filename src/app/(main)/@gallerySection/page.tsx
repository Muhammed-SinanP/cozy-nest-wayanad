"use client";
import { gallery } from "@/data/gallery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdImages } from "react-icons/io";
import { motion } from "motion/react";
import { useState } from "react";
const GallerySection = () => {
  const [loading, setLoading] = useState(0);
  const router = useRouter();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  function handleImageClick(imgIndex: number) {
    setLoading(imgIndex);
    router.push(`gallery/${imgIndex}`);
  }
  return (
    <div className="min-h-screen relative flex flex-col items-center mt-8">
      <h1 className="section-title z-10 absolute top-10">
        <IoMdImages size={35} className="drop-shadow" />
        Our Gallery
        <IoMdImages size={35} className="drop-shadow" />
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full grid grid-cols-12 "
      >
        {gallery.map((img) => (
          <motion.div
            key={img.index}
            variants={itemVariants}
            className="relative h-52 col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden"
          >
            {loading === img.index && (
              <div className="absolute z-10 bg-black/50 w-full text-shadow-sm h-full flex flex-col gap-0.5 text-brand-secondary tracking-wider font-brand-subtitle justify-center items-center">
                <span className="loading loading-spinner loading-xl"></span>
              </div>
            )}
            <Image
              onClick={() => handleImageClick(img.index)}
              src={img.src}
              fill
              alt={`Image ${img.index} gallery`}
              className="object-cover cursor-pointer md:brightness-90 hover:brightness-100 hover:scale-105  transform transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;
