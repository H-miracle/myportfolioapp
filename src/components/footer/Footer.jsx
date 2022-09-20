import './footer.css'
import { BsSlack } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"> MIRACLE</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://slack.com"><BsSlack /></a>
        <a href="http://twitter.com"><BsTwitter /></a>
        <a href="http://api.whatsapp.com/sned?phone=+233543976961"><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Miracle H All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer