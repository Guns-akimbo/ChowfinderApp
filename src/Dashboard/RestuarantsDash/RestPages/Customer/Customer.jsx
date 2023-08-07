
import { Typography,Space,Table, Avatar } from "antd";
import { useState,useEffect } from "react";
import { getCustomers, getInventory } from "../../../../Api/Index";


function Customer() {
 
  const[loading,setLoading]=useState(false)
  const [dataSource,setdataSource]=useState([])


  useEffect(()=>{
  setLoading(true)
  getCustomers().then(res=>{
    setdataSource(res.users)
    setLoading(false)
  })

  },[])

  // console.log(getInventory)


  return (
    
      <Space size={20}
       direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
        <Table
        loading={loading}
        columns={[
          {
            title:"Photo",
            dataIndex:"image",
            render:(link)=>{
              return<Avatar src={link}/>
            }
          },
          {
            title:"First Name",
            dataIndex:"firstName"
          },
          {
            title:"Lastname",
            dataIndex:"lastName",
           
          },
          {
            title:"Email",
            dataIndex:"email"
          },
          {
            title:"PhoneNumber",
            dataIndex:"phone"
          },
         
         
         
        ]}
        
        dataSource={dataSource.map(item=> ({...item,key:item.id }))}
        // pagination={false}
        >

        </Table>

      </Space>
    
   
  );
}

export default Customer;
