import React from 'react'
import "../styles/Home.css"
import Eve from '../assets/EvePort.jpg';


function Home() {
  return (
   
    <div className="home">
          <div class="area" >
       
       <ul class="circles">
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
           </ul>
      <div className="about">
        <h2> Hi, My Name is Evelyn</h2>
        <div className="eve"> <img src={Eve}  />
        </div>
        
        
        <div className="prompt"> <p>A Full Stack Coding Apprentice with a passion for learning.</p>
      
          </div>
          </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
       

        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span> HTML, CSS,SCSS , JavaScript, ReactJS</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span> NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>

          <li className="item">
            <h2>Other</h2>
            <span> AWS, AGILE, Java(Learning)</span>
          </li>

          <li className="item">
            <h2>Certifications</h2>
            <span> AWS Certified Cloud Practitioner</span>
          </li>
          


        </ol>
      </div>
    </div>
   
  )
}

export default Home;



