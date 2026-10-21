import React from "react";
import Typewriter from "typewriter-effect";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className='relative min-h-screen bg-[#00091d] flex items-center overflow-hidden'>
      {/* Variant Technical Background: Architectural Line Grid + Radial Spotlight */}
      <div className='absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_40%,#581c8725,transparent)]'></div>
      </div>

      {/* Subtle HUD Framing Accents (Variant to About's Side Borders) */}
      <div className='pointer-events-none absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-purple-500/40 hidden sm:block'></div>
      <div className='pointer-events-none absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-purple-500/40 hidden sm:block'></div>

      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className='container mx-auto px-4 z-10 py-16'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content Column */}
          <div className='flex flex-col gap-5'>
            {/* Technical Status Pill */}
            <div className='inline-flex items-center gap-2.5 px-3 py-1.5 w-fit border border-purple-500/30 bg-purple-950/20 text-purple-300 font-mono text-xs tracking-widest uppercase'>
              <span className='w-2 h-2 rounded-full bg-purple-500 animate-pulse'></span>
              <span>SYS.INIT // PORTFOLIO_V2</span>
            </div>

            {/* Name Header */}
            <div className='text-white text-4xl sm:text-5xl lg:text-6xl font-semibold font-orbitron tracking-tight leading-tight'>
              <h1>
                Jude Dwight <br className='hidden sm:block' />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500'>
                  Oscar Jimenez
                </span>
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <h2 className='text-white/90 text-xl sm:text-2xl font-mono flex items-center gap-2 bg-white/[0.02] border-l-2 border-purple-600 pl-3 py-1 w-fit'>
              <span className='text-purple-400 font-bold'>&#123;</span>
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
              <span className='text-purple-400 font-bold'>&#125;</span>
            </h2>

            {/* Bio Summary */}
            <h3 className='text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed'>
              I build robust, data-driven web applications using{" "}
              <span className='text-white font-mono text-sm bg-white/5 px-1.5 py-0.5 border border-white/10'>
                React
              </span>
              ,{" "}
              <span className='text-white font-mono text-sm bg-white/5 px-1.5 py-0.5 border border-white/10'>
                Express
              </span>
              , and{" "}
              <span className='text-white font-mono text-sm bg-white/5 px-1.5 py-0.5 border border-white/10'>
                Sequelize
              </span>
              . Experienced in integrating machine learning models and
              developing interactive systems.
            </h3>

            {/* Action Buttons (Sharp Technical Edges) */}
            <div className='flex flex-wrap gap-4 mt-4 font-mono text-sm'>
              <a href='#project'>
                <button className='btn--primary relative px-7 py-3.5 bg-purple-700 hover:bg-purple-600 text-white font-medium tracking-wider uppercase transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]'>
                  &gt; View_My_Work
                </button>
              </a>
              <a href='#contact'>
                <button className='btn--secondary px-7 py-3.5 border border-purple-500/40 text-white hover:bg-purple-500/10 hover:border-purple-400 font-medium tracking-wider uppercase transition-all'>
                  Contact_Me()
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Parallax System Architecture Card */}
          <div className='relative hidden lg:flex justify-center items-center'>
            {/* Background Decorative Offset Frame */}
            <MouseParallaxChild
              factorX={-0.2}
              factorY={-0.2}
              className='absolute w-full max-w-md h-80 border border-purple-500/30 translate-x-5 translate-y-5 pointer-events-none'
            />

            {/* Main Terminal Card */}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.3}
              className='w-full max-w-md bg-[#050b14]/90 backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden'
            >
              {/* Terminal Top Bar */}
              <div className='flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 font-mono text-xs text-slate-400'>
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 rounded-full bg-red-500/70'></span>
                  <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/70'></span>
                  <span className='w-2.5 h-2.5 rounded-full bg-emerald-500/70'></span>
                </div>
                <span>engineer_profile.ts</span>
                <span className='text-purple-400'>[READONLY]</span>
              </div>

              {/* Terminal Code Body */}
              <div className='p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2'>
                <p>
                  <span className='text-purple-400'>const</span>{" "}
                  <span className='text-blue-400'>developer</span> = &#123;
                </p>
                <p className='pl-4'>
                  focus:{" "}
                  <span className='text-emerald-400'>
                    "Systems Architecture"
                  </span>
                  ,
                </p>
                <p className='pl-4'>
                  coreStack: [
                  <span className='text-amber-300'>"React"</span>,{" "}
                  <span className='text-amber-300'>"Express"</span>,{" "}
                  <span className='text-amber-300'>"Sequelize"</span>],
                </p>
                <p className='pl-4'>
                  specialties: [
                  <span className='text-amber-300'>"RBAC & Audit"</span>,{" "}
                  <span className='text-amber-300'>"SVM / ML"</span>,{" "}
                  <span className='text-amber-300'>"BKT"</span>],
                </p>
                <p className='pl-4'>
                  scholar:{" "}
                  <span className='text-purple-400'>true</span>,{" "}
                  <span className='text-slate-500'>// DOST</span>
                </p>
                <p>&#125;;</p>

                <div className='pt-3 mt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-400'>
                  <span>STATUS: AVAILABLE_FOR_HIRE</span>
                  <span className='text-emerald-400'>● 100% OPTIMIZED</span>
                </div>
              </div>
            </MouseParallaxChild>

            {/* Floating Badge Node */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={-0.4}
              className='absolute -bottom-6 -left-4 bg-[#00091d] border border-purple-500 px-4 py-2 font-mono text-xs text-white shadow-lg'
            >
              <span className='text-purple-400'>#</span> full_stack_sys
            </MouseParallaxChild>
          </div>
        </div>
      </MouseParallaxContainer>
    </section>
  );
};

export default Banner;