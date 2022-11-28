import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about--page'>
      <div className='about--container'>
        <div className='about--details'>
          <h2>About us</h2>
          <p>
            Bluck is an e-commerce start-up located in Kenya.
          </p>
        </div>
        <div className='about--image'>
          <img 
            src="https://images.unsplash.com/photo-1608447714925-599deeb5a682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="about us" 
          />
        </div>
      </div>
    </div>
  )
}

export default About