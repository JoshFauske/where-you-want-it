import React from "react";
import Hero from "../components/Hero";

const Gallery = () => {
  return (
    <div>
      <Hero
        title="Moving can be fun, if you let it be"
        text="Check out some pictures of our previous moves and witness for yourself how easy it really is."
        imageSrc="/src/assets/gallery.png"
        imageAlt="Happy Employee"
      />
    </div>
  );
};

export default Gallery;
