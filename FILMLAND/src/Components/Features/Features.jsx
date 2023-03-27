import React, { useState,useEffect } from 'react'
import './Features.scss'
import Card from '../Card/Card'
import '../Card/Card.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import { fetchFailure, fetchStart, fetchSuccess } from '../../Redux/MovieSlice';
import axios from 'axios';




const Features = () => {
  
  const[featured , setFeatured] = useState([])
  const[isLoading, setIsLoading] = useState(false);
  const[isMoved,setIsMoved] = useState(false)
  const[slideNumber, setSlideNumber] =  useState(0)
  const cardsRef = useRef();
  const dispatch = useDispatch();






useEffect(() => {

  const fetchtrending = async() => {

    dispatch(fetchStart())
    setIsLoading(true)
    try{

      const moviesRes = await axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=13c9a9791d7d59a57540277fecacb44b`)
      dispatch(fetchSuccess(moviesRes.data))

      setIsLoading(false)
    }
    catch(e){
      dispatch(fetchFailure(e))
        console.log(e.message)
    }

  }

  fetchtrending()
},[])
const Movies = useSelector(state => state.Movies)


  return (
    <div className="features">
      
        <div className="titleBox">
          <h3 className="mainTitle">Featured Movie</h3>
          <small>See more &gt; </small>
        </div>
            
        <Carousel>
                          {
                              Movies && Movies.data.results.map((movie,ind) => {

                              return(
                              
                            <Card  key = {ind} {...movie}/>
                              )
                              }
                              )
                          }
                     
        </Carousel>
         


    </div>
  )
}

export default Features