import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    data: ["Java", "Go", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    data: [
      "ReactJS",
      "Redux",
      "React Native",
      "NextJS",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    data: ["NodeJS", "Express", "Spring", "JSP", "Servlet", "Hibernate"],
  },
  {
    title: "Database",
    data: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "DevOps & Cloud",
    data: [
      "AWS (EC2, S3, IAM)",
      "GCP",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    title: "Tools & Platforms",
    data: ["JIRA", "Postman", "Git", "VS Code", "Linux"],
  },
];

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

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full text-center bg-gray-900 text-gray-300 py-10"
    >
      <div className="max-w-[100%] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-sm sm:text-base">
            // Technologies I’ve worked with across projects and roles
          </p>
        </div>

        <div className="max-w-[100%] lg:max-w-[80%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center py-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="bg-mine-shaft-700 shadow-md shadow-[#040c16] rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <h1 className="text-xl p-3 text-white font-bold border-b border-mine-shaft-600">
                {category.title}
              </h1>
              <div className="p-4 flex flex-wrap justify-center gap-2">
                {category.data.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm text-selective-yellow-400 font-medium bg-mine-shaft-900 rounded-xl shadow-inner shadow-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
