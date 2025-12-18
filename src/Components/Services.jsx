import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id='services' className='py-10 bg-cover bg-center'>
      <div className='bg-black/50 py-10'>
        <h2 className='text-4xl text-white font-bold text-center mb-8'>
          What I do
        </h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
          <motion.div
            className='bg-rose-300 p-6 shadow-lg rounded'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl font-bold mb-3 text-gray-800'>Design + Development</h3>
            <p className='text-gray-900'>
              I build responsive and functional websites with clean,
              user-friendly interfaces using HTML, Tailwind CSS, JavaScript, and
              React. I handle both layout design and frontend logic to bring
              digital ideas to life.
            </p>
          </motion.div>

          <motion.div
            className='bg-rose-300 p-6 shadow-lg rounded'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl font-bold mb-3 text-gray-800'>Canva + Print Design</h3>
            <p className='text-gray-900'>
              I design for both screen and print using Canva. From social media
              graphics and templates to customized items like shirts, mugs, and
              flyers I help brands express themselves visually and creatively.
            </p>
          </motion.div>

          <motion.div
            className='bg-rose-300 p-6 shadow-lg rounded'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl font-bold mb-3 text-gray-800'>
              Creative + Content Writer
            </h3>
            <p className='text-gray-900'>
              I write engaging content, articles, and fictional stories that
              connect with readers. From brand messaging and blogs to
              full-length novels, I use words to inspire, inform, and entertain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
