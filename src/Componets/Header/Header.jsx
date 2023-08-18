import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    const [menu, setMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

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

  console.log(userisLoggedIn);
  const logout = () => {
    localStorage.setItem(
      "User",
      JSON.stringify({  token: ""})
    );

    setupdateUi(updateUi);
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
              <img src="\src\assets\Logo.png" alt="" />
            </div>
       
            <nav className="Navmenu">
              <NavLink to="/" 
              className='custom-link'
             >
                {" "}
                <li
               
                >
                  Home
                </li>{" "}
              </NavLink>
              <NavLink to="/About" 
              className='custom-link'
              >
                <li
                >
                  About Us
                </li>
              </NavLink>
             
                <li> Become a Partner</li>
             
              <div>


              {
                userisLoggedIn.token ? <div>
                <li onClick={logout} 
                className='custom-link'
                >
                  Logout
                </li>
              </div>:<NavLink to="/login" 
                  className='custom-link'
                  >
                    <li >
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </NavLink>
              }





                {/* {userisLoggedIn?.id !== "" && !updateUi && (
                  <div>
                    <li onClick={logout} 
                    className='custom-link'
                    >
                      Logout
                    </li>
                  </div>
                )}

                {userisLoggedIn?.id === "" || updateUi === true ? (
                  <Link to="/login" 
                  className='custom-link'
                  >
                    <li >
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </Link>
                ) : null} */}
              </div>
            </nav>

            <div className="Navsign">
              <NavLink
                to="/Cart"
                className='custom-link'
              >
                <BsCart4 size={20} />
                <div className="cartlenght"></div>
              </NavLink>
            </div>
          </section>
        </div>
      )}
               {menu && (
                <div className='showmenu'>
                    <div className='gridmenu'>
                        <div className="caCircle">
                            <ImCancelCircle size={35} onClick={hideMenu} />
                        </div>
                        <nav className='dropMenu'>
                        <NavLink to="/" 
                        className='custom-link'
                        >
                {" "} <li>Home</li></NavLink>
                <NavLink to="/About" 
                className='custom-link'
                >
                <li
                >
                  About Us
                </li>
              </NavLink>
            
             
              
                <li> Become a Partner</li>
              
              <div>
                {userisLoggedIn?.id !== "" && !updateUi && (
                  <div>
                    <li onClick={logout} style={{ cursor: "pointer" }}>
                      Logout
                    </li>
                  </div>
                )}

                {userisLoggedIn?.id === "" || updateUi === true ? (
                  <Link to="/login" 
                  className='custom-link'>
                    <li >
                      <AiOutlineUser className="li" /> Sign in
                    </li>
                  </Link>
                ) : null}
              </div>
                        </nav>
                    </div>
                </div>
            )}
    </>
  );
}

export default Header;
