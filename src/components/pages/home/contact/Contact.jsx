import React from "react";

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative min-h-screen w-full py-24 overflow-hidden flex flex-col justify-between bg-white border-t border-slate-200'
    >
      {/* White Dot-Matrix Background Pattern */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:20px_20px]'></div>
      </div>

      {/* Decorative Side Borders - Vertically Centered */}
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%] -translate-y-1/2 z-0'></div>
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-secondary -left-1 top-[50%] -translate-y-1/2 z-0'></div>

      <div className='relative z-10 container max-w-6xl mx-auto px-4 my-auto'>
        {/* Section Header (Light-Mode Technical Blueprint Style) */}
        <div className='flex items-center gap-4 mb-16'>
          <h3 className='title text-3xl sm:text-4xl text-slate-900 font-bold font-mono tracking-tight'>
            <span className='text-purple-700 font-semibold'>#</span>contact
          </h3>
          <div className='h-[1px] flex-1 max-w-xs bg-gradient-to-r from-purple-700/60 to-transparent'></div>
          <span className='hidden sm:inline-block font-mono text-xs text-slate-500'>
            [SEC_04 // TRANSMISSION_ENDPOINT]
          </span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* Left Column: Direct Info Module */}
          <div className='group relative flex flex-col justify-between bg-white/90 backdrop-blur-sm border border-slate-300 shadow-[6px_6px_0px_0px_rgba(15,23,42,0.06)] hover:border-purple-700 transition-colors'>
            {/* Top Module Header */}
            <div className='flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 font-mono text-xs text-slate-500'>
              <span>// COMMS_CHANNEL_01</span>
              <span className='text-purple-700 font-semibold'>[DIRECT_IO]</span>
            </div>

            <div className='p-8 flex flex-col justify-between flex-grow gap-8'>
              <div className='flex flex-col gap-5'>
                <h4 className='text-2xl font-bold text-slate-900 font-mono'>
                  Let&apos;s Connect
                </h4>

                <p className='text-slate-600 leading-relaxed'>
                  Whether you have a question about my projects, a potential
                  software engineering opportunity, or just want to connect, my
                  inbox is always open. I try my best to respond quickly.
                </p>

                {/* Technical Key-Value Telemetry Blocks */}
                <div className='flex flex-col gap-3 mt-2 font-mono text-sm'>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50 border border-slate-200 hover:border-purple-700/40 transition-colors'>
                    <span className='text-purple-700 font-bold text-xs uppercase tracking-wider'>
                      EMAIL_ADDR:
                    </span>
                    <a
                      href='mailto:dwightjimenez0@gmail.com'
                      className='text-slate-900 hover:text-purple-700 font-medium transition-colors break-all'
                    >
                      dwightjimenez0@gmail.com
                    </a>
                  </div>

                  <div className='flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50 border border-slate-200'>
                    <span className='text-purple-700 font-bold text-xs uppercase tracking-wider'>
                      LOC_COORDS:
                    </span>
                    <span className='text-slate-900 font-medium'>
                      Donsol, Bicol, Philippines
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='pt-6 border-t border-slate-200'>
                <span className='block font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3'>
                  // EXTERNAL_PROFILES
                </span>
                <div className='flex flex-wrap gap-4'>
                  <a
                    href='https://github.com/DwightJimenez'
                    target='_blank'
                    rel='noreferrer'
                    className='px-6 py-2.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(15,23,42,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'
                  >
                    &gt; GitHub
                  </a>
                  <a
                    href='https://linkedin.com/in/yourusername'
                    target='_blank'
                    rel='noreferrer'
                    className='px-6 py-2.5 border border-slate-900 text-slate-900 hover:bg-purple-700 hover:border-purple-700 hover:text-white transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(15,23,42,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'
                  >
                    &gt; LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Job Hunt Focus Module */}
          <div className='group relative flex flex-col justify-between bg-white/90 backdrop-blur-sm border border-slate-300 shadow-[6px_6px_0px_0px_rgba(15,23,42,0.06)] hover:border-purple-700 transition-colors'>
            {/* Top Module Header */}
            <div className='flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 font-mono text-xs text-slate-500'>
              <span>// CAREER_STATUS_02</span>
              <span className='text-emerald-700 font-semibold'>[READY]</span>
            </div>

            <div className='p-8 flex flex-col justify-between flex-grow gap-6'>
              <div className='flex flex-col items-start gap-5'>
                {/* Availability Badge */}
                <div className='inline-flex items-center px-3.5 py-1.5 bg-emerald-50 text-emerald-800 font-bold font-mono text-xs border border-emerald-300 uppercase tracking-wider'>
                  <span className='mr-2.5 inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                  STATUS: Actively Seeking Opportunities
                </div>

                <h4 className='text-2xl font-bold text-slate-900 font-mono'>
                  Looking for my next challenge.
                </h4>

                <p className='text-slate-600 leading-relaxed'>
                  I am currently open to full-time entry-level and junior{" "}
                  <span className='text-slate-900 font-semibold'>
                    Software Engineering
                  </span>{" "}
                  roles. I am particularly interested in positions that leverage
                  my background in{" "}
                  <span className='font-mono text-xs bg-slate-100 px-1.5 py-0.5 border border-slate-300 text-slate-800'>
                    React
                  </span>
                  ,{" "}
                  <span className='font-mono text-xs bg-slate-100 px-1.5 py-0.5 border border-slate-300 text-slate-800'>
                    Express
                  </span>
                  , and full-stack architecture.
                </p>
              </div>

              {/* Giant Resume Download Button (Fixed public/ path) */}
              <div className='pt-6 border-t border-slate-200 w-full'>
                <span className='block font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3'>
                  // DOCUMENT_TRANSMISSION
                </span>
                <a
                  href='/Jimenez resume.pdf'
                  download
                  className='w-full text-center px-8 py-4 bg-purple-700 text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-purple-800 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,0.9)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-3'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                    />
                  </svg>
                  <span>Download_Resume.pdf</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Technical System Footer */}
      <div className='relative z-10 container max-w-6xl mx-auto px-4 pt-16'>
        <div className='border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-slate-500'>
          <span>
            JDOJ.SYS // DESIGNED &amp; ENGINEERED BY JUDE DWIGHT OSCAR JIMENEZ
          </span>
          <span className='text-purple-700 font-semibold'>[SYS_EOF]</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;