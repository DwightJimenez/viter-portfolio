import React from "react";

const About = () => {
  return (
    <>
      <section className='h-screen' id='about'>
        <div>
          <div className='relative h-screen'>
           
            <div className='absolute inset-0'>
              <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
            </div>
            <div className='absolute w-16 h-96 border-2 border-primary -right-1 top-[50%]'></div>
            <div className='absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%]'></div>

            <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
              <div className='container'>
                <h3 className='title mb-16 text-white'>
                  <span className='text-purple-700 font-semibold'>#</span>about
                  Me
                </h3>

                <div className='grid grid-cols-2'>
                  <div className='flex justify-center'>
                    <img src='/images/puss-in-boots.webp' alt='cat' />
                  </div>
                  <div className='flex flex-col gap-5 outline outline-1 outline-secondary p-4 ddd relative text-white'>
                    <div className='w-fit relative'>
                      <h4 className='font-bold  tag--h4 relative'>
                        Crafting Digital Excellence
                      </h4>
                    </div>
                    <div className='relative'>
                      <p className='tag--p'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At, ratione corrupti. Dolore in modi, enim impedit
                        ratione inventore. Dolorem architecto ab praesentium
                        nulla fugit magni iste quas sunt odit minima, accusamus
                        ut, incidunt quidem soluta ipsam quis. Soluta modi autem
                        temporibus optio. Laborum vel, ipsum corrupti, tenetur
                        labore sunt corporis voluptas eum dolores doloremque
                        non.
                      </p>
                    </div>
                    <div className='relative'>
                      <p className='tag--p'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Enim, vel ipsam quos soluta cum voluptatum autem
                        cumque assumenda quidem maxime!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
