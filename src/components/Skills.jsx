import React from 'react';
import { data } from "../data/data.js";


const Skills = () => {

    const skills = data;
  return (
    <div name='skills' className='w-full text-center bg-background text-gray-300'>
      <div className='max-w-[100%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
          <div className='max-w-[100%] lg:max-w-[80%] mx-auto grid lg:grid-cols-3 gap-4  text-center py-6'>
            {skills.map((items,index) =>(
                            <div key={index}  className='bg-mine-shaft-700  shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <h1 className='text-2xl  p-2 text-center font-bold inline'>{items.title}</h1>
                                <div>
                                <ul className='p-3'>
                                {items.data.map((items,key) => (
                                    <li className='p-2 m-2 text-selective-yellow-400 font-bold  shadow-md shadow-[#040c16] border-mine-shaft-500 bg-mine-shaft-900 inline-block rounded-xl'  >{items.name}</li>
                                ))}
                                </ul>
                                </div>
                          </div>
                      
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
