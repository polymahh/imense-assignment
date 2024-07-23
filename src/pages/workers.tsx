import { DataTable } from "@/components/table/data_table";
import { columns } from "@/components/table/table_columns";
import TableFilters from "@/components/table/table_filters";
import Sites from "@/components/workers/sites";
import { workers_type } from "@/data/workers";
import useDebounce from "@/hooks/useDebounce";
import useScrollObserver from "@/hooks/useScrollObserver";
import { getWorkers } from "@/lib/api/workersApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

function Workers() {
    const [workers, setWorkers] = useState<workers_type[]>([]);
    const [search, setSearch] = useState("");
    const [dateSort, setDateSort] = useState<DateRange | undefined>({
        from: new Date(2024, 6, 4),
        to: addDays(new Date(2024, 6, 4), 20),
    });
    const [contractorSort, setContractorSort] = useState("all");
    const limit = "8";
    const debounceValue = useDebounce(search, 300);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useInfiniteQuery({
        queryKey: ["teams", { debounceValue, contractorSort, dateSort }],
        getNextPageParam: (lastPage: workers_type[], pages) => {
            if (lastPage?.length === 0) {
                return null;
            }
            return pages?.length || 0;
        },
        retry: false,
        initialPageParam: 0,
        queryFn: async ({ pageParam }) =>
            getWorkers({
                search: debounceValue,
                contractorSort,
                dateSort,
                limit,
                length: (pageParam * Number(limit)).toString(),
            }),
    });

    const lastItem = useScrollObserver(fetchNextPage, isFetchingNextPage, hasNextPage, error);

    useEffect(() => {
        setWorkers((data?.pages as workers_type[][])?.flat());
    }, [data]);
    return (
        <div className="flex flex-col grow  ">
            <Sites />
            <div className="relative grow flex flex-col bg-secondary p-6">
                <TableFilters
                    name="P.P.E Violations Table"
                    search={search}
                    setDateSort={setDateSort}
                    setContractorSort={setContractorSort}
                    setSearch={setSearch}
                    dateSort={dateSort}
                    contractorSort={contractorSort}
                />
                <div className="relative grow">
                    <DataTable columns={columns} data={workers} lastItem={lastItem} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
}

export default Workers;
