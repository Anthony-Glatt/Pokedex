import React from "react";
import { Routes, Route } from 'react-router-dom';

/**
 * The primary router
 * 
 * @function
 * @memberof router
 * @returns {React.Component}
 */

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={}/>
            
            <Route path='/' element={}>
                <Route index element={}/>
            </Route>

            <Route path='*' element={}/>
        </Routes>
    );
};

export default Router;
