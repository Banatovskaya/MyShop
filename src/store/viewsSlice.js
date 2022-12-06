import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    views: [],
    viewListLength: 5
};

const viewsListSlice = createSlice({
    name: 'viewsList',
    initialState,
    reducers: {
        viewsListFilter: (state, action) => {
            state.views = state.views.filter(el => el.id !== action.payload)

        },
        viewsListUnshift: (state, action) => {
            state.views.unshift(action.payload)
        },
        viewsListPop: (state) => {
            state.views.pop()
        }
    }
})

const {actions, reducer} = viewsListSlice;
export default reducer;

export const {
    viewsListUnshift,
    viewsListPop,
    viewsListFilter
} = actions;