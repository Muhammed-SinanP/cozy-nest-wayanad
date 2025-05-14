const HomeLayout = ({
  children,
  heroSection,
  propertiesSection,
  amenitiesSection,
  facilitiesSection,
  gallerySection,
  locationSection,
  contactSection,
  testimonialsSection,
  touristPlacesSection,
}: {
  children: React.ReactNode;
  heroSection: React.ReactNode;
  propertiesSection: React.ReactNode;
  amenitiesSection: React.ReactNode;
  facilitiesSection: React.ReactNode;
  gallerySection: React.ReactNode;
  locationSection: React.ReactNode;
  contactSection: React.ReactNode;
  testimonialsSection: React.ReactNode;
  touristPlacesSection: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <section id="hero-section" className="section-div">
        {heroSection}
      </section>
      <section id="properties-section" className="section-div">
        {propertiesSection}
      </section>
      <section id="amenities-section" className="section-div">
        {amenitiesSection}
      </section>
      <section id="facilities-section" className="section-div">
        {facilitiesSection}
      </section>
      <section id="location-section" className="section-div">
        {locationSection}
      </section>
      <section id="testimonials-section" className="section-div">
        {testimonialsSection}
      </section>
      <section id="gallery-section" className="section-div">
        {gallerySection}
      </section>
      <section id="tourist-places-section" className="section-div">
        {touristPlacesSection}
      </section>
      <section id="contact-section" className="section-div">
        {contactSection}
      </section>
    </div>
  );
};

export default HomeLayout;
