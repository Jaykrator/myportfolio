import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-6 bg-gray-900 text-white text-center'>
      <a
        href='mailto:theglobaljess@gmail.com'
        className='block mb-4 hover:text-pink-400'
      >
        theglobaljess@gmail.com
      </a>

      <ul className='flex justify-center space-x-6 text-2xl'>
        <li>
          <a
            href='https://www.linkedin.com/in/jacinta-umerah-265321215/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Jaykrator'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://medium.com/@umerahchikaodi'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400'
          >
            <FaMedium />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
