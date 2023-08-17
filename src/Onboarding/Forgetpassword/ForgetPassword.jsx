import React, { useState } from 'react';
import axios from 'axios';
import "./ForgetPassword.css"

const ForgetPassword = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('https://chowfinder.onrender.com/api/users/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`An error occurred: ${error.response.data.message}`);
      } else {
        console.error('Error sending password reset request:', error);
        setMessage(error.response.data.error);
      }
    }
  };


  return (
    <>
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
                onClick={handleForgotPassword}>Reset Password</button>
            </div>
            <p className='forgetpassword-errormesage'>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword;
