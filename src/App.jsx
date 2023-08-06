import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/home';
import Aboutus from './Componets/AboutUs/About Us';
import Login from './Onboarding/Login';
import Menu from './Pages/Menu';



const myApp = () => {
  return (


    <div>
          <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Menu/>}/>
           </Routes>
    </div>

  )
}

export default myApp

