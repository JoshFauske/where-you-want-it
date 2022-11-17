import React from "react";

type HeroProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
};

const Hero = ({ title, text, imageSrc, imageAlt }: HeroProps) => {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-4xl lg:text-6xl">{title}</h1>
        <h3 className="my-4">{text}</h3>
				<button className="w-fit font-bold bg-primaryColor text-white p-3">Get a Quote Today</button>
      </div>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Hero;
