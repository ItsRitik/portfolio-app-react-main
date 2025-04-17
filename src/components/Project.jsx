import React from "react";
import { prodata } from "../data/prodata";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Project = () => {
  const project = prodata;

  return (
    <div name="work" className="w-full text-center bg-gray-900 text-gray-300 py-10">
      <div className="max-w-[100%] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-4 text-sm sm:text-base">
            // Check out some of my recent work
          </p>
        </div>

        <div className="lg:max-w-[80%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 auto-rows-max py-6">
          {project.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="bg-mine-shaft-700 shadow-md shadow-[#040c16] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              {item.id === 3 ? (
                <video
                  src={item.img}
                  className="h-52 w-full object-cover"
                  controls
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />
              )}

              <h1 className="text-xl lg:text-2xl text-selective-yellow-300 p-4 font-bold">
                {item.title}
              </h1>

              <div className="px-4 flex flex-wrap justify-center gap-2">
                {item.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="px-2 py-1 text-xs font-semibold text-white bg-slate-900 rounded shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="px-4 py-3 text-xs lg:text-sm">{item.descp}</p>

              <div className="flex justify-center gap-4 pb-4">
                {item.linktolive && (
                  <a
                    href={item.linktolive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-3 py-1.5">
                      Live Demo
                    </button>
                  </a>
                )}

                <a
                  href={item.linktocode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-3 py-1.5">
                    Preview Code
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
