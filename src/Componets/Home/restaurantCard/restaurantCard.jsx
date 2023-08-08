import React from 'react'
import './restaurantCard.css'
import amaa from "../../../assets/amaa.jpg"

function RestaurantCard(props) {

 
  return (
    <section className='Restaurant'>
        <main className='Restaurant-wrapper'>
            <div className='Restaurant-image'>
            <img src={amaa}alt="food"/></div>
            <div className='Restaurant-name'>
                <h4>{props.name}</h4>
                <p>{props.address}</p>
            </div>
            <div className='Restaurant-btn'>
                <button>See more</button>
            </div>
        </main>
       </section>
  )
}


export default RestaurantCard