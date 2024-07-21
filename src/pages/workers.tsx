import { DataTable } from "@/components/table/data_table";
import { columns } from "@/components/table/table_columns";
import Sites from "@/components/workers/sites";
import { workers_data } from "@/data/workers";

function Workers() {
    return (
        <div className="flex flex-col grow ">
            <Sites />
            <div className="grow bg-secondary border border-red-500 p-6">
                <DataTable columns={columns} data={workers_data} name="P.P.E Violations Table" />
            </div>
        </div>
    );
}

export default Workers;
