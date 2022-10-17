import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
};

const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState,
    reducers: {
        currentProductSet: (state, action) => {state.product = action.payload}
    }
});

const {actions, reducer} = currentProductSlice;

export default reducer;
export const {
    currentProductSet
} = actions;