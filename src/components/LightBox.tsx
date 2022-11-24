import React, { useState } from "react";

type LightBoxProps = {
  src: string;
  alt: string;
};

const LightBox = ({ src, alt }: LightBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div onClick={toggleIsOpen}>
      {isOpen && (
        <>
          <img
            className="h-auto z-20 fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 border-8 border-white"
            src={src}
            alt={alt}
          />
					<div className="fixed text-white font-bold top-0 right-0 text-5xl z-30 cursor-pointer m-4">X</div>
          <div
            className="fixed top-0 left-0 h-screen w-screen cursor-pointer bg-black opacity-80 z-10"
            onClick={toggleIsOpen}
          ></div>
        </>
      )}
      <div>
        <img src={src} alt="Gallery Image" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default LightBox;
