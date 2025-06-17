import { Button } from "@components/button";
import { TextField } from "@components/input"
import { HiSquares2X2 } from "react-icons/hi2";



interface Props {
    children: string;
    value: number;
}

const SeatCard: React.FC<Props> = ({ children, value }) => {
    return <div className="flex flex-col flex-1 gap-3">
        <label className="text-black text-sm font-semibold">{children}</label>
        <TextField label="Total Seats" value={value.toString()} example="Auto-filled after the layout is set" disabled />
        <Button className="w-full"><HiSquares2X2 /> Edit Layout</Button>
    </div>
}

export default SeatCard