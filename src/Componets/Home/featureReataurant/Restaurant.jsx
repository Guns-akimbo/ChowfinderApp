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
      imageUrl: "https://i.pinimg.com/564x/de/86/63/de86635bb2e79a03987be6055bd5c2ee.jpg",
    },

    {
        id: 2,
        name: "Delicious Bistro",
        cuisine: "Italian",
        address: "123 Main Street",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://i.pinimg.com/564x/d7/89/25/d78925086bda3cd52808cba1ff6b84a3.jpg",
      },

      {
        id: 3,
        name: "Seafood Sensations",
        cuisine: "Seafood",
        address: "789 Elm Street",
        city: "Orlando",
        rating: 4.3,
        imageUrl: "https://i.pinimg.com/564x/de/4e/84/de4e847ae8a29dad173ae15070940c2f.jpg",
      },
   
      {
        id: 4,
        name: "Delicious Bistro",
        cuisine: "Italian",
        address: "123 Main Street",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://i.pinimg.com/564x/f9/54/15/f95415a481f37fc74b629aa06d8ca260.jpg",
      },

      {
        id: 5,
        name: "Spicy Noodle House",
        cuisine: "Asian",
        address: "456 Elm Avenue",
        city: "Los Angeles",
        rating: 4.2,
        imageUrl: "https://i.pinimg.com/564x/60/ce/67/60ce67f19f77dbff1e81e530d53a0e52.jpg",
      },
          
    {
        id: 6,
        name: "AFROFUSION FEAST",
        cuisine: "Italian",
        address: "19 Wilmer Crescent , Olodi Apapa, Ajeromi Ifelodun, Lagos",
        city: "New York",
        rating: 4.5,
        imageUrl: "https://i.pinimg.com/564x/27/24/64/272464ccc9bb1b1f8e5df723f6c34bce.jpg",
      },

     {
      id: 7,
      name: "BEANY DELIGHT",
      cuisine: "Japanese",
      address: " 71 idowu street off Wilmer market Lagos",
      city: "San Francisco",
      rating: 4.8,
      imageUrl: "https://i.pinimg.com/564x/9d/0e/b4/9d0eb4af52b90ebc6c8b22c6efc90e77.jpg",
    },
    {
      
        id: 8,
      name: "WARMTH AND FLAVOR BUUKKA",
      cuisine: "Mexican",
      address: "123 festac Road, Lagos Nigeria",
      city: "Chicago",
      rating: 4.0,
      imageUrl: "https://i.pinimg.com/564x/de/7c/ef/de7cef031f15ff99ce105034c6ab9bc4.jpg",
    },
    {
      
      id: 9,
      name: "FUMBY’S KITCHEN",
      cuisine: "American",
      address: "150, Freedom Way, Eto-Osa, Lekki Lagos Nigeria",
      city: "Miami",
      rating: 4.7,
      imageUrl: "https://i.pinimg.com/564x/e2/20/fb/e220fb32f973d4d0ad2c99cbca636c88.jpg",
    },
    {
      id: 10,
      name: "The Veggie Patch",
      cuisine: "Vegetarian",
      address: "321 Cedar Avenue",
      city: "Seattle",
      rating: 4.3,
      imageUrl: "https://i.pinimg.com/564x/5a/78/ac/5a78acff72a491faa50ce6fdd401f0b7.jpg",
    },
    {
      id: 11,
      name: "Pasta Paradise",
      cuisine: "Italian",
      address: "789 Elm Street",
      city: "Boston",
      rating: 4.6,
      imageUrl: "https://i.pinimg.com/564x/cd/a0/31/cda031fc5029e04c5ef40dd824e8b49d.jpg",
    },
    {
      id: 12,
      name: "Thai Spice",
      cuisine: "Thai",
      address: "345 Oak Avenue",
      city: "Houston",
      rating: 4.4,
      imageUrl: "https://i.pinimg.com/564x/7c/d3/c6/7cd3c6dd0644b10bd4967486da328dd1.jpg",
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