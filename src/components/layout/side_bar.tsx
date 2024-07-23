import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Icons } from "@/lib/icons";
import { Button } from "../ui/button";
import { useUiContext } from "@/context/ui_context";
import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SideBarButtons = [
    {
        label: "Dashboard",
        link: "/",
        icon: <Icons.home />,
    },
    {
        label: "P.P.E Violations",
        link: "/ppe-violations",
        icon: <Icons.violations />,
    },
];

const ManageButtons = [
    {
        label: "P.P.Es",
        link: "/ppes",
        icon: <Icons.ppes />,
    },
    {
        label: "Contractors",
        link: "/contractors",
        icon: <Icons.contractors />,
    },
    {
        label: "Workers",
        link: "/workers",
        icon: <Icons.workers />,
    },
];

type SidebarButton = (typeof SideBarButtons)[number];

const SidebarButton = ({ properties }: { properties: SidebarButton }) => {
    const { minimised } = useUiContext();
    const navStyle = minimised ? "px-2" : "px-6";
    return (
        <NavLink
            to={properties.link}
            // settigng is-active class based on the active link
            className={({ isActive }) => (isActive ? `group is-active ${navStyle}` : `group ${navStyle}`)}
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger
                        className={cn(
                            " gap-3 px-2 w-full flex items-center py-2 rounded-md ",
                            minimised ? "justify-center " : "justify-start group-[.is-active]:bg-accent-foreground"
                        )}
                    >
                        <div
                            className={cn(
                                " text-secondary-foreground group-hover:text-accent-foreground",
                                minimised
                                    ? "group-[.is-active]:text-accent-foreground"
                                    : "group-[.is-active]:text-background"
                            )}
                        >
                            {properties.icon}
                        </div>
                        <span
                            className={cn(
                                "group-[.is-active]:text-background text-primary-foreground font-normal group-hover:text-accent-foreground",
                                minimised ? "hidden" : "block"
                            )}
                        >
                            {properties.label}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent
                        side="right"
                        className={cn("bg-foreground text-background rounded-sm", minimised ? "block" : "hidden")}
                    >
                        <p>{properties.label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </NavLink>
    );
};

const SideBar = () => {
    const { minimised, setMinimised, fullScreen } = useUiContext();
    return (
        <>
            {/* descktop view */}
            <aside
                className={cn(
                    " h-full border-r-[1px] overflow-hidden ",
                    minimised ? "w-[65px]" : "min-w-[250px] max-w-[250px]",
                    fullScreen ? "hidden" : "block"
                )}
            >
                <div className="flex flex-col h-full space-y-8">
                    <div className="flex p-2 gap-4 ">
                        <a href="/" className={cn("transition-all", minimised ? " mx-auto" : "w-[190px]")}>
                            <img src={minimised ? "/images/mini-logo.png" : "/images/logo.png"} alt="imense logo" />
                        </a>
                        <Button
                            variant={"ghost"}
                            size={"icon"}
                            className={cn("text-secondary-foreground w-6", minimised ? "hidden" : "flex")}
                            onClick={() => setMinimised(!minimised)}
                        >
                            <Menu />
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-2  grow">
                        {SideBarButtons.map((button, index) => (
                            <SidebarButton key={index} properties={button} />
                        ))}
                        <div>
                            <span
                                className={cn(
                                    "text-xs font-medium text-secondary-foreground pl-4",
                                    minimised ? "hidden" : "block"
                                )}
                            >
                                MANAGE
                            </span>
                            <div className={cn("border-t w-[200px] ", minimised ? "block my-4" : "hidden")}></div>
                        </div>
                        {ManageButtons.map((button, index) => (
                            <SidebarButton key={index} properties={button} />
                        ))}
                    </div>
                    <div className={cn("border-t text-secondary-foreground p-4", minimised ? "hidden" : "block")}>
                        <span className="text-[13px] text-secondary-foreground font-medium">@ App name 2021</span>
                        <p className="text-[11px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
