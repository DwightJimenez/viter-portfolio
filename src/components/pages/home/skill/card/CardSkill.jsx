import React, { useState } from "react";

const CardSkill = ({
  image,
  name,
  category = "TECH_MOD",
  bgWhite,
  index = 1,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className='group relative w-full flex flex-col justify-between bg-white border border-slate-300 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-700 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.08)] hover:shadow-[4px_4px_0px_0px_rgba(126,34,206,1)]'>
      {/* Top Micro Telemetry */}
      <div className='flex items-center justify-between font-mono text-[10px] text-slate-400 mb-3 border-b border-slate-100 pb-1.5'>
        <span>MOD_{String(index).padStart(2, "0")}</span>
        <span className='text-purple-700 font-medium'>{category}</span>
      </div>

      {/* Icon Container */}
      <div className='my-3 flex justify-center items-center h-16'>
        {!imgError ? (
          <div
            className={`p-2 transition-transform duration-300 group-hover:scale-110 ${
              bgWhite ? "bg-slate-50 rounded border border-slate-200" : ""
            }`}
          >
            <img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              className='w-11 h-11 object-contain'
            />
          </div>
        ) : (
          /* Automatic Fallback if tenancy.svg or laravel.svg isn't in /images/ yet */
          <div className='w-12 h-12 border border-purple-700/40 bg-purple-50 flex items-center justify-center font-mono text-sm font-bold text-purple-700 group-hover:scale-110 transition-transform'>
            &lt;/&gt;
          </div>
        )}
      </div>

      {/* Skill Name */}
      <div className='mt-3 text-center'>
        <h4 className='font-mono text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors'>
          {name}
        </h4>
      </div>
    </div>
  );
};

export default CardSkill;