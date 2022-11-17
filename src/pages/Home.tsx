import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        title="Moving made way too simple"
        text="Get rid of the stress of moving by letting us do the heavy lifting!"
        imageSrc="/src/assets/home.png"
        imageAlt="Moving Truck"
      />
    </div>
  );
};

export default Home;
