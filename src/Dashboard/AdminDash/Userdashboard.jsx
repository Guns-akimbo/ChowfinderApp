import "./Userdashboard.css";
import { Space } from "antd";
import Usersidemenu from "./Usersidemenu/Usersidemenu";
import Userpagecontent from "./Userpagecontent/Userpagecontent";
import DashboardHeader from "../RestuarantsDash/RestPages/Logout/Dashboardheader";


const Userdashboard = () => {
  return (
    <>
      <div className="userApp">
        <DashboardHeader />
        <Space className="Usersideandpage">
          <Usersidemenu></Usersidemenu>
          <Userpagecontent></Userpagecontent>
        </Space>
      </div>
    </>
  );
};

export default Userdashboard;
