import React from "react";
import amaa from "../assets/amaa.jpg";
import { useParams } from "react-router-dom";


function Meals({  }) {

  const{id}=useParams()

  console.log(id)




  return (
    <>
      {/* {meals?.map((i) => ( */}
        {/* <div className="foodcard">
          <div className="leftcard">
            <h2>{i?.name}</h2>
            <h4>{i?.description}</h4>
            <div className="pri">
              <p>Price:{i?.price}</p>
            </div>
          </div>
          <div className="rightcard">
            <img src={i?.itemImage} alt=""/>
          </div>
        </div> */}
       {/* ))} */}
    </>
  );
}

export default Meals;
