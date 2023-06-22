import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';

const ChefLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;