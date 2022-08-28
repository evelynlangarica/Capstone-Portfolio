import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList'


import Proj1 from '../assets/proj1.jpeg';
import Proj2 from '../assets/proj2.jpeg';
import Proj3 from '../assets/proj3.jpeg';
import Proj4 from '../assets/proj4.jpeg';
import Proj5 from '../assets/proj5.jpeg';
import Proj6 from '../assets/proj6.jpeg';


const data = [
  {
    id:1, 
    image: Proj1,
    title: 'Ecommerce',
    github: 'https://github.com/evelynlangarica/Ecommerce-version-2.git',
    demo: 'https://main.d1mecpdy0xntmm.amplifyapp.com/'
  },

  {
    id:2, 
    image: Proj2,
    title: 'Task Tracker App',
    github: 'https://github.com/evelynlangarica/TaskTracker.git',
    demo: ''
  },

  {
    id:3, 
    image: Proj3,
    title: 'Hope Hacks',
    github: 'https://github.com/evelynlangarica/Ecommerce-version-2.git',
    demo: 'https://github.com/LunaDGD/hopehacks/blob/master/public/index.html'
  },

  {
    id:4, 
    image: Proj4,
    title: 'Travel Website',
    github: 'https://github.com/evelynlangarica/Gateway-Revision-Project.git',
    demo: 'https://main.d18t90y55eyd3e.amplifyapp.com/'
  },

  {
    id:5, 
    image: Proj5,
    title: 'Calculator',
    github: 'https://github.com/evelynlangarica/CalculatorSelfProject.git',
    demo: 'https://main.d1nx6y7m74ffd8.amplifyapp.com/'
  },
  
  {
    id:6, 
    image: Proj6,
    title: 'Netflix Redesign',
    github: 'https://github.com/SammieStephenson/netflix-clone2.git',
    demo: 'https://main.d1zo0b1ozl1ups.amplifyapp.com/'
  },

]


const Projects =()=>{
    return (
        <section id='portfolio'>
          <div className="port">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            </div>

            <div className="container portfolio_container">
                {
                  data.map(({id,image,title,github,demo})=>{
                    return(
                      <article key={id} className='portfolio_item'>
                        <div className="portfolio_item-image">
                          <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio_item-cta">
                          <a href={github} className='btn-git' target='_blank'>Github</a>
                          <a href={demo} className=' btn-live' target='_blank'>Live Demo</a>
                        </div>
                      </article>
                    )
                  })
                }
            </div>

            
        </section>
    )
}

export default Projects