import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router"

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";




const AppLayout = ()=> {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);