import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBuyer: null,
    buyerBookings: null,
    allPosts: []
}

const BuyerSlice = createSlice({
    name: 'BuyerSlice',
    initialState,
    reducers: {
        setIsBuyer: (state, action) => {
            state.isBuyer = action.payload
        },
        setBuyerBookings: (state, action) => {
            state.buyerBookings = action.payload
        },
        setAllPosts: (state, action) => {
            state.allPosts = action.payload
        }

    }
})

export const {setIsBuyer, setBuyerBookings, setAllPosts} = BuyerSlice.actions;
export default BuyerSlice.reducer