import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
    palette: {
        primary:{
            main:'#615245',
            contrastText: '#fff'
        },
        secondary: {
            main: "#562555"
        }
    }
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
