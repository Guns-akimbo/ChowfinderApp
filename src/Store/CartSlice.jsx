import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],  
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        userCategory:(state,{payload})=>{
            state.categories = payload
        }
    }

})


export const {userCategory} = cartSlice.actions;
export default cartSlice.reducer;


