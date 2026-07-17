import React from "react";

const Contact = () => {
  return (
    <>
      <div id='contact' className='relative min-h-screen py-20'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        </div>
     
        <div className='absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%] -translate-y-1/2'></div>
        <div className='absolute w-16 h-96 border-2 border-secondary -left-1 top-[50%] -translate-y-1/2'></div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
          <div className='container max-w-5xl mx-auto'>
            
            <h3 className='title mb-12 text-black text-4xl font-bold'>
              <span className='text-purple-700 font-semibold'>#</span>contact
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              
              {/* Left Column: Direct Info */}
              <div className='flex flex-col justify-between outline outline-1 outline-gray-300 p-8 bg-white/80 backdrop-blur-sm'>
                <div className='flex flex-col gap-6'>
                  <h4 className='text-2xl font-bold text-black'>Let's Connect</h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Whether you have a question about my projects, a potential software engineering opportunity, or just want to talk about system optimization, my inbox is always open.
                  </p>
                  
                  <div className='flex flex-col gap-4 mt-2'>
                    <div className='flex items-center gap-3 text-lg'>
                      <span className='text-purple-700 font-bold'>Email:</span>
                      <a href="mailto:your.email@example.com" className='text-black hover:text-purple-700 transition-colors font-mono'>
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
                  <a href="https://github.com/DwightJimenez" target="_blank" rel="noreferrer" className='px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors font-mono text-sm'>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className='px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors font-mono text-sm'>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className='outline outline-1 outline-gray-300 p-8 bg-white/80 backdrop-blur-sm'>
                <form className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='name' className='font-semibold text-black'>Name</label>
                    <input 
                      type='text' 
                      id='name' 
                      className='p-3 border border-gray-300 bg-transparent focus:outline-none focus:border-purple-700 transition-colors' 
                      placeholder='Enter your name' 
                    />
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='font-semibold text-black'>Email</label>
                    <input 
                      type='email' 
                      id='email' 
                      className='p-3 border border-gray-300 bg-transparent focus:outline-none focus:border-purple-700 transition-colors' 
                      placeholder='Enter your email address' 
                    />
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='message' className='font-semibold text-black'>Message</label>
                    <textarea 
                      id='message' 
                      rows='5' 
                      className='p-3 border border-gray-300 bg-transparent focus:outline-none focus:border-purple-700 transition-colors resize-none' 
                      placeholder='Hello, I would like to talk about...'
                    ></textarea>
                  </div>
                  
                  <button 
                    type='button' 
                    className='mt-4 px-6 py-3 bg-purple-700 text-white font-bold hover:bg-purple-800 transition-colors w-fit'
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;