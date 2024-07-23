import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
export function TableDatePicker({
    setDateSort,
    dateSort,
}: {
    setDateSort: Dispatch<SetStateAction<DateRange | undefined>>;
    dateSort?: DateRange;
}) {
    return (
        <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[230px] border border-border rounded-xs h-8 justify-start text-left font-normal",
                            !dateSort && "text-muted-foreground"
                        )}
                    >
                        {dateSort?.from ? (
                            dateSort.to ? (
                                <>
                                    {format(dateSort.from, "LLL dd, y")} - {format(dateSort.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(dateSort.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <ChevronDown className="ml-3 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pt-1 flex flex-col gap-2 " align="start">
                    <div className="pl-4 space-y-2">
                        <span className="text-muted-foreground text-sm font-medium ">Date range</span>
                        <Select>
                            <SelectTrigger className="w-[130px] h-8 rounded-sm border-border text-xs text-foreground">
                                <SelectValue defaultValue="custom" placeholder="Custom" />
                            </SelectTrigger>
                            <SelectContent className="text-xs text-muted-foreground">
                                <SelectItem className="text-xs text-muted-foreground" value="custom">
                                    Custom
                                </SelectItem>
                                <SelectItem className="text-xs text-muted-foreground" value="byweek">
                                    by Week
                                </SelectItem>
                                <SelectItem className="text-xs text-muted-foreground" value="bymonth">
                                    by Month
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Calendar
                        // initialFocus = {true}
                        mode="range"
                        defaultMonth={dateSort?.from}
                        selected={dateSort}
                        onSelect={setDateSort}
                        numberOfMonths={1}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
