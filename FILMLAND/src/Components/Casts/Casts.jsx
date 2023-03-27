import './casts.scss'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchStart, fetchSuccess } from '../../Redux/CastSlice'
import { useDispatch,useSelector } from 'react-redux'

const Casts = () => {

      const[casts, setCasts] = useState({})


      const dispatch = useDispatch();
    const castsData = useSelector(state  => state.Casts)

useEffect(() => {

  const fetchCasts = async() => {
    dispatch(fetchStart())
    try{
       const castRes = await axios.get(`https://api.themoviedb.org/3/movie/603692/credits?api_key=13c9a9791d7d59a57540277fecacb44b&language=en-US`)
       dispatch(fetchSuccess(castRes.data))
      
    }
    catch(e){

        console.log(e.message)
    }

  }

  fetchCasts()
  console.log(castsData)
},[])




  return (
    <div className='casts'>
        <div className="titleBox">
            <h3 className="mainTitle">Featured Casts</h3>
            <small>See more &gt; </small>
        </div>
        <Carousel>
        {
          castsData.data.cast.map((cast) => (

            <Card key = {cast.id} {...cast} type = 'cast'/> 
          ))
        }
          </Carousel>
    </div>
  )
}

export default Casts