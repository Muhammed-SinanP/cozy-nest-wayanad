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
        Hear directly from our happy guests! Whether it's a peaceful retreat or
        a family getaway, Cozy Nest Wayanad has left lasting impressions. Watch
        their experiences in their own words.
      </p>
      <TestimonialCarousel />
      <p className="testimonial-content">
        At Cozy Nest Wayanad, our guests aren’t just visitors — they’re family.
        Each experience shared is a story of peace, comfort, and connection with
        nature. We're grateful for every kind word and happy moment spent with
        us.
      </p>
      <p className="testimonial-content pt-4">
        Whether you're planning a weekend escape or a long vacation, we look
        forward to creating your perfect stay.
      </p>
    </div>
  );
};

export default TestimonialsSection;
