"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const cover1Img = "/images/cover/1.webp";
const cover2Img = "/images/cover/2.webp";
const cover3Img = "/images/cover/3.webp";
const titleImg = "/images/logo/logo-with-subtitle.webp";

const HeroSection = () => {
  const coverImgs = [cover1Img, cover2Img, cover3Img];
  const [imgIndex, setImgIndex] = useState(0);
  const sliderIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    sliderIntervalRef.current = setInterval(() => {
      setImgIndex((prevIndex) =>
        prevIndex === coverImgs.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  function slideToLeft() {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? coverImgs.length - 1 : prevIndex - 1
    );
  }

  function slideToRight() {
    setImgIndex((prevIndex) =>
      prevIndex === coverImgs.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    };
  }, [imgIndex]);
   

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-800 ease-in-out"
        style={{ transform: `translateX(-${imgIndex * 100}vw)` }}
      >
        {coverImgs.map((coverImg, index) => (
          <div key={index} className="relative w-screen h-screen flex-shrink-0">
            <Image
              src={coverImg}
              alt={`Cover image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      <button onClick={slideToLeft} className="img-slider-btn left-4">
        <MdKeyboardArrowLeft size={32} />
      </button>
      <button onClick={slideToRight} className="img-slider-btn right-4">
        <MdKeyboardArrowRight size={32} />
      </button>
      <div className="w-56 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={titleImg}
          alt="Cozy Nest title image"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default HeroSection;
