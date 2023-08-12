import { Typography } from "antd";
import Header from "../../../../Componets/Header";
// import "./Timeline.css";
import {
  DollarCircleFilled,
  EuroCircleFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table } from "antd";

const Timeline = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection:"column", gap:"4px" }}>
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
                title={"Your total Orders"}
              />
            </Space>
          </Card>
        </Space>
        <Space>            
        </Space>
        <RecentOrders/>
      </div>
    </>
  );
};

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

function RecentOrders() {
  return (
    <>
      <Typography.Text> Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },

          {
            title: "Price",
            dataIndex: "price",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
        ]}
        style={{ display: "flex", flexDirection:"column", width:"65vw",}} 
          pagination={false}
      ></Table>
    </>
  );
}

export default Timeline;
