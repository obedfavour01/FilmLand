import React, { useEffect, useState,useRef } from 'react'
import './Carousel.scss'
import Card from '../Card/Card'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFailure, fetchStart, fetchSuccess } from '../../Redux/MovieSlice';

const Carousel = ({type,children}) => {

const dispatch = useDispatch();

const Movies = useSelector(state => state.Movies)

    const[isMoved,setIsMoved] = useState(false)
    const[slideNumber, setSlideNumber] =  useState(0)
    const cardsRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true)
    const distance = cardsRef.current.getBoundingClientRect().x - 100; 
  
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1)
      cardsRef.current.style.transform = `translateX(${358 + distance}px)`
    }
    if(direction === "right" && slideNumber < 15){
      setSlideNumber(slideNumber + 1)
      cardsRef.current.style.transform = `translateX(${-358+ distance}px)`
      
    }
  }


  return (
    <div>

    <div className="cards-wrapper">
        <ArrowBackIosNewIcon 
          className='sliderArrow left' 
          onClick = {() => handleClick("left")}
          style ={{display:!isMoved && "none"}}/>

        <div className="cards" ref={cardsRef}>
          {

            children
          }
         
        </div>
        <ArrowForwardIosNewIcon className='sliderArrow right' onClick = {() => handleClick("right")}/>
    
      </div>
    </div>
  )
}

export default Carousel