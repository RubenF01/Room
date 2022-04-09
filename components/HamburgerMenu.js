import IconClose from "./icons/IconClose";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const HamburgerMenu = () => {
  const { isVisible, toggleMenu } = useContext(AppContext);
  return (
    <div className={`absolute inset-0 z-[60] ${isVisible ? "" : "hidden"}`}>
      <div className="flex items-center bg-white justify-between py-10 px-6">
        <div>
          <IconClose onClick={() => toggleMenu()} />
        </div>
        <nav className="space-x-6">
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
