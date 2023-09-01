import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Partner.css';
import HashLoader from 'react-spinners/HashLoader';
import PartnerLogin from './patner-loginr';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import Header from '../../Componets/Header';

function Partner() {
  const initialState = {
    businessName: "",
    address: "",
    email: "",
    description: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlepassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/rest/signup",
        formData
      );

      if (res && res.data) {
        // console.log("Sign-up successful:", res.data);
        setError(null);
        showSuccessAlert();
        Navigate("/partnerLogin");
      } else {
        console.log("Response data is missing or undefined.");
      }
    } catch (err) {
      console.error("Sign-up error:", err.message);

      if (err.response) {
        const errorMessage =
          err.response.data.message ||
          "An error occurred during sign-up. Please try again later.";
        setError(errorMessage);
      } else {
        setError("An error occurred during sign-up. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Sign-up Successful!",
      text: "Please check your email for Further instructions.",
      confirmButtonText: "OK",
    });
  };

  return (
<>
<Header/>
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}

      {isSuccess ? (
        <p>Sign-up successful! You can now log in.</p>
      ) : (
        <form onSubmit={signupSubmit} className='Rest-form'>
          <div className='rest-inputholder'><input type="text" name="businessName" placeholder="Business Name" required onChange={handleChange} /></div>
          <div className='rest-inputholder'><input type="text" name="address" placeholder="Address" required onChange={handleChange} /></div>
          <div className='rest-inputholder'> <input type="email" name="email" placeholder="Email" required onChange={handleChange} /></div>
          <div className='rest-inputholder'> <input type="text" name="description" placeholder="Description" required onChange={handleChange} /></div>
          <div className='rest-inputholder'><input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} /></div>
          <div className='rest-inputholder'><input type={passwordVisible ? 'text' : 'password'}
            name="password" placeholder="Password" required onChange={handleChange} />{passwordVisible ? (
              <PiEyeBold onClick={handlepassword} />
            ) : (
              <PiEyeClosedBold onClick={handlepassword} />
            )}</div>
          <div className='rest-inputholder'><input type={passwordVisible ? 'text' : 'password'}
            name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />{passwordVisible ? (
              <PiEyeBold onClick={handlepassword} />
            ) : (
              <PiEyeClosedBold onClick={handlepassword} />
            )}</div>
          <div className='rest-buttonholder'><button type="submit" disabled={loading} className='rest-button'>
            <span>{loading ? <HashLoader color={"#ffffff"} size={30} loading={loading} /> : 'Sign Up'}</span>
          </button></div>
        </form>
      )}

      <span className="patner-loginrouter">
        {" "}
        Already a partner{" "}
        <span>
          <NavLink to="/partnerLogin">Sign In</NavLink>
        </span>
      </span>
    </div>
    </>
  );
}

export default Partner;
