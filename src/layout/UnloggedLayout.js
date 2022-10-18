import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import NavbarLogged from "../components/NavbarLogged";

const UnloggedLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
};

export default UnloggedLayout;