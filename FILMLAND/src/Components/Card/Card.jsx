import { useSelector } from 'react-redux'
import { BASE_IMG_URL } from '../../request'
import './Card.scss'


const Card = ({type,title,poster_path,backdrop_path,release_date}) => {


    const mine = useSelector(state => state.Movies)
   
  return (
            <div className= 'card'>
                <div className="card-container">
                    <div className= {type == 'video' ? 'ImgContainer video' :  type = 'cast' ?  'ImgContainer Casts' : 'ImgContainer'}>
                        {
                                type == 'cast' ?

                                <img src={`https://image.tmdb.org/t/p/original/${profile_path}`}/>
                                :
                             <img src={`${BASE_IMG_URL}/${poster_path}`} alt="Poster"  loading='lazy'/>
                        }
                    </div>

                    <div className="DetailsBox" style={{display: type == 'cast' && 'none'}}>
                        <small className="year">USA {release_date} </small>
                        <h3 className="title">{title}</h3>
                        <div className="rating">
                            <div className="left-rating">
                                    <img src="images/imdb.png" alt="imdb" />
                                    <small>8.6/10</small>
                            </div>

                            <div className="right-rating"> 
                                     <img src="images/tomatoes.png" alt="tomatoes" />
                                    <small>97%</small> 
                            </div>

                        </div> 

                        <div className="genre">
                                <small>Action,Adventure,Horror</small>
                        </div>
                    
                    </div>
                </div>
            </div>
  )
}

export default Card