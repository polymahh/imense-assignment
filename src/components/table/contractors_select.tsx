import React, { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
function ContractorsSelect({
    setContractorSort,
    contractorSort,
}: {
    setContractorSort: Dispatch<SetStateAction<string>>;
    contractorSort: string;
}) {
    return (
        <Select onValueChange={setContractorSort} value={contractorSort}>
            <SelectTrigger className="w-[180px] h-8 rounded-xs border-border text-xs text-muted-foreground">
                <SelectValue defaultValue="all" placeholder="All Contractors" />
            </SelectTrigger>
            <SelectContent className="text-xs text-muted-foreground">
                <SelectItem className="text-xs text-muted-foreground" value="all">
                    All Contractors
                </SelectItem>
                <SelectItem className="text-xs text-muted-foreground" value="biowanze">
                    Biowanze
                </SelectItem>
                <SelectItem className="text-xs text-muted-foreground" value="contractor2">
                    Contractor 2
                </SelectItem>
                <SelectItem className="text-xs text-muted-foreground" value="contractor3">
                    Contractor 3
                </SelectItem>
            </SelectContent>
        </Select>
    );
}

export default ContractorsSelect;
