import "./RestuarantsDash.css";
import Header from "../../Componets/Header";
import RestuarantPagecontent from "./RestuarantPagecontent/RestuarantPagecontent";
import RestuarantSidemenu from "./RestuarantPagecontent/RestuarantSidemenu";
import { Space } from "antd";

const RestuarantsDash = () => {
  return (
    <>
      <div className="RestuarantsDash">
        <Header  />
        <Space className="sidemenuAndPagecontent">
          <RestuarantSidemenu></RestuarantSidemenu>
          <RestuarantPagecontent></RestuarantPagecontent>
        </Space>
      </div>
    </>
  );
};

export default RestuarantsDash;
