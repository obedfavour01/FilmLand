import Header from '../../Components/Header/Header'
import Features from '../../Components/Features/Features'
import Arrival from '../../Components/Arrivals/Arrival'
import Carousel from '../../Components/Carousel/Carousel'
import ExclusiveVideos from '../../Components/ExclusiveVideos/ExclusiveVideos'
import Casts from '../../Components/Casts/Casts'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Features/>
        <Arrival/>
        <ExclusiveVideos/>
        <Casts/>
        <Footer/>
    </div>
  )
}

export default Home