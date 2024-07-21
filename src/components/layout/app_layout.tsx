import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./nav_bar";
import SideBar from "./side_bar";

function AppLayout() {
    return (
        <div className="flex h-screen w-screen font-roboto">
            <SideBar />
            <div className="w-full overflow-hidden flex flex-col ">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
