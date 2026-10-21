import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "about", href: "#about", id: "01" },
    { name: "skills", href: "#skills", id: "02" },
    { name: "project", href: "#project", id: "03" },
    { name: "contact", href: "#contact", id: "04" },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-[#00091d]/80 backdrop-blur-md border-b border-white/10'>
      {/* Subtle Top Purple Glow Line */}
      <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo + System Identifier */}
          <a href='#' className='flex items-center gap-3 group'>
            <div className='relative p-1.5 border border-purple-500/30 bg-purple-950/20 group-hover:border-purple-400 transition-colors'>
              <img
                src='/images/icon.svg'
                alt='LOGO'
                className='w-[24px] h-[24px]'
              />
              {/* Corner Micro-Accent */}
              <span className='absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-purple-500'></span>
            </div>
            <span className='font-mono text-sm font-semibold tracking-wider text-white hidden sm:inline-block'>
              JDOJ<span className='text-purple-500'>.SYS</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-8 font-mono text-sm'>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='relative text-slate-300 hover:text-white transition-colors py-1 group flex items-center gap-0.5'
                >
                  <span className='text-purple-500 font-semibold group-hover:translate-x-[-2px] transition-transform'>
                    #
                  </span>
                  <span>{link.name}</span>
                  {/* Bottom Scanline Hover Effect */}
                  <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </li>
            ))}

            {/* Optional Technical Status / Resume CTA */}
            <li className='pl-4 border-l border-white/10'>
              <a
                href='#contact'
                className='px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-purple-300 border border-purple-500/40 bg-purple-500/10 hover:bg-purple-600 hover:text-white transition-all'
              >
                [Hire_Me]
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button (Animated HUD Toggle) */}
          <button
            className='md:hidden relative p-2 border border-white/10 bg-white/5 text-white focus:outline-none hover:border-purple-500/50 transition-colors'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
          >
            <div className='w-5 flex flex-col items-end gap-1.5'>
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "w-5 rotate-45 translate-y-2 bg-purple-400" : "w-5"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-purple-400 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-3.5"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "w-5 -rotate-45 -translate-y-2 bg-purple-400" : "w-4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Terminal Drawer Style) */}
      {isOpen && (
        <div className='md:hidden bg-[#030914]/95 backdrop-blur-xl border-b border-purple-500/30 px-6 py-6 font-mono'>
          <div className='text-[10px] text-slate-500 uppercase tracking-widest mb-3 border-b border-white/5 pb-2'>
            // NAVIGATION_DIRECTORY
          </div>
          <ul className='flex flex-col gap-3'>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='flex items-center justify-between py-2 px-3 text-slate-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-purple-500 transition-all'
                >
                  <div>
                    <span className='text-purple-500 font-semibold mr-1'>
                      #
                    </span>
                    {link.name}
                  </div>
                  <span className='text-xs text-slate-600'>[{link.id}]</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;