import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink,} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { postAPI } from '../../store/services/postService';
import Badge from '@mui/material/Badge';
import {useSelector} from "react-redux";

const  UsersMenu = () => {
    
    const {
        data: pages = [] ,
        isLoading,
        isError,
        error
    } = postAPI.useGetDataQuery('menu');
    
    const selectorCart = state => state.cartList.cart;
    const cart = useSelector(selectorCart);

    const changeActive = (isActive) => {
        if (isActive) {
            return {fontWeight: 'bold'};
        } 
    };
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    if (isLoading) {
        return <h1>loading...</h1>
    } else if (isError) {
        return <h1>Error {error.status} </h1>
    };

    let cartAmount = () => {
        let value = 0;
        cart.forEach((item, idx) => {
            value = value + item.amount;  
        });
        return value;
    };

    return (
        <AppBar position="fixed" sx={{pl:'1.5rem', pr:'1.5rem'}}>
            <Container >
                <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page, idx) => (
                            <MenuItem key={idx} onClick={handleCloseNavMenu}>
                                <NavLink key={idx} style={({isActive}) => changeActive(isActive)} to={`${page.link}`}>
                                    <Typography textAlign="center" 
                                    sx={{ fontWeight: 'inherit' }}
                                    >
                                        {page.linkText}
                                    </Typography>
                                </NavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography> 
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, idx) => (
                        <NavLink key={idx} style={({isActive}) => changeActive(isActive)} to={page.link}>
                            <Button key={idx}
                                sx={{ my: 2, 
                                    color: 'primary.contrastText', 
                                    display: 'block', 
                                    fontWeight: 'inherit' }}
                                >
                                    {page.linkText}
                            </Button>                            
                        </NavLink>
                    ))}
                </Box>
                <NavLink 
                    to={`/cart`} 
                >
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton 
                        sx={{color:'primary.contrastText'}}
                        >
                             <Badge badgeContent={cartAmount()} >
                                <ShoppingCartIcon/>
                             </Badge>   
                        </IconButton>              
                    </Box>
                </NavLink>
                </Toolbar>
            </Container>
        </AppBar>  
    );
};

export default UsersMenu;
