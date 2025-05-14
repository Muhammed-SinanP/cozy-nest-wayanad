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
      href="https://www.google.com/maps/dir/?api=1&destination=11.660656909458796,76.01310845462339&waypoints=11.657992167268295,76.01884006487015|11.658775355824202,76.0148629393161"
      target="_blank"
      rel="noopener noreferrer"
      className="go-to-btn text-red-600 bg-white"
    >
      <Image src={mapIcon} width={30} height={30} alt="Map icon" />
    </motion.a>
  );
};

export default MapCTABtn;
