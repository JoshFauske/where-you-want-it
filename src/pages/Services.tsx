import React from "react";
import { BsHouseDoor, BsBuilding } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import InfoSection from "../components/InfoSection";
import IconCard from "../components/IconCard";

const Services = () => {
  return (
    <div>
      <div className="sm:mb-3 lg:mb-8"></div>
      <Hero
        title="From moving to storage, we do it all"
        text="If you don’t want to worry how to move or store your things, you’ve come to the right place!"
        imageSrc="/public/services.png"
        imageAlt="Moving Truck"
      />
      <Section>
        <SectionTitle title="Moving & Storage" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <IconCard
            icon={<BsHouseDoor size={60} className="m-auto" />}
            text="Residential"
          />
          <IconCard
            icon={<BsBuilding size={60} className="m-auto" />}
            text="Commercial"
          />
          <IconCard
            icon={<AiOutlineCar size={60} className="m-auto" />}
            text="Vehicles"
          />
        </div>
        <br />
        <InfoSection
          icon={<BsHouseDoor size={30} />}
          title="Residential"
          bgColor="bg-gray-300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
        />
        <InfoSection
          icon={<BsBuilding size={30} />}
          title="Commercial"
          bgColor="bg-white"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
        />
        <InfoSection
          icon={<AiOutlineCar size={30} />}
          title="Vehicles"
          bgColor="bg-gray-300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
        />
      </Section>
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Services;
