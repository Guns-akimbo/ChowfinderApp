import React from "react";
import amaa from "../assets/amaa.jpg";

function Drinks({ drinks }) {
  return (
    <>
      {drinks?.map((i) => (
        <div className="foodcard">
          <div className="leftcard">
            <h2>{i?.name}</h2>
            <h4>{}</h4>
            <div className="pri">
              <p>Price:</p>
            </div>
          </div>
          <div className="rightcard">
            <img src={amaa} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Drinks;
