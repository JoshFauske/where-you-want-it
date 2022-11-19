import React from "react";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div>
      <Hero
        title="Moving made way too simple"
        text="Get rid of the stress of moving by letting us do the heavy lifting!"
        imageSrc="/src/assets/home.png"
        imageAlt="Moving Truck"
      />
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Home;
