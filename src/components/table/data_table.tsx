import { ColumnDef, flexRender, getCoreRowModel, useReactTable, VisibilityState } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    lastItem: (item: HTMLElement | null) => void;
    isLoading: boolean;
}

export function DataTable<TData, TValue>({ columns, data, lastItem, isLoading }: DataTableProps<TData, TValue>) {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            columnVisibility,
        },
    });

    return (
        <div className="rounded-md h-full absolute inset-0 overflow-auto  flex flex-col  ">
            <Table className="bg-background border border-border rounded-sm h-full ">
                <TableHeader className="sticky shadow-[0_0px_1px_rgba(216,216,216,1)] -top-1 z-10 bg-background ">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="hover:bg-background ">
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className={cn({
                                            "border-r px-1": header.id.includes("index"),
                                            "border-r ": header.id.includes("workers"),
                                        })}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row, index, arr) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                ref={arr.length === index + 1 ? lastItem : null}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className={cn({
                                            "border-r px-1": cell.id.includes("index"),
                                            "border-r ": cell.id.includes("workers"),
                                        })}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : isLoading ? (
                        <TableRow>
                            <TableCell className="h-24 text-center">Loading...</TableCell>
                        </TableRow>
                    ) : (
                        <TableRow>
                            <TableCell className="h-24 text-center">No results.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
