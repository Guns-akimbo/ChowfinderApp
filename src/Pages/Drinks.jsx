const { VITE_End_Point } = import.meta.env;
import React, { useState,useEffect } from "react";
import amaa from "../assets/amaa.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Drinks({restaurantId,_id}) {

  // const{categoryId}=useParams()
  console.log(_id,) 

  const [loading, setloading] = useState(false);
  const [drinks, setdrinks] = useState([]);


  const meals = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      const res = await axios.get(
        `${VITE_End_Point}/${_id}/category-specific/${restaurantId}`
      );
      console.log(res?.data);
      setloading(false);
      setdrinks(res?.data);
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
       { drinks?.map((i) => ( 
         <Link
         to={`/detail/${_id}/${restaurantId}/${i?._id}`}
         style={{ textDecoration: "none", color:"black"}}
         key={i._id}
           className="foodcard">
          <div className="leftcard">
            <h2>{i?.name}</h2>
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

export default Drinks;
