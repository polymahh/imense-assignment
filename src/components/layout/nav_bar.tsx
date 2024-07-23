import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Icons } from "@/lib/icons";
import LanguageDropdown from "./language_dropdown";
import ProfileDropdown from "./profile_dropdown";
import { useUiContext } from "@/context/ui_context";
import { cn } from "@/lib/utils";
function NavBar() {
    const { minimised, setMinimised, fullScreen } = useUiContext();

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
        <div className={cn("w-full gap-1 p-2 shadow z-20", fullScreen ? "hidden" : "flex")}>
            <div className="grow flex items-center">
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={cn("text-secondary-foreground", minimised ? "flex" : "hidden")}
                    onClick={() => setMinimised(!minimised)}
                >
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
            <ProfileDropdown />
        </div>
    );
}

export default NavBar;
