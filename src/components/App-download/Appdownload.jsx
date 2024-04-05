// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets/assets'

const Appdownload = () => {
  return (
    <div className="Appdownload" id="Appdownload">
      <p className="paragrap">
        For better Experience Download <br /> Tomoto App
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
