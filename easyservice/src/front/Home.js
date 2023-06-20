import React from 'react'
import '../style/Home.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => (

  <div>
    <div>
      <Navbar />
      <div class="wrapper">
        <div class="box1">Un</div>
        <div class="box2">Deux</div>
        <div class="box3">Trois</div>
        <div class="box4">Quatre</div>
        <div class="box5">Cinq</div>
        <div class="box6">Six</div>
      </div>
      <Footer />
    </div>
  </div>
)

export default Home