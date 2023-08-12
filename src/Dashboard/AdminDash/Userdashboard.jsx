import "./Userdashboard.css";
import Header from "../../Componets/Header";
import { Space } from "antd";
import Usersidemenu from "./Usersidemenu/Usersidemenu";
import Userpagecontent from "./Userpagecontent/Userpagecontent";

const Userdashboard = () => {
  return (
    <>
      <div className="userApp">
        <Header />
        <Space className="Usersideandpage">
          <Usersidemenu></Usersidemenu>
          <Userpagecontent></Userpagecontent>
        </Space>
      </div>
    </>
  );
};

export default Userdashboard;
