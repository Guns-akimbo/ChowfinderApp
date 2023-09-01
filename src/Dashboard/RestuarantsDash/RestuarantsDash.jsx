import "./RestuarantsDash.css";
import RestuarantPagecontent from "./RestuarantPagecontent/RestuarantPagecontent";
import RestuarantSidemenu from "./RestuarantPagecontent/RestuarantSidemenu";
import { Space } from "antd";
import DashboardHeader from "./RestPages/Logout/Logout";

const RestuarantsDash = () => {
  return (
    <>
      <div className="RestuarantsDash">
    <DashboardHeader/>
        <Space className="sidemenuAndPagecontent">
          <RestuarantSidemenu></RestuarantSidemenu>
          <RestuarantPagecontent></RestuarantPagecontent>
        </Space>
      </div>
    </>
  );
};

export default RestuarantsDash;
