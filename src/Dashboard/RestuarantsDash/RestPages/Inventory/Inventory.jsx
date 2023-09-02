import { Typography, Space, Table, Avatar } from "antd";
import { useState, useEffect } from "react";
import { getMenu} from "../../../../Api/Index";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([{}]);
  const token = JSON.parse(localStorage.getItem("userToken"))?.token;
  const restaurant = JSON.parse(localStorage.getItem("userToken"))?.restaurant;
  // console.log(restaurant.menus)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getMenu(token); // Use 'data' instead of 'res.data'
        setdataSource(data.slice(0,8)); // Update state with fetched data
        console.log(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  
  
  return (
    <Space size={2} direction="vertical">
      <Typography.Title level={4} style={{ padding: "" }}>
        Inventory
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title:"Image",
            dataIndex:"itemImage",
            render:(link)=>{
              return<Avatar src={link}/>
            }
          },
          {
            title: "Menu",
            dataIndex: "name",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>₦{value}</span>,
          },
         
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
        pagination={false}
      ></Table>
    </Space>
  );
}

export default Inventory;
