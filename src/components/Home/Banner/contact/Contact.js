import React from 'react'
import '../contact/Contact.css'

function Contact() {
  return (
    <div>
         <h1 className='well'>Join the Community!</h1>
     <h2 className='pss'>Get your jumpstart guide! </h2>
      <div className='contact'>
        <div className='img' >
            <div className='contact-1'></div>
            <div className='contact-2'> <img src={require('../images/img13.jpg')} alt="" /></div>
            <div className='contact-3'></div>
        </div>

        <div className='contact-4'>
         <h2  className='contact-h'>Stay in the loop!</h2>
         <p className='contact-p'>Our mission is to make a nourishing plant-<br/>based lifestyle accessible to everyone.<br/> <br/>
           We make videos, recipes, and nutrition articles to <br/> make you feel excited and supported .</p>
          
           <input type="text" placeholder='Name'  className='input'/><br/><br/>
           <input type="text" placeholder='Email Addres'    className='input'/><br/>
           <input type="checkbox"  className='check' />     I agree to receive this newsletter.<br/>
           
           <button className='button'>Learn More</button>
        </div>
      
      </div> 
    </div>
  )
}

export default Contact