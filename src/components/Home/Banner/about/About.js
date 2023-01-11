import React from 'react'
import '../about/About.css'

function About() {
  return (
    <div> 
     <h1 className='well'>Wellcome Friends!</h1>
     <h2 className='pss'> psst: we're happy you're here! </h2>
      <div className='about'>
        <div className='img' >
            <div className='about-1'></div>
            <div className='about-2'> <img src={require('../images/img13.jpg')} alt="" /></div>
            <div className='about-3'></div>
        </div>

        <div className='about-4'>
         <h2  className='about-h'>We are Pick Up Limes!</h2>
         <p className='about-p'>Our mission is to make a nourishing plant-<br/>based lifestyle accessible to everyone.<br/> <br/><br/>
           We make videos, recipes, and nutrition articles to <br/> make you feel excited and supported in<br/> introducing more plant-based foods into your  <br/>meals, snacks, desserts, and everything in-<br/>between!</p>
           <button className='butt'>Learn More</button>
        </div>

      </div>
   
    </div>
  )
}

export default About