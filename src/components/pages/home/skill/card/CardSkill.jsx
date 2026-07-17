import React from "react";

const CardSkill = ({ image, name, bgWhite = false }) => {
  return (
    <>
      {/* 
        Group class added for synchronized hover effects.
        Brutalist hover: lifts up and drops a hard purple shadow. 
      */}
      <div className='group flex flex-col items-center justify-center p-6 outline outline-1 outline-gray-300 bg-white/80 backdrop-blur-sm w-full min-w-[140px] hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(126,34,206,1)] hover:outline-purple-700 transition-all duration-300 cursor-default'>
        
        {/* Fixed height/width container so different sized SVGs don't break the grid */}
        <div className={`flex justify-center items-center h-20 w-20 mb-4 ${bgWhite ? "bg-white rounded-md p-1" : ""}`}>
          <img 
            src={image} 
            alt={name} 
            className='max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300' 
          />
        </div>
        
        <p className='text-black font-bold font-mono text-center group-hover:text-purple-700 transition-colors'>
          {name}
        </p>
      </div>
    </>
  );
};

export default CardSkill;