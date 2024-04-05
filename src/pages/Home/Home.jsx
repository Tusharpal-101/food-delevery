// Home.

import { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/explore-menu/ExploreMenu'
import './Hme.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/App-download/Appdownload'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    </div>
  )
}

export default Home
