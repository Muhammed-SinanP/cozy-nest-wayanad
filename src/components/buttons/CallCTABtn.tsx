import { FaPhoneAlt } from "react-icons/fa";
import * as motion from "motion/react-client";
const CallCTABtn = () => {
  return (
    <motion.a
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 8,
      }}
      href="tel:+916282011125"
      className="go-to-btn bg-blue-600 text-white"
    >
      <FaPhoneAlt size={22} />
    </motion.a>
  );
};

export default CallCTABtn;
