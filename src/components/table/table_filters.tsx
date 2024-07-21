import { Input } from "../ui/input";
import { Table } from "@tanstack/react-table";
import { ExpandIcon, Search } from "lucide-react";
import { TableDatePicker } from "./table_date_picker";
import ContractorsSelect from "./contractors_select";
import { Button } from "../ui/button";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    name: string;
}

function TableFilters<TData>({ table, name }: DataTableToolbarProps<TData>) {
    return (
        <div className="flex items-center mb-3 gap-3">
            <h3 className="text-foreground grow font-medium">{name}</h3>
            <div className="relative">
                <Search width={14} height={14} className="absolute left-2 top-2 text-secondary-foreground" />
                <Input
                    placeholder="Search Workers..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
                    className="pl-7 h-8 w-[150px] lg:w-[250px]"
                />
            </div>
            <TableDatePicker />
            <ContractorsSelect />
            <Button variant="outline" size="icon" className="h-8 rounded-xs border-border  text-secondary-foreground">
                <ExpandIcon className="h-6 w-6  " />
            </Button>
        </div>
    );
}

export default TableFilters;
