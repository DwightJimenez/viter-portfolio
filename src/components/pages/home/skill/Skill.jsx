import React from "react";
import CardSkill from "./card/CardSkill";
import reactIcon from "/images/react.svg";

const Skill = () => {
  return (
    <>
      <div id='skills' className='relative h-screen'>
         <div className='absolute inset-0'>
              <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
            </div>
            <div className='absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%]'></div>
            <div className='absolute w-16 h-96 border-2 border-secondary -left-1 bottom-[50%]'></div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
          <div className='container'>
            <h3 className='title mb-16 text-black'>
              <span className='text-purple-700 font-semibold'>#</span>skills
            </h3>
            <div className='grid grid-cols-3 gap-5 justify-items-center '>
              <CardSkill image='/images/react.svg' name={"React"} />
              <CardSkill
                image='/images/javascript-logo.svg'
                name={"Javascript"}
              />
              <CardSkill image='/images/html-5.svg' name={"Javascript"} />
              <CardSkill image='/images/css-3.svg' name={"CSS"} />
              <CardSkill
                image='/images/node-js.svg'
                name={"NodeJs"}
                bgWhite={true}
              />
              <CardSkill
                image='/images/express-js.svg'
                name={"Express"}
                bgWhite={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
