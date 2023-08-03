import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/home';
import Aboutus from './Componets/AboutUs/About Us';
import Login from './Onboarding/Login';
import Menu from './Pages/Menu';



const myApp = () => {
  return (


    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Menu/>}/>


     </Routes>
      </BrowserRouter>
    </div>

  )
}

export default myApp



// "name": "pratice-react",
// "version": "0.0.0",
// "dependencies": {
//   "@reduxjs/toolkit": "^1.9.5",
//   "alert": "^5.1.4",
//   "axios": "^1.4.0",
//   "icons": "^1.0.0",
//   "persist": "^0.2.7",
//   "react": "^18.2.0",
//   "react-dom": "^18.2.0",
//   "react-icons": "^4.10.1",
//   "react-redux": "^8.1.1",
//   "react-router-dom": "^6.14.2",
//   "redux-persist": "^6.0.0",
//   "sweet": "^0.1.1",
//   "sweet-alert": "^2.0.5",
//   "sweetalert2": "^11.7.20"
// },