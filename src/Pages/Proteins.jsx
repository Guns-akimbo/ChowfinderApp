const { VITE_End_Point } = import.meta.env;
import React from "react";
import amaa from "../assets/amaa.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Proteins({ restaurantId }) {
  const { categoryId } = useParams();

  console.log(categoryId,restaurantId);

  const [loading, setloading] = useState(false);
  const [proteins, setproteins] = useState([]);

  const meals = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      const res = await axios.get(
        `${VITE_End_Point}/${categoryId}/category-specific/${restaurantId}`
      );
      console.log(res?.data);
      setloading(false);
      setproteins(res?.data);
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
      {proteins.map((i) => (
        <Link 
        to={`/detail/${categoryId}/${restaurantId}/${i?._id}`}
         style={{ textDecoration: "none", color:"black"}}
         key={i._id}
        className="foodcard">
          <div className="leftcard">         
            <h4>{i?.foodDesc}</h4>
            <div className="pri">
              <p>{i?.price}</p>
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

export default Proteins;
