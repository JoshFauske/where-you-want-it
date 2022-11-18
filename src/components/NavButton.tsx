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
      <a className={`ml-3 ${active ? "font-bold border-b-2 border-primaryColor" : ""}`}>{text}</a>
    </Link>
  );
};

export default NavButton;
