import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='relative min-h-screen w-full overflow-hidden flex items-center py-24 border-t border-white/10'
    >
      {/* Signature Dot-Matrix Background (Preserved & Fixed from w-screen overflow) */}
      <div className='absolute inset-0 z-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>

      {/* Decorative Side Borders (Preserved from Original) */}
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-primary -right-1 top-[50%] z-0 opacity-70'></div>
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%] z-0 opacity-70'></div>

      {/* Main Content Container */}
      <div className='relative z-10 container mx-auto px-4'>
        {/* Section Header with Technical Line */}
        <div className='flex items-center gap-4 mb-16'>
          <h3 className='title text-3xl sm:text-4xl text-white font-mono tracking-tight'>
            <span className='text-purple-500 font-semibold'>#</span>
            about_me
          </h3>
          <div className='h-[1px] flex-1 max-w-xs bg-gradient-to-r from-purple-500/60 to-transparent'></div>
          <span className='hidden sm:inline-block font-mono text-xs text-slate-500'>
            [SEC_01 // BIO_DATA]
          </span>
        </div>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 items-center'>
          {/* Left Column: Framed Portrait Node (5 cols on desktop) */}
          <div className='lg:col-span-5 flex justify-center'>
            <div className='relative group hidden md:block'>
              {/* Offset Decorative Backplate */}
              <div className='absolute inset-0 border border-purple-500/40 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none'></div>

              {/* Corner Crosshair Accents */}
              <div className='absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400 z-20'></div>
              <div className='absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400 z-20'></div>

              {/* Image Wrapper */}
              <div className='relative bg-[#050b14] border border-white/15 overflow-hidden'>
                <img
                  src='/images/about me.webp'
                  alt='Jude Dwight Oscar Jimenez'
                  className='h-[55vh] max-w-sm object-cover object-center'
                />

                {/* Bottom Telemetry Bar */}
                <div className='bg-[#00091d]/90 backdrop-blur-md border-t border-white/10 px-4 py-2 flex items-center justify-between font-mono text-xs'>
                  <span className='text-purple-400'>ID // BUP_CS_SENIOR</span>
                  <span className='text-slate-400 flex items-center gap-1.5'>
                    <span className='w-1.5 h-1.5 rounded-full bg-emerald-400'></span>
                    DOST_SCHOLAR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: System Specification Bio Card (7 cols on desktop) */}
          <div className='lg:col-span-7 flex flex-col outline outline-1 outline-secondary bg-[#050b14]/85 backdrop-blur-md my-auto relative text-white shadow-2xl'>
            {/* Card Top Module Header */}
            <div className='flex items-center justify-between px-6 py-3 bg-white/[0.03] border-b border-white/10 font-mono text-xs text-slate-400'>
              <div className='flex items-center gap-2'>
                <span className='text-purple-400'>//</span>
                <span>SYSTEM_ARCHITECTURE_PROFILE.md</span>
              </div>
              <span className='text-purple-400/80 hidden sm:inline'>
                [VERIFIED]
              </span>
            </div>

            {/* Card Body (Preserves your custom tag--h4 and tag--p classes) */}
            <div className='flex flex-col gap-6 p-6 sm:p-8'>
              <div className='w-fit relative'>
                <h4 className='font-bold tag--h4 relative text-xl sm:text-2xl text-purple-200'>
                  Systems-Oriented Full-Stack Developer
                </h4>
              </div>

              <div className='relative'>
                <p className='tag--p text-slate-300 leading-relaxed'>
                  I am a Computer Science senior at{" "}
                  <span className='text-white font-medium'>
                    Bicol University Polangui
                  </span>
                  . As a{" "}
                  <span className='text-purple-300 font-medium'>
                    DOST Scholar
                  </span>
                  , I approach software engineering with a strong emphasis on
                  analytical problem-solving. My technical expertise centers on
                  architecting scalable, data-driven web applications using{" "}
                  <span className='font-mono text-xs text-white bg-white/5 px-1.5 py-0.5 border border-white/10'>
                    React
                  </span>
                  ,{" "}
                  <span className='font-mono text-xs text-white bg-white/5 px-1.5 py-0.5 border border-white/10'>
                    Express.js
                  </span>
                  , and{" "}
                  <span className='font-mono text-xs text-white bg-white/5 px-1.5 py-0.5 border border-white/10'>
                    Sequelize
                  </span>
                  , focusing on writing optimized, maintainable code for complex
                  systems.
                </p>
              </div>

              <div className='relative'>
                <p className='tag--p text-slate-300 leading-relaxed'>
                  My portfolio demonstrates diverse engineering experience: I
                  served as a Software Engineer for{" "}
                  <span className='text-white font-semibold underline decoration-purple-500/60 underline-offset-4'>
                    SE2
                  </span>
                  , developing its robust role-based access and audit logging
                  systems. My senior thesis,{" "}
                  <span className='text-white font-semibold underline decoration-purple-500/60 underline-offset-4'>
                    ReadTrack
                  </span>
                  , highlights my work in Machine Learning, where we implemented
                  an{" "}
                  <span className='font-mono text-xs text-purple-300 bg-purple-950/40 px-1.5 py-0.5 border border-purple-500/30'>
                    SVM model
                  </span>{" "}
                  to perform qualitative text proficiency classification.
                  Additionally, I was commissioned to develop{" "}
                  <span className='text-white font-semibold underline decoration-purple-500/60 underline-offset-4'>
                    ALAB
                  </span>
                  , a research-driven platform for STEM students that integrates{" "}
                  <span className='font-mono text-xs text-purple-300 bg-purple-950/40 px-1.5 py-0.5 border border-purple-500/30'>
                    Bayesian Knowledge Tracing (BKT)
                  </span>{" "}
                  to manage laboratory safety assessments and inventory.
                </p>
              </div>

              {/* Bottom Quick-Metrics Footer */}
              <div className='grid grid-cols-3 gap-4 pt-4 mt-2 border-t border-white/10 font-mono text-xs'>
                <div>
                  <span className='text-slate-500 block text-[10px]'>
                    CORE_STACK
                  </span>
                  <span className='text-white'>PERN / MySQL</span>
                </div>
                <div>
                  <span className='text-slate-500 block text-[10px]'>
                    SPECIALTY
                  </span>
                  <span className='text-white'>RBAC & ML Integration</span>
                </div>
                <div>
                  <span className='text-slate-500 block text-[10px]'>
                    EDUCATION
                  </span>
                  <span className='text-emerald-400'>BSCS // DOST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;