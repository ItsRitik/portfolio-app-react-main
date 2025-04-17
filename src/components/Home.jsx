import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const resumeURL =
    "https://drive.google.com/file/d/1qEkwDP2_nIxyjd7jSdLO6W43_OWiWsh4/preview";

  return (
    <div
      name="home"
      className="home w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black relative"
    >
      <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[60%] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p
          className="text-sm sm:text-lg text-rum-200"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Hello, I am
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-7xl font-bold text-selective-yellow-300"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          RITIK KALE
        </motion.h1>

        <motion.p
          className="text-md sm:text-xl font-bold text-white-100 mt-2"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Currently pursuing my Master's in{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            Computer Science
          </span>{" "}
          based in New York.
        </motion.p>

        <motion.p
          className="text-sm sm:text-lg text-white-100 py-2 sm:py-4"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
        >
          I bring
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            3 years
          </span>{" "}
          of professional experience as a{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            Software Development Engineer
          </span>{" "}
          with strong skills in{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            Full-Stack Development
          </span>{" "}
          &{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            software engineering.
          </span>
        </motion.p>

        <motion.p
          className="text-sm sm:text-lg text-white-100"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInUp}
        >
          I’m currently{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            looking for a full-time Software Engineer role
          </span>{" "}
          where I can apply my skills and gain valuable{" "}
          <span className="text-xl sm:text-2xl text-selective-yellow-300">
            mentorship
          </span>{" "}
          to grow further in my career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-4"
        >
          <button
            onClick={() => setShowModal(true)}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition duration-300 ease-in-out"
          >
            Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-4xl relative shadow-lg border border-pink-500">
            <div className="flex justify-between items-center p-4 bg-pink-600 text-white">
              <h2 className="text-lg font-semibold">Resume Preview</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white font-bold text-xl"
              >
                ✕
              </button>
            </div>
            <iframe
              title="Resume"
              src={resumeURL}
              className="w-full h-[500px]"
              allow="autoplay"
            />
            <div className="flex justify-end p-4 gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1qEkwDP2_nIxyjd7jSdLO6W43_OWiWsh4"
                download
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download
                </button>
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
