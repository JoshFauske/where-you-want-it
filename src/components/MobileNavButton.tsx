import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type MobileNavButtonProps = {
	text: string;
	href: string;
	active: boolean;
	onClick: any;
	icon: ReactNode;
};

const MobileNavButton = ({
	href,
	text,
	active,
	onClick,
	icon,
}: MobileNavButtonProps) => {
	return (
		<Link to={href}>
			<div
				className={`w-fit mb-3 flex items-center underline font-bold ${
					active ? "text-white" : ""
				}`}
				onClick={onClick}
				onClickCapture={() => {
					window.scrollTo(0, 0);
				}}
			>
				<span className="mr-2">{icon}</span>
				<span>{text}</span>
			</div>
		</Link>
	);
};

export default MobileNavButton;
