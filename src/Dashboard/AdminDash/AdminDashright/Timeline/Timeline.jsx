import { Typography, Space, Table, Avatar, Card, Statistic } from "antd";
import { useState, useEffect } from "react";
import { getInventory, getOrders } from "../../../../Api/Index";
import {  ShoppingCartOutlined} from "@ant-design/icons"

function Timeline() {
  const [orders,setOrders]=useState(0)
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  const token = JSON.parse(localStorage.getItem("User"))?.token;


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getOrders(token); // Use 'data' instead of 'res.data'
        setdataSource(data.slice(0,2)); // Update state with fetched data
        setOrders(data.length)
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

   
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Activity Timeline</Typography.Title>
      <Space direction="horizontal">
      <Card>
          <Space direction="horizontal">
            <DashboardCard
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "orange",
                    backgroundColor: " 0.5px solid rgb(234, 232, 232)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Orders"}
              value={orders}
              
            />
             </Space>
             </Card>
             </Space>
      <Table
        loading={loading}
        columns={[
          // {
          //   title: "Name",
          //   dataIndex: "customerName",
          // },

          {
            title: "Total Amount",
            dataIndex: "total",
            render: (value) => <span>₦{value}</span>,
          },

          {
            title: "Food Name ",
            dataIndex: "items",
            render: (items) => (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {Object.keys(items).map((itemName, index) => (
                  <li key={index}>
                    {items[itemName].name}
                  </li>
                ))}
              </ul>
            ),
 
          },
          {
            title: "Price ",
            dataIndex: "items",
            render: (items) => (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {Object.keys(items).map((itemName, index) => (
                  <li key={index}>
                    {items[itemName].price}
                  </li>
                ))}
              </ul>
            ),
 
          },
          // {
          //   title: "Restaurant",
          //   dataIndex: "items",
          //   render: (items) => (
          //     <ul style={{ listStyleType: "none", padding: 0 }}>
          //       {Object.keys(items).map((itemName, index) => (
          //         <li key={index}>
          //           {items[itemName].restaurantName}
          //         </li>
          //       ))}
          //     </ul>
          //   ),
          // },
          // {
          //   title:"Thumbnail",
          //   dataIndex:"itemImage",
          //   render:(itemImage)=>{
          //     return<Avatar src={itemImage}/>
          //   }
          // },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item?._id }))}
        pagination={false}
      ></Table>
      
    </Space>
  );
}


function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default Timeline;
