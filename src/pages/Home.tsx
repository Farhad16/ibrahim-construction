import React from "react";
import SlideBanner from "../components/homepage/SlideBanner";
import About from "../components/homepage/About";

const Home = () => {
  return (
    <div className="flex flex-col">
      <SlideBanner />
      <About />
    </div>
  );
};

export default Home;
