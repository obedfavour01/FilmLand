import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_IMG_URL } from '../../request'
import { useSelector,useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar'
import './Header.scss'
import { fetchFailure, fetchStart, fetchSuccess } from '../../Redux/HeaderSlice';
const Header = () => {

const[main, setMain] = useState({})
const[id, setId] = useState(603692)
const dispatch = useDispatch();
const headerData = useSelector(state  => state.Header)

const Movies = useSelector(state => state.Movies)



useEffect(() => {
  
  const fetchHeaderMovie = async() => {

  //Randomizing the data
    const arr = Movies.data.results;
    let val = Math.floor(Math.random() * arr.length)
    setId(arr[val].id)
    
  dispatch(fetchStart())
  try{

    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=13c9a9791d7d59a57540277fecacb44b&language=en-US`)
    .then(res => res.json())
    .then( data => {

      dispatch(fetchSuccess(data))
      setMain(data)
           console.log(data)
    })
} 
catch(e){
  dispatch(fetchFailure(e))
    console.log(e.message)
}

}

fetchHeaderMovie()
},[])

const backgroundStyle = {
  backgroundImage: `url(https://image.tmdb.org/t/p/original${main.backdrop_path})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat:  "no-repeat",


}


  return (
    <div className='header' style = {backgroundStyle}>

             <Navbar/>
            
            <div className="textbox">
                <div className="bigtext">
                    <h1>{main.original_title}</h1>
                </div>
                <div className="rating">
                    <div className="rating-left">
                            <img src="images/imdb.png" alt="" className="imdb-icon" />
                            <h3 className="value">{main.vote_average}/10</h3>
                    </div>
                    <div className="rating-right">
                             <img src="images/tomatoes.png" alt="" className="imdb-icon" />
                            <h3 className="value">97%</h3>
                    </div>
                </div>
               
                <p className="desc">J{main.overview}
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