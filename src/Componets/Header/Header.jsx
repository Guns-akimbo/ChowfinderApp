const { VITE_End_Point } = import.meta.env;
import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import axios from "axios";
import Userdashboard from "../../Dashboard/AdminDash/Userdashboard";
import Swal from "sweetalert2";

function Header() {
  const [menu, setMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [loading, setloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("User"))?.token;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  //To retrieve the information, you use the getItem method and then parse the JSON data.
  const [userisLoggedIn, setuserisLoggedIn] = useState(
    JSON.parse(localStorage.getItem("User"))
  );
  const [updateUi, setupdateUi] = useState(false);

  // console.log(userisLoggedIn);
  const logout = () => {
    localStorage.setItem(
      "User",
      JSON.stringify({ token: "", name: "", email: "" })
    );

    setupdateUi(updateUi);
    window.location.reload();
  };

  // console.log(token, " victor token ");

  const getCartData = async () => {
    try {
      setloading(true);
      const res = await axios.get(`${VITE_End_Point}/get-cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartData(res.data.items);
      // setEmptycart(false)
      // console.log(res.data);
      // console.log(res.data.user);
      setloading(false);
    } catch (err) {
      // console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  // useEffect(() => {
  //   if (userisLoggedIn?.token && !hasLoggedInOnce) {
  //     setHasLoggedInOnce(true);

  //     Swal.fire({
  //       text: `Hello, ${userisLoggedIn.fullName}!`,
  //       timer: 5000,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });
  //   }
  // }, [userisLoggedIn, ]);


  return (
    <>
      {!menu && (
        <div className="Header">
          <section className="grid">
            <div className="logo">
              <div className="HiMenuAlt2">
                <CgMenu size={30} onClick={toggleMenu} />
              </div>
              <img src={Logo} alt="" />
            </div>

            <nav className="Navmenu">
              <NavLink to="/" className="custom-link">
                {" "}
                <li>Home</li>{" "}
              </NavLink>
              <NavLink to="/About" className="custom-link">
                <li>About Us</li>
              </NavLink>

              <div>
                {userisLoggedIn?.token ? (
                  <NavLink to="/dashboard/" className="custom-link">
                    <li>Dashboard</li>
                  </NavLink>
                ) : (
                  <NavLink to="/partner" className="custom-link">
                    <li>Become a Partner</li>
                  </NavLink>
                )}
              </div>

              <div>
                {userisLoggedIn?.token ? (
                  <div>
                    <li onClick={logout} className="custom-link">
                      Logout
                    </li>
                  </div>
                ) : (
                  <NavLink to="/login" className="custom-link">
                    <li>
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </NavLink>
                )}
              </div>
            </nav>

            {/* Display user's name if logged in */}
            {userisLoggedIn?.token && (
              <div className="user-info">
                <span>Welcome,{userisLoggedIn.fullName}</span>
              </div>
            )}
            <div className="Navsign">
              <NavLink to="/Cart" className="custom-link">
                <BsCart4 size={20} />
                <div className="cartlenght">
                  <p>{cartData.length}</p>
                </div>
              </NavLink>
            </div>
          </section>
        </div>
      )}
      {menu && (
        <div className="showmenu">
          <div className="gridmenu">
            <div className="caCircle">
              <AiFillCloseCircle
                size={35}
                className="VscArrowCircleLeft"
                onClick={hideMenu}
              />
            </div>
            <nav className="dropMenu">
              <NavLink to="/" className="custom-link">
                {" "}
                <li>Home</li>
              </NavLink>
              <NavLink to="/About" className="custom-link">
                <li>About Us</li>
              </NavLink>

             
              <div>
                {userisLoggedIn?.token ? (
                  <NavLink to="/dashboard/" className="custom-link">
                    <li>Dashboard</li>
                  </NavLink>
                ) : (
                  <NavLink to="/partner" className="custom-link">
                    <li>Become a Partner</li>
                  </NavLink>
                )}
              </div>

              <div>
                {userisLoggedIn?.token ? (
                  <div>
                    <li onClick={logout} className="custom-link">
                      Logout
                    </li>
                  </div>
                ) : (
                  <NavLink to="/login" className="custom-link">
                    <li>
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </NavLink>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
