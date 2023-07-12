import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';

import './Profile.css'
import CustomTimeline, { CustomTimeLineSepartor } from '../TimeLine/Timeline'
import resumeData from '../../utils/resumeData';
import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from '../Buttons/Button'
import GetAppIcon from '@mui/icons-material/GetApp';
import { urlFor, client } from '../../client';
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem >
    <CustomTimeLineSepartor />
    <TimelineContent className='timeline_content'>
      {link ? (<Typography className='timeline_text'>
        <span>{title}:</span> <a href={link} target="_self"> {text}</a>
      </Typography>) : (
        <Typography className='timeline_text'> {<span>{title}</span>} {text}</Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

function Profile() {
  const [HeaderImg, SetHeaderImg] = useState([]);
  const [HeaderName, SetHeaderName] = useState([]);

  useEffect(() => {
    const query = '*[_type == "Header"]';

    client.fetch(query).then((data) => {
      SetHeaderImg
        (data);
    });

    client.fetch(query).then((data) => {
      SetHeaderName
        (data);
    });
  }, []);

  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        {HeaderName.map((header, index) => (
          <Typography className='name'>{header.name}</Typography>
        ))}

        <Typography className='title'>{resumeData.title} </Typography>
      </div>

      <figure className='profile_image'>

        {/* <img src={require('../../assets/images/Image from iOS (2).jpg')} alt=''/> */}
        {HeaderImg.map((header, index) => (
          <img src={urlFor(header.imgUrl)} alt={header.name} />
        ))}
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonIcon />} >
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem title="Company" text={resumeData.company} />
          <CustomTimelineItem title="Address" text={resumeData.address} />
          <CustomTimelineItem title="Phone" text={resumeData.Phone} />

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>

      </div>
    </div>
  )
}

export default Profile