import React from "react";
import Logo from "./Logo";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <div className="container mx-auto py-4 flex flex-col justify-center items-center border-t-2 mt-4">
      <div className="mb-4 text-center">
        Let the professional's take care of you and your move. Moving is one of
        the most stressful things we experience. Let me and my professional's
        take most of the stress off! When choosing Where you want it moving and
        storage, you get the executive treatment without the executive price. At
        Where you want it moving and storage we provide professional packing,
        loading, moving, and delivery of all items. Nothing to big or to small
        we take it all. And for all your storage needs...we got you covered.
        Storage sizes vary, contact us for a quote. Running behind on schedule?
        have donations to be dropped off? We would be happy to assist you in
        dropping all donations off at the nearest non_profit organization, of
        your choice.
      </div>
      <div className="flex items-center">
        <Logo width={55} className="mr-2" />
        <h3>Where You Want It</h3>
      </div>
    </div>
  );
};

export default Footer;
