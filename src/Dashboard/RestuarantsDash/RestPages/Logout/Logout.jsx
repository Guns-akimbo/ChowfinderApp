import { Nav, NavDropdown } from "react-bootstrap";
import "../../../../Pages/pages.css";
import Logo from "../../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const dashboardHeader = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("User"));
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div>
      <header className="head" style={{ height: "6vh" }}>
        <section className="headwrap">
          <div className="Logodiv">
            <img src={Logo} alt="" />
          </div>
          <div className="signindiv">
            <Nav style={{ padding: "10px" }}>
              <NavDropdown
                title={user && user.fullName}
                style={{ color: "#fff" }}
              >
                <NavDropdown.Item
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
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </section>
      </header>
    </div>
  );
};

export default dashboardHeader;
