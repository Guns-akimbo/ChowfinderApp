import React, { useState } from "react";
import axios from "axios";
import "./Partner.css";
import { NavLink, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { Route } from "react-router-dom";
import RestuarantsDash from "../../Dashboard/RestuarantsDash/RestuarantsDash";
import Header from "../../Componets/Header";

function PartnerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlepassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/rest/signin",
        formData
      );

      if (res && res.data) {
        setError(null);
        // console.log('Login successful:', res.data);
        const { token, restaurant } = res.data;
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token, restaurant })
        );
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/restaurantdashboard");
      } else {
        console.log("Response data is missing or undefined.");
      }
    } catch (err) {
      // console.log('Login error:', err);
      if (err.response) {
        setError(
          err.response.data.message ||
            "An error occurred during login. Please try again."
        );
      } else {
        setError("An error occurred during login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="login-containerholder">
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin} className="Rest-form">
            <div className="rest-inputholder">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="rest-inputholder">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              {passwordVisible ? (
                <PiEyeBold onClick={handlepassword} />
              ) : (
                <PiEyeClosedBold onClick={handlepassword} />
              )}
            </div>
            <button type="submit" disabled={loading} className="rest-button">
              <span>
                {loading ? (
                  <HashLoader color={"#ffffff"} size={30} loading={loading} />
                ) : (
                  "Login"
                )}
              </span>
            </button>
          </form>
          <NavLink to="/RestForgetPassword" className="patner-password">
            Forgot password?
          </NavLink>
          <span className="patner-loginrouter">
            {" "}
            Not a partner <NavLink to="/partner">Sign up</NavLink>
          </span>
        </div>
      </div>
    </>
  );
}

export default PartnerLogin;
