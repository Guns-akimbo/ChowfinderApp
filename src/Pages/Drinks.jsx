import React from 'react'
import amaa from "../assets/amaa.jpg"


function Drinks() {
  return (
      <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                 Olajesu
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div> 
  )
}

export default Drinks