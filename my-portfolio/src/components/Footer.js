import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
   <><div className="logo">
    

    </div>
    <div className="footer">
      <div className="name">
    <p class="name"> Evelyn Langarica</p>
    <p class="contact"> Contact </p>
    <p class="location"> Atlanta,Georgia</p>
    <p class = "phone">678-720-6970</p>
    <p class ="email">evelynlangarica@gmail.com</p>

    </div>
        <div className="socialMedia">
          <a href="https://github.com/evelynlangarica"
            className="github">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/evelyn-langarica/"
            className="linkedin">
            <LinkedInIcon />
           
          </a>

        </div>

        <p>&copy; 2022 evejlan</p>
      </div></>
  )
}

export default  Footer;

