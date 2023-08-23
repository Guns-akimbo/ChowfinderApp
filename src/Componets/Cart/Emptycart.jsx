// import "Emptycart.css"
import "./Emptycart.css"
import empty from "../../assets/empty.svg"
import {BsFillCartXFill} from "react-icons/bs"
import { Link } from "react-router-dom"



const Emptycart=()=>{
    return(
        <>

    <main className="emptymain">
 
        <section className="emptymainwrapper">
             <div className="emptycartimage">
                 <div className="circleempty">
                    <BsFillCartXFill className="emptycarticon" />
                 </div>
             </div>
             <div className="emptycarttext"> 
               <h4> Your cart is empty!</h4>
               <Link to="/">
               <button className="emptyBtn">Start Shopping</button>
               </Link>
                
               </div>
        </section>

    </main>


        </>
    )
}
export default Emptycart