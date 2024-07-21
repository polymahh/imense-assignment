import { RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import AppLayout from "@/components/layout/app_layout";
import Contractors from "@/pages/contractors";
import Workers from "@/pages/workers";
import PPEs from "@/pages/PPEs";
import PPEViolations from "@/pages/PPEViolations";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/ppe-violations",
                element: <PPEViolations />,
            },
            {
                path: "/ppes",
                element: <PPEs />,
            },
            {
                path: "/contractors",
                element: <Contractors />,
            },
            {
                path: "/workers",
                element: <Workers />,
            },
        ],
    },
];

export default routes;
