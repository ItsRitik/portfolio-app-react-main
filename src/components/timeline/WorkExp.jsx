import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses,} from '@mui/lab/TimelineOppositeContent';
import capg from '../../assets/capg.png';
import foo from '../../assets/foo.jpeg';

const WorkExp = () =>{
    return(
        <div className='text-center'>
          <p className='text-4xl py-2  font-bold inline border-b-4 border-pink-600'>Work Experience</p>      
        <Timeline  sx={{padding:0,paddingTop:3,
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}>
      <TimelineItem >
      <TimelineOppositeContent  className='hidden sm:block' >
      <img src={capg}  style={{ width: '70px', height:'50px' }} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{marginLeft:1,paddingLeft:1}}>
          <div>
            <p className='text-xl text-selective-yellow-400'><b>Capgemini</b> - Software Engineer</p>
            <p className='text-xs pb-1 text-mine-shaft-100 font-bold'>December 2021 - June 2023</p>
            <p className='text-xs text-mine-shaft-200'>Led a team in developing responsive web applications using Next.js and TypeScript for off-shore clients, achieving 100% compatibility, and migrated a web-based office reservation system to a mobile app with React.js and Firebase integration.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem  >
      <TimelineOppositeContent className='hidden sm:block' >
      <img src={foo} style={{ width: '70px', height:'50px' }} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{marginLeft:1,paddingLeft:1}}>
        <div >
            <p className='text-xl text-selective-yellow-400'>Walmart, Advanced Software Engineering Job Simulation - The Forage</p>
            <p className='text-xs pb-1 text-mine-shaft-100 font-bold'>February 2024</p>
            <p className='text-xs text-mine-shaft-200'>Developed a Java-based heap data structure for scraping shipping information from a customer dataset and implemented UML diagrams to connect classes to databases, while also creating Python scripts and SQL queries for Walmart's pet department database, optimizing data retrieval with Pandas for sales and inventory information.</p>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem >
      <TimelineOppositeContent className='hidden sm:block' >
      <img src={foo} style={{ width: '70px', height:'50px' }} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{marginLeft:1,paddingLeft:1}}>
        <div>
            <p className='text-xl text-selective-yellow-400'>Skyscanner, Front-End Software Engineering Work Simulation -The Forage </p>
            <p className='text-xs pb-1 text-mine-shaft-100 font-bold'>February 2024</p>
            <p className='text-xs text-mine-shaft-200'>Installed & set up local development environment using React, designing web application front-end using TypeScript to create interactive calendar allowing users to navigate dates & time ranges</p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    )
}

export default WorkExp;