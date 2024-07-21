import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const siteOptiions = ["All", "Site 1", "Site 2", "Site 3", "Site 4"];

function Sites() {
    const [site, setSite] = useState(siteOptiions[0]);
    return (
        <div className="border-b flex items-center w-full">
            <div className="bg-secondary/30 text-secondary-foreground text-xs border-r py-2 px-4">SITES</div>
            <div>
                {siteOptiions.map((option) => (
                    <Button
                        variant={"ghost"}
                        key={option}
                        value={option}
                        onClick={() => setSite(option)}
                        className={cn(
                            "text-xs text-secondary-foreground py-2 h-0",
                            option == site && "text-accent-foreground"
                        )}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default Sites;
