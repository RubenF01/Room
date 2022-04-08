import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Room</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="font-spartan flex flex-col min-h-screen">
        <Hero />
        <About />
      </main>
    </div>
  );
}
