import "../Pages/Pages.css"
import { BsCart2, BsPerson, } from "react-icons/bs";
import Logo from "../assets/Logo.jpg"
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <header className="head">
      <section className="headwrap">
        <div className="Logodiv">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="signindiv">
          <div className="cartround">
            <BsPerson className="carthead" />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header