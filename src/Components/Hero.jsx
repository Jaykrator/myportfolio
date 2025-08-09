import React from 'react';
import potrait1 from '../assets/potrait1.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='flex flex-col md:grid md:grid-cols-[16rem_max-content] md:gap-8 items-center justify-center py-12 px-6'
    >
      {/* Text — order 1 on mobile, order 2 on desktop */}
      <div className='order-1 md:order-2 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-light'>
          Hi, I am <strong className='font-bold'> Jacinta Umerah</strong>
        </h1>
        <div className='mt-4 flex items-center justify-center md:justify-start'>
          <p className='bg-rose-300 text-black inline-block mt-4 py-2 px-6 tracking-widest font-medium md:inline'>
            FRONT-END DEV
          </p>
        </div>
      </div>

      {/* Image — order 2 on mobile, order 1 on desktop */}
      <div
        className='order-2 md:order-1 relative w-64 mt-6 md:mt-0'
        data-aos='fade-up'
      >
        <img
          src={potrait1}
          alt='Portrait'
          className='w-full rounded shadow-lg relative z-10'
        />
      </div>
    </section>
  );
};

export default Hero;
