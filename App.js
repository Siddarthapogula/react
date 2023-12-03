import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import { Link } from "react-router-dom";
import AboutFunc from "./AboutFunc";

class Heading extends React.Component{

    render(){
        return (
            <div>
                <h1>this is heading</h1>
                <Outlet/>
                <Link to="/" ><h1>Home</h1></Link>
                <Link to="/about" ><h1>About</h1></Link>
            </div>
        )
    }
}
const appRouter = createBrowserRouter ([
    {
        path:"/",
        element:<Heading/>,
        children:[
            {
                path:"/about",
                element:<AboutFunc name={"siddarth"}/>,
                
            },
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)