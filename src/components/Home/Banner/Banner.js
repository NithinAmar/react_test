import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../Home/Banner/Banner.css'

function Banner() {
  return (
    <div>
         <Carousel showThumbs={false} showIndicators={false} showArrows={true} showStatus={false} className='banner'>
                <div>
                    <img src={require('./images/img2.jpg')} />
                    <div className='text'>
                      <h1 className='text-1'>Videos</h1>
                       <p>Enjoy our collection lifestyle and recipes videos</p>
                    </div>
                </div>
                <div>
                    <img src={require('./images/img3.jpg')} />
                    <div className='text'>
                      <h1 className='text-1'>Videos</h1>
                       <p>Enjoy our collection lifestyle and recipes videos</p>
                    </div>      
                </div>
                <div>
                    <img src={require('./images/img4.jpg')} />
                    <div className='text'>
                      <h1 className='text-1'>Videos</h1>
                       <p>Enjoy our collection lifestyle and recipes videos</p>
                    </div>
                    
                </div>
           <div>
                <img src={require('./images/img5.jpg')} />
                <div className='text'>
                      <h1 className='text-1'>Videos</h1>
                       <p>Enjoy our collection lifestyle and recipes videos</p>
                    </div>
                    
                </div>
                <div>
                <img src={require('./images/img6.jpg')} />
                <div className='text'>
                      <h1 className='text-1'>Videos</h1>
                       <p>Enjoy our collection lifestyle and recipes videos</p>
                    </div>
                    
                </div>
            </Carousel>
          
    </div>
  )
}

export default Banner