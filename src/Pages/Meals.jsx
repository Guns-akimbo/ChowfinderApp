const { VITE_End_Point } = import.meta.env;
import React, { useState, useEffect } from "react";
import amaa from "../assets/amaa.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Color } from "@rc-component/color-picker";

function Meals({ restaurantId }) {
  const { categoryId } = useParams();
  const [loading, setloading] = useState(false);
  const [meal, setmeals] = useState([]);

  console.log(categoryId, restaurantId);
  // console.log("meals")

  const meals = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      // To get all food for a specific category by a specific restaurant
      const res = await axios.get(
        `${VITE_End_Point}/${categoryId}/category-specific/${restaurantId}`
      );
      console.log(res?.data);
      setloading(false);
      setmeals(res?.data);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    meals();
  }, []);

  return (
    <>
      {meal?.map((i) => (
        <Link
          to={`/detail/${categoryId}/${restaurantId}/${i._id}`}
          className="foodcard"
          key={i._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="leftcard">
            <h2>{i?.name}</h2>
            {/* <h4>{i?.foodDesc}</h4> */}
            <div className="pri">
              <p>Price:{i?.price}</p>
            </div>
          </div>
          <div className="rightcard">
            <img src={i?.itemImage} alt="" />
          </div>
        </Link>
      ))}
    </>
  );
}

export default Meals;
