import React from "react";
import { Link } from "react-router-dom";

type MobileNavButtonProps = {
  text: string;
  href: string;
  active: boolean;
  onClick: any;
};

const MobileNavButton = ({
  href,
  text,
  active,
  onClick,
}: MobileNavButtonProps) => {
  return (
    <Link to={href}>
      <div
        className={`w-fit mb-1 ${
          active ? "font-bold border-b-2 border-primaryColor" : ""
        }`}
        onClick={onClick}
        onClickCapture={() => {
          window.scrollTo(0, 0);
        }}
      >
        {text}
      </div>
    </Link>
  );
};

export default MobileNavButton;
