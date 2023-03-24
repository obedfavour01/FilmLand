import './Card.scss'

const Card = () => {
  return (
            <div className="card">
                <div className="card-container">
                    <div className="ImgContainer">
                        <img src="images/Poster-12.png" alt="Poster" />
                    </div>

                    <div className="DetailsBox">
                        <small className="year">USA,2016 - Current</small>
                        <h3 className="title">Stranger Things</h3>
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