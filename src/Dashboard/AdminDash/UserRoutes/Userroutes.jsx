import { Route, Routes } from "react-router-dom";
import Timeline from "../AdminDashright/Timeline/Timeline";
import Recentorder from "../../AdminDash/AdminDashright/Recentorder/Recentorder";
import Cashback from "../AdminDashright/Cashback/Cashback";
import Accountsettings from "../AdminDashright/AccountSettings/Accountsettings";

function Userroutes() {
  return (
    <Routes>
      <Route path="/" element={<Timeline/>}></Route>
      <Route path="/recentOrders" element={<Recentorder />}></Route>
      <Route path="/cashback" element={<Cashback />}></Route>
      <Route path="/settings" element={<Accountsettings />}></Route>
    </Routes>
  );
}

export default Userroutes;
