import React from 'react';
import Potrait1 from '../assets/Potrait1.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='flex flex-col md:grid md:grid-cols-[1fr_1fr] items-center justify-center gap-10 
      py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-rose-50'
    >
      {/* Text Section */}
      <div className='text-center md:text-left space-y-6'>
        <h1 className='text-4xl md:text-5xl text-gray-900 leading-tight'>
          Hi, I am{' '}
          <span className='text-rose-400 font-extrabold'>Jacinta Umerah</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-700 max-w-2xl'>
          A Frontend Developer passionate about crafting clean, responsive, and
          user-friendly web experiences.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
          <a
            href='#projects'
            className='px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-lg font-medium shadow-md transition'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium shadow-md transition'
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className='relative w-64 md:w-80 lg:w-96 mx-auto mt-6 md:mt-10'>
        <img
          src={Potrait1}
          alt='Jacinta Umerah Portrait'
          className='w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500'
        />
      </div>
    </section>
  );
};

export default Hero;
