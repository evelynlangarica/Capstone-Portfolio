import React from 'react'
import Proj1 from '../assets/proj1.jpeg';
import Proj2 from '../assets/proj2.jpeg';
import Proj3 from '../assets/proj3.png';





const Portfolio =()=>{
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Proj1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
                </article>
            </div>
        </section>
    )
}