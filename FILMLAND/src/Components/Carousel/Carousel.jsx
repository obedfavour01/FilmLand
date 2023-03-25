import React, { useState } from 'react'
import './Carousel.scss'
import Card from '../Card/Card'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';

const Carousel = () => {


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
    if(direction === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1)
      cardsRef.current.style.transform = `translateX(${-358+ distance}px)`
      
    }
    console.log(distance)
  }
  
  return (
    <div>

    <div className="cards-wrapper">
        <ArrowBackIosNewIcon 
          className='sliderArrow left' 
          onClick = {() => handleClick("left")}
          style ={{display:!isMoved && "none"}}/>

        <div className="cards" ref={cardsRef}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <ArrowForwardIosNewIcon className='sliderArrow right' onClick = {() => handleClick("right")}/>
    
      </div>
    </div>
  )
}

export default Carousel