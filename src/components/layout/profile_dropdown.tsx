import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";
import { Icons } from "@/lib/icons";

function ProfileDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-3">
                    <Avatar className="w-8">
                        <AvatarImage src={profile.image} alt="profile image" />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground ">{profile.name}</span>
                    <ChevronDown className="text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mt-2 ">
                <DropdownMenuItem>
                    <span className="text-foreground text-sm font-semibold">{profile.name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="pt-0">
                    <span className="text-muted-foreground ">{profile.email}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a href="/" className="flex gap-2 items-center">
                        <Icons.settings className="text-muted-foreground " />
                        <span className="text-foreground ">Profile settings</span>
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="/" className="flex gap-2 items-center">
                        <Icons.policies className="text-muted-foreground " />
                        <span className="text-foreground ">Our policies</span>
                    </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a href="/" className="flex gap-2 items-center">
                        <Icons.logout className="text-muted-foreground " />
                        <span className="text-foreground">Log out</span>
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ProfileDropdown;
