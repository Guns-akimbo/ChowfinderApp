const { VITE_End_Point } = import.meta.env;
import Logo from "../assets/Logo.jpg";
import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
import bb from "../assets/bb.jpg";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import Detailpage from "./DetailPage";
import { useState, useEffect, useLayoutEffect } from "react";
import Meals from "./Meals";
import Drinks from "./Drinks";
import Proteins from "./Proteins";
import { useParams, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [meal, setmeal] = useState(true);
  const { restaurantId } = useParams();
  const [data, setData] = useState([]);
  const [categoryload, setcategoryload] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function fetchMenu() {
    try {
      // console.log("started");
      // console.log(restaurantId);
      const response = await axios.get(
        `${VITE_End_Point}/rest/getone/${restaurantId}`
      );

      // console.log(response?.data.restaurant);
      // console.log("ended");
      setData(response?.data.restaurant);
    } catch (error) {
      console.log("Error fetching menu:", error);
      console.log("error");
    }
  }

  // this api is to get one

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
   
    console.log(categories)
  }, []);

  useEffect(() => {
    // console.log(categoryload);
  }, [categoryload]);

  const menuList = [
    {
      path: `/menu/${restaurantId}`,
      ...categories[0],
    },
    {
      path: `/menu/${restaurantId}/proteins`,
      ...categories[1],
    },
    {
      path: `/menu/${restaurantId}/drinks`,
      ...categories[2],
    },
  ];

  //

  // console.log(menuList)

  return (
    <main className="menu">
      <div className="arrowback">
        <NavLink to="/" className="arr">
          <BsArrowLeft className="arrowleft" />
          <p>Resturants</p>
        </NavLink>
      </div>

      <section className="menulist-lord">
        <div className="menulist-lordholder">
          <main className="restuarant-lord">
            <img src={data?.profileImage} alt="" />
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
            <h3>Opening Time :1am-12pm</h3>
          </div>
          <span className="foodcategory">
            {menuList.map((i) => (
              <NavLink
                style={{ textDecoration: "red" }}
                // we are sending  the id which is the category id {id} to the meals,proteins and drinks page
                to={`${i.path}`}
                className={({ isActive }) => (isActive ? "active" : null)}
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
                element={<Meals restaurantId={restaurantId} {...categories[0]}/>}
              />
              <Route
                path="/proteins"
                element={<Proteins restaurantId={restaurantId} {...categories[1]}/>}
              />
              <Route
                path="/drinks"
                element={<Drinks restaurantId={restaurantId} {...categories[2]} />}
              />
            </Routes>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Menu;
