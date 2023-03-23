import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>

             <Navbar/>
            
            <div className="textbox">
                <div className="bigtext"></div>
                <div className="rating"></div>
                <div className="description"></div>
                <div className="button"></div>
            </div>
            
    </div>
  )
}

export default Header