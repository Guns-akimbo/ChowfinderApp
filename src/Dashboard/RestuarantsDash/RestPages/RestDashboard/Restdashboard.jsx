import {
  DollarCircleFilled,
  EuroCircleFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getCustomers, getInventory, getOrders } from "../../../../Api/Index";

function Restdashboard() {
  const [orders,setOrders]=useState(0)
  const [inventory,setInventory]=useState(0)
  const [customers,setCustomers]=useState(0)
  const [revenue,setRevenue]=useState(0)


  useEffect(()=>{
    // getOrders().then((res)=>{
    //   setOrders(res.total)
    // })
    getInventory().then((res)=>{
      setInventory(res.total)
    })
    getCustomers().then((res)=>{
      setCustomers(res.total)
    })

  },[])


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Title level={4}>Dashboard</Typography.Title>
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
              value={customers}
            />
            <DashboardCard
              icon={
                <DollarCircleFilled
                  style={{
                    color: "orange",
                    backgroundColor: " 0.5px solid rgb(234, 232, 232)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Revenue"}
              value={revenue}
              
            />
          </Space>
        </Card>
      </Space>
      <Space>
        <RecentOrders />
      </Space>
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

function RecentOrders() {
  const [dataSource, setdataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setdataSource(res.products);
      setLoading(false);
    });
  }, []);

  // console.log(setdataSource);

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
      ]}
      loading={loading}
      dataSource={dataSource.map(item=> ({...item,key:item.id }))}
      pagination={false}
   
    
    ></Table>
     </>
  );
}

export default Restdashboard;


// dataSource array is being mapped using the map function. For each item in the dataSource, a new object is created using the spread operator ({ ...item }) to preserve the existing properties of the item.
//The key  is added beacause  each item has an id property that can be used as the key. By adding the key prop to each row in the dataSource, you let React  manage and update the rendered components when changes occur.