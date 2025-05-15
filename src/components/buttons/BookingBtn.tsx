import { motion } from "motion/react";
const BookingBtn = () => {
  return (
    <motion.a
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 5,
      }}
      href="tel:+916282011125"
      className="btn btn-sm text-brand-primary bg-brand-secondary font-brand-subtitle"
    >
      BOOK A STAY
    </motion.a>
  );
};

export default BookingBtn;
