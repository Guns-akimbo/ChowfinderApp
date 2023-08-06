import "../Pages/Pages.css";
import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
import Logo from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom"; 

const Header = ({ Logo }) => {
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
              <BsCart2 className="carthead" />
            </div>
            <div className="cartround">
              <BsPerson className="carthead" />
            </div>
          </div>
        </section>
      </header>
    )
}

export default Header
