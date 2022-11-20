import React from "react";
import { BsHouseDoor, BsBuilding } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import Hero from "../components/Hero";
import IconCardWithBtn from "../components/IconCardWithBtn";
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
				<SectionTitle title="Moving & Storage" />
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
					<IconCardWithBtn icon={<BsHouseDoor size={60} className="m-auto" />} text="Residential" />
					<IconCardWithBtn icon={<BsBuilding size={60} className="m-auto" />} text="Commercial" />
					<IconCardWithBtn icon={<AiOutlineCar size={60} className="m-auto" />} text="Vehicles" />
				</div>
			</Section>
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Services;
