const { VITE_End_Point } = import.meta.env;
import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsCart4, BsFillCartXFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Meals({ restaurantId, _id }) {
  // const { categoryId } = useParams();
  const navigate=useNavigate()
  const [loading, setloading] = useState(false);
  const [meal, setmeals] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(_id, restaurantId);
  // console.log("meals")

  const meals = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      // To get all food for a specific category by a specific restaurant
      const res = await axios.get(
        `${VITE_End_Point}/${_id}/category-specific/${restaurantId}`
      );
      console.log(res?.data);
      setloading(false);
      setmeals(res?.data);
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data.message);
      setloading(false);
    }
  };

  useEffect(() => {
    if (_id !== undefined) meals();
    console.log("call");
  }, [_id]);

  // by setting _id as dependencies we are telling useffect to hold the meals  till there a change or till category id is ready
  // if statement is preventing the meals api from running if its undefined.

  const addToCart = async (mealId) => {
    try {
      setloading(true);
      const cartItem = {
        menuItemId: mealId, // mealId from the URL params
      };
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.post(`${VITE_End_Point}/add-to-cart/`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setTimeout(() => {
        Swal.fire({
          text: "Item added to cart successfully",
          timer: 2000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
      }, 2000);
      setloading(false);
    } catch (err) {
      console.log(err, "error");
      if (err?.response.data.message) {
        Swal.fire({
          icon: "error", // Show an error icon
          title: "Error",
          text: err?.response.data.message, // Display the error message
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/login");
      } else {
        Swal.fire({
          // icon: "error", // Show an error icon
          title: "Error",
          text: err?.response.data.error, // Display the error message
          timer: 4000,
          timerProgressBar: true,
        });
      }

      setloading(false);
    }
  };

  return (
    <>
      {/* <p style={{ color: "red", marginBlockStart: "5px" }}>{errorMessage}</p> */}
      {meal?.map((i) => (
        <div
          className="foodcard"
          key={i._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="leftcard">
            <span className="Cardnamed">
              <p className="Cardnamedb">{i?.name}</p>
              <p>Price:{i?.price}</p>
            </span>
            <div className="pri">
              <Link
                to={`/detail/${_id}/${restaurantId}/${i._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="addedBtn"> See More</button>
              </Link>

              <BsFillCartXFill
                className="added"
                onClick={() => addToCart(i._id)}
              />
            </div>
          </div>
          <div className="rightcard">
            <img src={i?.itemImage} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Meals;
