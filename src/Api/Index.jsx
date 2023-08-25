const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const token = JSON.parse(localStorage.getItem("User"))?.token;


 export const getOrders = async () => {
  try {
    const res = await axios.get(`${VITE_End_Point}/get-all-orders/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return(res.data);
  } catch (err) {
    console.log(err);
   
  }
};



// export const getRevenue = () => {
//   return fetch("https://dummyjson.com/carts").then((res) => res.json());
// };

export const getInventory = () => {
  return fetch("https://dummyjson.com/products") .then((res) => res.json())
   
};
export const getCustomers = () => {
  return fetch('https://dummyjson.com/users') .then((res) => res.json())
   
};

