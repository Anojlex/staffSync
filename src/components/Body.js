import React from 'react'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from './Dashboard';
import Login from './Login';


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}


export default Body