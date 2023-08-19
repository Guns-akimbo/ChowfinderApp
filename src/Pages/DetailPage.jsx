const { VITE_End_Point } = import.meta.env;
import "./Pages.css";
import amaa from "../assets/amaa.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
// import 'sweetalert2/dist/sweetalert2.min.css';

const Detailpage = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { categoryId, restaurantId, mealId } = useParams();
  const [loading, setloading] = useState();
  const [loadings, setloadings] = useState();
  const [data, setdata] = useState([]);
  const [mealData, setMealData] = useState(null);
  const navigate=useNavigate()

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

  const addToCart = async () => {
    try {
      setloadings(true);
      const cartItem = {
        menuItemId: mealId, // mealId from the URL params
      };
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.post(`${VITE_End_Point}/add-to-cart/`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setTimeout(() => {
        Swal.fire({
          text: "Item added to cart successfully",
          timer: 2000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
      }, 2000);
      setloadings(false);
    } catch (err) {
      console.log(err,"error");
      if(err?.response.data.message){
        Swal.fire({
          icon: "error", // Show an error icon
          title: "Error",
          text: err?.response.data.message, // Display the error message
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/login")  
      }else{
        Swal.fire({
          // icon: "error", // Show an error icon
          title: "Error",
          text: err?.response.data.error, // Display the error message
          timer: 4000,
          timerProgressBar: true,
        });
      }
      
      setloadings(false);
    }
  };

  // In the code above, the cartItem object contains the menuItemId extracted from the URL params (mealId).
  // The Authorization header is added to the request using the user's token stored in localStorage.

  useEffect(() => {
    getDetail();
    // addToCart()
  }, []);

  const handleClose = () => {
    setMealData(null);
    window.history.back();
  };

  return (
    <div className="popup">
      {mealData && (
        <div className="popwrap" key={mealData?._id}>
          <div className="popimage">
            <img src={mealData?.itemImage} alt="" />
          </div>
          <div className="poptext">
            <div className="poptextup">
              <span className="deleteBtn" onClick={handleClose}>
                <p>X</p>
              </span>
              <span className="text">
                <h3>Meal: {mealData?.name}</h3>

                <h4>Description: {mealData?.foodDesc}</h4>
                <h5> ₦{mealData?.price}</h5>
              </span>
            </div>
            <div className="popupBtn">
              {loadings ? (
                <HashLoader color={"#FD8D14"} loadings={loadings} size={50} />
              ) : (
                <button className="Viewcart" onClick={addToCart}>
                  Add to order
                </button>
              )}
            </div>
            <p style={{color:"red",marginBlockStart:"5px"}}>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detailpage;
