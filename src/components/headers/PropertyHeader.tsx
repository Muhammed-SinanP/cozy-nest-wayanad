"use client"
import Logo from "../Logo";
import BookingBtn from "../buttons/BookingBtn";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const PropertyHeader = () => {
  const router = useRouter();
  return (
    <div className="bg-brand-primary flex justify-between items-center p-2 sm:p-3">
      <IoMdArrowRoundBack
        onClick={() => router.back()}
        size={38}
        className="cursor-pointer text-brand-secondary"
      />
      <Logo />

      <BookingBtn />
    </div>
  );
};

export default PropertyHeader;
