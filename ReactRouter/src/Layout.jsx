import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";
import App from "./App";
function Layout() {
    return(
        <>
       <Header />
       <Outlet />
       <Footer />
        </>
    )
}
export default Layout