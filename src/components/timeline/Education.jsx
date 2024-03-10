import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses,} from '@mui/lab/TimelineOppositeContent';  
import pace from '../../assets/pace2.png';
import mu from '../../assets/mu.jpg';

const Education = () =>{
    return(
        <div className='text-center py-6 lg:py-0'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</p>
        <Timeline sx={{padding:0,paddingTop:3,
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.1,
              },
            }} >
          <TimelineItem >
          <TimelineOppositeContent className='hidden sm:block'>
          <img src={pace}  />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{marginLeft:1,paddingLeft:1}}>
              <div>
                <p className='text-xl text-selective-yellow-300'>Pace University</p>
                <p className='text-sm text-selective-yellow-100'>Master Of Science(Computer Science)</p>
                <p className='text-xs pb-1 text-mine-shaft-100 font-bold'>SEPTEMBER 2023 - MAY 2025</p>
                <p className='text-sm pb-1 text-selective-yellow-500 font-bold'>GPA: 3.9</p>
                <div>Courses:
                  <ul className='text-xs'>
                    <li>Web & Mobile Application Developement</li>
                    <li>Internet Computing</li>
                    <li>Algorithm & Computing Theory</li>
                    <li>Intro to Parallel Computing</li>
                  </ul>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem >
          <TimelineOppositeContent className='hidden sm:block'>
          <img src={mu} style={{ width: '70px', height:'50px' }} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot >
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{marginLeft:1,paddingLeft:1}}>
              <div>
                <p className='text-xl text-selective-yellow-300'>University Of Mumbai</p>
                <p className='text-sm text-selective-yellow-100'>Bachelor's Of Engineering(Computer Engineering)</p>
                <p className='text-xs pb-1 text-mine-shaft-100 font-bold'>December 2021 - June 2023</p>
                <ul className='text-xs'>
                  <li>Data Structures</li>
                  <li>Analysis Of algorithm</li>
                  <li>Intro to Cloud Computing</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </div>
    )
}

export default Education;