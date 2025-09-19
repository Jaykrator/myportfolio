import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fdhs03y',
        'template_mkqc5pd',
        form.current,
        'PBKWpL4quvanw6k_p'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully ✅');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong ❌');
        }
      );
  };

  return (
    <section id='contact' className='py-16 px-4 sm:px-6 bg-gray-900 text-white'>
      {/* Section Heading */}
      <h2 className='text-3xl sm:text-4xl text-center font-bold mb-6'>
        Let’s Connect
      </h2>
      <p className='text-center text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg'>
        Interested in working together or have a project in mind? Send me a
        message below or connect with me on social platforms.
      </p>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className='max-w-2xl mx-auto bg-white text-gray-900 p-6 sm:p-8 rounded-lg shadow-lg'
      >
        <div className='grid gap-4'>
          <input
            type='text'
            name='user_name'
            placeholder='Your Name'
            required
            className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-900'
          />
          <input
            type='email'
            name='user_email'
            placeholder='Your Email'
            required
            className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-900'
          />
          <textarea
            name='message'
            placeholder='Your Message'
            rows='5'
            required
            className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-900'
          ></textarea>
        </div>
        <button
          type='submit'
          className='mt-6 w-full bg-gray-900 text-white py-3 rounded-lg text-sm sm:text-base hover:bg-gray-700 transition'
        >
          Send Message
        </button>
      </form>

      {/* Quick Links */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10'>
        <a
          href='https://medium.com/@umerahchikaodi'
          className='flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-200 transition'
        >
          <FaMedium className='text-lg sm:text-xl' />
          <span className='text-sm sm:text-base'>Medium</span>
        </a>
        <a
          href='https://www.linkedin.com/in/jacinta-umerah-265321215/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition'
        >
          <FaLinkedin className='text-lg sm:text-xl' />
          <span className='text-sm sm:text-base'>LinkedIn</span>
        </a>
        <a
          href='https://github.com/Jaykrator'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition'
        >
          <FaGithub className='text-lg sm:text-xl' />
          <span className='text-sm sm:text-base'>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
