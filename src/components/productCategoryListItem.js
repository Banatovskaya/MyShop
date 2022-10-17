import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom';
import imgErr from '../assets/img.jpg';

const ProductsListItem = (product) => {
    
    return (
        <Grid 
        item 
        container 
        justifyContent='center' 
        key={product.id}  
        xs={10} sm={5} md={4} lg={3}>
            <NavLink 
                to={`/category/${product.id}`} 
                state={{ product }}
                style={{ textDecoration: "none" }} 
            >
                <Card  sx={{ maxWidth: 320}} >
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="300"
                            onError={(e) => e.target.src=imgErr}
                            image={`../images/${product.image}`}
                            alt={product.title}
                        />
                        <CardContent sx={{textAlign:'center'}}>
                            <Typography gutterBottom variant="h6" component="div" height={60}>
                                {product.title}
                            </Typography>
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
                        </CardContent>
                    </CardActionArea>
                </Card>   
            </NavLink>             
        </Grid>
    )
};

export default ProductsListItem;
