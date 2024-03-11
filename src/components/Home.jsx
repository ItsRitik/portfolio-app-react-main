import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='home w-full h-screen '>
      
      <div className='max-w-[100%] md:max-w-[100%] lg:max-w-[60%] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-sm sm:text-lg text-rum-200'>Hello, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-selective-yellow-300'>
          RITIK KALE
        </h1>
        <p className='text-md sm:text-xl  font-bold text-white-100'>
          Currently Persuing Masters's Degree in <span className='text-xl sm:text-2xl text-selective-yellow-300'>Computer Science</span> Based in New York
        </p>
        <p className='text-sm sm:text-lg text-white-100  py-2 sm:py-4'>
        I bring <span className='text-xl sm:text-2xl text-selective-yellow-300'>1.5 years</span> of professional experience as a <span className='text-xl sm:text-2xl text-selective-yellow-300'>Software Development Engineer</span>, demonstrating my expertise in the field of <span className='text-xl sm:text-2xl text-selective-yellow-300'>software engineering</span>  &  <span className='text-xl sm:text-2xl text-selective-yellow-300'>Full-Stack Developement</span>
        </p>
        <p className='text-sm sm:text-lg text-white-100 '>
        I am excited to continue my professional journey in the software engineering field and am <span className='text-xl sm:text-2xl text-selective-yellow-300'>looking for an internship</span> that will allow me to apply my strong development skills while gaining the <span className='text-xl sm:text-2xl text-selective-yellow-300'>mentorship</span> needed to advance in my career.
        </p>
        <div>
          <a href='https://drive.google.com/file/d/1FwJFdLZRLocXTcXXtSzmnM1j_EY0hQ5S/view?usp=drive_link'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
