import { Typography, Space, Table, Avatar } from "antd";
import { useState, useEffect } from "react";
// import { restInfo } from "../../../../Api/Index";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([{}]);
  const token = JSON.parse(localStorage.getItem("userToken"))?.token;


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await restInfo(token); // Use 'data' instead of 'res.data'
        const data=res.token
        setdataSource(data); // Update state with fetched data
        console.log(data);
        console.log(token);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} style={{ padding: "10px" }}>
        Inventory
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          // {
          //   title:"Thumbnail",
          //   dataIndex:"thumbnail",
          //   render:(link)=>{
          //     return<Avatar src={link}/>
          //   }
          // },
          {
            title: "Title",
            dataIndex: "businessName",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>₦{value}</span>,
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
        pagination={true}
      ></Table>
    </Space>
  );
}

export default Inventory;
