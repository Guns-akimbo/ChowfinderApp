import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      await axios.post(
        `https://chowfinder.onrender.com/api/users/reset-password/${token}`,
        {
          newPassword,
        }
      );
      setMessage(response?.data?.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Extract and set the error message from the response
        setMessage(`An error occurred: ${error.response.data.message}`);
      } else {
        console.error('Error resetting password:', error);
        setMessage(error.response.data.error);
      }
    }
  };
   


  return (
    <div className='ResetPassword'>
      <section className='ResetPassword-wrapper'>
     <div className='Reset-Passwordheader'><h2>Reset Password</h2></div> 

     <div className='ResetPassword-inputt'>
      <p>Enter your new password:</p>
      <input
      className='inputt'
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      </div>
      <button 
      className='forgettext-button'
      onClick={handleResetPassword}>Reset Password</button>
      <p className='forgetpassword-errormesage'>{message}</p>
      </section>
    </div>
  );
}

export default ResetPassword;
