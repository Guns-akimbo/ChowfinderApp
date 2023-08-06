import React from 'react'
import {AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';

import'./RestuarantList.css'
import RestaurantCard from '../restaurantCard/restaurantCard';



    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
    };




    <>
    {isVisible && (
    <div className='Restuarantlisting1'  >
        <div className='Restuarantlistingll-wrapper'>
            <section className='rap'>
            <main className='Restuarantlisting-header'>
                <h4>Available Restaurant</h4> <AiFillCloseCircle onClick={handleClose} />
            </main>
            <main className='Restuarantlisting-holder'>
            <section className='Restaurant'>
        <main className='Restaurant-wrapper'>
            <div className='Restaurant-image'>
            <img src={restaurant.profileImage} alt="food"/>
            </div>
            <div className='Restaurant-name'>
                <h4>{restaurant.businessName}</h4>
                <p>{restaurant.address}</p>
            </div>
            <div className='Restaurant-btn'>
                <button>See more</button>
            </div>
        </main>
       </section>
            </main>
            </section>
            
        </div>
    </div>
       )}
       </>
