import React, { useEffect, useState } from "react";

type HeroProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
};

const Hero = ({ title, text, imageSrc, imageAlt }: HeroProps) => {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap">
      <div className="flex flex-col justify-center items-center sm:items-start w-full mb-6 sm:mb-0 text-center sm:text-start">
        <h1 className="font-bold text-4xl lg:text-6xl">{title}</h1>
        <h3 className="my-4">{text}</h3>
        <button
          className="w-fit font-bold bg-primaryColor text-white p-3"
          onClick={(e) => {
            let form = document.getElementById("quoteForm");
            e.preventDefault();
            form && form.scrollIntoView({ behavior: 'smooth', block: 'center'});
          }}
        >
          Get a Quote Today
        </button>
      </div>
      <div className="text-center sm:text-left w-full">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Hero;
