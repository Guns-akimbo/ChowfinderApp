import React, { useState,useEffect } from 'react';
import './Restaurant.css';
import RestaurantCard  from '../restaurantCard/restaurantCard'

// Sample restaurant data (you can replace this with your actual data)
const allRestaurants = [
    {
      id: 1,
      name: "Delicious Bistro",
      cuisine: "Italian",
      address: "123 Main Street",
      city: "New York",
      rating: 4.5,
      imageUrl: "https://example.com/restaurant1.jpg",
    },

    {
        id: 2,
        name: "Delicious Bistro",
        cuisine: "Italian",
        address: "123 Main Street",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://example.com/restaurant1.jpg",
      },

      {
        id: 3,
        name: "Seafood Sensations",
        cuisine: "Seafood",
        address: "789 Elm Street",
        city: "Orlando",
        rating: 4.3,
        imageUrl: "https://example.com/restaurant12.jpg",
      },
   
      {
        id: 4,
        name: "Delicious Bistro",
        cuisine: "Italian",
        address: "123 Main Street",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://example.com/restaurant1.jpg",
      },

      {
        id: 5,
        name: "Spicy Noodle House",
        cuisine: "Asian",
        address: "456 Elm Avenue",
        city: "Los Angeles",
        rating: 4.2,
        imageUrl: "https://example.com/restaurant2.jpg",
      },

    {
        id: 6,
        name: "Delicious Bistro",
        cuisine: "Italian",
        address: "123 Main Street",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://example.com/restaurant1.jpg",
      },

     {
      id: 7,
      name: "Sushi Haven",
      cuisine: "Japanese",
      address: "789 Oak Road",
      city: "San Francisco",
      rating: 4.8,
      imageUrl: "https://example.com/restaurant3.jpg",
    },
    {
      id: 8,
      name: "Taco Delight",
      cuisine: "Mexican",
      address: "10 Maple Lane",
      city: "Chicago",
      rating: 4.0,
      imageUrl: "https://example.com/restaurant4.jpg",
    },
    {
      id: 9,
      name: "Gourmet Grill",
      cuisine: "American",
      address: "567 Pine Street",
      city: "Miami",
      rating: 4.7,
      imageUrl: "https://example.com/restaurant5.jpg",
    },
    {
      id: 10,
      name: "The Veggie Patch",
      cuisine: "Vegetarian",
      address: "321 Cedar Avenue",
      city: "Seattle",
      rating: 4.3,
      imageUrl: "https://example.com/restaurant6.jpg",
    },
    {
      id: 11,
      name: "Pasta Paradise",
      cuisine: "Italian",
      address: "789 Elm Street",
      city: "Boston",
      rating: 4.6,
      imageUrl: "https://example.com/restaurant7.jpg",
    },
    {
      id: 12,
      name: "Thai Spice",
      cuisine: "Thai",
      address: "345 Oak Avenue",
      city: "Houston",
      rating: 4.4,
      imageUrl: "https://example.com/restaurant8.jpg",
    },
 
  ];

  function Restaurant() {
    const restaurantsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPageCount = Math.ceil(allRestaurants.length / restaurantsPerPage);
  
    // Function to handle next page
    const goToNextPage = () => {
      setCurrentPage((prevPage) => (prevPage % totalPageCount) + 1);
    };
  
    // Function to handle previous page
    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => (prevPage === 1 ? totalPageCount : prevPage - 1));
    };
  
    // Auto-pagination with setInterval
    useEffect(() => {
      const intervalId = setInterval(goToNextPage, 10000); // Change restaurant every 3.5seconds
      return () => clearInterval(intervalId);
    }, []);
  
    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = allRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
  
    return (
      <div className='Restaurant-holder'>
        <div  className='Restaurantholder-wrapper'>
        <div className='Partners'>
          <h1>Restaurants Partners</h1>
        </div>
        <div className='all-restaurant'>
          {currentRestaurants.map((restaurant) => (
            <RestaurantCard 
            key={restaurant.id} {...restaurant} />


          ))}
        </div>
        </div>
      </div>
    );
  }
  
  export default Restaurant;