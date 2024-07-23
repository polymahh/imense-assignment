import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ViolationInfoCard from "./violation_info_card";
import { Violation } from "@/data/workers";
function ViolationsNumber({ violation_data }: { violation_data: Violation[] }) {
    const violation_code = violation_data.length >= 10 ? "codered" : "codeyellow";
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={violation_code} size={"violation"}>
                    {violation_data.length}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2 " side="right">
                <div className="flex flex-col divide-y-[1px] max-h-[50vh] overflow-y-auto ">
                    {violation_data.map((violation, index) => {
                        return <ViolationInfoCard key={index} {...violation} />;
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ViolationsNumber;
