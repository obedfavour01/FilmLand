import React, { useEffect, useState } from 'react'
import './Arrival.scss'
import { useRef } from 'react';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import { fetchFailure, fetchStart, fetchSuccess } from '../../Redux/GetLastestSlice';
// import {REACT_APP_MOVIEDB3_KEY} from process.env
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';




const Arrival = () => {

      const dispatch = useDispatch()
      const latestMovies = useSelector(state => state.Latest)


  useEffect(() => {

    const fetchLatest = async() => {
  
      dispatch(fetchStart())
      try{
  
        const latestmoviesRes = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=13c9a9791d7d59a57540277fecacb44b&language=en-US&page=1')
        dispatch(fetchSuccess(latestmoviesRes.data))
        console.log(latestMovies)
      }
      catch(e){
        dispatch(fetchFailure(e))
          console.log(e.message)
      }
  
    }
  
    fetchLatest()
  },[])






  return (
    <div className="arrival">
      
        <div className="titleBox">
          <h3 className="mainTitle">New Arrivals</h3>
          <small>See more &gt; </small>
        </div>

        <Carousel>
          {

          latestMovies && latestMovies.data.results.map((latestMovie) => 
          
           (

            <Card key ={latestMovie.id} {...latestMovie}/>
          ))
          }
        </Carousel>
      
   

    </div>
  )
}

export default Arrival