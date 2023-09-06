import { Nav, NavDropdown } from "react-bootstrap";
// import "../../../../Pages/pages.css";
import "./Dashboardheader.css";
import Logo from "../../../../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const DashboardHeader = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("User"));
  let username = user.fullName;
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 2000, // Set a timer for 5000 milliseconds (5 seconds)
          showConfirmButton: false, // Hide the confirm button
        });
        localStorage.clear();
        navigate("/login");
      }
    });
  }
  return (
    <div>
      <header className="head">
        <section className="headwrap">
          <div className="Logodiv" style={{ cursor: "pointer" }}>
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="signindiv">
            <Nav style={{ padding: "10px" }}>
            <NavDropdown
                title={
                  <span>
                    {username}
                    <BsFillArrowDownCircleFill
                      style={{ fontSize: "15px" }}
                    />{" "}
                  </span>
                }
                style={{ color: "#fff" }}
              >
                <p
                  onClick={logout}
                  style={{
                    color: "#333",
                    cursor: "pointer",
                    textAlign: "center",
                    fontSize: "13px",
                    marginBottom: "1px",
                  }}
                >
                  Logout
                </p>
              </NavDropdown>
            </Nav>
          </div>
        </section>
      </header>
    </div>
  );
};

export default DashboardHeader;
