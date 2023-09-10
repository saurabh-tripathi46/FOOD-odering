import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action)=>{
            const filterCart = state.cartItems.filter((itm)=>{
                return itm.card.info.id !== action.payload.card.info.id
            });
            state.cartItems = filterCart;
        }

    }
})

export default cartSlice.reducer;
export const {addItem, removeItem} = cartSlice.actions;