import React, {useState} from 'react';
import { prodata } from "../data/prodata";


const Project = () => {

    // projects file
    const project = prodata;
    
  return (
    <div name='work' className='w-full text-center bg-background text-gray-300'>
    <div className='max-w-[100%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600 '>Projects</p>
            <p className='py-4'>// Check out some of my recent work</p>
        </div>
        <div className='max-w-[100%] rounded-lg lg:max-w-[80%] mx-auto grid lg:grid-cols-2 gap-4 auto-rows-max  text-center py-6'>
          {project.map((items,index) =>(
                          <div key={index}  className='bg-mine-shaft-700 h-max sm:h-full shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                           {items.id === 3 ? <>
                           <video src={`${items.img}`} className='rounded-t-lg  h-1/2 w-full' controls />
                           </>
                            :
                             <>
                             <img class="rounded-t-lg  h-1/2 w-full" src={`${items.img}`} alt={`${items.title}`} />
                             </>} 
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
                              <div className='mt-3 flex-row'>
                              {items.linktolive === "" ? (<></>) : (<> 
                                <a href={`${items.linktolive}`} target="_blank"><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-3">Checkout to Project</button></a>
                                    </>) }
                              
                              
                              <a href={`${items.linktocode}`} target="_blank" >
                              <button type="button" class="text-black text-sm font-bold bg-gradient-to-br ml-3 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-3">Preview Code</button>
                              </a>
                              
                              </div>  
                        </div>
                    
          ))}
          {/* <ModalVideo
              channel="custom"
              isOpen={isOpen}
              url="./Demo.mp4" 
              onClose={closeModal}
          /> */}
      </div>
    </div>
  </div>

  );
};

export default Project;
