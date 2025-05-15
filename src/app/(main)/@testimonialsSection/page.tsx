import TestimonialCarousel from "@/components/TestimonialCarousel";
import { IoIosHeart } from "react-icons/io";
const TestimonialsSection = () => {
  return (
    <div className="section">
      <h1 className="section-title">
        <IoIosHeart size={35} className="drop-shadow" />
        Hear from our guests
        <IoIosHeart size={35} className="drop-shadow" />
      </h1>
      <p className="testimonial-content">
        Hear directly from our happy guests! Whether it&apos;s a peaceful
        retreat or a family getaway, Cozy Nest Wayanad has left lasting
        impressions. Watch their experiences in their own words.
      </p>
      <div className="overflow-hidden sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto"><TestimonialCarousel /></div>
      <p className="testimonial-content">
        At Cozy Nest Wayanad, our guests aren&apos;t just visitors —
        they&apos;re family. Each experience shared is a story of peace,
        comfort, and connection with nature. We&apos;re grateful for every kind
        word and happy moment spent with us.
      </p>
      <p className="testimonial-content pt-4">
        Whether you&apos;re planning a weekend escape or a long vacation, we
        look forward to creating your perfect stay.
      </p>
    </div>
  );
};

export default TestimonialsSection;
