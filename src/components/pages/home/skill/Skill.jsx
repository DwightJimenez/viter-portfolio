import React from "react";
import CardSkill from "./card/CardSkill";

const Skill = () => {
  const skillList = [
    {
      name: "React",
      category: "FRONTEND_UI",
      image: "/images/react.svg",
      bgWhite: false,
    },
    {
      name: "Express.js",
      category: "BACKEND_API",
      image: "/images/express-js.svg",
      bgWhite: true,
    },
    {
      name: "Sequelize ORM",
      category: "DATA_LAYER",
      image: "/images/sequelize.svg",
      bgWhite: false,
    },
    {
      name: "Node.js",
      category: "RUNTIME_ENV",
      image: "/images/node-js.svg",
      bgWhite: true,
    },
    {
      name: "Laravel 11",
      category: "FULLSTACK_PHP",
      image: "/images/laravel.svg",
      bgWhite: false,
    },
    {
      name: "Stancl/Tenancy",
      category: "SAAS_ARCH",
      image: "/images/tenancy.svg",
      bgWhite: false,
    },
    {
      name: "Tailwind CSS",
      category: "STYLING_SYS",
      image: "/images/tailwind.svg",
      bgWhite: false,
    },
    {
      name: "JavaScript",
      category: "CORE_LANG",
      image: "/images/javascript-logo.svg",
      bgWhite: false,
    },
    {
      name: "HTML5",
      category: "MARKUP",
      image: "/images/html-5.svg",
      bgWhite: false,
    },
    {
      name: "CSS3",
      category: "STYLESHEET",
      image: "/images/css-3.svg",
      bgWhite: false,
    },
  ];

  return (
    <section
      id='skills'
      className='relative min-h-screen w-full py-24 overflow-hidden flex items-center bg-white'
    >
      {/* White Dot-Matrix Background Pattern (Preserved from Original) */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:20px_20px]'></div>
      </div>

      {/* Decorative Side Borders - Vertically Centered */}
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-secondary -right-1 top-[50%] -translate-y-1/2 z-0'></div>
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-secondary -left-1 top-[50%] -translate-y-1/2 z-0'></div>

      <div className='relative z-10 container max-w-6xl mx-auto px-4'>
        {/* Section Header (Light-Mode Technical Blueprint Style) */}
        <div className='flex items-center gap-4 mb-16'>
          <h3 className='title text-3xl sm:text-4xl text-slate-900 font-bold font-mono tracking-tight'>
            <span className='text-purple-700 font-semibold'>#</span>skills
          </h3>
          <div className='h-[1px] flex-1 max-w-xs bg-gradient-to-r from-purple-700/60 to-transparent'></div>
          <span className='hidden sm:inline-block font-mono text-xs text-slate-500'>
            [SEC_02 // TECH_STACK_MATRIX]
          </span>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center'>
          {skillList.map((skill, index) => (
            <CardSkill
              key={index}
              index={index + 1}
              image={skill.image}
              name={skill.name}
              category={skill.category}
              bgWhite={skill.bgWhite}
            />
          ))}
        </div>

        {/* Bottom Architectural Capabilities Bar (Light Mode) */}
        <div className='mt-12 p-4 border border-slate-300 bg-slate-50/90 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-600 shadow-sm'>
          <div className='flex items-center gap-2 font-semibold text-slate-800'>
            <span className='w-2 h-2 rounded-full bg-purple-700 animate-pulse'></span>
            <span>ADDITIONAL_MODULES:</span>
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            {[
              "Inertia.js",
              "FastAPI / Python",
              "Spatie RBAC",
              "SVM & BKT Models",
              "RESTful APIs",
              "MySQL / SQLite",
            ].map((mod, i) => (
              <span
                key={i}
                className='px-2.5 py-1 bg-white border border-slate-300 text-slate-800 font-medium shadow-[2px_2px_0px_0px_rgba(126,34,206,0.15)]'
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;