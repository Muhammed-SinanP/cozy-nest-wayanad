import { JSX } from "react";
import { IoWifi } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { MdCleaningServices } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { FaGlassCheers } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";

type Amenity = {
  index: number;
  icon: JSX.Element;
  title: string;
};

export const amenities: Amenity[] = [
  {
    index: 1,
    icon: <IoWifi size={25} className="text-brand-secondary" />,
    title: "Free Wifi",
  },
  {
    index: 2,
    icon: <TbAirConditioning size={25} className="text-brand-secondary" />,
    title: "Air Condition",
  },
  {
    index: 3,
    icon: <MdCleaningServices size={25} className="text-brand-secondary" />,
    title: "24/7 Room Service",
  },
  {
    index: 4,
    icon: <IoIosRestaurant size={25} className="text-brand-secondary" />,
    title: "In-house Restaurant",
  },
  {
    index: 5,
    icon: <MdLocalDining size={25} className="text-brand-secondary" />,
    title: "In-room Dining",
  },
  {
    index: 6,
    icon: <FaGlassCheers size={25} className="text-brand-secondary" />,
    title: "Welcome Drinks",
  },
  {
    index: 7,
    icon: <GiCampfire size={25} className="text-brand-secondary" />,
    title: "Campfire",
  },
  {
    index: 8,
    icon: <FaParking size={25} className="text-brand-secondary" />,
    title: "Free Parking",
  },
];
