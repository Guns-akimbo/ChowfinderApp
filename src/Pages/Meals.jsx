const { VITE_End_Point } = import.meta.env;
import React, { useState, useEffect } from "react";
import amaa from "../assets/amaa.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Color } from "@rc-component/color-picker";

function Meals({ restaurantId,_id }) {
  // const { categoryId } = useParams();
  const [loading, setloading] = useState(false);
  const [meal, setmeals] = useState([]);

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
      setloading(false);
    }
  };

  useEffect(() => {
    if(_id !== undefined)
    meals();
    console.log("call")
  }, [_id]);
  // by setting _id as dependencies we are telling useffect to hold the meals  till there a change or till category id is ready  
  // if statement is preventing the meals api from running if its undefined.


  return (
    <>
      {meal?.map((i) => (
        <Link
          to={`/detail/${_id}/${restaurantId}/${i._id}`}
          className="foodcard"
          key={i._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="leftcard">
            <h2>{i?.name}</h2>
            <h4>{i?.foodDesc}</h4>
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
