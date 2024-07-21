import { workers_keys, workers_type } from "@/data/workers";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ShowCloumns } from "./show_columns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const workerKeys: ColumnDef<workers_type>[] = workers_keys.map((header) => {
    return {
        accessorKey: header.name,
        enableHiding: false,
        header: () => (
            <div className="">
                <div className="relative w-[90px] h-[90px]">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[80px] h-[86px] rounded-md bg-secondary"></div>
                    <img src={header.image} alt="" className="absolute top-1 left-1/2 -translate-x-1/2 w-full z-10" />
                </div>
                <span className="capitalize font-normal text-[11px] text-secondary-foreground">{header.name}</span>
            </div>
        ),
        cell: ({ row }) => {
            const violation_count = row.original.violations.find((v) => v.name === header.name)?.createdAt.length;

            return (
                <div className="flex gap-2 items-center">
                    <span className="capitalize text-primary/80">{violation_count ?? "-"}</span>
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
            return <ShowCloumns table={table} />;
        },
        cell: ({ row }) => {
            return <span className="capitalize text-primary/80">{row.index}</span>;
        },
    },
    {
        accessorKey: "workers",
        enableHiding: false,
        header: () => (
            <div>
                <span className="capitalize text-primary/80">Workers</span>
            </div>
        ),
        cell: ({ row }) => {
            const name = row.original.name;

            return (
                <div className="flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src={row.original.image} alt={name} />
                        <AvatarFallback>{`${name?.charAt(0).toUpperCase()}${name
                            ?.charAt(1)
                            .toUpperCase()}`}</AvatarFallback>
                    </Avatar>
                    <span className="capitalize text-primary/80">{name}</span>
                </div>
            );
        },
    },
    ...workerKeys,
];
