import React from "react";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  return (
    <div>
      <div className="sm:mb-3 lg:mb-8"></div>
      <Hero
        title="From moving to storage, we do it all"
        text="If you don’t want to worry how to move or store your things, you’ve come to the right place!"
        imageSrc="/src/assets/services.png"
        imageAlt="Moving Truck"
      />
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Services;
