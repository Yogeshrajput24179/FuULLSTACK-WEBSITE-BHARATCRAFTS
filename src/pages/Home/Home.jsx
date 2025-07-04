import React from 'react'
import './Home.css'
import Headers from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Headers></Headers>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <ProductDisplay category={category}></ProductDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home