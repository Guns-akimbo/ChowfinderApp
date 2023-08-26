import React, { useState } from 'react';
import axios from 'axios';
import './Partner.css';

function Partner() {
  const initialState = {
    businessName: '',
    address: '',
    email: '',
    description: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  
    
  // const convertFileToBase64 = (file) => {
  //   return new Promise((resolve) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //   });
  // };
      
  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    if (type === 'file') {
      const newValue = e.target.files[0];
      convertFileToBase64(newValue)
        .then((base64String) => {
          setFormData((prevData) => ({ ...prevData, [name]: base64String }));
        })
        .catch((error) => {
          console.error('Error converting file to base64:', error);
        });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  
  
   const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/rest/signup",
        formData
         );
            if (res && res.data) {
            
        console.log('Sign-up successful:', res.data);
        setIsSuccess(true);
      } else {
        console.log('Response data is missing or undefined.');
      }
    } catch (err) {
      console.error('Sign-up error:', err.message);
      
      if (err.response) {
        console.error('Server Response Data:', err);
        // console.error('Server Response Status:', err.response.status);
        // console.error('Server Response Headers:', err.response.headers);
      }
  
      setError('An error occurred during sign-up. Please try again later.');
    }
  };
  
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      
      {isSuccess ? (
        <p>Sign-up successful! You can now log in.</p>
      ) : (
        <form onSubmit={signupSubmit} encType="multipart/form-data">
          <input type="text" name="businessName" placeholder="Business Name" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" required onChange={handleChange} />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
          <input type="file" name="profileImage" accept="image/*"  onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default Partner;