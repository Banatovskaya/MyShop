import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { postAPI } from '../store/servises/postService';
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
                    <ProductsListItem  key={product.id} {...product}/>
                ))}   
            </Grid>
        </Container>   
    )
};

export default ProductsList;
export const{products} = ProductsList;


 
 