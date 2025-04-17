import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import pace from "../../assets/pace2.png";
import mu from "../../assets/mu.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const educationData = [
  {
    logo: pace,
    university: "Pace University",
    degree: "Master Of Science (Computer Science)",
    duration: "September 2023 - May 2025",
    gpa: "3.9",
    courses: [
      "Web & Mobile Application Development",
      "Internet Computing",
      "Algorithm & Computing Theory",
      "Intro to Parallel Computing",
    ],
  },
  {
    logo: mu,
    university: "University Of Mumbai",
    degree: "Bachelor's Of Engineering (Computer Engineering)",
    duration: "December 2021 - June 2023",
    gpa: null,
    courses: [
      "Data Structures",
      "Analysis Of Algorithm",
      "Intro to Cloud Computing",
      "Software Engineering",
    ],
  },
];

const Education = () => {
  return (
    <div className="text-center py-8 px-4 bg-gray-900 text-white">
      <p className="text-4xl font-bold inline border-b-4 border-pink-600">
        Education
      </p>
      <Timeline sx={{ paddingTop: 3 }}>
        {educationData.map((edu, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent
              className="hidden md:block"
              sx={{
                flex: "0 0 80px",
                display: { xs: "none", md: "block" },
                justifyContent: "center",
              }}
            >
              <img
                src={edu.logo}
                alt={`${edu.university} logo`}
                style={{ width: "60px", height: "50px" }}
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {i < educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ marginLeft: 1, paddingLeft: 1 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                custom={i}
                className="text-left"
              >
                <p className="text-xl text-yellow-400 font-semibold">
                  {edu.university}
                </p>
                <p className="text-sm text-yellow-100">{edu.degree}</p>
                <p className="text-xs pb-1 text-gray-400 font-bold">
                  {edu.duration}
                </p>
                {edu.gpa && (
                  <p className="text-sm pb-1 text-yellow-500 font-bold">
                    GPA: {edu.gpa}
                  </p>
                )}
                <div>
                  <p className="text-sm font-medium pb-1">Courses:</p>
                  <ul className="text-xs list-disc pl-5 text-gray-300">
                    {edu.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
