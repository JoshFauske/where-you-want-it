import React from "react";
import Hero from "../components/Hero";
import LightBox from "../components/LightBox";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const images = [
  "/src/assets/image1.jpeg",
  "/src/assets/image2.jpeg",
  "/src/assets/image3.jpeg",
  "/src/assets/image4.jpeg",
  "/src/assets/image5.jpeg",
  "/src/assets/image6.jpeg",
  "/src/assets/image7.jpeg",
  "/src/assets/image8.jpeg",
  "/src/assets/image9.jpeg",
  "/src/assets/image10.jpeg",
  "/src/assets/image11.jpeg",
  "/src/assets/image12.jpeg",
  "/src/assets/image13.jpeg",
  "/src/assets/image14.jpeg",
  "/src/assets/image15.jpeg",
  "/src/assets/image16.jpeg",
  "/src/assets/image17.jpeg",
  "/src/assets/image18.jpeg",
  "/src/assets/image19.jpeg",
  "/src/assets/image20.jpeg",
  "/src/assets/image21.jpeg",
  "/src/assets/image22.jpeg",
  "/src/assets/image23.jpeg",
  "/src/assets/image24.jpeg",
  "/src/assets/image25.jpeg",
  "/src/assets/image26.jpeg",
  "/src/assets/image27.jpeg",
  "/src/assets/image28.jpeg",
  "/src/assets/image29.jpeg",
  "/src/assets/image30.jpeg",
  "/src/assets/image31.jpeg",
  "/src/assets/image32.jpeg",
];

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => {
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
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, i) => {
            return (
							<LightBox src={image} alt="Gallery Image" key={i} />
            );
          })}
        </div>
      </Section>
      <Section>
        <SectionTitle title="Get a Quote" />
        <QuoteForm />
      </Section>
    </div>
  );
};

export default Gallery;
