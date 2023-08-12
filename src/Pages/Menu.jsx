const { VITE_End_Point } = import.meta.env;
import Logo from "../assets/Logo.jpg";
import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
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

const Menu = () => {
  const [meal, setmeal] = useState(true);
  const { restaurantId } = useParams();
  const [data, setData] = useState([]);
  const [categoryload, setcategoryload] = useState(false);
  const [categories, setCategories] = useState([]);

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
    <main className="Bigdiv">
      <header className="head">
        <section className="headwrap">
          <div className="Logodiv">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="signindiv">
            <NavLink to="/Cart" className="cartround">
              <BsCart2 className="carthead" />
            </NavLink>
            <div className="cartround">
              <BsPerson className="carthead" />
            </div>
          </div>
        </section>
      </header>
      <div className="arrowback">
        <div className="arr">
          <BsArrowLeft className="arrowleft" />
          <p>Resturants</p>
        </div>
      </div>

      <section className="menulist">
        <div className="leftmenu">
          <section className="topmenusection">
            <img src={data?.profileImage} alt="" />
          </section>
          <section className="midmenusection">
            <div className="leftmid">
              <div className="leftmidder">
                <h1>{data?.businessName}</h1>
                <h4>{data?.description} </h4>
              </div>
            </div>
            <div className="rightmid">
              <div className="rightermid">
                <h4>Delivery</h4>
                <p>Pickup</p>
              </div>
            </div>
          </section>
          <div className="timesection">
            <h3>
              Opening Time <br /> 1am-12pm
            </h3>
            <span className="foodcategory">
             
              {menuList.map((i) => (
                <NavLink
                style={{ textDecoration: "red" }}
                  // we are sending  the id which is the category id {id} to the meals,proteins and drinks page 
                  to={`${i.path}/${i._id}`}
                  className={({ isActive }) => (isActive ? "active" : null)}
                  key={i._id}
                >
                  <h5>{i?.title}</h5>
                </NavLink>
              ))}
              
            </span>
          </div>
          <section className="downmenusection">
            <Routes>
              <Route path="/:categoryId" element={<Meals restaurantId={restaurantId}  />} />
              <Route path="/proteins/:categoryId" element={<Proteins  restaurantId={restaurantId} />} />
              <Route path="/drinks/:categoryId" element={<Drinks  restaurantId={restaurantId} />} />          
            </Routes>
          </section>
        </div>

        <div className="rightmenu">
          <h3>Your Order</h3>
          <span className="clearBtn">
            <p>X</p>
          </span>
          <div className="cartcard">
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>{" "}
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>
            <div className="cartfiller">
              <h1>
                Title:chivta <br /> <p>Price:2500</p>
              </h1>
              <span className="Addcartfiller">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </span>
            </div>
          </div>
          <div className="delivery">
            <h2>Choose Address</h2>
          </div>
          <div className="totalorder">
            <h2>Sub total(1 item)</h2>
            <h2>Total: 2500</h2>
          </div>
          <div className="orderBtn">
            <button className="Viewcart">Place your order</button>
          </div>
        </div>
      </section>
      <section className="mobile-cartlink">
        <p>proceed to order (three)item</p>
        <p>item total price</p>
      </section>
    </main>
  );
};

export default Menu;
