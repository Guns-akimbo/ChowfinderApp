const { VITE_End_Point } = import.meta.env;
import "./Pages.css";
import amaa from "../assets/amaa.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detailpage = ({}) => {
  const { categoryId, restaurantId, mealId } = useParams();
  const [loading, setloading] = useState();
  const [data, setdata] = useState([]);
  const [mealData, setMealData] = useState(null);

  console.log("Category ID:", categoryId);
  console.log("Restaurant ID:", restaurantId);
  console.log("mealId:", mealId);

  const getDetail = async () => {
    try {
      setloading(true);
      // catId/category-specific/:id
      const res = await axios.get(
        `${VITE_End_Point}/${categoryId}/category-specific/${restaurantId}`
      );
      // console.log(res?.data);
      setloading(false);
      const selectedMeal = res?.data.find((meal) => meal._id === mealId);
      setMealData(selectedMeal);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="popup">
      {mealData && (
        <div className="popwrap" key={mealData?._id}>
          <div className="popimage">
            <img src={mealData?.itemImage} alt="" />
          </div>
          <div className="poptext">
            <div className="poptextup">
              <span className="deleteBtn">
                <p>X</p>              
              </span>
              <span className="text">
                <h3>Meal: {mealData?.name}</h3>

                <h4>Description: {mealData?.foodDesc}</h4>
                <h5> ₦{mealData?.price}</h5>
              </span>
            </div>
            <div className="popupBtn">
              <span className="Addtocart">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
              <button className="Viewcart" onClick={addToCart} >Add to order </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detailpage;
