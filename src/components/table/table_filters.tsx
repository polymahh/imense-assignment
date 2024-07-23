import { Input } from "../ui/input";
import { ExpandIcon, Search } from "lucide-react";
import { TableDatePicker } from "./table_date_picker";
import ContractorsSelect from "./contractors_select";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";
import { useUiContext } from "@/context/ui_context";
import { cn } from "@/lib/utils";

interface filterProps {
    name: string;
    search: string;
    setDateSort: Dispatch<React.SetStateAction<DateRange | undefined>>;
    setContractorSort: Dispatch<SetStateAction<string>>;
    setSearch: (value: string) => void;
    dateSort?: DateRange;
    contractorSort: string;
}

function TableFilters({
    name,
    setContractorSort,
    contractorSort,
    search,
    setSearch,
    dateSort,
    setDateSort,
}: filterProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const { setFullScreen, fullScreen } = useUiContext();
    return (
        <div className="flex items-center mb-3 gap-3">
            <h3 className="text-foreground grow font-medium">{name}</h3>
            <div className="relative">
                <Search width={14} height={14} className="absolute left-2 top-2 text-secondary-foreground" />
                <Input
                    placeholder="Search Workers..."
                    value={search}
                    onChange={handleSearch}
                    className="pl-7 h-8 w-[150px] lg:w-[250px]"
                />
            </div>
            <TableDatePicker setDateSort={setDateSort} dateSort={dateSort} />
            <ContractorsSelect setContractorSort={setContractorSort} contractorSort={contractorSort} />
            <Button
                onClick={() => setFullScreen(!fullScreen)}
                variant="outline"
                size="icon"
                className={cn(
                    "h-8 rounded-xs border-border",
                    fullScreen
                        ? "text-background bg-accent-foreground hover:bg-accent-foreground/80 hover:text-background"
                        : "text-secondary-foreground"
                )}
            >
                <ExpandIcon className="h-6 w-6 " />
            </Button>
        </div>
    );
}

export default TableFilters;
