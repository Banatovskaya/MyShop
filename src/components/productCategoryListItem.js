import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom';
import imgErr from '../assets/img.jpg';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { viewsListPop, viewsListUnshift, viewsListFilter } from "../store/viewsSlice";

const ProductsListItem = ({product, stylesForCard}) => {
    
    const selectorViews = state => state.viewsList.views;
    const selectorViewsLenght = state => state.viewsList.viewListLength;
    const viewsList = useSelector(selectorViews);
    const dispatch = useDispatch();
    const viewListLength = useSelector(selectorViewsLenght);

    const updateViewList = (product) => {
        if (viewsList.find(el => el.id === product.id)){ //if item which have watched already exist in viewList 
            dispatch(viewsListFilter(product.id));       // we are deleting viewed item from old place, but viewsList haven`t updated in the store at this moment
             if (viewsList.length > viewListLength) {    // viewsList lenght longer by 1-item then it is, because viewsList did't update yet. That why we used ">" instead ">="       
                dispatch(viewsListPop());                //deleting 1st item
            }
        }else if (viewsList.length >= viewListLength) {  //if item which we watch don`t exist in viewList 
            dispatch(viewsListPop());                    //deleting 1st item 
        }
        dispatch(viewsListUnshift(product))              // adding viewed item   
    }
    
    const grid = {...stylesForCard.grid}

// this component must be reused.
// @material-ui/core/styles don`t work in MUI v5, 
// @mui/styles is not compatible with React.StrictMode or React 18.
// usage css from '@emotion/react' little bit difficult for this big component
// parametrs will be transmitted throught props

    return (
        <Grid 
            item 
            container 
            justifyContent='center' 
            key={product.id}  
            xs={grid.xs} sm={grid.sm} md={grid.md} lg={grid.lg}>
            <NavLink 
                to={`/category/${product.id}`} 
                onClick={()=>updateViewList(product)}
                state={{ product }}
                style={{ textDecoration: "none" }} 
            >
                <Card 
                    sx={grid.navLink.card.sx}
                    >
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height={grid.navLink.card.cardActionArea.cardMedia.height}
                            onError={(e) => e.target.src=imgErr}
                            image={`../images/${product.image}`}
                            alt={product.title}
                        />
                        <CardContent sx={{textAlign: grid.navLink.card.cardActionArea.cardContent.textAlign,
                                          p: grid.navLink.card.cardActionArea.cardContent.p}}>
                            <Typography gutterBottom component="div" 
                                        variant={grid.navLink.card.cardActionArea.cardContent.typography.variant} 
                                        height={grid.navLink.card.cardActionArea.cardContent.typography.height}>
                                {product.title}
                            </Typography>
                            {product.discount > 0 
                            ?   <div>
                                    <Typography 
                                        height={grid.navLink.card.cardActionArea.cardContent.div.typographyPrice.height} 
                                        variant={grid.navLink.card.cardActionArea.cardContent.div.typographyPrice.variant}
                                        color="text.secondary" 
                                        sx={{ textDecoration: "line-through" }}
                                    >
                                        цена {product.price} грн
                                    </Typography>
                                    <Typography 
                                        variant={grid.navLink.card.cardActionArea.cardContent.div.typographyDiscount.variant}
                                        color="warning.main" 
                                        position="absolute" 
                                        sx={grid.navLink.card.cardActionArea.cardContent.div.typographyDiscount.sx}
                                    > 
                                        {product.price - (product.discount*product.price/100)}грн 
                                    </Typography>
                                </div>
                            :   <Typography 
                                    variant={grid.navLink.card.cardActionArea.cardContent.div.typographyPriceWithOutDiscount.variant}
                                    color="text.secondary" 
                                    height={grid.navLink.card.cardActionArea.cardContent.div.typographyPriceWithOutDiscount.height}
                                >
                                    цена {product.price} грн
                                </Typography>
                            } 
                        </CardContent>
                    </CardActionArea>
                </Card>   
            </NavLink>             
        </Grid>
    )
};

export default ProductsListItem;
