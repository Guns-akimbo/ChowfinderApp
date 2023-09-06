import { Typography, Space, Table, Avatar } from "antd";
import { useState, useEffect } from "react";
import { restaurantOrder } from "../../../../Api/Index";

function Customer() {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState(0);
  const [dataSource, setdataSource] = useState([]);
  const token = JSON.parse(localStorage.getItem("userToken"))?.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await restaurantOrder(token); // Use 'data' instead of 'res.data'
        setdataSource(data.slice(0, 8)); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Name",
            dataIndex: "customerName",
          },
          {
            title: "Address",
            dataIndex: "customerAddress",
          },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
        pagination={false}
      ></Table>
    </Space>
  );
}

export default Customer;
