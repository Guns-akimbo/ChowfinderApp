import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ForgetPassword from './Onboarding/Forgetpassword/ForgetPassword.jsx'
import Login from './Onboarding/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ForgetPassword/> */}
    <Login/>
   
  </React.StrictMode>,
)
