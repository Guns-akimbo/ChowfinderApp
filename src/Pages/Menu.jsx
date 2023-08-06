import Logo from "../assets/Logo.jpg";
import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
import bb from "../assets/bb.jpg";
// import amaa from "../assets/amma.jpg"
import amaa from "../assets/amaa.jpg";
import "./Pages.css";
import { NavLink } from "react-router-dom";

import DetailPage from "./DetailPage"
import Detailpage from "./DetailPage";

const Menu = () => {

  


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
            <div className="cartround">
              <BsCart2 className="carthead" />
            </div>
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
            <img src={bb} alt="" />
          </section>
          <section className="midmenusection">
            <div className="leftmid">
              <div className="leftmidder">
                <h1>Ofada Joint</h1>
                <h4>
                  The restaurant for your tasty ofada rice and stew and sauces{" "}
                </h4>
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
              <h2>Meals</h2>
              <h2>Proteins</h2>
              <h2>Drinks</h2>
            </span>
          </div>
          <section className="downmenusection">
            <div className="foodcard" onClick={<Detailpage/>}>
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
            <div className="foodcard">
              <div className="leftcard">
                <h2>Food</h2>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, accusamus?
                </h4>
                <div className="pri">
                  <p>Price:</p>
                </div>
              </div>
              <div className="rightcard">
                <img src={amaa} alt="" />
              </div>
            </div>
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
    </main>
  );
};

export default Menu;
