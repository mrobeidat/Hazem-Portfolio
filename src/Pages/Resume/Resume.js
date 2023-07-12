import React from 'react'
import "./Resume.css"
import { Grid, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeline  ,{CustomTimeLineSepartor} from "../../Components/TimeLine/Timeline" 
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School';
function Resume() {
  return (

    <>

    {/*  About me */}
    <Grid container className="section pb_45">
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>

        <Grid item xs={12}>
            <Typography variant='body1' className='aboutme_text mb_30'>{resumeData.about}</Typography>
        </Grid>
    </Grid>

    {/*  Education and experince */}
    <Grid container className="section mb_30">
        <Grid item className='section_title mb_30' >
              <span></span>
              <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container  className='resume_timeline'>
            {/** working history */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon/>}>
                {resumeData.experiences.map((experience) =>(
                  <TimelineItem >
                    <CustomTimeLineSepartor className='sperator_padding'>
                      <TimelineDot variant='outlined' className='timeline_dot'>

                      </TimelineDot>
                    </CustomTimeLineSepartor>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_tittle'> {experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'> {experience.date}</Typography>
                      <Typography variant='body2' className='timeline_descritpin'> {experience.descripition}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>

            </Grid>

            {/** eduction */}
            <Grid item sm={12} md={6}>
            
              <CustomTimeline title="Eduication History" icon={<SchoolIcon/>}>
                {resumeData.Eduication.map((experience) =>(
                  <TimelineItem >
                    <CustomTimeLineSepartor className='sperator_padding'>
                      <TimelineDot variant='outlined' className='timeline_dot'>

                      </TimelineDot>
                    </CustomTimeLineSepartor>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_tittle'> {experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'> {experience.date}</Typography>
                      <Typography variant='body2' className='timeline_descritpin'> {experience.descripition}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>

            </Grid>
            
          </Grid>
        </Grid>
    </Grid>

    {/*  services */}
    <Grid container className="section ">
        <Grid item className='section_title mb_30'  >
                  <span></span>
                  <h6 className='section_title_text'>Clients work with</h6>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body1' className='aboutme_text mb_30'>{resumeData.clients}</Typography>
        </Grid>

        <Grid item sm={12} md={6}>
        <figure className='cleint_image'>
            <img src={require('../../assets/images/ww.com.png')} alt=''/>
        </figure>
                  
        </Grid>
        <Grid item sm={12} md={6}>
        <figure className='cleint_image'>
            <img src={require('../../assets/images/pwc.png')} alt=''/>
        </figure>
        </Grid>
    </Grid>

    </>
  )
}

export default Resume