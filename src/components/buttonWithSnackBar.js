import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

export const ButtonWithSnackBar = ({handleClick, message}) => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {return}
        setOpen(false);
    };

    return (
        <>
            <Button 
                variant="contained" 
                size="large" 
                sx={{mx:'auto' }}
                onClick={()=>{
                handleOpen();
                handleClick()}}
            >купить
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={500}
                onClose={handleClose}
                message={message}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} 
            >
            </Snackbar>
        </>
    )
};

