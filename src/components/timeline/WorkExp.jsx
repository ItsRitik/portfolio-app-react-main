import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import capg from "../../assets/capg.png";
import Speakhire from "../../assets/SPEAKHIRE-new-logo-color.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const WorkExp = () => {
  return (
    <div className="text-center py-8 md:px-4  text-white">
      <p className="text-4xl font-bold inline border-b-4 border-pink-600">
        Work Experience
      </p>
      <Timeline sx={{ paddingTop: 3 }}>
        {[{
          logo: Speakhire,
          title: "Speakhire - Associate Software Engineer",
          date: "June 2024 - Present",
          points: [
            "Developed scalable admin features for course and user role management, reducing manual work by 50%",
            "Consolidated multiple APIs into one efficient call, improving response time by 40%",
            "Built REST APIs with Node.js, Express, and Prisma ORM for reliable data operations.",
            "Designed a universal dashboard using Higher-Order Components and reusable data grids.",
            "Implemented an attendance system that increased operational accuracy by 30%.",
            "Improved intern onboarding with a user-friendly UX, cutting completion time by 50%."
          ]
        }, {
          logo: capg,
          title: "Capgemini - Software Engineer",
          date: "December 2021 - June 2023",
          points: [
            "Led a cross-functional team to deliver a seat booking system integrated with enterprise tools",
            "Created reusable React components with Redux, reducing code duplication by 30%",
            "Automated testing and deployment with Jenkins CI/CD, cutting release time by 40%",
            "Translated client pain points into actionable product features",
            "Delivered performant solutions with Next.js, improving page load speed by 20%"
          ]
        }].map((exp, i, arr) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent
              className="hidden md:px-0 md:block"
              sx={{
                flex: '0 0 80px', // reduce width
                display: { xs: 'none', md: 'block' }, // cleaner responsive handling
                justifyContent: 'center',
              }}
            >
              <img src={exp.logo} alt="logo" style={{ width: '60px', height: '40px' }} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {i < arr.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className="lg:px-0" sx={{ marginLeft: 1, paddingLeft: 1 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                custom={i}
                className="text-left"
              >
                <p className="text-xl text-yellow-400 font-semibold">{exp.title}</p>
                <p className="text-xs pb-1 text-gray-400 font-bold">{exp.date}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li className="px-0" key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default WorkExp;