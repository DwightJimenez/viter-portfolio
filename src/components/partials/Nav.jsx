import React from "react";

const Nav = () => {
  return (
    <>
      <header>
        <div className='container'>
          <div className='flex justify-between py-4'>
            <div>Logo</div>
            <div>
              <ul className="flex gap-5">
                <li>
                  <a href='#about'>#about</a>
                </li>
                <li>
                  <a href='#skills'>#skills</a>
                </li>
                <li>
                  <a href='#project'>#project</a>
                </li>
                <li>
                  <a href='#contact'>#contact</a>
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
