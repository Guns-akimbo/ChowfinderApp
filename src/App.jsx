import "./App.css";
import Home from "./Componets/Home/home";
import Aboutus from "./Componets/AboutUs/About Us";
import Login from "./Onboarding/Login";
import Menu from "./Pages/Menu";
import { Route, Routes } from "react-router-dom";
import Verification from "./Onboarding/Verfication/Verification";
import Detailpage from "./Pages/DetailPage";
import Cart from "./Componets/Cart/Cart";
import ResetPassword from "./Onboarding/Forgetpassword/ResetPassword";
import ForgetPassword from "./Onboarding/Forgetpassword/ForgetPassword";
import Userdashboard from "./Dashboard/AdminDash/Userdashboard"
import RestuarantsDash from "./Dashboard/RestuarantsDash/RestuarantsDash";
import Partner from "./Onboarding/Partner/Partner"
import VerifyPartner from "./Onboarding/Partner/Verifyrestaurant";
import PartnerLogin from "./Onboarding/Partner/patner-loginr";
import RestForgetPassword from "./Onboarding/Partner/restForgetword";
import RestResetPassword from "./Onboarding/Partner/partnerresetpassword";

const myApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/:restaurantId/*" element={<Menu />} />
        <Route path="/verification/:token" element={<Verification />} />
        <Route
          path="/detail/:categoryId/:restaurantId/:mealId"
          element={<Detailpage />}
        /> 
        <Route path='/partner' element={<Partner/>} />
        <Route path="verifyPartner/:token" element={<VerifyPartner/>}/>
        <Route path="/partnerLogin" element = {<PartnerLogin/>}/>
        <Route path = "/RestForgetPassword" element ={<RestForgetPassword/>}/>
        <Route path="/Restresetpassword:token" element={<RestResetPassword/>}/>
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/dashboard/*" element={<Userdashboard/>} /> 
        <Route path="/restaurantdashboard/*" element={<RestuarantsDash/>} /> 
        <Route path="/forgotpassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};

export default myApp;
