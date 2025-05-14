type NavLink = {
  index: number;
  title: string;
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { index: 1, title: "Properties", sectionId: "properties-section" },
  { index: 2, title: "Amenities", sectionId: "amenities-section" },
  { index: 3, title: "Facilities", sectionId: "facilities-section" },
  { index: 4, title: "Location", sectionId: "location-section" },
  { index: 5, title: "Testimonials", sectionId: "testimonials-section" },
  { index: 6, title: "Gallery", sectionId: "gallery-section" },
  { index: 7, title: "Around Us", sectionId: "tourist-places-section" },
  { index: 8, title: "Contact Us", sectionId: "contact-section" },
];

export const allSectionIds: string[] = [
  "hero-section",
  "properties-section",
  "amenities-section",
  "facilities-section",
  "location-section",
  "gallery-section",
  "testimonials-section",
  "tourist-places-section",
  "contact-section",
];

export const allPropertyUnitSections: string[] = [
  "room-section",
  "hall-section",
  "washroom-section",
  "pool-section",
  "exterior-section",
];
