import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { postAPI } from '../store/services/postService';
import ProductsListItem from './productCategoryListItem';

const ProductsList = () => {
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

    const stylesForCard = {
        grid: {
            xs: 10,
            sm: 5,
            md: 4,
            lg: 3,
            navLink: {
                card:{
                    sx:{maxWidth: 320},
                    cardActionArea: {
                        cardMedia: {
                            height: "300"
                        },
                        cardContent: {
                            textAlign:'center',
                            p:0,
                            typography:{
                                variant: 'h6',
                                height: 60
                            },
                            div:{
                                typographyPrice:{
                                    height: 40, 
                                    variant: "h6" 
                                },
                                typographyDiscount:{
                                    variant: "h6" ,
                                    sx:{ mt: -8, ml: 12 }
                                },
                                typographyPriceWithOutDiscount:{
                                    variant: "h6",
                                    height: 40 
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
            <Grid container  
                px={{sm:4}} 
                py={13}
                direction="row"
                justifyContent="center"
                rowSpacing={5} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {products.map((product) => (
                    <ProductsListItem  key={product.id} product={product} stylesForCard={stylesForCard}/>
                ))}   
            </Grid>
        </Container>   
    )
};

export default ProductsList;



 
 