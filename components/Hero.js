import NavBar from "./NavBar";
import Arrow from "./icons/Arrow";
import AngleRight from "./icons/AngleRight";
import AngleLeft from "./icons/AngleLeft";
import { useMedia } from "react-use";

const Hero = () => {
  const isWide = useMedia("(min-width: 1024px)", true);

  if (isWide) {
    return (
      <div className="relative flex flex-1 items-stretch">
        <NavBar />
        <div>
          <img
            className="h-full w-full"
            src="/desktop-image-hero-1.jpg"
            alt="hero"
          />
        </div>
        <div className="py-36 relative px-28 flex-1">
          <h1 className="font-bold text-3xl xl:text-4xl pb-10">
            Discover innovative ways to decorate
          </h1>
          <p className="text-xs xl:text-sm pb-14 text-darkGray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our expertes combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a
            className="flex items-center font-semibold tracking-[0.6em] text-sm"
            href="#"
          >
            SHOP NOW{" "}
            <span className="pl-10">
              <Arrow />
            </span>
          </a>
          <div className="absolute inset-0 flex justify-start items-end">
            <div className="bg-black inline-block">
              <div className="flex px-6 py-4 lg:px-10 lg:py-8 space-x-10 lg:space-x-14">
                <AngleLeft />
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative">
        <NavBar />
        <div className="w-full relative">
          <img
            className="object-cover w-full"
            src="/mobile-image-hero-1.jpg"
            alt="hero"
          />
          <div className="absolute inset-0 flex justify-end items-end">
            <div className="bg-black inline-block">
              <div className="flex px-6 py-4 space-x-10">
                <AngleLeft />
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xs md:max-w-lg mx-auto py-14">
          <h1 className="font-bold text-3xl pb-5">
            Discover innovative ways to decorate
          </h1>
          <p className="text-sm pb-14 text-darkGray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our expertes combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a
            className="flex items-center font-semibold tracking-[0.6em]"
            href="#"
          >
            SHOP NOW{" "}
            <span className="pl-10">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    );
  }
};

export default Hero;
