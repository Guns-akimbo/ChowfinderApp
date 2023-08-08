import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { CgMenu } from 'react-icons/cg';
import { ImCancelCircle } from 'react-icons/im';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    // const [activeIndex, setActiveIndex] = useState(0);

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

    return (
        <>
                  {!menu && (
                <div className='Header'>
                    <section className='grid'>
                        <div className='logo'>
                            <div className='HiMenuAlt2'>
                                <CgMenu size={30} onClick={toggleMenu} />
                            </div>
                            <img src="./src/assets/Logo.png" alt=""/>

                        </div>
                        <nav className='Navmenu'>
                        <NavLink to='/' style={{ textDecoration:'none', }}>  <li
                                // className={activeIndex === 0 ? 'active' : ''}
                                onClick={() => handleNavItemClick(0)}
                            >
                                Home
                            </li> </NavLink>
                            <NavLink to="/About" style={{ textDecoration:'none',height:"inherit",width:"25%", }}><li  style={{height:"inherit",width:"100%",display:"flex",justifyContent:"center" }}
                                // className={activeIndex === 1 ? 'active' : ''}
                                onClick={() => handleNavItemClick(1)}
                            >
                                About Us
                            </li></NavLink>
                           <NavLink style={{ textDecoration:'none', }}> <li
                                // className={activeIndex === 2 ? 'active' : ''}
                                onClick={() => handleNavItemClick(2)}
                            >
                                Become a Partner
                            </li>
                            </NavLink>
                            <NavLink to="/login" style={{ textDecoration:'none', }}>
                            <li
                                // className={activeIndex === 3 ? 'active' : ''}
                                onClick={() => handleNavItemClick(3)}
                            >
                                <AiOutlineUser className='li' /> Sign in
                            </li>
                            </NavLink>
                        </nav>
                         
                        <div className='Navsign'>
                        <NavLink to="menu">
                            <BsCart4 size={20} />
                            <div className='cartlenght'>4</div>
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
                        <NavLink to='/'> <li>Home</li></NavLink>
                        <NavLink to="/About"><li>About Us</li> </NavLink>
                            <li>Become a Partner</li>
                            <li><AiOutlineUser className='li' /> Sign in</li>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
