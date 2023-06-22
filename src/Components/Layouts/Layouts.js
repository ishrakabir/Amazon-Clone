import React from 'react';
import Header from '../Header/Header'
import Shop from '../Shop/Shop'
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;