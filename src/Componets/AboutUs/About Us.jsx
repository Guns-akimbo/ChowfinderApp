
import React from 'react'
import './about.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import team from "../../assets/team.png"
import phonebag from "../../assets/phonebag.png"


function Aboutus() {
  return (
    <>
   
     <Header/>
    <div className='About-us'>
      <div className='aboutus-wrappper'>
<main className='first-half'>
  <div className='first-half-image'>
<img src={team} alt="teamphoto"/>
  </div>
  <div className='first-half-text'>
    <span className='first-half-header'>About ChowFinder</span>
    <span className='first-half-content-text'>Welcome to ChowFinder, your go-to app for discovering the best restaurants in your area. We are passionate about connecting food enthusiasts with delicious meals from a diverse range of restaurants. Our mission is to be the smartest
and most helpful food platform in existence.
</span>
  </div>
</main>
<main className='second-half'>
  <div className='second-half-text'>
    <span className='second-half-text-header'>What’s In Store For The Future?</span>
    <span className='second-half-text-content'>ChowFinder  has grand plans to be Nigeria’s most loved go to local restaurants  player. It aims to be the most accessible platform 
re-shaping the meaning of convenience. </span>
  </div>
  <div className='second-half-image'>
<img src={phonebag} alt="teamphoto"/>
  </div>
</main>
</div>
<Footer/>
    </div>
    </>
  )
}

export default Aboutus