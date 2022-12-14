import Menu from "../menu";
import Container from '@mui/material/Container';
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { postAPI } from "../../store/services/postService";
import imgErr from '../../assets/img.jpg';
import Views from "../views";
import { Divider } from "@mui/material";

const HomePage = () => {
    const idImgForCarousel = [1,3,127];
    const {
        data: products = [] ,
        isfetshing,
        isLoading,
        isError,
        error
    } = postAPI.useGetDataQuery('productList');

    if (isLoading || isfetshing) {
        return <h1>loading...</h1>
    } else if (isError) {
        return <h1>Error {error.status} </h1>
    };

    const getImages = (idesForCarousel, products) => {
        let arr=[];
        idesForCarousel.forEach(el => {
            const itemForSlider = products.find((item) => (+item.id === el))
            if (itemForSlider) {arr.push(itemForSlider)}  
        });
        if (arr.length === 0){
            return [{src: imgErr}]
        } else {
            return arr.map((item) => ({src: `../images/${item.image}`})) 
        };
    };

    
    const images = getImages(idImgForCarousel, products);
   
    return (
        <>
        <Menu/>
        <Container maxWidth="sm" sx={{mt:13 }} >
            <Carousel images={(images)} />
        </Container>
        <Divider sx={{pt:5}} />
        <Views/>
        </>
    )
}

export default HomePage;