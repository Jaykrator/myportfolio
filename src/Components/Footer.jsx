import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-8 px-4 bg-gray-900 text-white text-center border-t border-gray-700'>
      {/* Email Link */}
      <a
        href='mailto:theglobaljess@gmail.com'
        className='block mb-4 text-sm sm:text-base hover:text-pink-400 transition'
      >
        theglobaljess@gmail.com
      </a>

      {/* Social Icons */}
      <ul className='flex justify-center space-x-4 sm:space-x-6 text-xl sm:text-2xl mb-4'>
        <li>
          <a
            href='https://www.linkedin.com/in/jacinta-umerah-265321215/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400 transition'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Jaykrator'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400 transition'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://medium.com/@umerahchikaodi'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400 transition'
          >
            <FaMedium />
          </a>
        </li>
        <li>
          <a
            href='https://wa.me/2348134775803?text=Hi%20Jess,%20I%20am%20interested%20in%20your%20services'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400 transition'
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <p className='text-xs sm:text-sm text-gray-400'>
        © {new Date().getFullYear()} Jacinta Umerah. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
