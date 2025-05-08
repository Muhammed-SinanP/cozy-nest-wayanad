import { brandSubtitleFont } from "@/lib/font";

const BookingBtn = () => {
  return (
    <button
      className="btn btn-sm text-brand-primary bg-brand-secondary font-brand-subtitle"
    >
      <a href="tel:+916282011125">BOOK A STAY</a>
    </button>
  );
};

export default BookingBtn;
