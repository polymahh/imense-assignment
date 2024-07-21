import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
function ContractorsSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px] h-8 rounded-xs border-border">
                <SelectValue defaultValue="all" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Contractors</SelectItem>
                <SelectItem value="contractor1">Contractor 1</SelectItem>
                <SelectItem value="contractor2">Contractor 2</SelectItem>
            </SelectContent>
        </Select>
    );
}

export default ContractorsSelect;
