import React from "react";
import { Link } from "react-router-dom";

type NavButtonProps = {
	text: string;
	href: string;
};

const NavButton = ({ href, text }: NavButtonProps) => {
	return (
		<Link to={href}>
			<a className="ml-3">{text}</a>
		</Link>
	);
};

export default NavButton;
