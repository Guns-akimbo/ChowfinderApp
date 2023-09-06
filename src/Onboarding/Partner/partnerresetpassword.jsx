import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa'; // You can use any spinner icon library you prefer

function RestResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(null); // State to hold backend error

  const handleResetPassword = async () => {
   ; // Start loading

    try {
      setIsLoading(true)
      const response = await axios.put(
        `https://Chowfinder.onrender.com/api/rest/reset-password/${token}`,
        {
          newPassword,
        }
      );
      setMessage(response?.data?.message);
      setIsLoading(false); // Stop loading on success
      // Navigate to the login page on successful password reset
      Navigate("/partnerLogin");
    } catch (error) {
      setIsLoading(false); // Stop loading on error
      if (error.response && error.response.data && error.response.data.message) {
        // Backend error: Extract and set the error message from the response
        setBackendError(`Backend Error: ${error.response.data.message}`);
      } else {
        // Frontend or network error
        // console.error('Error resetting password:', error);
        setMessage('An error occurred. Please try again later.');
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
          onClick={handleResetPassword}
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? <FaSpinner className="spinner" /> : 'Reset Password'}
        </button>

        {backendError && <p className='backend-error-message'>{backendError}</p>}
        <p className='forgetpassword-errormesage'>{message}</p>
      </section>
    </div>
  );
}

export default RestResetPassword;
