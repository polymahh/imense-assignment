import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Icons } from "@/lib/icons";
import LanguageDropdown from "./language_dropdown";
function NavBar() {
    const location = useLocation();
    console.log("🚀 ~ NavBar ~ location:", location);

    const utilButtons = [
        {
            label: "fontSize",
            icon: Icons.fontsize,
        },
        {
            label: "darkMode",
            icon: Icons.dark,
        },
        {
            label: "notifications",
            icon: Icons.notifications,
        },
    ];
    return (
        <div className="w-full flex gap-1 p-2">
            <div className="grow flex items-center">
                <Button variant={"ghost"} size={"icon"} className="text-secondary-foreground">
                    <Menu />
                </Button>
                <span>Overview</span>
            </div>
            {utilButtons.map((button) => {
                return (
                    <Button key={button.label} variant={"ghost"} className="text-secondary-foreground px-2">
                        <button.icon />
                    </Button>
                );
            })}
            <LanguageDropdown />
        </div>
    );
}

export default NavBar;
