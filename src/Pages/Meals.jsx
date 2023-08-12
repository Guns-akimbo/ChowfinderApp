import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Meals() {
  const { restaurantId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.VITE_End_Point}/rest/getone/${restaurantId}`);
        setItems(response.data?.menuItems); // Update the key to the correct path in your response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    }

    fetchItems();
    console.log(data)
  }, [restaurantId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {items?.map((i) => (
            <div className="foodcard" key={i.id}>
              <div className="leftcard">
                <h2>{i.Name}</h2>
                <h4>{i.FoodDesc}</h4>
                <div className="pri">
                  <p>Price: {i.Price}</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={i.ItemImage} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Meals;
