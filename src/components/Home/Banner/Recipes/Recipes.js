import React from 'react'
import '../../../Home/Banner/Recipes/Recipes.css'

function Recipes() {
  return (
    <div>
       <h1 className='recipes'>Latest Recipes</h1>
       <div className='recipe'>
        <div>
             <img src={require('../images/img7.jpg')} alt="" />
             <h2>Creamy Peanut Butter Jackfruit Noodles</h2>
        </div>
        <div>
             <img src={require('../images/img8.jpg')} alt="" />
             <h2>Sweet Potato Spiced Chili</h2>
        </div>
        <div>
             <img src={require('../images/img9.jpg')} alt="" />
             <h2>Pickled Red Onions</h2>
        </div>
       </div>

       <div className='recipe'>
        <div>
             <img src={require('../images/img10.jpg')} alt="" />
             <h2>Non-Alcoholic Mulled Wine</h2>
             </div>
        <div>
             <img src={require('../images/img11.jpg')} alt="" />
             <h2>Cinnamon-Spiced Orange & Thyme Mocktail</h2>
             </div>
        <div>
             <img src={require('../images/img12.jpg')} alt="" />
             <h2>Vegan Apple Pie</h2>
             </div>
       </div>
        <button>More</button>

    </div>
    

  )
}

export default Recipes