import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard";
import React from "react";
import {RouterProvider,  createBrowserRouter,} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UnloggedLayout from "./layout/UnloggedLayout";
import EntryLayout from "./layout/EntryLayout";
import LoggedLayout from "./layout/LoggedLayout";
import Favs from "./pages/Favs";
import Preferences from "./components/preferences/Preferences";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UnloggedLayout/>,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
    {
        path: "/",
        element: <EntryLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            }
        ],
    },
    {
        path: "/dashboard",
        element: <LoggedLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>,
            },
            {
                path: "favs",
                element: <Favs/>,
            },
            {
                path: "preferences",
                element: <Preferences/>,
            }
        ],
    },
])

function App() {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
