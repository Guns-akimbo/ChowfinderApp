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
          <div
            className="cartround"
            style={{
              borderRadius: "2px",
              width: "150px",
              backgroundColor: "#FFEFD8",
              cursor: "pointer",
            }}
          >
            <BsPerson
              className="carthead"
              style={{ color: "orange", cursor: "pointer" }}
            />
            <h4>Victor</h4>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
