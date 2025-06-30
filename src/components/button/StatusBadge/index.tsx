import { tw } from "@functions/style"
import { useMemo } from "react";

import { FaCircle } from "react-icons/fa";




interface Props {
    type: "verified" | "waiting" | "declined"
}

const StatusBadge: React.FC<Props> = ({ type }) => {

    const classNameFinal = tw(
        "flex gap-2 max-w-fit font-medium items-center text-xs rounded-[2.375rem] h-7 px-2 mx-auto capitalize",
        type === "verified" && "text-[#259800] bg-[#F0FEED]",
        type === "waiting" && "text-[#3083FF] bg-[#EDF5FE]",
        type === "declined" && "text-[#A540B9] bg-[#FADFFF]"
    )



    return <div onClick={() => {
    }} className={classNameFinal}><FaCircle className="w-2 h-2" />{type}</div>
}

export default StatusBadge