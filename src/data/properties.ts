const privatePoolVilla_Exterior =
  "/images/properties/private-pool-villa/exterior.jpg";
const privatePoolVilla_Room = "/images/properties/private-pool-villa/room.jpg";
const privatePoolVilla_Hall = "/images/properties/private-pool-villa/hall.jpg";
const privatePoolVilla_Pool = "/images/properties/private-pool-villa/pool.jpg";
const privatePoolVilla_Washroom =
  "/images/properties/private-pool-villa/washroom.jpg";

const threeBedroomVilla_Exterior = "/images/properties/three-bedroom-villa/exterior.jpg";
const threeBedroomVilla_Room1 = "/images/properties/three-bedroom-villa/room1.jpg";
const threeBedroomVilla_Room2 =
  "/images/properties/three-bedroom-villa/room2.jpg";
  const threeBedroomVilla_Room3 =
    "/images/properties/three-bedroom-villa/room3.jpg";
const threeBedroomVilla_Hall = "/images/properties/three-bedroom-villa/hall.jpg";
const threeBedroomVilla_Washroom =
  "/images/properties/three-bedroom-villa/washroom.jpg";
const twoBedroomVilla_Exterior = "/images/properties/two-bedroom-villa/exterior.jpg";



const singleBedroomVilla_Exterior = "/images/properties/single-bedroom-villa/exterior.jpg";
 const singleBedroomVilla_Room =
    "/images/properties/single-bedroom-villa/room.jpg";
  const singleBedroomVilla_Hall =
    "/images/properties/single-bedroom-villa/hall.jpg";
  const singleBedroomVilla_Washroom =
    "/images/properties/single-bedroom-villa/washroom.jpg";

export const allProperties = [
  {
    index: 1,
    title: "Private Pool Villa",
    thumbnail: privatePoolVilla_Exterior,
    description:
      "Enjoy luxury and seclusion in our Private Pool Villa, featuring a spacious bedroom, a private pool, and a serene outdoor lounge area. Perfect for couples or families seeking a peaceful getaway.",
  },
  {
    index: 2,
    title: "Three Bedroom Villa",
    thumbnail: threeBedroomVilla_Exterior,
    description:
      "Ideal for families or groups, our Three Bedroom Villa offers spacious comfort with multiple bedrooms, a shared living area, private pool, and a tranquil outdoor space—perfect for a relaxing stay together.",
  },
  {
    index: 3,
    title: "Two Bedroom Villa",
    thumbnail: twoBedroomVilla_Exterior,
    description:
      "Perfect for small families or friends, our Two Bedroom Villa features cozy bedrooms, a shared living space, and a private pool—offering comfort and privacy in a serene setting.",
  },
  {
    index: 4,
    title: "Single Bedroom Villa (4)",
    thumbnail: singleBedroomVilla_Exterior,
    description:
      "Designed for couples or solo travelers, our One Bedroom Villa offers an intimate escape with a private pool, elegant interiors, and peaceful surroundings.",
  },
];

export const privatePoolVila = {
  room: [privatePoolVilla_Room],
  hall: [privatePoolVilla_Hall],
  exterior: [privatePoolVilla_Exterior],
  washroom: [privatePoolVilla_Washroom],
  pool: [privatePoolVilla_Pool],
};

export const threeBedroomVilla = {
  room: [threeBedroomVilla_Room1,threeBedroomVilla_Room2,threeBedroomVilla_Room3],
  hall: [threeBedroomVilla_Hall],
  exterior: [threeBedroomVilla_Exterior],
  washroom: [threeBedroomVilla_Washroom],
};

export const twoBedroomVilla = {
  room: [],
  hall: [],
  exterior: [twoBedroomVilla_Exterior],
  washroom: [],
};

export const singleBedroomVilla = {
  room: [singleBedroomVilla_Room],
  hall: [singleBedroomVilla_Hall],
  exterior: [singleBedroomVilla_Exterior],
  washroom: [singleBedroomVilla_Washroom],
};
