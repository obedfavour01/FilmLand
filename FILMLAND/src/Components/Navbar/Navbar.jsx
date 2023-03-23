import React from 'react'
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="logo">
                    <img src="images/tv.png" alt="" />

                    <a>FilmLand</a>
            </div>
        </div>
        <div className="center">
            <div className="inputField">
                <input type="text" placeholder='What do you want to watch '/>
                <SearchIcon style={{width:"18px"}}/>
            </div>
        </div>
        <div className="right">
            <div className="userName">
                        <h3 className="fullName">Hi, Obed</h3>
                        <MenuIcon style={{width:"18px"}}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar