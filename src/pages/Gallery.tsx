import React from "react";
import Hero from "../components/Hero";
import LightBox from "../components/LightBox";
import QuoteForm from "../components/QuoteForm";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const images = [
  "/public/image1.jpeg",
  "/public/image2.jpeg",
  "/public/image3.jpeg",
  "/public/image4.jpeg",
  "/public/image5.jpeg",
  "/public/image6.jpeg",
  "/public/image7.jpeg",
  "/public/image8.jpeg",
  "/public/image9.jpeg",
  "/public/image10.jpeg",
  "/public/image11.jpeg",
  "/public/image12.jpeg",
  "/public/image13.jpeg",
  "/public/image14.jpeg",
  "/public/image15.jpeg",
  "/public/image16.jpeg",
  "/public/image17.jpeg",
  "/public/image18.jpeg",
  "/public/image19.jpeg",
  "/public/image20.jpeg",
  "/public/image21.jpeg",
  "/public/image22.jpeg",
  "/public/image23.jpeg",
  "/public/image24.jpeg",
  "/public/image25.jpeg",
  "/public/image26.jpeg",
  "/public/image27.jpeg",
  "/public/image28.jpeg",
  "/public/image29.jpeg",
  "/public/image30.jpeg",
  "/public/image31.jpeg",
  "/public/image32.jpeg",
];

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => {
  return (
    <div>
      <div className="sm:mb-2"></div>
      <Hero
        title="Moving can be fun, if you let it be"
        text="Check out some pictures of our previous moves and witness for yourself how easy it really is."
        imageSrc="/public/gallery.png"
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
