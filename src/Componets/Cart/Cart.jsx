const { VITE_End_Point } = import.meta.env;
import "./Cart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Cartcomp from "./Cartcomp";
// import Header from "../Header/Header"

function Cart() {
  // const [loading, setloading] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };
  const [loading, setloading] = useState(false);
  const [loadings, setloadings] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState("");
  const [cashback, setcashBack] = useState("");
  const token = JSON.parse(localStorage.getItem("User"))?.token;

  const getCartData = async () => {
    try {
      setloading(true);
      const res = await axios.get(`${VITE_End_Point}/get-cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartData(res.data.items);
      // console.log(res.data);
      setTotal(res.data.grandTotal);
      setcashBack(res.data.cashBack);
      // console.log(res.data.user);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  // console.log(cartData);
  // console.log(total)

  const addToCart = async (mealId) => {
    try {
      console.log(mealId, "add Api");
      setloadings(true);
      const cartItem = {
        menuItemId: mealId,
      };
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.post(`${VITE_End_Point}/add-to-cart/`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        Swal.fire({
          text: "increased",
          timer: 1000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
      }, 1000);
      getCartData();
      // console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
  };
  const removeItem = async (mealId) => {
    try {
      console.log(mealId, "decerase Api");
      setloadings(true);
      const cartItem = {
        menuItemId: mealId,
      };
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.post(
        `${VITE_End_Point}/remove-from-cart/`,
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTimeout(() => {
        Swal.fire({
          text: "Item reduced from cart ",
          timer: 1000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
      }, 1000);
      getCartData();
      console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
  };

  const deleteItem = async (mealId) => {
    console.log(mealId, "delete Api");
    try {
      setloadings(true);
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.delete(`${VITE_End_Point}/delete-from-cart/`, {
        data: {
          menuItemId: [mealId],
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        Swal.fire({
          text: "item cleared successfully",
          timer: 1000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
      }, 1000);
      getCartData();
      console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
  };

  const gateway = () => {
    try {
      const refVal = "colin" + Math.random() * 1000;
      window.Korapay.initialize({
        key: "pk_test_csW94hvov9XAdvuKzQu7wqpkP3Dsn7h6uWLxaURT",
        reference: `${refVal}`,
        amount: total,
        currency: "NGN",
        customer: {
          name:name,
          email:email,
        },
        notification_url: "https://example.com/webhook",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const payment = () => {
    gateway();
    //cashbackAPI
  };

  return (
    <>
      <div className="Cart">
        <h4>Your Order</h4>
        <section className="Cart-wrapper">
          <div className="Cart-items">
            <div className="Cart-itemswrapper">
              <article className="Cart-itemHeader">
                <div className="Cart-itemHeaderdesc">Description</div>
                <div className="Cart-itemHeaderquantity">Quantity</div>
                <div className="Cart-itemHeaderprice">Item-Price</div>
                <div className="Cart-itemHeadertotalprice">Sub-Total Price</div>
                <div className="Cart-itemHeaderremove">Remove</div>
              </article>
              <article className="Cart-itemHolder">
                {cartData.map((i) => (
                  <Cartcomp
                    {...i}
                    addToCart={addToCart}
                    deleteItem={deleteItem}
                    removeItem={removeItem}
                    key={i?._id}
                    setloadings={setloadings}
                  />
                ))}

                <hr />
              </article>
            </div>
          </div>
          <div className="Cart-detailaction">
            <main className="Cart-detailactionholder">
              <div className="rewardshow">
                <p className="blur">Total: </p>
                <p>{total}</p>
              </div>

              <div className="toataprice">
                <p className="blur">Cashback:</p>
                <p> {cashback}</p>
              </div>
              <div>
                <p>Use cashback?</p>
                <label
                  className={`toggle-container ${isChecked ? "checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </main>
            <main className="finallyo">
              <main className="finallyo-header">Enter delivery Address:</main>
              <main className="finallyo-container">
                <div className="addressholder">
                  <input type="text" />
                </div>
                <div className="paynow" style={{cursor:"pointer"}} onClick={payment}>
                  Order Now
                </div>
              </main>
            </main>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
