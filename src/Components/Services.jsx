import React from 'react';

const Services = () => {
  return (
    <section id='services' className='py-10 bg-cover bg-center'>
      <div className='bg-black/50 py-10'>
        <h2 className='text-4xl text-white font-bold text-center mb-8'>
          What I do
        </h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
          <div className='bg-rose-100 p-6 shadow-lg rounded'>
            <h3 className='text-xl font-bold mb-3'>Design + Development</h3>
            <p>
              I build responsive and functional websites with clean,
              user-friendly interfaces using HTML, Tailwind CSS, JavaScript, and
              React. I handle both layout design and frontend logic to bring
              digital ideas to life.
            </p>
          </div>
          <div className='bg-rose-100 p-6 shadow-lg rounded'>
            <h3 className='text-xl font-bold mb-3'>Canva+Print Design</h3>
            <p>
              I design for both screen and print using Canva. From social media
              graphics and templates to customized items like shirts, mugs, and
              flyers I help brands express themselves visually and creatively.
            </p>
          </div>
          <div className='bg-rose-100 p-6 shadow-lg rounded'>
            <h3 className='text-xl font-bold mb-3'>
              Creative + Content Writer
            </h3>
            <p>
              I write engaging content, articles, and fictional stories that
              connect with readers. From brand messaging and blogs to
              full-length novels, I use words to inspire, inform, and entertain.
            </p>
          </div>
        </div>
        {/* <div className='text-center mt-8'>
          <a
            href='#work'
            className='bg-rose-300 text-white px-6 py-3 rounded shadow hover:bg-pink-600'
          >
            My Work
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
