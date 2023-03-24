import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>

             <Navbar/>
            
            <div className="textbox">
                <div className="bigtext">
                    <h1>John Wick 3 : Parabellum</h1>
                </div>
                <div className="rating">
                    <div className="rating-left">
                            <img src="images/imdb.png" alt="" className="imdb-icon" />
                            <h3 className="value">8.3/10</h3>
                    </div>
                    <div className="rating-right">
                             <img src="images/tomatoes.png" alt="" className="imdb-icon" />
                            <h3 className="value">97%</h3>
                    </div>
                </div>
               
                <p className="desc">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>
              
                <div className="button">
                    <img src="images/play.png" alt="" />
                    <h3>Watch Trailer</h3>
                </div>
              
            </div>
            
    </div>
  )
}

export default Header