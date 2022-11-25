import React from "react";
import Hero from "../components/Hero";
import LightBox from "../components/LightBox";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const images = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  "/image7.jpeg",
  "/image8.jpeg",
  "/image9.jpeg",
  "/image10.jpeg",
  "/image11.jpeg",
  "/image12.jpeg",
  "/image13.jpeg",
  "/image14.jpeg",
  "/image15.jpeg",
  "/image16.jpeg",
  "/image17.jpeg",
  "/image18.jpeg",
  "/image19.jpeg",
  "/image20.jpeg",
  "/image21.jpeg",
  "/image22.jpeg",
  "/image23.jpeg",
  "/image24.jpeg",
  "/image25.jpeg",
  "/image26.jpeg",
  "/image27.jpeg",
  "/image28.jpeg",
  "/image29.jpeg",
  "/image30.jpeg",
  "/image31.jpeg",
  "/image32.jpeg",
];

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => {
  return (
    <div>
      <div className="sm:mb-2"></div>
      <Hero
        title="Moving can be fun, if you let it be"
        text="Check out some pictures of our previous moves and witness for yourself how easy it really is."
        imageSrc="/gallery.png"
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
