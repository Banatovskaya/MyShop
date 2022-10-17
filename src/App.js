import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import ProductCategoryPage from './components/pages/productCategoryPage';
import About from './components/pages/about';
import ProductPage from './components/pages/productPage';
import CartList from './components/pages/cart';

const App = () => {
  
	return (
		<>
			<Router>	
				<Routes>
					<Route path="/" element={<HomePage/>}/>	
					<Route path="/about" element={<About/>}/>		
					<Route path="/category" element={<ProductCategoryPage/>}/>
					<Route path="/category/:id" element={<ProductPage/>}/>
					<Route path="/cart" element={<CartList/>}/>
				</Routes>
			</Router>
		</>
	);
};

export default App;