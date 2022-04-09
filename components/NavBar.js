import Logo from "./icons/Logo";
import Hamburger from "./icons/Hamburger";
import { useMedia } from "react-use";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const NavBar = () => {
  const isWide = useMedia("(min-width: 1024px)", true);
  const { toggleMenu } = useContext(AppContext);

  if (isWide) {
    return (
      <div className="absolute z-50 flex items-center pt-10 lg:pt-14 pl-10 lg:pl-14">
        <Logo className="fill-white" />
        <nav className="text-white text-xs lg:text-base ml-8 2xl:ml-16 space-x-6 2xl:space-x-10">
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="absolute w-full pt-10 z-50">
        <div className="relative pl-6">
          <Hamburger onClick={() => toggleMenu()} className="absolute" />
        </div>
        <div className="flex justify-center">
          <Logo className="fill-white" />
        </div>
      </div>
    );
  }
};

export default NavBar;
