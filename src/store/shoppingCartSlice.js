import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartListSlice = createSlice({
    name: 'cartList',
    initialState,
    reducers: {
        cartListSet: (state, action) => {
            state.cart.push(action.payload)
        },
        cartListDelete: (state) => {state.cart = []},
        cartListDeleteItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)},
        cartListAmountSet:  (state, action) => {
            let element = state.cart.find(el => el.id === action.payload.id)
            element.amount = action.payload.amount
        }
    }
});

const {actions, reducer} = cartListSlice;

export default reducer;
export const {
    cartListSet,
    cartListDelete,
    cartListDeleteItem,
    cartListAmountSet
} = actions;