import { createSlice } from "@reduxjs/toolkit";
import { Seller } from "../../../../server/model/seller.model";

const initialState = {
    isSeller: null,
    sellerAllPosts: null,
    sellerBookReq: []
}

const SellerSlice = createSlice({
    name: 'SellerSlice',
    initialState,
    reducers: {
        setIsSeller: (state, action) => {
            state.isSeller = action.payload
        },
        setSellerAllPosts: (state, action) => {
            state.sellerAllPosts = action.payload
        },
        setSellerBookReq: (state, action) => {
            state.sellerBookReq = action.payload
        }
    }
})

export const {setIsSeller, setSellerBookReq, setSellerAllPosts} = SellerSlice.actions;
export default SellerSlice.reducer