import "./Pages.css";
import amaa from "../assets/amaa.jpg";

const Detailpage = () => {
  return (
    <div className="popup">
      <div className="popwrap">
        <div className="popimage">
          <img src={amaa} alt="" />
        </div>
        <div className="poptext">
          <div className="poptextup">
            <span className="deleteBtn">
              <p>X</p>
            </span>
             <span className="text">
             <h3> Meal Name: <h6> amala</h6></h3>
             <h3>Price:<h6>3000</h6> </h3>
            <h3>Description:<h6> Amala what a taste</h6></h3>
             </span>     
          </div>
          <div className="popupBtn">
             <span className="Addtocart">
                 <p>-</p>
                 <p>0</p>
                 <p>+</p>

             </span>
            <button className="Viewcart">Add to order </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
