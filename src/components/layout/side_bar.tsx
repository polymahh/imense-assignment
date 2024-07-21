import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Icons } from "@/lib/icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
    return (
        <NavLink
            to={properties.link}
            // settigng is-active class based on the active link
            className={({ isActive }) => (isActive ? "group is-active" : "group")}
        >
            <Button
                variant={"ghost"}
                className="gap-3 group-[.is-active]:bg-accent-foreground px-2 w-full justify-start "
            >
                <div className="group-[.is-active]:text-background text-secondary-foreground group-hover:text-accent-foreground">
                    {properties.icon}
                </div>
                <span className="group-[.is-active]:text-background text-primary-foreground font-normal group-hover:text-accent-foreground">
                    {properties.label}
                </span>
            </Button>
        </NavLink>
    );
};

const SideBar = () => {
    return (
        <>
            {/* descktop view */}
            <aside className=" h-full w-[250px] border-r-[1px] hidden md:block">
                <div className="flex flex-col h-full space-y-8">
                    <div className="flex p-2 gap-4 ">
                        <a href="/" className="w-[190px]">
                            <img src="/images/logo.png" alt="imense logo" />
                        </a>
                        <Button variant={"ghost"} size={"icon"} className="text-secondary-foreground">
                            <Menu />
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-2 px-4 grow">
                        {SideBarButtons.map((button, index) => (
                            <SidebarButton key={index} properties={button} />
                        ))}
                        <span className="text-xs font-medium text-secondary-foreground">MANAGE</span>
                        {ManageButtons.map((button, index) => (
                            <SidebarButton key={index} properties={button} />
                        ))}
                    </div>
                    <div className="border-t text-secondary-foreground p-4">
                        <span className="text-[13px] text-secondary-foreground font-medium">@ App name 2021</span>
                        <p className="text-[11px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        </p>
                    </div>
                </div>
            </aside>
            {/* mobile view */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="mt-4 ml-2 md:hidden absolute flex justify-center top-0 z-40"
                    >
                        <Menu />
                        <span className="sr-only">Open</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[128px]">
                    <div className="flex flex-col items-center space-y-6">
                        <div>Logo</div>
                        <div className="flex flex-col space-y-9">
                            {SideBarButtons.map((button, index) => (
                                <SidebarButton key={index} properties={button} />
                            ))}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default SideBar;
