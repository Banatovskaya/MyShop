import Menu from "../menu/menu";
import Container from '@mui/material/Container';

const HomePage = () => {
    return (
        <>
        <Menu/>
        <Container maxWidth="sm" sx={{mt:13 }} >
            <h1>ще не дороблено перейдіть будь ласка на вкладку product Category там можна перейти на сторінку товару і додати товар у кошик, кошик дозволяє коригувати кількість товару від 1 до 99 </h1>
            <h2>тут буде слайдер та останні перегляди</h2>
        </Container>
        </>
    )
}

export default HomePage;