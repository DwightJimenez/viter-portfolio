import React from "react";

const Project = () => {
  return (
    <>
      <div id='project' className='relative h-screen'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
        </div>
        <div className='absolute w-16 h-96 border-2 border-primary -right-1 top-[50%]'></div>
        <div className='absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%]'></div> 

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
          <div className='container'>
            <h3 className='title mb-16 text-white'>
              <span className='text-purple-700 font-semibold'>#</span>project
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
