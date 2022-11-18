import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./NavButton";

type TopBarProps = {};

const TopBar = ({}: TopBarProps) => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo width={56} className="mr-2" />
          <h3>Where You Want It</h3>
        </div>
        <div className="flex items-center">
          <NavButton
            text="Home"
            href="/"
            active={pathName == "/" ? true : false}
          />
          <NavButton
            text="Services"
            href="/services"
            active={pathName == "/services" ? true : false}
          />
          <NavButton
            text="Gallery"
            href="/gallery"
            active={pathName == "/gallery" ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
