import React from 'react'

import nextcent from '../assets/nexcent.jpg'
import veggieking from '../assets/veggieking.jpg'
import Contactme from '../assets/Contactme.png'


const WorkSamples = () => {
  const projects = [
    {
      id: 1,
      title: 'Business Website',
      image: nextcent,
      link: 'https://nextcent-website-rust.vercel.app/',
    },
    {
      id: 2,
      title: 'Restaurant Landing Page',
      image: veggieking,
      link: 'https://veggieking-6m26.vercel.app/',
    },
    {
      id: 3,
      title: 'Graphic Designs',
      image: Contactme,
      link: 'https://www.behance.net/je3_',
    },
    // Add more here...
  ];

  return (
    <section id='projects' className='py-12 px-6 max-w-6xl mx-auto'>
      <h2 className='text-4xl text-center font-bold mb-6'>My Work</h2>
      <div className='grid gap-6 md:grid-cols-3'>
        {projects.map(({ id, title, image, link }) => (
          <a
            key={id}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='block rounded shadow-lg overflow-hidden hover:scale-105 transition-transform'
          >
            <img src={image} alt={title} className='w-full h-48 object-cover' />
            <div className='p-4 bg-white'>
              <h3 className='text-lg font-semibold'>{title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;