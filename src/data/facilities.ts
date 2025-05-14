const poolImg = "/images/facilities/swimming-pool.webp";
const parkImg = "/images/facilities/park.webp";
const indoorGamesImg = "/images/facilities/indoor-games.webp";
const hallImg = "/images/facilities/convention-hall.webp";
type Facility = {
  index: number;
  title: string;
  img: string;
  description: string;
};
export const facilities: Facility[] = [
  {
    index: 0,
    title: "Common Swimming Pool",
    img: poolImg,
    description:
      "Dive into relaxation at our expansive and crystal-clear common swimming pool. Surrounded by a serene ambiance, it’s the perfect place to unwind, whether you’re enjoying a peaceful swim, soaking up the sun on a poolside lounger, or spending quality time with family and friends. The pool is designed to accommodate both adults and children, ensuring a fun and refreshing experience for all age groups.",
  },
  {
    index: 1,
    title: "Childrewebp Park",
    img: parkImg,
    description:
      "Our vibrant children’s park is thoughtfully designed to provide a safe, exciting, and energetic environment for kids. Equipped with fun play structures like slides and swings, it also features a dedicated cricket net where young enthusiasts can practice their batting and bowling skills. It’s the ideal spot for children to explore, play, and stay active while parents relax nearby.",
  },
  {
    index: 2,
    title: "Indoor Games",
    img: indoorGamesImg,
    description:
      "Step into our cozy indoor recreation area and enjoy a variety of engaging games suitable for all ages. Challenge your friends or family to a friendly match of carroms or test your precision with a game of darts. Whether you're escaping the midday sun or rainy weather, this space offers a great way to relax, socialize, and make lasting memories.",
  },
  {
    index: 3,
    title: "Convention/DJ Hall",
    img: hallImg,
    description:
      "Host your events in style at our spacious and well-equipped convention/DJ hall. Whether it's a corporate seminar, family celebration, birthday party, or a lively DJ night, the hall offers flexible seating, quality acoustics, and elegant décor to suit any occasion. With ample space and customizable arrangements, it's the perfect venue to turn your special moments into unforgettable experiences.",
  },
];
