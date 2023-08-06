import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoFastFoodOutline, IoRestaurantOutline } from 'react-icons/io5';
import {MdOutlineDeliveryDining } from 'react-icons/md';
import './Howwework.css'


function Howwework() {
  return (
    <div className='Howwework'>
           <div className='Howwework-wrapper'>
           <div className='how-we'><h4>How We Work</h4></div>
      <div className='how-we-contains'>
      <main className='about'>
          <article className='about-img'>< MdOutlineLocationOn size={50} color='#930F0F' /> </article>
          <article className='about-des'>
          <div className='how-des'><p>Select nearest Location</p></div>
          <div className='how-dir'><p>Use the select bar to explore various Location nearest to you.</p></div>
          </article>
        </main>

         <main className='about'>
          <article className='about-img'>< IoRestaurantOutline size={50} color='#930F0F' /> </article>
          <article className='about-des'>
          <div className='how-des'><p>Find Restaurants</p></div>
          <div className='how-dir'><p>Browse the select bar to discover and select preferred restaurant names.</p></div>
          </article>
        </main>

          <main className='about'>
          <article className='about-img'><IoFastFoodOutline size={50} color='#930F0F' /></article>
          <article className='about-des'>
          <div className='how-des'><p>Order Your Food</p></div>
          <div className='how-dir'><p> 
          Choose from the restaurant's menu: Meals, protein, and drinks.</p></div>
          </article>
        </main>
        <main className='about'>
          <article className='about-img'><MdOutlineDeliveryDining size={50} color='#930F0F' /></article>
          <article className='about-des'>
          <div className='how-des'><p>Delivery or Pickup</p></div>
          <div className='how-dir'><p>Review order, items, fees. Choose delivery or pickup, as preferred.</p></div></article>
                </main>
         </div>
              
            </div>
    </div>
  )
}

export default Howwework