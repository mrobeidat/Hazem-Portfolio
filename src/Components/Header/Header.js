import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, withRouter } from "react-router-dom";
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
import NearMeIcon from '@mui/icons-material/NearMe';
import "./Header.css"

const Header = (props) => {

  const pathname = props.location.pathname
  function setColor(newColor) {
    document.documentElement.style.setProperty('--main-color', newColor);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" sticky='top' className='header'>
        <Nav.Link as={NavLink} to="/">
          <Navbar.Brand className='header_home'>
            <HomeIcon />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={NavLink} to="/" className={pathname === '/' ? "header_link_active" : "header_link"}>Resume</Nav.Link>
          </Nav>
          <div>
            <button className='coloerd-button yellow' onClick={() => setColor('#ffc500')}></button>
            <button className='coloerd-button green' onClick={() => setColor('green')}></button>
            <button className='coloerd-button blueviolet' onClick={() => setColor('blueviolet')}></button>
            <button className='coloerd-button red' onClick={() => setColor('red')}></button>
            <button className='coloerd-button pink' onClick={() => setColor('pink')}></button>
          </div>
          <div className='header_right'>
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer" >{resumeData.socials[key].icon}</a>
            ))}

            <CustomButton text={"Hire me"} icon={<NearMeIcon />}></CustomButton>
          </div>

        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}


export default withRouter(Header);