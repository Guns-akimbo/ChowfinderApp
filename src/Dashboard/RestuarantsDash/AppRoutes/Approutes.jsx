import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restdashboard from "../RestPages/RestDashboard/Restdashboard";
import Inventory from "../RestPages/Inventory/Inventory";
import Orders from "../RestPages/Order/Order";
import Customer from "../RestPages/Customer/Customer";
// import Logout from "../RestPages/Logout/Logout";
import DashboardHeader from "../RestPages/Logout/Logout"

function Approutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Restdashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customer />}></Route>
      </Routes>
    
  );
}


export default Approutes;
