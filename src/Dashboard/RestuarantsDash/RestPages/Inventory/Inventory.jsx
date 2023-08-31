
import { Typography,Space,Table, Avatar } from "antd";
import { useState,useEffect } from "react";
import { getInventory } from "../../../../Api/Index";


function Inventory() {
 
  const[loading,setLoading]=useState(false)
  const [dataSource,setdataSource]=useState([])


  useEffect(()=>{
  setLoading(true)
  getInventory().then(res=>{
    setdataSource(res.products.slice(0,7))
    setLoading(false)
  })

  },[])

  // console.log(getInventory)


  return (
    
      <Space size={20}
       direction="vertical">
        <Typography.Title level={4} style={{padding:"10px"}}>Inventory</Typography.Title>
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
            title:"Title",
            dataIndex:"title"
          },
          {
            title:"Price",
            dataIndex:"price",
            render:(value)=><span>₦{value}</span>
          },
          {
            title:"Brand",
            dataIndex:"brand"
          },
  
        ]}
        
        dataSource={dataSource.map(item=> ({...item,key:item.id }))}
        pagination={true}
        >

        </Table>

      </Space>
    
   
  );
}

export default Inventory;
