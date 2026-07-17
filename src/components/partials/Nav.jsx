import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "project", href: "#project" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className="bg-white fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <img
              src="/images/icon.svg"
              alt="LOGO"
              className="w-[30px] h-[30px]"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>
                  <span className="text-purple-700 font-semibold">#</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t flex flex-col items-center py-4 gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                <span className="text-purple-700 font-semibold">#</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;