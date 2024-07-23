import { workers_data, workers_type } from "@/data/workers";
import { DateRange } from "react-day-picker";

interface filterProps {
    search: string;
    contractorSort: string;
    dateSort?: DateRange;
    limit: string;
    length: string;
}

export const getWorkers = async ({ search, contractorSort, dateSort, limit, length }: filterProps) => {
    // this is a mock api call to mimic getting filtered data from a server
    return new Promise<workers_type[]>((resolve) => {
        setTimeout(() => {
            resolve(filterData({ search, contractorSort, dateSort, limit, length }) as workers_type[]);
        }, 800);
    });
};

const filterData = ({ contractorSort, search, limit, length, dateSort }: filterProps) => {
    const filterByContractor = (data: workers_type[], contractorSort: string) => {
        if (contractorSort === "all" || !contractorSort) {
            return data;
        }
        return data.filter((item) => item.contractor === contractorSort);
    };

    const filterBySearch = (data: workers_type[], search: string) => {
        if (!search) {
            return data;
        }
        const lowerSearch = search.toLowerCase();
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(lowerSearch) ||
                item.contractor.toLowerCase().includes(lowerSearch) ||
                item.role.toLowerCase().includes(lowerSearch)
        );
    };

    const paginate = (data: workers_type[], length: string, limit: string) => {
        const start = Number(length);
        const end = start + Number(limit);
        return data.slice(start, end);
    };

    const filterByDate = (data: workers_type[], dateSort: DateRange) => {
        if (!dateSort?.from || !dateSort?.to) {
            return data;
        }
        return data.map((item) => ({
            ...item,
            violations: item.violations.filter(
                (violation) =>
                    new Date(violation.date) >= new Date(dateSort.from!) &&
                    new Date(violation.date) <= new Date(dateSort.to!)
            ),
        }));
    };

    let filteredData = workers_data;
    filteredData = filterByContractor(filteredData, contractorSort);
    filteredData = filterBySearch(filteredData, search);
    filteredData = paginate(filteredData, length, limit);
    filteredData = filterByDate(filteredData, dateSort!);

    return filteredData;
};
