// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import {CardActionArea} from '@mui/material';
// import Grid from '@mui/material/Grid';
// import {NavLink} from 'react-router-dom';
// import imgErr from '../assets/img.jpg';
// import { useSelector } from "react-redux";
// import { useDispatch } from 'react-redux';
// import { viewsListPop, viewsListUnshift, viewsListFilter } from "../store/viewsSlice";

// const ViewsListItem = (product) => {
//     const selectorViewsLenght = state => state.viewsList.viewListLength;
//     const viewListLength = useSelector(selectorViewsLenght);
//     const selectorViews = state => state.viewsList.views;
//     const viewsList = useSelector(selectorViews);
//     const dispatch = useDispatch();

//     const updateViewList = (product) => {
//         dispatch(viewsListFilter(product.id));
//         if (viewsList.length > viewListLength) {
//             dispatch(viewsListPop());
//         }
//         dispatch(viewsListUnshift(product))   
//     }

//     return (
//         <Grid 
//         item 
//         container 
//         justifyContent='center' 
//         key={product.id}  
//         xs={6} sm={3} md={2} lg={2}>
//             <NavLink 
//                 to={`/category/${product.id}`} 
//                 onClick={()=>updateViewList(product)}
//                 state={{ product }}
//                 style={{ textDecoration: "none" }} 
//             >
//                 <Card  sx={{ maxWidth: 120}} >
//                     <CardActionArea >
//                         <CardMedia
//                             component="img"
//                             height="100"
//                             onError={(e) => e.target.src=imgErr}
//                             image={`../images/${product.image}`}
//                             alt={product.title}
//                         />
//                         <CardContent sx={{textAlign:'center', p:1}}>
//                             <Typography gutterBottom variant="body2" component="div" height={50}>
//                                 {product.title}
//                             </Typography>
//                             {product.discount > 0 
//                             ?   <div>
//                                     <Typography 
//                                         height={20} 
//                                         variant="body2" 
//                                         color="text.secondary" 
//                                         sx={{ textDecoration: "line-through" }}
//                                     >
//                                         цена {product.price} грн
//                                     </Typography>
//                                     <Typography 
//                                         variant="body2" 
//                                         color="warning.main" 
//                                         position="absolute" 
//                                         sx={{ mt: -5, ml: 4 }}
//                                     > 
//                                         {product.price - (product.discount*product.price/100)}грн 
//                                     </Typography>
//                                 </div>
//                             :   <Typography 
//                                     variant="body2" 
//                                     color="text.secondary" 
//                                     height={20}
//                                 >
//                                     цена {product.price} грн
//                                 </Typography>
//                             } 
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>   
//             </NavLink>             
//         </Grid>
//     )
// };


// export default ViewsListItem;