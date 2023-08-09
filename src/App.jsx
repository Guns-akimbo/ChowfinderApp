import './App.css'
import Home from './Componets/Home/home';
import Aboutus from './Componets/AboutUs/About Us';
import Login from './Onboarding/Login';
import Menu from './Pages/Menu';
import { Route, Routes } from 'react-router-dom';
import Verification from "./Onboarding/Verfication/Verification"

const myApp = () => {
  return (


    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu/:restaurantId/*' element={<Menu/>}/>
      <Route path="/verification/:token" element ={<Verification/>}/>
     </Routes>
    </div>
  )
}


export default myApp


