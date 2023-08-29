const { VITE_End_Point } = import.meta.env;
import Logo from "../assets/Logo.jpg";
import { BsCart2, BsPerson, BsArrowLeft, BsCart4 } from "react-icons/bs";
import bb from "../assets/bb.jpg";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import Detailpage from "./DetailPage";
import { useState, useEffect } from "react";
import Meals from "./Meals";
import Drinks from "./Drinks";
import Proteins from "./Proteins";
import { useParams, Route, Routes } from "react-router-dom";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const Menu = () => {
  const [meal, setmeal] = useState(true);
  const { restaurantId } = useParams();
  const [data, setData] = useState([]);
  const [categoryload, setcategoryload] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [loading, setloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("User"))?.token;

  async function fetchMenu() {
    try {
      // console.log("started");
      // console.log(restaurantId);
      setloading(true);
      const response = await axios.get(
        `${VITE_End_Point}/rest/getone/${restaurantId}`
      );

      // console.log(response?.data.restaurant);
      // console.log("ended");
      setData(response?.data.restaurant);
      setloading(false);
    } catch (error) {
      console.log("Error fetching menu:", error);
      console.log("error");
      setloading(false);
    }
  }

  const getCategories = async () => {
    try {
      setcategoryload(true);
      const res = await axios.get(`${VITE_End_Point}/all-categories`);
      // console.log(res?.data);
      setcategoryload(false);
      setCategories(res?.data);
    } catch (err) {
      console.log(err);
      setcategoryload(false);
    }
  };

  useEffect(() => {
    fetchMenu();
    getCategories();
  }, []);

  useEffect(() => {
    // console.log(categories)
  }, []);

  useEffect(() => {
    // console.log(categoryload);
  }, [categoryload]);

  const menuList = [
    {
      path: `/menu/${restaurantId}/`,
      ...categories[0],
    },
    {
      path: `/menu/${restaurantId}/proteins/`,
      ...categories[1],
    },
    {
      path: `/menu/${restaurantId}/drinks/`,
      ...categories[2],
    },
  ];

  const getCartData = async () => {
    try {
      setloading(true);
      const res = await axios.get(`${VITE_End_Point}/get-cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartData(res.data.items);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <main className="menu">
      <div className="arrowback">
        <NavLink to="/" className="arr">
          <BsArrowLeft className="arrowleft" />
          <p>Resturants</p>
        </NavLink>
        <div className="Navsign">
          <NavLink to="/Cart" className="custom-link">
            <BsCart4 size={20} />
            <div className="cartlenght">{cartData.length}</div>
          </NavLink>
        </div>
      </div>
      <section className="menulist-lord">
        <div className="menulist-lordholder">
          <main className="restuarant-lord">
            {/* <img src={data?.profileImage} alt="" /> */}
            {!data?.profileImage ? (
              <p>Loading.... </p>
            ) : (
              <img src={data?.profileImage} alt="Loadinggg" />
            )}
          </main>
          <div className="restuarant-lordname">
            <div className="restuarant-lordname1">
              <h1>{data?.businessName}</h1>
              <h4>{data?.description} </h4>
            </div>
            <div className="rightermid">
              <p className="delivery">Delivery</p>
              <p className="pickup">Pickup</p>
            </div>
          </div>

          <div className="timesection">
            <h3>Opening Time :8am-9pm</h3>
          </div>
          <span className="foodcategory">
            {menuList.map((i) => (
              <NavLink
                style={{ textDecoration: "none" }}
                // we are sending  the id which is the category id {id} to the meals,proteins and drinks page
                to={`${i.path}`}
                className={({ isActive }) => (isActive ? "active" : "active2")}
                key={i._id}
              >
                <h5>{i?.title}</h5>
              </NavLink>
            ))}
          </span>
          <section className="downmenusection">
            <Routes>
              <Route
                path="/"
                element={
                  <Meals restaurantId={restaurantId} {...categories[0]} />
                }
              />
              <Route
                path="/proteins"
                element={
                  <Proteins restaurantId={restaurantId} {...categories[1]} />
                }
              />
              <Route
                path="/drinks"
                element={
                  <Drinks restaurantId={restaurantId} {...categories[2]} />
                }
              />
            </Routes>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Menu;
