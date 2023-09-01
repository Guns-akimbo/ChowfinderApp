const { VITE_End_Point } = import.meta.env;
import "./Cart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Cartcomp from "./Cartcomp";
import Header from "../Header";
import Emptycart from "./Emptycart";
import { useNavigate } from "react-router-dom";

function Cart() {
  // const { register: addressRegister,
  //   formState: { errors },
  //  } = useForm({
  //   resolver: yupResolver(addressSchema),
  // });
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setloading] = useState(false);
  const [reload, setReload] = useState(false);
  const [loadings, setloadings] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState("");
  const [cashback, setcashBack] = useState("");
  const token = JSON.parse(localStorage.getItem("User"))?.token;
  const name = JSON.parse(localStorage.getItem("User"))?.fullName;
  const email = JSON.parse(localStorage.getItem("User"))?.email;
  const [address, setAddress] = useState({
    customerAddress: "",
    cashBackToggle: "",
  });
  useEffect(() => {
    setAddress({
      ...address,
      cashBackToggle: isChecked,
    });
  }, [isChecked]);
  // console.log(address);
  useEffect(() => {
    // console.log(loading);
  }, [loading]);

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
      setloading(false);
      // console.log("cart length", cartData.length);
    } catch (err) {
      // console.log(err);
      setloading(false);
      setCartData([]);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);
  useEffect(() => {
    getCartData();
  }, [reload]);

  const addToCart = async (mealId) => {
    try {
      // console.log(mealId, "add Api");
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
      Swal.fire({
        text: "Item Increased ",
        timer: 1000, // Automatically close after 2 seconds
        timerProgressBar: true, // Show a progress bar for the timer
        showConfirmButton: false, // Hide the "OK" button
      });
      getCartData();
      // console.log(res);
      setloadings(false);
    } catch (err) {
      // console.log(err);
      setloadings(false);
    }
  };
  const removeItem = async (mealId) => {
    try {
      // console.log(mealId, "decerase Api");
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
      Swal.fire({
        text: "Item reduced from cart ",
        timer: 1000, // Automatically close after 2 seconds
        timerProgressBar: true, // Show a progress bar for the timer
        showConfirmButton: false, // Hide the "OK" button
      });
      getCartData();
      // console.log(res);
      setloadings(false);
    } catch (err) {
      // console.log(err);
      setloadings(false);
    }
  };

  const deleteItem = async (mealId) => {
    // console.log(mealId, "delete Api");
    try {
      setloadings(true);
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      const res = await axios.delete(`${VITE_End_Point}/delete-from-cart/`, {
        data: {
          menuItemId: mealId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        Swal.fire({
          text: "item cleared successfully",
          timer: 1000, // Automatically close after 2 seconds
          timerProgressBar: true, // Show a progress bar for the timer
          showConfirmButton: false, // Hide the "OK" button
        });
        // getCartData();
        // console.log(res.data.cart.items);
        setCartData(res.data.cart.items);
        // navigate("/Cart")
      }
      // console.log(res);
      setloadings(false);
    } catch (err) {
      // console.log(err);
      setloadings(false);
    }
  };

  const debounce = (fn, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  const cashBack = async () => {
    try {
      setloading(true);
      const token = JSON.parse(localStorage.getItem("User"))?.token;
      // const adjustedTotal = total - cashback;
      const res = await axios.post(`${VITE_End_Point}/place-order/`, address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        title: "Congratulations Customer",
        text: "Order Successfull,Check your mail for more details.",
        timer: 5000,
        timerProgressBar: true, // Show a progress bar for the timer
        showConfirmButton: false, // Hide the "OK" button
      });
      // console.log(res);
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (err) {
      // console.log(err);
      setErrorMessage(err.response.data.error);
      setloading(false);
    }
  };

  const gateway = () => {
    const adjustedCashback = total - cashback; // Subtract total from cashback
    // console.log(adjustedCashback);

    if (adjustedCashback >= 0) {
      try {
        const refVal = "Chowfinderapp" + Math.random() * 1000;
        window.Korapay.initialize({
          key: "pk_test_csW94hvov9XAdvuKzQu7wqpkP3Dsn7h6uWLxaURT",
          reference: `${refVal}`,
          amount: isChecked ? adjustedCashback : total,
          currency: "NGN",
          customer: {
            name: name,
            email: email,
          },
          notification_url: "https://example.com/webhook",
          onSuccess: function (data) {
            data?.reference === refVal ? cashbackApi() : null;
          },
        });
      } catch (err) {
        // console.log(err);
      }
    } else {
      // If adjustedCashback is negative, show an error message
      setErrorMessage("Not enough cashback to cover the total amount.");
    }
  };

  const cashbackApi = debounce(cashBack, 2000);

  const payment = () => {
    gateway();
  };

  return (
    <>
      <Header />
      <div className="Cart">
        <p style={{ color: "red", marginBlockStart: "5px" }}>{errorMessage}</p>
        <h4>Your Order</h4>
        {loading ? (
          <HashLoader color={"#FD8D14"} loading={loading} size={70} />
        ) : cartData?.length === 0 ? (
          <Emptycart />
        ) : (
          <section className="Cart-wrapper">
            <div className="Cart-items">
              <div className="Cart-itemswrapper">
                <article className="Cart-itemHeader">
                  <div className="Cart-itemHeaderdesc">Description</div>
                  <div className="Cart-itemHeaderquantity">Quantity</div>
                  <div className="Cart-itemHeaderprice">Item-Price</div>
                  <div className="Cart-itemHeadertotalprice">
                    Sub-Total Price
                  </div>
                  <div className="Cart-itemHeaderremove">Remove</div>
                </article>
                <article className="Cart-itemHolder">
                  {cartData?.map((i) => (
                    <div className="Cart-itemHoldereach" key={i?._id}>
                      <div className="Cart-itemHeaderdesc">
                        <main className="descimage">
                          {loadings ? (
                            <div className="loader"></div> // Display loading spinner
                          ) : (
                            <img src={i?.itemImage} alt="" />
                          )}
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
                        <div
                          className="remove-item"
                          onClick={() => deleteItem(i?.menu)}
                        >
                          X
                        </div>
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

                {isChecked && (
                  <div className="toataprice">
                    <p className="blur">Cashback:</p>
                    <p> {cashback}</p>
                  </div>
                )}

                <div>
                  <p>Use cashback?</p>

                  <div
                    onClick={handleToggle}
                    style={{
                      padding: "3px",
                      borderRadius: "10px",
                      backgroundColor: "#fbb57c",
                      width: "70px",
                      display: "flex",
                      justifyContent: isChecked ? "flex-end" : "flex-start",
                      cursor: "pointer", // Add cursor pointer for better interactivity
                    }}
                  >
                    <div
                      style={{
                        transition: "ease-in-out 0.5s",
                        height: "16px",
                        width: "16px",
                        backgroundColor: isChecked ? "#81C784 " : "white",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  {/* <label
   
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <span className="slider"></span>
                  </label> */}
                </div>
              </main>
              <main className="finallyo">
                <main className="finallyo-header">Enter delivery Address:</main>
                <main className="finallyo-container">
                  <div className="addressholder">
                    <input
                      type="text"
                      name="customerAddress"
                      value={address?.customerAddress}
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          customerAddress: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    className={
                      address?.customerAddress.length < 10
                        ? "paynowdisabled"
                        : "paynow"
                    }
                    disabled={
                      address?.customerAddress.length < 10 ? true : false
                    }
                    style={{ cursor: "pointer" }}
                    onClick={payment}
                  >
                    Order Now
                  </button>
                </main>
              </main>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Cart;
