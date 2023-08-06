import { Menu } from "antd"
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"





const RestuarantSidemenu=()=>{


    const navigate=useNavigate()
    return(
        <>
            <div className="sideMenu">
                    
            <Menu 
            style={{backgroundColor:"orange",
            color:"white",
            height:"92vh",
            width:"15vw",
            padding:"10px"}}
            onClick={(item)=>{
              navigate(item.key)
            }}
            items={[
                {
                    label:"Dashboard", 
                    icon:<AppstoreOutlined/>,
                    key:"/"
            },
                {
                    label:"inventory",
                    key:"/inventory",
                    icon:<ShopOutlined/>
            },
                {
                    label:"Orders",
                    key:"/orders",
                    icon:<ShoppingCartOutlined/>
            },
                {
                    label:"Customers",
                    key:"/customers",
                    icon:<UserOutlined/>
            },









            ]}>

            </Menu>

            </div>
        
        </>
    )
}

export default RestuarantSidemenu