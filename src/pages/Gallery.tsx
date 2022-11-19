import React from "react";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Gallery = () => {
  return (
    <div>
      <div className="sm:mb-2"></div>
      <Hero
        title="Moving can be fun, if you let it be"
        text="Check out some pictures of our previous moves and witness for yourself how easy it really is."
        imageSrc="/src/assets/gallery.png"
        imageAlt="Happy Employee"
      />
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Gallery;
