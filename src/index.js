import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './store';
import Router from './router';

/**
 * @returns {React.Component} The Main application component
 */
const MainApp = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </StoreProvider>
    );
};

ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
