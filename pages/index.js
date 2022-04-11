import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import Hero from "../components/Hero";
import About from "../components/About";
import { AppContext } from "../context/Context";
import { useState, useEffect } from "react";

const slides = [
  {
    desktopImage: "/desktop-image-hero-1.jpg",
    mobileImage: "/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our expertes combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktopImage: "/desktop-image-hero-2.jpg",
    mobileImage: "/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImage: "/desktop-image-hero-3.jpg",
    mobileImage: "/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const toggleMenu = () => setIsVisible(!isVisible);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
      setActiveSlide(slides[0]);
    } else {
      setSlideIndex(slideIndex + 1);
      setActiveSlide(slides[slideIndex + 1]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const previousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(2);
      setActiveSlide(slides[2]);
    } else {
      setSlideIndex(slideIndex - 1);
      setActiveSlide(slides[slideIndex - 1]);
    }
  };

  useEffect(() => {
    nextSlide;
    previousSlide;
  }, [nextSlide, previousSlide]);

  return (
    <div>
      <Head>
        <title>Room</title>
        <meta name="description" content="Furniture website landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <AppContext.Provider
        value={{
          isVisible,
          setIsVisible,
          toggleMenu,
          nextSlide,
          previousSlide,
          activeSlide,
        }}
        className="font-spartan flex flex-col relative"
      >
        <HamburgerMenu />
        <Hero />
        <About />
      </AppContext.Provider>
    </div>
  );
}
