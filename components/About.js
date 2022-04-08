const About = () => {
  return (
    <div className="lg:flex items-stretch">
      <img
        className="object-fill w-full flex-auto"
        src="/image-about-dark.jpg"
        alt="about"
      />
      <div className="max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-7xl mx-auto py-14 lg:px-10">
        <h1 className="tracking-[0.2em] font-bold pb-3">ABOUT OUR FURNITURE</h1>
        <p className="text-sm text-darkGray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        className="object-fill w-full flex-auto"
        src="/image-about-light.jpg"
        alt="about"
      />
    </div>
  );
};

export default About;
