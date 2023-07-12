import React from 'react'
import { Button } from '@mui/material'

import "./Button.css"


function CustomButton({text , icon}) {
  return (
    <div>
        <Button className='custom_btn' endIcon={icon? (<div className='btn_icon_container'>{icon}</div>) :null }>
            <span className="btn_text">{text}</span>
        </Button>
    </div>
  )
}

export default CustomButton