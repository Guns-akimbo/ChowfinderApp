import "./RestuarantsDash.css";
import RestuarantPagecontent from "./RestuarantPagecontent/RestuarantPagecontent";
import RestuarantSidemenu from "./RestuarantPagecontent/RestuarantSidemenu";
import { Space } from "antd";
import Restheader from "./RestPages/RestHeader/RestHeader";

const RestuarantsDash = () => {
  return (
    <>
      <div className="RestuarantsDash">
        <Restheader />
        <Space className="sidemenuAndPagecontent">
          <RestuarantSidemenu></RestuarantSidemenu>
          <RestuarantPagecontent></RestuarantPagecontent>
        </Space>
      </div>
    </>
  );
};

export default RestuarantsDash;
