import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductsListItem from "./productCategoryListItem";
import Typography from '@mui/material/Typography';

const Views = () => {
    const selectorViews = state => state.viewsList.views;
    const viewsList = useSelector(selectorViews);
 
    const stylesForCard = {
        grid: {
            xs: 6,
            sm: 3,
            md: 2,
            lg: 2,
            navLink: {
                card:{
                    sx:{maxWidth: 120},
                    cardActionArea: {
                        cardMedia: {
                            height: "100"
                        },
                        cardContent: {
                            textAlign:'center',
                            p:1,
                            typography:{
                                variant: 'body2',
                                height: 50
                            },
                            div:{
                                typographyPrice:{
                                    height: 20, 
                                    variant: "body2" 
                                },
                                typographyDiscount:{
                                    variant: "body2" ,
                                    sx:{ mt: -5, ml: 4 }
                                },
                                typographyPriceWithOutDiscount:{
                                    variant: "body2",
                                    height: 20 
                                }
                            }
                        }
                    }
                }
            }
       }
    }

return (
    <Container maxWidth="xl">
        <Typography 
            sx={{fontSize: {xl:"15px", sm:"25px"} }} 
            align='center' gutterBottom>
            останні переглянуті товари
            </Typography>
        <Grid container  
            px={{sm:4}} 
            py={1}
            direction="row"
            justifyContent="center"
            rowSpacing={5} 
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        >
            {viewsList.map((product) => (
                <ProductsListItem  key={product.id} product={product} stylesForCard={stylesForCard}/>
            ))}   
        </Grid>
</Container>   
)
}

export default Views;