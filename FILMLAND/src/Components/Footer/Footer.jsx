import './Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="socialIcons">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <YouTubeIcon/>

            </div>
            <div className="copyright">
                <small>Condition of Use</small>
                <small>Privacy Policy</small>
                <small>Press Room</small>
            </div>
            <div className="date">
                    <small>&#169;2021 Movix</small>
            </div>
        </div>
    </div>
  )
}

export default Footer