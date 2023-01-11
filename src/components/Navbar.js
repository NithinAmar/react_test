import React from 'react'
import '../components/Navbar.css'

function Navbar() {
  return (
    <div>
          <nav className='nav'>
            <ul>
                <li>Recipes</li>
                <li>Articles</li>
                <li>Videos</li>
            </ul>
            <div className='logo'><img src={require('./Home/Banner/images/img1.webp')} alt="" /> </div>
            <ul>
                <li>Shop</li>
                <li>About</li>
               
            </ul>
          </nav>
    </div>
  )
}

export default Navbar