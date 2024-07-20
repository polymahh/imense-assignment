import React from "react";
import SideBar from "../side_bar";
import { Outlet } from "react-router-dom";
import NavBar from "../nav_bar";

function AppLayout() {
    return (
        <div className="flex h-screen w-screen font-roboto">
            <SideBar />
            <div className="w-full overflow-hidden ">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
