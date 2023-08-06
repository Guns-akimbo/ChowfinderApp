import { Typography, Space, Table, Avatar } from "antd";
import { useState, useEffect } from "react";
import { getInventory, getOrders } from "../../../../Api/Index";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setdataSource(res.products.splice(0, 7));
      setLoading(false);
    });
  }, []);

  // console.log(getInventory)

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },

          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>₦{value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",          
          },
          {
            title: "Total",
            dataIndex: "total",      
          },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
        pagination={false}
      ></Table>
    </Space>
  );
}

export default Orders;
