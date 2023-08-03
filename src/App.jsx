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

