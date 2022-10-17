import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from './services/postService';
import  cartList  from './shoppingCartSlice';
import currentProduct from './productsSlice';

export const store = configureStore({
	reducer: {
		[postAPI.reducerPath]: postAPI.reducer, 
		cartList, currentProduct
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postAPI.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;