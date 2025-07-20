import React from "react";

const Nav = () => {
  return (
    <>
      <header className=' bg-white fixed w-full z-50'>
        <div className='container'>
          <div className='flex justify-between py-4'>
            <div>Logo</div>
            <div>
              <ul className='flex gap-5'>
                <li>
                  <a href='#about'>
                    {" "}
                    <span className='text-purple-700 font-semibold'>#</span>
                    about
                  </a>
                </li>
                <li>
                  <a href='#skills'>
                    {" "}
                    <span className='text-purple-700 font-semibold'>#</span>
                    skills
                  </a>
                </li>
                <li>
                  <a href='#project'>
                    {" "}
                    <span className='text-purple-700 font-semibold'>#</span>
                    project
                  </a>
                </li>
                <li>
                  <a href='#contact'>
                    {" "}
                    <span className='text-purple-700 font-semibold'>#</span>
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
