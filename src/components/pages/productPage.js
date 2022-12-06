import UsersMenu from "../menu";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imgErr from '../../assets/img.jpg';
import { useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { cartListSet, cartListAmountSet} from "../../store/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWithSnackBar } from "../buttonWithSnackBar";

const ProductPage = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const selectorCart = state => state.cartList.cart;
    const cart = useSelector(selectorCart);
    const {product} = location.state;  
    const dataForCart = {...product, amount: 1, 
        discountPrice: (product.discount > 0 ? (product.price - (product.discount*product.price/100)) : +product.price)
    } ;
   
    const setCartItem = (data) => {
        let element = cart.find(el => el.id === data.id);
        if (element){ 
            let amount = element.amount + 1;
            let id = element.id
            dispatch(cartListAmountSet({amount, id})) ;
        }
        else{
            dispatch(cartListSet(data)) ;
        }
    };

    return (
        <>
            <UsersMenu/>
            <Container maxWidth="sm" sx={{mt:13 }} >
                <Card sx={{ maxWidth: 550}} >
                    <CardMedia
                        component="img"
                        onError={(e) => e.target.src=imgErr}
                        image={`../images/${product.image}`}
                        alt={product.title}
                    />
                    <CardContent >
                        <Typography textAlign='center' gutterBottom variant="h6" component="div" height={60}>
                            {product.title}
                        </Typography>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            {product.discount > 0 
                            ?   <div>
                                    <Typography 
                                        height={40} 
                                        variant="body1" 
                                        color="text.secondary" 
                                        sx={{ textDecoration: "line-through" }}
                                    >
                                        цена {product.price} грн
                                    </Typography>
                                    <Typography 
                                        variant="h6" 
                                        color="warning.main" 
                                        position="absolute" 
                                        sx={{ mt: -8, ml: 10 }}
                                    > 
                                        {product.price - (product.discount*product.price/100)}грн 
                                    </Typography>
                                </div>
                            :   <Typography 
                                    variant="h6" 
                                    color="text.secondary" 
                                    height={40}
                                >
                                    цена {product.price} грн
                                </Typography>
                            }  
                            <CardActions>
                                <ButtonWithSnackBar handleClick={()=>{setCartItem(dataForCart)}}
                                    message='додано до кошика'
                                    >
                                </ButtonWithSnackBar>
                            </CardActions>
                        </Stack> 
                            {product.characteristic.map((el,idx) => {
                                return (
                                    <Typography key={idx}>{el.title}: {el.value} {el.postfix}</Typography>
                                )
                            })}
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            dangerouslySetInnerHTML={{__html: product.text}}
                        >
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default ProductPage;