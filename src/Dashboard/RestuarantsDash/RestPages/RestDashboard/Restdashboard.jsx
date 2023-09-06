import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getMenu, restaurantOrder } from "../../../../Api/Index";

function Restdashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("userToken"))?.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await restaurantOrder(token);
        setOrders(data.length);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getMenu(token);
        setInventory(data.length);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="vertical">
        <Card loading={loading}>
          <Space direction="vertical">
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
              title={"Inventory"}
              value={inventory}
            />
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "orange",
                    backgroundColor: " 0.5px solid rgb(234, 232, 232)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Customer"}
              value={orders}
            />
          </Space>
        </Card>
      </Space>
      <Space></Space>
    </div>
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

export default Restdashboard;

// dataSource array is being mapped using the map function. For each item in the dataSource, a new object is created using the spread operator ({ ...item }) to preserve the existing properties of the item.
//The key  is added beacause  each item has an id property that can be used as the key. By adding the key prop to each row in the dataSource, you let React  manage and update the rendered components when changes occur.
