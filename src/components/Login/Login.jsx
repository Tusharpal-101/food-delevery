// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets/assets'

const Login = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState('Login')

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-input">
          {currState === 'Login' ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === 'Sign up' ? 'create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />{' '}
          {/* Changed 'checkbx' to 'checkbox' */}
          <p>
            By continuing I agree to the terms of use and privacy policy
          </p>{' '}
          {/* Removed unnecessary characters */}
        </div>
        {currState === 'Login' ? ( // Added parentheses for the condition
          <p>
            Create a new Account?{' '}
            <span onClick={() => setcurrState('Sign up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account?{' '}
            <span onClick={() => setcurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default Login
