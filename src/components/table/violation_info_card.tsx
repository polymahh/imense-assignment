import { Violation } from "@/data/workers";
import { Clock3 } from "lucide-react";

function ViolationInfoCard({ img, comment, date, time, number }: Violation) {
    return (
        <div className="py-3 px-1">
            <div className="aspect-4/3 ">
                <img src={img} alt="" />
            </div>
            <div className="flex items-center gap-1 mt-2 mb-1">
                <span className="grow text-sm text-muted-foreground">Comment</span>
                <Clock3 className="text-[#F88923] h-3 w-3" />
                <span className="text-[11px] text-muted-foreground">{date}</span>
                <span className="text-[11px] text-muted-foreground">{time}</span>
                <span className="text-[11px] text-foreground font-medium">{number}</span>
            </div>
            <p className="text-[11px] text-foreground p-1 bg-secondary border border-border rounded-sm">{comment}</p>
        </div>
    );
}

export default ViolationInfoCard;
