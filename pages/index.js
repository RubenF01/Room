import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import Hero from "../components/Hero";
import About from "../components/About";
import { AppContext } from "../context/Context";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <div>
      <Head>
        <title>Room</title>
        <meta name="description" content="Furniture website landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <AppContext.Provider
        value={{ isVisible, setIsVisible, toggleMenu }}
        className="font-spartan flex flex-col min-h-screen relative"
      >
        <HamburgerMenu />
        <Hero />
        <About />
      </AppContext.Provider>
    </div>
  );
}
