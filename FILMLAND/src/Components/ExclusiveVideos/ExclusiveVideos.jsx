import React from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import './ExclusiveVideos.scss'

const ExclusiveVideos = () => {
  return (
    <div className='videos'>

        <div className="titleBox">
          <h3 className="mainTitle">Exclusive Videos</h3>
          <small>See more &gt; </small>
        </div>

        <Carousel type = 'video'>
            <Card type = 'video'/>
         

        </Carousel>

        {/* 
        <Carousel>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </Carousel>
        
        */}


    </div>
  )
}

export default ExclusiveVideos