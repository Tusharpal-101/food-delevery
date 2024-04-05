import { useContext, useState } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets/assets'
import { StoreContext } from '../../contaxt/storecontaxt'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')

  const { getTotalCartAmount } = useContext(StoreContext) // Correct the context name
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          menu
        </a>
        <a
          href="#Appdownload"
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Signin</button>
      </div>
    </div>
  )
}

export default Navbar
