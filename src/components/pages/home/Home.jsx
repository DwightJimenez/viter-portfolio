import React from "react";
import Banner from "./banner/Banner";
import Nav from "../../partials/Nav";
import About from "./about/About";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <About />
    </>
  );
};

export default Home;
