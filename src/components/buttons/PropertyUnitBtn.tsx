import { scrollToSection } from "@/utils/scrollToSection";

const PropertyUnitBtn = ({
  title,
  targetSection,
  activeSection,
}: {
  title: string;
  targetSection: string;
  activeSection: string;
}) => {
  return (
    <div
      onClick={() => scrollToSection(targetSection)}
      className={`property-unit-btn ${
        activeSection === targetSection
          ? "property-unit-btn-active"
          : "property-unit-btn-not-active"
      }`}
    >
      {title}
    </div>
  );
};

export default PropertyUnitBtn;
