import React from "react";
import Typewriter from "typewriter-effect";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <>
      <div className='h-screen bg-secondary flex items-center relative'>
        <div className='w-20 h-screen bg-accent absolute top-0 right-16'></div>
        <div className='container'>
          <div className='grid grid-cols-2 items-center'>
            <div className='flex flex-col gap-5'>
              <div className='text-white text-6xl font-semibold'>
                <Typewriter
                  options={{
                    strings: ["Jude Dwight Oscar Jimenez", "Nx", "Nig", "Nice"],
                    autoStart: true,
                    loop: true,
                    pauseFor: "1",
                  }}
                />
              </div>
              <h2 className='text-white/80'>
                &#123; I build digital experiences &#125;
              </h2>
              <h3 className='text-white/50'>
                Passionate about creating elegant solutions to complex problems.
                I specialize in JavaScript ecosystems and cloud-native
                applications.
              </h3>

              <div className='flex gap-5'>
                <button className='btn--primary'>View My Work</button>
                <button className='btn--secondary'>Contact Me</button>
              </div>
            </div>

            <div className='w-full flex justify-center'>
              <div className='relative'>
                <div className='w-60 h-60 bg-secondary border border-accent absolute top-1/2 left-1/2'></div>
                <div className='w-96 h-96 bg-accent rounded-full flex justify-center'>
                  <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                  >
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>
                      <img src='/images/shrek.webp' alt='' className='z-50' />
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
