import Menu from "../menu";
import { cartListDelete, cartListDeleteItem, cartListAmountSet} from "../../store/shoppingCartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Container } from "@mui/system";
import * as React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import TextField from '@mui/material/TextField';
import {NavLink} from 'react-router-dom';

const CartList = () => {

    const selectorCart = state => state.cartList.cart;
    const cart = useSelector(selectorCart);
    const dispatch = useDispatch();
    const resultForPayment = () => {
        let value = 0;
        cart.forEach((item, idx) => {
            value = value + item.amount*item.discountPrice        
        });
        return value;
    };

    const setValue = (value, id) => {
        let amount = +value;
        if (isNaN(amount) || amount < 1) {amount = 1};
        if (amount > 99) {amount = 99};
        dispatch(cartListAmountSet({amount, id}));
    };

    const increaseValue = (amount, id) => {
        if (amount >= 99) {
            amount = 99
        } else {amount = +amount + 1};
        dispatch(cartListAmountSet({amount, id}));
    };

    const decreaseValue = (amount, id) => {
        if (amount <= 1) {
            amount = 1} else amount = +amount - 1;
        dispatch(cartListAmountSet({amount, id}));
    };
     
    return (
        <>
        <Menu/>
            <Container maxWidth="sm" >
                <Grid container
                    px={{sm:4, xs:1}} 
                    py={13}
                    direction="column"
                    justifyContent="center"
                >
                    {cart.map((product) => (
                        <React.Fragment key={product.id}>
                            <Grid container item
                                direction={{xs:'column', sm:'row'}}  
                                justifyContent="center"
                                alignItems="center"
                                py={5}>
                                <Grid container item direction={{ sm:'row'}}  xs={12} sm={6} 
                                    textAlign={'center'}
                                    columnSpacing={0}
                                    alignItems={{sm:"center"}}
                                    mb={{xs:4, sm:0}}
                                > 
                                    <Grid item xs={3}>
                                    <NavLink 
                                            to={`/category/${product.id}`} 
                                            state={{ product }}
                                            style={{ textDecoration: "none" }} 
                                            >
                                        <img width={50} alt={product.title} src={`../images/${product.image}`}/>
                                    </NavLink>    
                                    </Grid>
                                    <Grid item xs={9} sm={9} alignSelf={'center'}>
                                        <NavLink 
                                            to={`/category/${product.id}`} 
                                            state={{ product }}
                                            style={{ textDecoration: "none" }} 
                                            >
                                                <Typography>{product.title}</Typography>
                                        </NavLink>
                                    </Grid>                                    
                                </Grid> 
                                <Grid container item direction='row' xs={12} sm={6}  
                                >
                                    <Grid container item xs={6} sm={6} direction="row" alignItems="center" >
                                        <Grid item xs={3} sm={3} textAlign='end' onClick={()=>{decreaseValue(product.amount, product.id)}}><RemoveIcon/></Grid>
                                        <Grid item xs={6} sm={6} textAlign='center'> 
                                        <TextField
                                            variant="outlined"
                                            value={product.amount}
                                            onChange={(e)=>{setValue(e.target.value, product.id)}}
                                            inputProps={{style: { textAlign: 'center' }}}
                                        /> 
                                        </Grid>   
                                        <Grid item xs={3} onClick={()=>{increaseValue(product.amount, product.id)}}><AddIcon/></Grid> 
                                    </Grid>
                                    <Grid item xs={4} sm={4} textAlign='center' alignSelf={'center'}><Typography>{product.discountPrice * product.amount}</Typography></Grid>
                                    <Grid item xs={2} sm={2} alignSelf={'center'} 
                                        textAlign={'end'} 
                                        onClick={()=>{dispatch(cartListDeleteItem(product.id))}}
                                    ><DeleteForeverOutlinedIcon/></Grid>
                                </Grid>       
                            </Grid>
                            <Divider />
                        </React.Fragment>    
                        ))}
                    <Grid container direction="row" >
                        <Grid item xs={8} sm={9}> <Typography>всього</Typography></Grid>                       
                        <Grid item xs={4} sm={3} textAlign='center'><Typography>{resultForPayment()} грн</Typography></Grid>
                    </Grid>
                </Grid>
                    <Button variant="contained" onClick={()=>{dispatch(cartListDelete())}}>очистити кошик</Button>
            </Container>
        </>
    )
};

export default CartList;