import React from 'react'
import '../style/Home.css'
import Offer from '../Components/OfferJob'

const Home = () => (

  <div>
    <div>
      <div className="flex-container">
        <div className="home-wrapper">
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
    </div>
  </div>
)

export default Home