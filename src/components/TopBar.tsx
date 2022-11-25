import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./NavButton";
import { stack as Menu } from "react-burger-menu";
import MobileNavButton from "./MobileNavButton";

type TopBarProps = {};

const TopBar = ({}: TopBarProps) => {
  const location = useLocation();
  const pathName = location.pathname;
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const onMenuClick = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <nav
      className={`py-4 sticky top-0 bg-white ${
        isScroll ? "border-b-2 border-primaryColor shadow" : ""
      }`}
    >
      <div className="block sm:hidden">
        <Menu right isOpen={isOpen} onOpen={onMenuClick} onClose={onMenuClick}>
          <MobileNavButton
            text="Home"
            href="/"
            active={pathName == "/" ? true : false}
            onClick={onMenuClick}
          />
          <MobileNavButton
            text="Services"
            href="/services"
            active={pathName == "/services" ? true : false}
            onClick={onMenuClick}
          />
          <MobileNavButton
            text="Gallery"
            href="/gallery"
            active={pathName == "/gallery" ? true : false}
            onClick={onMenuClick}
          />
          <button className="w-fit font-bold bg-primaryColor text-white p-2 mt-2">
            <a href="tel:303-802-6770">CALL (303) 802-6770</a>
          </button>
        </Menu>
      </div>
      <div className="flex items-center justify-between container">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo width={56} className="mr-2" />
          <h3>Where You Want It</h3>
        </Link>
        <div className="sm:flex items-center hidden">
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
          <button className="w-fit font-bold bg-primaryColor text-white p-2 ml-3">
            <a href="tel:303-802-6770">CALL (303) 802-6770</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
