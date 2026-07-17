import React from "react";

const Contact = () => {
  return (
    <>
      <div id='contact' className='relative min-h-screen py-20'>
        {/* Background Pattern */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        </div>
      
        {/* Decorative Side Borders */}
        <div className='absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%] -translate-y-1/2'></div>
        <div className='absolute w-16 h-96 border-2 border-secondary -left-1 top-[50%] -translate-y-1/2'></div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
          <div className='container max-w-5xl mx-auto'>
            
            <h3 className='title mb-12 text-black text-4xl font-bold'>
              <span className='text-purple-700 font-semibold'>#</span>contact
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              
              {/* Left Column: Direct Info */}
              <div className='flex flex-col justify-between outline outline-1 outline-gray-300 p-8 bg-white/80 backdrop-blur-sm h-full'>
                <div className='flex flex-col gap-6'>
                  <h4 className='text-2xl font-bold text-black'>Let's Connect</h4>
                  
                  {/* Updated text: Removed the optimization mention */}
                  <p className='text-gray-600 leading-relaxed'>
                    Whether you have a question about my projects, a potential software engineering opportunity, or just want to connect, my inbox is always open. I try my best to respond quickly.
                  </p>
                  
                  <div className='flex flex-col gap-4 mt-2'>
                    <div className='flex items-center gap-3 text-lg'>
                      <span className='text-purple-700 font-bold'>Email:</span>
                      <a href="mailto:dwightjimenez0@gmail.com" className='text-black hover:text-purple-700 transition-colors font-mono'>
                        dwightjimenez0@gmail.com
                      </a>
                    </div>
                    <div className='flex items-center gap-3 text-lg'>
                      <span className='text-purple-700 font-bold'>Location:</span>
                      <span className='text-black font-mono'>Donsol, Bicol, Philippines</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex gap-4 mt-12'>
                  <a href="https://github.com/DwightJimenez" target="_blank" rel="noreferrer" className='px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors font-mono text-sm font-bold'>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className='px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors font-mono text-sm font-bold'>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right Column: Job Hunt Focus */}
              <div className='flex flex-col justify-center outline outline-1 outline-gray-300 p-8 bg-white/80 backdrop-blur-sm h-full'>
                <div className='flex flex-col items-start gap-6'>
                  
                  {/* Availability Badge */}
                  <div className='inline-flex items-center px-4 py-2 bg-green-100 text-green-800 font-bold font-mono text-sm border border-green-300'>
                    <span className='mr-3 inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse'></span>
                    Actively Seeking Opportunities
                  </div>
                  
                  <h4 className='text-2xl font-bold text-black'>Looking for my next challenge.</h4>
                  <p className='text-gray-600 leading-relaxed'>
                    I am currently open to full-time entry-level and junior Software Engineering roles. I am particularly interested in positions that leverage my background in React, Express, and full-stack architecture.
                  </p>

                  {/* Giant Resume Download Button */}
                  <a 
                    href="public/Jimenez resume.pdf" 
                    download
                    className='mt-4 w-full text-center px-8 py-4 bg-purple-700 text-white font-bold hover:bg-purple-800 transition-colors shadow-lg hover:shadow-purple-700/30 flex items-center justify-center gap-3'
                  >
                    {/* Download Icon SVG */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resume
                  </a>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;