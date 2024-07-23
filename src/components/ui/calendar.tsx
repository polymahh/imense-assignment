import * as React from "react";
import { ChevronLeft } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4 ",
                month_caption: "flex justify-center",
                weekdays: "flex w-full justify-around",
                weekday: "text-foreground font-medium ",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                day_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent rounded-full border-0 p-0 hover:bg-accent-foreground/90 hover:text-background focus:bg-accent-foreground/90 focus:text-background focus:outline-none "
                ),
                button_previous: "absolute left-8 top-[84px]",
                button_next: "absolute right-6 top-[84px] rotate-180",
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full"
                ),
                range_end: "day-range-end rounded-sm rounded-r-full",
                range_start: "day-range-start rounded-sm rounded-l-full",

                today: "text-accent-foreground",
                selected:
                    "bg-accent-foreground text-background hover:bg-accent-foreground/90 hover:text-background rounded-full",
                outside:
                    "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                disabled: "text-muted-foreground opacity-50",
                range_middle: "aria-selected:bg-accent-foreground aria-selected:text-background rounded-none",
                hidden: "invisible",
                weeks: "flex flex-col gap-1",
                week: "rounded-full overflow-hidden",
                root: "pl-0",
                ...classNames,
            }}
            components={{
                Chevron: () => <ChevronLeft className="h-4 w-4" />,
            }}
            {...props}
        />
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
