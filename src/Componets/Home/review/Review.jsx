import React, { useState } from 'react';
import './Review.css';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';
import ReviewCard from './reviewCard';

function Review() {

  // Sample review data (you can replace this with your actual data)
  const review = [
  {
    id: 1,
    name: "Oche Daniel",
    cuisine: "Delicious food, fast delivery, loved it!",
    imageUrl: "https://www.vokaal.com/cdn/shop/products/j7sK4578CI_360x.jpg?v=1688326105",
  },

  {
      id: 2,
      name: "Faith jullian",
      cuisine: "Great variety, excellent service, highly recommended.",
      imageUrl: "https://www.vokaal.com/cdn/shop/products/c1DnUnXGdl_360x.jpg?v=1684719013",
    },

    {
      id: 3,
      name: "Victor Ezo",
      cuisine: "Tasty dishes, reasonable prices, satisfied customer.",
      imageUrl: "https://images.pexels.com/photos/2876486/pexels-photo-2876486.png",
    },
 
    {
      id: 4,
      name: "Grace Ekele",
      cuisine: "Quick search, convenient app, found nearby gems.",
      imageUrl: "https://images.pexels.com/photos/7623432/pexels-photo-7623432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 5,
      name: "Elizabeth Ene",
      cuisine: "Yummy options, easy ordering, repeat customer.",
      imageUrl: "https://images.pexels.com/photos/5622659/pexels-photo-5622659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

  {
      id: 6,
      name: "Deborah omechea",
      cuisine: "Fast checkout, accurate orders, happy customer.",
      imageUrl: "https://images.pexels.com/photos/10490281/pexels-photo-10490281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

   {
    id: 7,
    name: "Priscila Almeida",
    cuisine: "Impressed with service, will order again.",
    imageUrl: "https://images.pexels.com/photos/12812476/pexels-photo-12812476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Isaac Innalegwu",
    cuisine: "Fresh ingredients, flavorful dishes, top-notch quality.",
    imageUrl: "https://media.wbur.org/wp/2020/07/Emmanuel-1000x776.jpg",
  },
  {
    id: 9,
    name: "Martin Luther",
    cuisine: "Efficient delivery, consistent quality, value for money.",
    imageUrl: "https://www.nobelprize.org/images/king-13174-content-portrait-mobile-tiny.jpg",
  },
  {
    id: 10,
    name: "Monica Barnett",
    cuisine: "Smooth delivery, great presentation, impressed with packaging.",
    imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_52/3437201/utenzi.jpg",
  },
  {
    id: 11,
    name: "Nude Barre",
    cuisine: "Extensive choices, user-friendly interface, love this app.",
    imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2020_52/3437196/erin.jpg",
  },
  {
    id: 12,
    name: "Threasa Francis",
    cuisine: "Reliable recommendations, satisfied taste buds, delightful experience.",
    imageUrl: "https://www.telegraph.co.uk/content/dam/women/2021/10/28/C7A9898-Edit_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=960",
  },]

  const reviewsPerPage = 2; // Number of reviews to display per page
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPageCount = Math.ceil(review.length / reviewsPerPage);

// Function to handle next page
const goToNextPage = () => {
  setCurrentPage((prevPage) => (prevPage % totalPageCount) + 1);
};

// Function to handle previous page
const goToPreviousPage = () => {
  setCurrentPage((prevPage) => (prevPage === 1 ? totalPageCount : prevPage - 1));
};



  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  return (
    <div className='Review'>
      <div className='Review-header'>
        <h1>What our Customers say</h1>
      </div>
      <div className='Review-container'>
       
        <main className='main-reviewholder'>
        <main className='left-arrow' onClick={goToPreviousPage}>
          <VscArrowCircleLeft size={40} />
        </main>
          {review.slice(indexOfFirstReview, indexOfLastReview).map((review) => (
            <ReviewCard name={review.name} imageUrl={review.imageUrl} cuisine={review.cuisine} key={review.id} />
          ))}
           <main className='right-arrow' onClick={goToNextPage}>
          <VscArrowCircleRight size={40} />
        </main>
        </main>
       
      </div>
    </div>
  );
}

export default Review;
