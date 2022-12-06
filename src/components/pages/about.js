import UsersMenu from "../menu"
import Container from '@mui/material/Container';

const About = () => {
    return (
        <>
            <UsersMenu/>
                <Container maxWidth="sm" sx={{mt:13 }} >
                    <h2>Це проект для демонстрації моїх навичок як кандидата на посаду junior Front-ent розробник</h2>
                    <h1> візьміть мене на роботу</h1>
                    <img alt='cat from cartoon "SHREK"' width = '100%' src = 'https://oir.mobi/uploads/posts/2020-01/1579449720_1-1.jpg' ></img>
                </Container>
        </>
    )
}

export default About;