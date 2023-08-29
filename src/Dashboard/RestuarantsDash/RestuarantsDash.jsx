import "./RestuarantsDash.css";
import RestuarantPagecontent from "./RestuarantPagecontent/RestuarantPagecontent";
import RestuarantSidemenu from "./RestuarantPagecontent/RestuarantSidemenu";
import { Space } from "antd";

const RestuarantsDash = () => {
  return (
    <>
      <div className="RestuarantsDash">

        <Space className="sidemenuAndPagecontent">
          <RestuarantSidemenu></RestuarantSidemenu>
          <RestuarantPagecontent></RestuarantPagecontent>
        </Space>
      </div>
    </>
  );
};

export default RestuarantsDash;
