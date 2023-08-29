import React, { useState } from 'react';
import axios from 'axios';
// import "./ForgetPassword.css"
// import Header from '../../Componets/Header';
import HashLoader from "react-spinners/HashLoader";
import { NavLink } from 'react-router-dom';

const RestForgetPassword = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [Loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      const response = await axios.get('https://chowfinder.onrender.com/rest/forgot-password', { email });
      setMessage(response.data.message);
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`An error occurred: ${error.response.data.message}`);
      } else {
        console.error('Error sending password reset request:', error);
        setMessage(error.response.data.error);
        setLoading (true)
      }
    }
  };



  return (
    <>
     {/* <Header/> */}
      <div className='ForgetPassword'>
        <div className='ForgetPassword-wrapper'>
          <span className='wraapper-grid-header'><h2>Forgot Password</h2></span>
          <div className='entern-div'>
            <p>Enter your Email to recover password.</p>
            <input type="email" placeholder="input email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='handleForgot'>
            <div>
              <button className='forgettext-button'
                onClick={handleForgotPassword}>ResetPassword</button>
            </div>
            <p className='forgetpassword-errormesage'>{message}</p>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default RestForgetPassword;
