import React from 'react';
import NavbarLogged from "../components/NavbarLogged";
import {Outlet} from "react-router";

function LoggedLayout(props) {
    return (
        <div>
            <NavbarLogged/>
            <Outlet/>
        </div>
    );
}

export default LoggedLayout;