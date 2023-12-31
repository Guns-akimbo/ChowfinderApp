import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const RestuarantSidemenu = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="sideMenu">
        <Menu
          style={{
            backgroundColor: "orange",
            color: "white",
            height: "93vh",
            width: "15vw",
            padding: "10px",
          }}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/restaurantdashboard/",
            },
            {
              label: "inventory",
              key: "/restaurantdashboard/inventory",
              icon: <ShopOutlined />,
            },
            {
              label: "Orders",
              key: "/restaurantdashboard/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Customers",
              key: "/restaurantdashboard/customers",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    </>
  );
};

export default RestuarantSidemenu;
