import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='fixed top-0 left-0 w-full bg-black shadow-md z-50'>
      <div className='flex justify-between items-center px-6 py-4'>
        {/* Logo */}
        <div className='logo'>
          <h1 className='text-2xl font-mono'>
            <span className='text-pink-500'>&lt;</span>devJess
            <span className='text-pink-500'>&gt;</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className='space-x-6 md:flex hidden'>
          <a href='#home' className='hover:text-rose-300 transition'>
            Home
          </a>
          <a href='#services' className='hover:text-rose-300 transition'>
            Services
          </a>
          <a href='#about' className='hover:text-rose-300 transition'>
            About
          </a>
          <a href='#projects' className='hover:text-rose-300 transition'>
            Projects
          </a>
          <a href='#contact' className='hover:text-rose-300 transition'>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-pink-500 z-20' onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center space-y-6 py-6 md:hidden'>
          <a
            href='#home'
            onClick={toggleMenu}
            className='hover:text-rose-300 transition'
          >
            Home
          </a>
          <a
            href='#services'
            onClick={toggleMenu}
            className='hover:text-rose-300 transition'
          >
            Services
          </a>
          <a
            href='#about'
            onClick={toggleMenu}
            className='hover:text-rose-300 transition'
          >
            About
          </a>
          <a
            href='#projects'
            onClick={toggleMenu}
            className='hover:text-rose-300 transition'
          >
            Projects
          </a>
          <a
            href='#contact'
            onClick={toggleMenu}
            className='hover:text-rose-300 transition'
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
