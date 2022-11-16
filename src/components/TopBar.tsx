import Logo from "./Logo";
import NavButton from "./NavButton";

type TopBarProps = {};

const TopBar = ({}: TopBarProps) => {
	return (
		<div className="p-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Logo width={"56"} className="mr-2" />
					<h3>Where You Want It</h3>
				</div>
				<div className="flex items-center">
					<NavButton text="Home" href="/" />
					<NavButton text="Services" href="/services" />
					<NavButton text="Gallery" href="/gallery" />
				</div>
			</div>
		</div>
	);
};

export default TopBar;
