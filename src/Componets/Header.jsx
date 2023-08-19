import "../Pages/Pages.css";
import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
import Logo from "../assets/Logo.png";
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
        <div className="signindiv"></div>
      </section>
    </header>
  );
};

export default Header;
