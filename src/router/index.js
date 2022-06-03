import React from "react";
import { Routes, Route } from 'react-router-dom';
import AppLayout from "src/containers/layout";

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
            
            <Route path='/' element={<AppLayout />}>
                <Route index element={<HomePage />}/>
            </Route>

            <Route path='*' element={}/>
        </Routes>
    );
};

export default Router;
