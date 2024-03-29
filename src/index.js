import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from 'src/store';
import Router from 'src/router';
import 'src/styles/styles.scss';

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
