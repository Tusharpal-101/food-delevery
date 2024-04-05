import './Footer.css'
import { assets } from '../../assets/assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            alias error distinctio, inventore a at? Maiores dolores excepturi
            sit, harum neque inventore a, aliquid labore reiciendis pariatur qui
            hic exercitationem.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li> delivery</li>
            <li> privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GETIN TOUCH</h2>
          <ul>
            <li>+91 897-911-1558</li>
            <li> tpal@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 C Tomato .com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
