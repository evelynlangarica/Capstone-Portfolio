import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList'




//  function Projects() {
//   return (
//     <div className="projects">
//       <h1> My Projects</h1>
//       <div classname="projectList">
      

//       </div>
//     </div>
//   )
// }

// export default Projects;


// function Projects() {
//   return (
//     <div className="projects">
//       <h1> My Personal Projects</h1>
//       <div className="projectList">
//         {ProjectList.map((project, idx) => {
//           return (
//             <><container></container><><ProjectItem id={idx} name={project.name} image={project.image} />
//               <button> Hello</button></></>
            
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Projects;



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
    demo: ''
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
    demo: ''
  },

  {
    id:5, 
    image: Proj5,
    title: 'Calculator',
    github: 'https://github.com/evelynlangarica/CalculatorSelfProject.git',
    demo: ''
  },
  
  {
    id:6, 
    image: Proj6,
    title: 'Netflix Redesign',
    github: 'https://github.com/SammieStephenson/netflix-clone2.git',
    demo: ''
  },

]


const Projects =()=>{
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

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