import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className='flex justify-between items-center px-6 py-4 bg-white shadow-md relative'>
        {/* Logo */}
        <div className='logo'>
          <h1 className='text-2xl font-mono'>
            <span className='text-pink-500'>&lt;</span>devJess
            <span className='text-pink-500'>&gt;</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className='space-x-6 md:flex hidden'>
          <a href='#home' className='hover:text-rose-300'>
            Home
          </a>
          <a href='#services' className='hover:text-rose-300'>
            Services
          </a>
          <a href='#about' className='hover:text-rose-300'>
            About
          </a>
          <a href='#projects' className='hover:text-rose-300'>
            Projects
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-pink-500 z-20' onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className='absolute top-full right-0 w-48 bg-transparent shadow-md flex flex-col items-center space-y-4 py-6 md:hidden'>
            <a
              href='#home'
              onClick={toggleMenu}
              className='hover:text-rose-300'
            >
              Home
            </a>
            <a
              href='#services'
              onClick={toggleMenu}
              className='hover:text-rose-300'
            >
              Services
            </a>
            <a
              href='#about'
              onClick={toggleMenu}
              className='hover:text-rose-300'
            >
              About
            </a>
            <a
              href='#projects'
              onClick={toggleMenu}
              className='hover:text-rose-300'
            >
              Projects
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
