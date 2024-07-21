import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/lib/icons";
import { workers_type } from "@/data/workers";
import { Table } from "@tanstack/react-table";

export function ShowCloumns({ table }: { table: Table<workers_type> }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon"} className="h-8 w-8">
                    <Icons.settings />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select columns to display</DropdownMenuLabel>
                {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column, index) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={`${column.id}${index}`}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => {
                                    column.toggleVisibility(!!value);
                                }}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
