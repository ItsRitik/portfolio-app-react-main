import React from 'react';
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';

const Footer = () => {

  return (
    <div name='footer' className='w-full text-center bg-mine-shaft-800 text-gray-300'>
        <div className='foot mx-auto p-2 py-6 max-w-[100%] lg:max-w-[80%]'>
            <div>
                <p className='text-sm m-1 lg:m-4 sm:text-xl '>Unlocking Innovation, One Line of Code at a Time!</p>

            </div>
            <div className='foot_icon'>
                <a href='https://www.linkedin.com/in/ritik-kale/' target='_blank'><FaLinkedin className='m-2 lg:m-4' size={35}/></a>
                <a  href='https://github.com/ItsRitik?tab=repositories' target='_blank'><FaGithub  className='m-2 lg:m-4' size={35} /></a>
            </div>
        </div>
        
        
        
    </div>
  );
};

export default Footer;
