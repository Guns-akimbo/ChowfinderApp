import { Typography, Space, Table, Avatar } from "antd";
import { useState, useEffect } from "react";
import { restaurantOrder } from "../../../../Api/Index";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  const token = JSON.parse(localStorage.getItem("userToken"))?.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await restaurantOrder(token); // Use 'data' instead of 'res.data'
        setdataSource(data.slice(0, 3)); // Update state with fetched data
        console.log(data);
        console.log(token);
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
      <Typography.Title level={4}>Recent Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Orders ",
            dataIndex: "items",
            render: (items) => (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {Object.keys(items).map((itemName, index) => (
                  <li key={index}>{items[itemName].name}</li>
                ))}
              </ul>
            ),
          },
          // {
          //   title: "Order Id",
          //   dataIndex: "_id",
          // },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span>₦{value}</span>,
          },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item?.id }))}
        pagination={false}
      ></Table>
    </Space>
  );
}

export default Orders;
