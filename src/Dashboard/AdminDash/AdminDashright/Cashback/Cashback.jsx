import { Space, Table, Typography } from "antd";
// import { url } from "inspector";
import "./Cashback.css"
import { getOrders } from "../../../../Api/Index";
import { useEffect,useState } from "react";


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
  const [orders,setOrders]=useState(0)
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  const token = JSON.parse(localStorage.getItem("User"))?.token;


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getOrders(token); // Use 'data' instead of 'res.data'
        setdataSource(data.slice(0,3)); // Update state with fetched data
        // console.log(data)
        setOrders()
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);



  

  return (
    <>
     
      <Table
      loading={loading}
        columns={[
          // {
          //   title: "Total Amount",
          //   dataIndex: "total",
          // },

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
            title: "Cashback",
            dataIndex: "cashBackOnOrder",
          },
        
          {
            title: "Cashback Used ",
            dataIndex: "cashBackUsed",
          },
        
        ]}
        style={{ display: "flex", flexDirection:"column", width:"65vw",}} 
        dataSource={dataSource.map((item) => ({ ...item, key: item?._id }))}
          pagination={false}
      ></Table>
    </>
  );
}

export default Cashback;
