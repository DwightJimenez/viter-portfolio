import React from "react";
import Typewriter from "typewriter-effect";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <>
      <div className="h-screen bg-secondary flex items-center relative">
        <div className="w-20 h-screen bg-accent absolute top-0 right-16"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col gap-5 z-10">
              <div className="text-white text-5xl font-semibold font-orbitron">
                <h1>Jude Dwight Oscar Jimenez</h1>
              </div>

              <h2 className="text-white/90 text-2xl font-mono flex items-center gap-2">
                <span className="text-purple-400">&#123; </span>
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Web Engineer",
                      "BS Computer Science Graduate",
                      "React & Express Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <span className="text-purple-400"> &#125;</span>
              </h2>

              <h3 className="text-white/50 text-lg max-w-md">
                I build robust, data-driven web applications using React,
                Express, and Sequelize. Experienced in integrating machine
                learning models and developing interactive systems.
              </h3>

              <div className="flex gap-5 mt-4">
                <a href="#project">
                  <button className="btn--primary px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded transition-colors">
                    View My Work
                  </button>
                </a>
                <a href="#contact">
                  <button className="btn--secondary px-6 py-3 border border-accent text-accent hover:bg-purple-600/10 rounded transition-colors">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 bg-secondary border border-accent absolute top-1/2 left-1/2"></div>
                <div className="w-96 h-96 bg-accent border border-accent rounded-full flex justify-center items-center overflow-hidden relative z-10">
                  <div className="w-60 h-60 bg-secondary border border-secondary absolute top-1/2 left-1/2"></div>
                  <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>
                      <img
                        src="/images/me.webp"
                        alt="Jude Dwight Oscar Jimenez"
                        className="w-full h-full object-cover z-50 pointer-events-none"
                      />
                    </MouseParallaxChild>
                  </MouseParallaxContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
