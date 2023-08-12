import { Space, Table, Typography } from "antd";
// import { url } from "inspector";
import "./Cashback.css"


const Cashback = () => {
  return (
    <>
       <div   className="cashy"  style={{ display: "flex", flexDirection:"column", gap:"20px" }}>
        <Typography.Title style={{fontSize:"20px"}}> Cashback Reward on orders above #2000</Typography.Title>
        <Space direction="horizontal" >
        </Space>
        <Space>            
        </Space>
        <RecentOrders/>
      </div>
    </>
  );
};


function RecentOrders() {
  return (
    <>
     
      <Table
        columns={[
          {
            title: "Total Orders",
            dataIndex: "total",
          },

          {
            title: "Cashback ",
            dataIndex: "cashback",
          },
        
        ]}
        style={{ display: "flex", flexDirection:"column", width:"65vw",}} 
          pagination={false}
      ></Table>
    </>
  );
}

export default Cashback;
