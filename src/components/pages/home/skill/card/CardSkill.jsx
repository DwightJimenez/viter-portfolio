import React from "react";

const CardSkill = ({ image, name, bgWhite = false }) => {
  return (
    <>
      <div className='border-[1px] border-purple-700 flex flex-col items-center p-4 bg-white/10 w-fit rounded-lg'>
        <div className={`${bgWhite ? "w-fit rounded-md bg-white" : ""}`}>
          <img src={image} alt={name} className='size-32' />
        </div>
        <p className='text-purple-700'>{name}</p>
      </div>
    </>
  );
};

export default CardSkill;
