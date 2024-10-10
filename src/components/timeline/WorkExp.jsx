import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import capg from "../../assets/capg.png";
import Speakhire from "../../assets/SPEAKHIRE-new-logo-color.png";
import foo from "../../assets/foo.jpeg";

const WorkExp = () => {
  return (
    <div className="text-center">
      <p className="text-4xl py-2  font-bold inline border-b-4 border-pink-600">
        Work Experience
      </p>
      <Timeline
        sx={{
          padding: 0,
          paddingTop: 3,
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent className="hidden sm:block">
            <img src={Speakhire} style={{ width: "70px", height: "50px" }} />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ marginLeft: 1, paddingLeft: 1 }}>
            <div>
              <p className="text-xl text-selective-yellow-400">
                <b>Speakhire</b> - Software Engineer Intern
              </p>
              <p className="text-xs pb-1 text-mine-shaft-100 font-bold">
                June 2024 - Present
              </p>
              <p className="text-xs text-mine-shaft-200">
                Led a team to develop features for the SPEAKHIRE hub application
                and an admin portal, streamlining workflows for over 100 interns
                and facilitators by enabling course structuring, session
                management, and in-app communication, while reducing 50% of
                manual work and improving performance by 40% through
                consolidated API calls using RTK.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="hidden sm:block">
            <img src={capg} style={{ width: "70px", height: "50px" }} />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ marginLeft: 1, paddingLeft: 1 }}>
            <div>
              <p className="text-xl text-selective-yellow-400">
                <b>Capgemini</b> - Software Engineer
              </p>
              <p className="text-xs pb-1 text-mine-shaft-100 font-bold">
                December 2021 - June 2023
              </p>
              <p className="text-xs text-mine-shaft-200">
                Led a team in developing responsive web applications using
                Next.js and TypeScript for off-shore clients, achieving 100%
                compatibility, and migrated a web-based office reservation
                system to a mobile app with React.js and Firebase integration.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
