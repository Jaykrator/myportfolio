import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiCanva } from 'react-icons/si';

const About = () => {
  return (
    <section id='about' className='py-12 px-4 sm:px-6 max-w-6xl mx-auto'>
      {/* Section Heading */}
      <h2 className='text-3xl sm:text-4xl text-center text-rose-300 font-bold mb-6 md:mb-10'>
        Who I Am
      </h2>

      {/* Text Section */}
      <div className='text-center max-w-3xl mx-auto'>
        <p className='text-white leading-relaxed text-base sm:text-lg'>
          I code clean, responsive, and user-friendly websites using
          <span className='font-semibold text-rose-300'>
            {' '}
            HTML, Tailwind CSS, JavaScript, and React{' '}
          </span>
          —bringing ideas to life through beautiful and functional digital
          experiences. Whether it's a landing page or a full web app, I focus on
          design, usability, and performance.
        </p>

        <p className='mt-4 text-white leading-relaxed text-base sm:text-lg'>
          Beyond code, I create visuals and prints using Canva—from
          <span className='font-semibold text-rose-300'>
            {' '}
            brand templates and social media graphics{' '}
          </span>
          to custom flyers, t-shirts, mugs, and more. I also write compelling
          content: blog posts, web copy, articles, and immersive fiction that
          inform, engage, and inspire.
        </p>

        {/* Call to Action */}
        <a
          href='#projects'
          className='inline-block mt-6 px-6 py-3 bg-rose-300 text-white rounded-lg shadow hover:bg-gray-700 transition'
        >
          View My Work
        </a>
      </div>

      {/* Tech Stack Section */}
      <div className='mt-16 bg-gray-900/50 rounded-xl shadow-lg p-6 sm:p-8'>
        <h3 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8'>
          My Tech Stack
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center'>
          <div className='flex flex-col items-center'>
            <FaHtml5 className='text-4xl sm:text-5xl text-orange-600' />
            <span className='mt-2 text-sm sm:text-base text-white'>HTML5</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaCss3Alt className='text-4xl sm:text-5xl text-blue-600' />
            <span className='mt-2 text-sm sm:text-base text-white'>CSS3</span>
          </div>
          <div className='flex flex-col items-center'>
            <SiTailwindcss className='text-4xl sm:text-5xl text-cyan-500' />
            <span className='mt-2 text-sm sm:text-base text-white'>
              Tailwind
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <FaJs className='text-4xl sm:text-5xl text-yellow-500' />
            <span className='mt-2 text-sm sm:text-base text-white'>
              JavaScript
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <FaReact className='text-4xl sm:text-5xl text-sky-500' />
            <span className='mt-2 text-sm sm:text-base text-white'>React</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaGithub className='text-4xl sm:text-5xl text-gray-300' />
            <span className='mt-2 text-sm sm:text-base text-white'>GitHub</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaFigma className='text-4xl sm:text-5xl text-purple-600' />
            <span className='mt-2 text-sm sm:text-base text-white'>Figma</span>
          </div>
          <div className='flex flex-col items-center'>
            <SiCanva className='text-4xl sm:text-5xl text-blue-400' />
            <span className='mt-2 text-sm sm:text-base text-white'>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
