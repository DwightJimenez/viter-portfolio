import React from "react";
import CardSkill from "./card/CardSkill";

const Skill = () => {
  // Grouped your skills into an array for cleaner rendering
  const skillList = [
    { name: "React", image: "/images/react.svg", bgWhite: false },
    { name: "Express.js", image: "/images/express-js.svg", bgWhite: true },
    { name: "Sequelize ORM", image: "/images/sequelize.svg", bgWhite: false },
    { name: "Node.js", image: "/images/node-js.svg", bgWhite: true },
    { name: "Tailwind CSS", image: "/images/tailwind.svg", bgWhite: false },
    { name: "JavaScript", image: "/images/javascript-logo.svg", bgWhite: false },
    { name: "HTML5", image: "/images/html-5.svg", bgWhite: false },
    { name: "CSS3", image: "/images/css-3.svg", bgWhite: false },
  ];

  return (
    <>
      <div id='skills' className='relative min-h-screen py-20 overflow-hidden'>
        
        {/* Background Pattern */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        </div>
        
        {/* Decorative Side Borders - Added -translate-y-1/2 for perfect vertical centering */}
        <div className='absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%] -translate-y-1/2'></div>
        <div className='absolute w-16 h-96 border-2 border-secondary -left-1 top-[50%] -translate-y-1/2'></div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
          <div className='container max-w-5xl mx-auto'>
            
            <h3 className='title mb-16 text-black text-center text-4xl font-bold'>
              <span className='text-purple-700 font-semibold'>#</span>skills
            </h3>
            
            {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
              {skillList.map((skill, index) => (
                <CardSkill 
                  key={index}
                  image={skill.image} 
                  name={skill.name} 
                  bgWhite={skill.bgWhite}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;