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
         height:"92vh",
         width:"15vw",
        //  accentColor:"red",
         padding:"10px"}}
        onClick={(item)=>{
            Navigate(item.key)
        }}
          items={[
            {
              label: "Timeline",
              key: "/",
              icon:<HomeOutlined/>
            },
            {
              label: "Cashback",
              key: "/cashback",
              icon:<ShoppingCartOutlined />
            },
            {
              label: "Recent Vedors",
              key: "/recentOrders",
              icon: <FaMoneyBillAlt/>
            },
            {
              label: "Account settings ",
              key: "/settings",
              icon:<SettingOutlined />
            },
          ]}
        ></Menu>
      </div>
    </>
  );
};

export default Usersidemenu;
