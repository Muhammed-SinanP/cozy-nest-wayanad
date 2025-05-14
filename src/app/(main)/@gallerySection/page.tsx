"use client";
import { gallery } from "@/data/gallery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdImages } from "react-icons/io";
import { motion } from "motion/react";
const GallerySection = () => {
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
            <Image
              onClick={() => router.push(`gallery/${img.index}`)}
              src={img.src}
              fill
              alt={`Image ${img.index} gallery`}
              className="object-cover cursor-pointer md:brightness-90 hover:brightness-100 hover:scale-105 active:scale-100 transform transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;
