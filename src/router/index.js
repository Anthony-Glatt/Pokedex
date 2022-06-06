import React from "react";
import { Routes, Route } from 'react-router-dom';
import AppLayout from "../containers/layout";
import HomePageWithStore from "../containers/home";
const Users = () => {<div>hi</div>};
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
            {/* <Route path='/login' element={}/> */}
            
            <Route path='/' element={<AppLayout />}>
                <Route index element={<HomePageWithStore />}/>
                <Route path='users' element={<Users />}/>
            </Route>

            {/* <Route path='*' element={}/> */}
        </Routes>
    );
};

export default Router;
