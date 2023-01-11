import React from 'react'

function Articles() {
  return (
    <div>
     
         <h1 className='recipes'>Latest Articles</h1>
        <div className='videos'>
            <div> 
                <img src={require('../images/img14.jpg')} alt="" />
                <h3>One-Pot Meals</h3>
                <p className='video'>simple + wholesome </p>
            </div>
            <div>
                <img src={require('../images/img15.jpg')} alt="" />
                <h3>What I Eat for Brain Health </h3>
                <p className='video'>foods to boost mood</p>
            </div>
            <div>
               <img src={require('../images/img16.jpg')} alt="" />
               <h3>Designing a Simple Life</h3>
                <p className='video'>minimalist habits</p>
            </div>
        </div>

        <div className='videos'>
            <div> 
                <img src={require('../images/img14.jpg')} alt="" />
                <h3>How to Make the Perfect Pie at Home</h3>
                <p className='video'>egg + dairy-free </p>
            </div>
            <div>
                <img src={require('../images/img15.jpg')} alt="" />
                <h3>Takeout Classics</h3>
                <p className='video'>but better + faster! </p>
            </div>
            <div>
               <img src={require('../images/img16.jpg')} alt="" />
               <h3>What to EAT for HEALTHY SKIN</h3>
                <p className='video'>science-backed! </p>
            </div>
        </div>
        <button>More</button>
    </div>
  )
}

export default Articles