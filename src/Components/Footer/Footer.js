import React from 'react'
import "./Footer.css"
import resumeData from '../../utils/resumeData'
import { Typography } from '@mui/material'

function Footer() {
  return (
    <div className='Footer'>
      <div><Typography>{resumeData.name}</Typography> </div>
      <div>© 2023 Created with love</div></div>
  )
}

export default Footer