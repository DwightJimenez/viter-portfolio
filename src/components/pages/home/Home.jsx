import React from "react";
import Banner from "./banner/Banner";
import Nav from "../../partials/Nav";
import About from "./about/About";
import Skill from "./skill/Skill";
import useScrollPercentage from "./useScrollPercentage";
import Project from "./project/Project";
import Contact from "./contact/Contact";

const Home = () => {
  const scrollPercentage = useScrollPercentage();
  const degree = (Math.trunc(scrollPercentage) / 100) * 720;
  const [rotate, setRotate] = React.useState(10);

  return (
    <>
      <div className='relative'>
        {" "}
        <Nav />
        <Banner />
        <About />
        <Skill />
        <Project />
        <Contact />
        <div className='bg-black rounded-full size-56 fixed -bottom-28 right-0 ease-linear duration-1000'>
          <img
            src='/images/day-night.png'
            alt=''
            style={{ transform: `rotate(${degree}deg)` }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
