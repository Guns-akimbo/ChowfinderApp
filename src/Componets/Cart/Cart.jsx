const { VITE_End_Point } = import.meta.env;
import "./Cart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Header from "../Header/Header"

function Cart({}) {
  // const [loading, setloading] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };
  const [loading, setloading] = useState(false);
  const [loadings, setloadings] = useState(false);
  const [cartData, setCartData] = useState([]);
  const[total,setTotal]=useState("")
  const[cashback,setcashBack]=useState("")
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
      console.log(res.data)
      setTotal(res.data.grandTotal);
      setcashBack(res.data.cashBack)
      console.log(res.data.user)
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  console.log(cartData);
  // console.log(total)

  const addToCart = async (mealId) => {
    try {
      console.log(mealId);
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
      getCartData();
      console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
  };
  const removeItem = async (mealId) => {
    try {
      console.log(mealId);
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
      getCartData();
      console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
  };

  // const deleteItem = async (mealId) => {
  //   try {
  //       console.log(mealId)
  //     setloadings(true);
  //     const cartItem = {
  //       menuItemId: mealId,
  //     };
  //     const token = JSON.parse(localStorage.getItem("User"))?.token;
  //     const res = await axios.delete(`${VITE_End_Point}/delete-from-cart/`, cartItem, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     getCartData()
  //     console.log(res);
  //     setloadings(false);
  //   } catch (err) {
  //     console.log(err);
  //     setloadings(false);
  //   }
  // };

  const deleteItem = async (menuItemId) => {
    try {
      setloadings(true);

      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.delete(`${VITE_End_Point}/delete-from-cart/`, {
        data: {
          menuItemId: menuItemId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getCartData();
      console.log(res);
      setloadings(false);
    } catch (err) {
      console.log(err);
      setloadings(false);
    }
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
                  <div className="Cart-itemHoldereach" key={i?._id}>
                    <div className="Cart-itemHeaderdesc">
                      <main className="descimage">
                        <img src={i?.itemImage} />
                      </main>
                      <main className="itemdescrition">{i?.itemName}</main>
                    </div>
                    <div className="Cart-itemHeaderquantity">
                      <div
                        className="increase"
                        onClick={() => addToCart(i?.menu)}
                      >
                        +
                      </div>
                      <div className="itemnumber">{i?.quantity}</div>
                      <div
                        className="decrease"
                        onClick={() => removeItem(i?.menu)}
                      >
                        -
                      </div>
                    </div>
                    <div className="Cart-itemHeaderprice">{i?.itemPrice}</div>
                    <div className="Cart-itemHeadertotalprice">
                      {i?.itemTotal}
                    </div>
                    <div className="Cart-itemHeaderremove">
                      <div className="remove-item" onClick={()=>deleteItem(i?.menu)} >X</div>
                 
                    </div>
                  </div>
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
                <div className="paynow">Order Now</div>
              </main>
            </main>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
