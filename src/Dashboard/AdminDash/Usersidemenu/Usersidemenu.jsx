import { Menu } from "antd";
import {HomeOutlined,SettingOutlined,ShoppingCartOutlined} from "@ant-design/icons"
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { useNavigate } from "react-router";

const Usersidemenu = () => {
    const Navigate=useNavigate()
  return (
    <>
      <div className="usersidemenu">
        <Menu
         style={{backgroundColor:"orange",
         color:"white",
         height:"93vh",
         width:"15vw",
        //  accentColor:"red",
         padding:"10px"}}
        onClick={(item)=>{
            Navigate(item.key)
        }}
          items={[
            {
              label: "Timeline",
              key: "/dashboard/",
              icon:<HomeOutlined/>
            },
            {
              label: "Cashback",
              key: "/dashboard/cashback",
              icon:<ShoppingCartOutlined />
            },
            {
              label: "Recent Vedors",
              key: "/dashboard/recentOrders",
              icon: <FaMoneyBillAlt/>
            },
            {
              label: "Account settings ",
              key: "/dashboard/settings",
              icon:<SettingOutlined />
            },
          ]}
        ></Menu>
      </div>
    </>
  );
};

export default Usersidemenu;
