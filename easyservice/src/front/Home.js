import React from 'react'
import '../style/Home.css'
import Offer from '../Components/OfferJob'

const Home = () => (

  <div>
    <div>
      <div class="flex-container">
        <div class="home-wrapper">
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