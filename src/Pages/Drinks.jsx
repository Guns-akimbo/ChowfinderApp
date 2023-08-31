const { VITE_End_Point } = import.meta.env;
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsFillCartXFill } from "react-icons/bs";
import Swal from "sweetalert2";

function Drinks({ restaurantId, _id }) {
  // console.log(_id);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [drinks, setdrinks] = useState([]);

  const meals = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      const res = await axios.get(
        `${VITE_End_Point}/${_id}/category-specific/${restaurantId}`
      );
      // console.log(res?.data);

      setdrinks(res?.data);
      setloading(false);
    } catch (err) {
      // console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    if (_id !== undefined) meals();
    // console.log("call");
  }, [_id]);

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
      // console.log(res);
      Swal.fire({
        text: "Item added to cart successfully",
        timer: 2000, // Automatically close after 2 seconds
        timerProgressBar: true, // Show a progress bar for the timer
        showConfirmButton: false, // Hide the "OK" button
      });
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
      {loading ? (
        <p className="loader"></p>
      ) : (
        drinks?.map((i) => (
          <div
            style={{ textDecoration: "none", color: "black" }}
            key={i._id}
            className="foodcard"
          >
            <div className="leftcard">
              <span className="Cardnamed">
                <p className="Cardnamedb">{i?.name}</p>
                <p>Price:{i?.price}</p>
              </span>
              <div className="pri">
                <Link
                  to={`/detail/${_id}/${restaurantId}/${i?._id}`}
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
        ))
      )}
    </>
  );
}

export default Drinks;
