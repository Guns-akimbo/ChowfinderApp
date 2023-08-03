import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoFastFoodOutline, IoRestaurantOutline } from 'react-icons/io5';
import {MdOutlineDeliveryDining } from 'react-icons/md';
import './Howwework.css'


function Howwework() {
  return (
    <div className='Howwework'>
      <h4>How We Work</h4>
      <div className='Howwework-wrapper'>

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
          <div className='how-dir'><p>Use the select bar to explore various restaurant options and pick restaurant names of choice</p></div>
          </article>
        </main>
        <main className='about'>
          <article className='about-img'><IoFastFoodOutline size={50} color='#930F0F' /></article>
          <article className='about-des'>
          <div className='how-des'><p>Order Your Food</p></div>
          <div className='how-dir'><p> Select your desired items from the restaurant's menu, including starters, main courses, Protein and Drinks.</p></div>
          </article>
        </main>
        <main className='about'>
          <article className='about-img'><MdOutlineDeliveryDining size={50} color='#930F0F' /></article>
          <article className='about-des'>
          <div className='how-des'><p>Delivery or Pickup</p></div>
          <div className='how-dir'><p>Review your order summary, including the selected items and any charges.
Choose between delivery or pickup options based on your preference.</p></div></article>
                </main>

      </div>
    </div>
  )
}

export default Howwework