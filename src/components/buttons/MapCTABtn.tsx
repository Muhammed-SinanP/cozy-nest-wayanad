import Image from "next/image";
const mapIcon = "/images/icons/map.png";
import * as motion from "motion/react-client";

const MapCTABtn = () => {
  return (
    <motion.a
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 8,
        delay: 0.1,
      }}
      href="https://www.google.com/maps/dir/?api=1&destination=11.660690,76.013237"
      target="_blank"
      rel="noopener noreferrer"
      className="go-to-btn text-red-600 bg-white"
    >
      <Image src={mapIcon} width={30} height={30} alt="Map icon" />
    </motion.a>
  );
};

export default MapCTABtn;
