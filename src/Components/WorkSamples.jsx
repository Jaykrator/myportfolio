import React from 'react';
import { motion } from 'framer-motion';

import nextcent from '../assets/nexcent.jpg';
import veggieking from '../assets/veggieking.jpg';
import Contactme from '../assets/Contactme.png';
import healthease from '../assets/healthease.jpg';
import fintrack from '../assets/fintrack.jpg';
import kachijames from '../assets/kachijames.jpg';

const WorkSamples = () => {
  const projects = [
    {
      id: 1,
      title: 'HealthEase App',
      description:
        'A healthcare platform with patient booking, dashboard & analytics.',
      image: healthease,
      demoLink: 'https://healthease-demo.vercel.app/',
      githubLink: 'https://github.com/yourusername/healthease',
    },
    {
      id: 2,
      title: 'FinTrack App',
      description:
        'A finance tracking app for budgeting and expense management.',
      image: fintrack,
      demoLink: 'https://fintrack-demo.vercel.app/',
      githubLink: 'https://github.com/yourusername/fintrack',
    },
    {
      id: 3,
      title: 'Business Website',
      description:
        'Corporate business landing page built with React & Tailwind.',
      image: nextcent,
      demoLink: 'https://nextcent-website-rust.vercel.app/',
      githubLink: 'https://github.com/yourusername/nextcent',
    },
    {
      id: 4,
      title: 'Restaurant Landing Page',
      description: 'Landing page for a restaurant with modern responsive UI.',
      image: veggieking,
      demoLink: 'https://veggieking-6m26.vercel.app/',
      githubLink: 'https://github.com/yourusername/veggieking',
    },
    {
      id: 5,
      title: 'Art Gallery Website',
      description: 'An art gallery website with a collection of artworks.',
      image: kachijames,
      demoLink: 'https://kachijames.com/',
      githubLink: null,
    },
    {
      id: 6,
      title: 'Graphic Designs',
      description: 'A collection of my creative graphic design work.',
      image: Contactme,
      demoLink: 'https://www.behance.net/je3_',
      githubLink: null,
    },
  ];

  return (
    <section id='projects' className='py-16 px-6 max-w-7xl mx-auto'>
      <motion.h2
        className='text-4xl text-center font-bold mb-12 text-white'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Work
      </motion.h2>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map(
          ({ id, title, description, image, demoLink, githubLink }, index) => (
            <motion.div
              key={id}
              className='bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-[1.02]'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <img
                src={image}
                alt={title}
                className='w-full h-52 object-cover'
              />

              {/* Project Content */}
              <div className='p-6 flex flex-col'>
                <h3 className='text-xl font-semibold mb-2 text-white'>
                  {title}
                </h3>
                <p className='text-gray-300 text-sm mb-4'>{description}</p>

                {/* Buttons */}
                <div className='flex gap-4 mt-auto'>
                  <a
                    href={demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center px-4 py-2 bg-rose-300 text-white rounded-lg hover:bg-rose-500 transition'
                  >
                    Live Demo
                  </a>
                  {githubLink && (
                    <a
                      href={githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition'
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default WorkSamples;
