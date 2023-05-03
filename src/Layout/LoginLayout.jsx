import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;