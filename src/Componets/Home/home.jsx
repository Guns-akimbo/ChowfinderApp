import React, { useState, useEffect } from "react";
import "./home.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Howwework from "./howwework/Howwework";
import Restaurant from "./featureReataurant/Restaurant";
import Grow from "./GrowBuisness/Grow";
import Review from "./review/Review";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import food from "../../assets/food.svg";
import HashLoader from "react-spinners/HashLoader";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


function Home() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [locationRestaurants, setLocationRestaurants] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://chowfinder.onrender.com/api/locations/get-all/"
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data && data.data && data.data.length > 0) {
        setLocations(data.data.map((item) => item.name));
        // Create an object to store restaurants for each location
        const restaurantsByLocation = {};
        data.data.forEach((locationData) => {
          restaurantsByLocation[locationData.name] = locationData.restaurants;
        });
        setLocationRestaurants(restaurantsByLocation);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSelectButtonClick = () => {
    if (!selectedLocation) {
      setTimeout(() => {
        Swal.fire({
          text: "Please select Location",
          timer: 1500, 
          timerProgressBar: true,
          showConfirmButton: false, 
        });
      });
    } else {
      setShowPopup(true);
    }
   
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const filteredRestaurants = selectedLocation
    ? locationRestaurants[selectedLocation] || []
    : [];

  return (
    <>
      <Header />
      <div className="home">
        <section className="home-wrapper">
          <div className="firstview">
            <main className="search">
              <div className="slogan">
                <h4>
                  <span>You</span> Crave,<span> We</span> Deliver
                </h4>
                <p>
                  Your Local Restaurant Guide that
                  <br />
                  lets you satisfy that craving.
                </p>
              </div>
              <div className="search-restaurant">
                <section className="select-restaurant">
                {loading ? (
                <HashLoader color={"#FD8D14"} loading={loading} size={50} />
              ) : (           
                  <select
                    name="location"
                    id="location"
                    onChange={handleLocationChange}
                    placeholder="select Location"
                    defaultValue={selectedLocation}
                  >
                    <option value="" disabled hidden>
                      Select Location
                    </option>
                    {locations?.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
  )}
                </section>
                <button
                  className="select-search"
                  onClick={handleSelectButtonClick}
                  // disabled={!selectedLocation}
                >
                  Select Restaurant
                </button>
              </div>
              <p className='Trusted-by'>Trusted by our various Customers in Lagos </p>
            </main>
            <div>
              {/* Restuarant Popup */}
              {showPopup && (
                <div className="Restuarantlisting1">
                  <div className="Restuarantlistingll-wrapper">
                    <section className="rap">
                      <main className="Restuarantlisting-header">
                        <h4>Available Restaurants</h4>{" "}
                        <AiFillCloseCircle onClick={handleClose} />
                      </main>
                      <main className="Restuarantlisting-holder">
                        {filteredRestaurants?.map((restaurant) => (
                          <NavLink
                            style={{ textDecoration: "none", color: "76787b" }}
                            className="Restaurant"
                            key={restaurant._id}
                            to={`/menu/${restaurant?._id}`}
                          >
                            <main className="Restaurant-wrapper">
                              <div className="Restaurant-image">
                                <img
                                  src={restaurant?.profileImage}
                                  alt="food"
                                />
                              </div>
                              <div className="Restaurant-name">
                                <h4>{restaurant?.businessName}</h4>
                                <p>{restaurant?.address}</p>
                              </div>
                              <div className="Restaurant-btn">
                                <button>See more</button>
                              </div>
                            </main>
                          </NavLink>
                        ))}
                      </main>
                    </section>
                  </div>
                </div>
              )}
            </div>
            <main className="bacckima">
              <img src={food} alt="" />
            </main>
          </div>
        </section>
      </div>

      <Howwework />
      <Restaurant />
      <Grow />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
