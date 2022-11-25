import React from "react";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import {TiClipboard} from 'react-icons/ti';
import {TfiPackage} from 'react-icons/tfi';
import {BsTruck} from 'react-icons/bs';
import {GiPartyPopper} from 'react-icons/gi';
import IconCard from "../components/IconCard";

const Home = () => {
  return (
    <div>
      <Hero
        title="Moving made way too simple"
        text="Get rid of the stress of moving by letting us do the heavy lifting!"
        imageSrc="/home.png"
        imageAlt="Moving Truck"
      />
			<Section>
				<SectionTitle title="How it works" />
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
				<IconCard icon={<TiClipboard size={60} className="m-auto" />} text="Book our services" />
				<IconCard icon={<TfiPackage size={60} className="m-auto" />} text="Pack your goods" />
				<IconCard icon={<BsTruck size={60} className="m-auto" />} text="Transportation" />
				<IconCard icon={<GiPartyPopper size={60} className="m-auto" />} text="Celebrate" />
				</div>
			</Section>
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Home;
