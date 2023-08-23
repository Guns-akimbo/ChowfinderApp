import "./Cart.css";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Cartcomp = (props) => {
    const [loadings, setloadings] = useState(false);
    // console.log(removeItem)

  return (
    <div className="Cart-itemHoldereach">
      <div className="Cart-itemHeaderdesc">
        <main className="descimage">
          <img src={props?.itemImage} />
        </main>
        <main className="itemdescrition">{props?.itemName}</main>
      </div>
      <div className="Cart-itemHeaderquantity">
        {loadings ? (
          <HashLoader color={"#FD8D14"} loadings={loadings} size={50} />
        ) : (
          <div className="increase" onClick={() => props.addToCart(props?.menu)}>
            +
          </div>
        )}

        <div className="itemnumber">{props?.quantity}</div>
        <div className="decrease" onClick={() => props.removeItem(props?.menu)}>
          -
        </div>
      </div>

      <div className="Cart-itemHeaderprice">{props?.itemPrice}</div>
      <div className="Cart-itemHeadertotalprice">{props?.itemTotal}</div>
      <div className="Cart-itemHeaderremove">
        <div className="remove-item" onClick={() => props.deleteItem(props?.menu)}>
          X 
        </div>
      </div>
    </div>
  );
};

export default Cartcomp;
