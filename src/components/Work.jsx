import React from 'react';
import { prodata } from "../data/prodata";
import { Button } from '@mui/material';


const Work = () => {

    // projects file
    const project = prodata;
    //setProject(data);
  
  return (
    <div name='work' className='w-full text-center bg-background text-gray-300'>
    <div className='max-w-[100%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600 '>Projects</p>
            <p className='py-4'>// Check out some of my recent work</p>
        </div>
        <div className='max-w-[100%]  rounded-lg lg:max-w-[80%] mx-auto grid lg:grid-cols-2 gap-4  text-center py-6'>
          {project.map((items,index) =>(
                          <div key={index}  className='bg-mine-shaft-700  shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img class="rounded-t-lg  h-1/2 w-full" src={`${items.img}`} alt={`${items.title}`} />
                              <h1 className='text-xl lg:text-3xl text-selective-yellow-300  p-3 text-center font-bold inline'>{items.title}</h1>
                              <div>
                              <ul className='p-3'>
                              {items.tech.map((items,key) => (
                                  <li className='p-1 m-1 text-white font-bold text-xs  shadow-md shadow-[#040c16] border-mine-shaft-500 bg-slate-900 inline-block '  >{items}</li>
                              ))}
                              </ul>
                              </div>
                              <p className='p-2 text-xs lg:text-sm'>
                                {items.descp}
                              </p>
                              <div className='mt-3'>
                              {items.linktolive == "" ? (<></>) : (<><Button>Live preview</Button></>) }
                              
                              <a href={`${items.linktocode}`} target="_blank" class="relative px-5 py-2  font-medium text-white group">
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                <span class="relative">preview code</span>
                              </a>
                              </div>  
                        </div>
                    
          ))}
      </div>
    </div>
  </div>

  );
};

export default Work;
