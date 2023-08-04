 import "../Pages/Pages.css"
 import { BsCart2, BsPerson, BsArrowLeft } from "react-icons/bs";
 import Logo from "../assets/Logo.jpg"
// import { div } from "react-router-dom";



const Header =(Logo)=>{
    return(
        <header className="head">
        <section className="headwrap">
          <div className="Logodiv">
            <div to="/">
            <img src={Logo} alt="" />
            </div>
          </div>
          <div className="signindiv">
             {/* <div className="cartround">
               <BsCart2 className="carthead" /> 
            </div> */}
            <div className="cartround" style={{borderRadius:"2px",width:"150px",backgroundColor:"#FFEFD8",cursor:"pointer"}}>
              <BsPerson className="carthead"  style={{color:"orange",cursor:"pointer"}} /> 
               <h4>Victor</h4>
            </div> 
          </div>
        </section>
      </header>
    )
}

export default Header