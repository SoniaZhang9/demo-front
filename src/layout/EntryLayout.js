import React from 'react';
import {Outlet} from "react-router";
import Bicycle from '../assets/illustrations/bicycle.svg'
import Navbar from "../components/Navbar";
import {useLocation} from "react-router-dom";

function EntryLayout() {

    return (
        <>
            <Navbar/>
            <div className="light-background"></div>
            <img className="main-img" src={Bicycle} alt="earth"/>
            <Outlet />
        </>
    );
}

export default EntryLayout;