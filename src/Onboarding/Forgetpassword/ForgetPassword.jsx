import React, { useState } from 'react';
import axios from 'axios';
import "./ForgetPassword.css"




const ForgetPassword=()=>{

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Send request to initiate password reset
      await axios.post('https://chowfinder.onrender.com/api/users/forgot-password', { email });
      setMessage('Password reset instructions have been sent to your email.');
    } catch (error) {
      console.error('Error sending password reset request:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

    return(
        <>
        <div className='ForgetPassword'>
         <div className='ForgetPassword-wrapper'>
                            <div className='ForgetPassword-wrapper-grid'>
                                 <span className='wraapper-grid-header'> <h2>Forgot Password </h2></span>
                            <div className='entern-div'> <p>Enter your Email to recover password.</p>
                                <input type="email" placeholder="input email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div> 
                                <div className='handleForgot'>
                                  <div >
                                  <button className='forgettext-button'
                                  onClick={handleForgotPassword}>Reset Password</button>
                                  </div>
                                  <p>{message}</p>
                                
                                </div>
                                 </div>
                                 </div>
                                 </div>
        </>
    )
}

export default ForgetPassword 






