import { workers_keys, workers_type } from "@/data/workers";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ShowHideCloumns } from "./show_hide_columns";
import ViolationsNumber from "./violations_number";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const workerKeys: ColumnDef<workers_type>[] = workers_keys.map((header) => {
    return {
        accessorKey: header.name,
        header: () => (
            <div className="flex flex-col items-center gap-2 py-4">
                <div className="relative w-[90px] h-[90px]">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[80px] h-[86px] rounded-md bg-secondary"></div>
                    <img src={header.image} alt="" className="absolute top-1 left-1/2 -translate-x-1/2 w-full z-10" />
                </div>
                <span className="capitalize font-normal text-[11px] text-center text-secondary-foreground">
                    {header.name}
                </span>
            </div>
        ),
        cell: ({ row }) => {
            const violation_data = row.original.violations.filter(
                (violation) => violation.name.toLowerCase() === header.name.toLowerCase()
            );

            return (
                <div className="flex gap-2 items-center">
                    <span className="text-secondary-foreground mx-auto">
                        {violation_data.length ? <ViolationsNumber violation_data={violation_data} /> : "-"}
                    </span>
                </div>
            );
        },
    };
});

export const columns: ColumnDef<workers_type>[] = [
    {
        accessorKey: "index",
        enableHiding: false,
        header: ({ table }) => {
            return <ShowHideCloumns table={table} />;
        },
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <span className="text-sm mx-auto font-medium text-muted-foreground">{row.index}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "workers",
        enableHiding: false,
        header: () => (
            <div className="flex justify-center w-[240px]">
                <span className="capitalize text-muted-foreground">Workers</span>
            </div>
        ),
        cell: ({ row }) => {
            const name = row.original.name;

            return (
                <div className="flex gap-2 items-center w-[240px]">
                    <Avatar>
                        <AvatarImage src={row.original.image} alt={name} />
                        <AvatarFallback>{`${name?.charAt(0).toUpperCase()}${name
                            ?.charAt(1)
                            .toUpperCase()}`}</AvatarFallback>
                    </Avatar>
                    <div className="grow">
                        <div className="capitalize text-sm text-muted-foreground">{name}</div>
                        <div className="capitalize text-[11px] text-secondary-foreground -mt-1">
                            {row.original.role}
                        </div>
                    </div>
                    <img src="/images/img.png" alt="" />
                </div>
            );
        },
    },
    ...workerKeys,
];
