import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const [menu, setMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const hideMenu = () => {
        setMenu(false);
    };

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
    hideMenu();
  };

  //To retrieve the information, you use the getItem method and then parse the JSON data.
  const [userisLoggedIn, setuserisLoggedIn] = useState(
    JSON.parse(localStorage.getItem("User"))
  );
  const [updateUi, setupdateUi] = useState(false);

  const logout = () => {
    localStorage.setItem(
      "User",
      JSON.stringify({  token: ""})
    );

    setupdateUi(!updateUi);
  };

  return (
    <>
      {!menu && (
        <div className="Header">
          <section className="grid">
            <div className="logo">
              <div className="HiMenuAlt2">
                <CgMenu size={30} onClick={toggleMenu} />
              </div>
              <img src="./src/assets/Logo.png" alt="" />
            </div>

            <nav className="Navmenu">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                {" "}
                <li
                  // className={activeIndex === 0 ? 'active' : ''}
                  onClick={() => handleNavItemClick(0)}
                >
                  Home
                </li>{" "}
              </NavLink>
              <NavLink to="/About" style={{ textDecoration: "none" }}>
                <li
                  // className={activeIndex === 1 ? 'active' : ''}
                  onClick={() => handleNavItemClick(1)}
                >
                  About Us
                </li>
              </NavLink>
              <Link style={{ textDecoration: "none", color: "#551abb" }}>
                <li> Become a Partner</li>
              </Link>
              <div>
                {userisLoggedIn?.id !== "" && !updateUi && (
                  <div>
                    <li onClick={logout} style={{ cursor: "pointer" }}>
                      Logout
                    </li>
                  </div>
                )}

                {userisLoggedIn?.id === "" || updateUi === true ? (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <li
                      // className={activeIndex === 3 ? 'active' : ''}
                      onClick={() => handleNavItemClick(3)}
                    >
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </Link>
                ) : null}
              </div>
            </nav>

            <div className="Navsign">
              <Link
                to="/Cart"
                style={{ textDecoration: "none" }}
              >
                <BsCart4 size={20} />
                <div className="cartlenght"></div>
              </Link>
            </div>
          </section>
        </div>
      )}
      {menu && (
        <div className="showmenu">
          <div className="gridmenu">
            <div className="caCircle">
              <ImCancelCircle size={35} onClick={hideMenu} />
            </div>
            <nav className="dropMenu">
              <NavLink to="/">
                {" "}
                <li>Home</li>
              </NavLink>
              <NavLink to="/About">
                <li>About Us</li>{" "}
              </NavLink>
              <li>Become a Partner</li>
              <li>
                <AiOutlineUser className="li" /> Sign in
              </li>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
