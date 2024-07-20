import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";
import { Icons } from "@/lib/icons";
const languages = [
    {
        name: "english",
        label: "English (EN)",
        Icon: Icons.english,
    },
    {
        name: "french",
        label: "Français (FR)",
        Icon: Icons.french,
    },
    {
        name: "nederlands",
        label: "Nederlands (NL)",
        Icon: Icons.nederlands,
    },
    {
        name: "espanol",
        label: "Español (ES)",
        Icon: Icons.espanol,
    },
    {
        name: "deutsch",
        label: "Deutsch (DE)",
        Icon: Icons.deutsch,
    },
];
function LanguageDropdown() {
    const [language, setLanguage] = useState(languages[0].name);
    const SelectedIcon = Icons[language as keyof typeof Icons];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                    <SelectedIcon />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="">
                {languages.map((lang, idx) => {
                    return (
                        <DropdownMenuItem key={idx} onClick={() => setLanguage(lang.name)} className="flex gap-2">
                            <lang.Icon />
                            <span>{lang.label}</span>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default LanguageDropdown;
