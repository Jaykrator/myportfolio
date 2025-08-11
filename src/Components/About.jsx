import React from "react";
import Portrait2 from '../assets/Portrait2.png'

const About = () => {
  return (
    <section
      id='about'
      className='py-8 px-6 max-w-6xl mx-auto mt-0'
    >
      <h2 className='text-4xl text-center font-bold mb-4 md:mb-6'>
        Who I am
      </h2>

      <div className='grid md:grid-cols-2 md:gap-4 gap-4 items-center min-h-[60vh]'>
        <div>
          <p>
            I code clean, responsive, and user-friendly websites using HTML,
            Tailwind CSS, JavaScript, and React bringing ideas to life through
            beautiful and functional digital experiences. Whether it's a landing
            page or a full web app, I focus on design, usability, and
            performance.
          </p>
          <p className='mt-4'>
            Beyond code, I create visuals and prints using Canva from brand
            templates and social media graphics to custom flyers, t-shirts,
            mugs, and more. I also write compelling content: blog posts, web
            copy, articles, and immersive fiction that inform, engage, and
            inspire.
          </p>
        </div>

        <div className='flex justify-center md:justify-start'>
          <img
            src={Portrait2}
            alt='Jane leaning against a bus'
            className='rounded shadow-lg w-3/4 md:w-2/3 lg:w-1/2'
            data-aos='fade-up'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
