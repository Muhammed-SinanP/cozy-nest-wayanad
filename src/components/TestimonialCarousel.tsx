"use client";
import { testimonials } from "@/data/testimonial";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

export default function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <motion.section
      className=""
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 50,
        damping: 2,
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="overflow-hidden cursor-grab" ref={emblaRef}>
        <div className="flex gap-1 py-6 md:py-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-10/12 cursor-default sm:min-w-9/12 md:min-w-8/12 lg:min-w-7/12 xl:min-w-5/12 2xl:min-w-5/12 scale-95 rounded-lg overflow-hidden shadow-md shadow-teal-950"
            >
              <video
                src={testimonial.videoSrc}
                controls
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
