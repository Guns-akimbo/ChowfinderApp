import Header from "../../../Componets/Header";
import "./AdminDashleft.css";
import { BsHouseDoorFill, BsCart2 } from "react-icons/bs";
import {BiRestaurant,BiLogIn} from "react-icons/bi"
import {FaMoneyBillAlt} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"

const AdminDashleft = () => {
  return (
    <>
      <Header />
      <main className="Admindashleftmain">
        <div className="Admindashwrap">
          <section className="AdmindashLeft">
            <div className="AdmindashLeftimg">
              <h1>My Account</h1>{" "}
            </div>
            <div className="AdmindashLefticon">
              <span>
                <BsHouseDoorFill className="iconic" />
                <h3>Timeline</h3>
              </span>
              <span>
                <BsCart2 className="iconic" />
                <h3>Recent Orders</h3>
              </span>
              <span>
                <BiRestaurant className="iconic"/>
                <h3>Recent Vendors</h3>
              </span>
              <span>
                <FaMoneyBillAlt/>
                <h3>Cashback</h3>
              </span>
              <span>
                <FiSettings className="iconic" />
                <h3>Account Settings</h3>
              </span>
            </div>
             <span style={{display:"flex", gap:"22px",marginTop:"40%"}}>
                <BiLogIn className="iconic"/>
                <h3>Log out</h3>
             </span>
          </section>
          <section className="Admindashright"></section>
        </div>
      </main>
    </>
  );
};

export default AdminDashleft;
