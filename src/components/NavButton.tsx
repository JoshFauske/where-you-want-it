import React from "react";
import { Link } from "react-router-dom";

type NavButtonProps = {
  text: string;
  href: string;
  active: boolean;
};

const NavButton = ({ href, text, active }: NavButtonProps) => {
  return (
    <Link to={href}>
      <div className={`ml-3 ${active ? "font-bold border-b-2 border-primaryColor" : ""}`}>{text}</div>
    </Link>
  );
};

export default NavButton;
