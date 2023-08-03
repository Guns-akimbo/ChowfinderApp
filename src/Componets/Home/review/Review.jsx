import React, { useState } from 'react';
import './Review.css';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';
import ReviewCard from './reviewCard';

function Review() {
  const reviewsPerPage = 2; // Number of reviews to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  // Sample review data (you can replace this with your actual data)
  const review = [
  {
    id: 1,
    name: "Delicious Bistro",
    cuisine: "Italian",
    address: "123 Main Street",
    city: "New York",
    rating: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
  },

  {
      id: 2,
      name: "Delicious Bistro",
      cuisine: "Italian",
      address: "123 Main Street",
      city: "New York",
      rating: 4.5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
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
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
    },

    {
      id: 5,
      name: "Spicy Noodle House",
      cuisine: "Asian",
      address: "456 Elm Avenue",
      city: "Los Angeles",
      rating: 4.2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
    },

  {
      id: 6,
      name: "Delicious Bistro",
      cuisine: "Italian",
      address: "123 Main Street",
      city: "New York",
      rating: 4.5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
    },

   {
    id: 7,
    name: "Sushi Haven",
    cuisine: "Japanese",
    address: "789 Oak Road",
    city: "San Francisco",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEjMwOIiug0sQ-DZRqS0rl0Sr_RoaDypfCQ&usqp=CAU",
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
  },]
  return (
    <div className='Review'>
      <div className='Review-header'>
        <h1>What our Customers say</h1>
      </div>
      <div className='Review-container'>
        <main className='left-arrow' onClick={goToPreviousPage}>
          <VscArrowCircleLeft size={40} />
        </main>
        <main className='main-reviewholder'>
          {review.slice(indexOfFirstReview, indexOfLastReview).map((review) => (
            <ReviewCard name={review.name} imageUrl={review.imageUrl} key={review.id} />
          ))}
        </main>
        <main className='right-arrow' onClick={goToNextPage}>
          <VscArrowCircleRight size={40} />
        </main>
      </div>
    </div>
  );
}

export default Review;
