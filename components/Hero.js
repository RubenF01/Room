import NavBar from "./NavBar";
import Arrow from "./icons/Arrow";
import AngleRight from "./icons/AngleRight";
import AngleLeft from "./icons/AngleLeft";
import { useMedia } from "react-use";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const Hero = () => {
  const isWide = useMedia("(min-width: 1024px)", true);
  const { nextSlide, previousSlide, activeSlide } = useContext(AppContext);
  const { desktopImage, mobileImage, title, description } = activeSlide;

  if (isWide) {
    return (
      <div className="relative flex flex-1 items-stretch">
        <NavBar />
        <figure className="lg:w-[50%] xl:grow xl:w-[47%] 2xl:w-[20%]">
          <img
            className="h-full w-full  object-cover"
            src={desktopImage}
            alt="hero"
          />
        </figure>
        <div className="py-36 relative px-28 flex-1">
          <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-6xl 2xl:font-semibold pb-10">
            {title}
          </h1>
          <p className="text-xs xl:text-sm 2xl:text-lg 2xl:max-w-xl pb-10 text-darkGray">
            {description}
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
            <div className="flex">
              <div
                onClick={() => previousSlide()}
                className="bg-black hover:bg-veryDarkGray px-6 py-4 lg:px-10 lg:py-8 cursor-pointer"
              >
                <AngleLeft />
              </div>
              <div
                onClick={() => nextSlide()}
                className="bg-black hover:bg-veryDarkGray px-6 py-4 lg:px-10 lg:py-8 cursor-pointer"
              >
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
          <img className="object-cover w-full" src={mobileImage} alt="hero" />
          <div className="absolute inset-0 flex justify-end items-end">
            <div className="flex">
              <div
                onClick={() => previousSlide()}
                className="bg-black hover:bg-veryDarkGray px-6 py-4"
              >
                <AngleLeft />
              </div>
              <div
                onClick={() => nextSlide()}
                className="bg-black hover:bg-veryDarkGray px-6 py-4"
              >
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xs md:max-w-lg mx-auto py-14">
          <h1 className="font-bold text-3xl pb-5">{title}</h1>
          <p className="text-sm pb-14 text-darkGray">{description}</p>
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
