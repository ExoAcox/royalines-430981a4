import { Button } from "@components/button";
import { TextField } from "@components/input"
import { Link } from "@components/navigation";
import { HiSquares2X2 } from "react-icons/hi2";



interface Props {
    children: string;
    value: number;
    href: string;
    disabled?: boolean
}

const SeatCard: React.FC<Props> = ({ children, value, href, disabled }) => {
    return <div className="flex flex-col flex-1 gap-3">
        <label className="text-black text-sm font-semibold">{children}</label>
        <TextField label="Total Seats" value={value.toString()} example="Auto-filled after the layout is set" disabled />
        <Link href={href} disabled={disabled}><Button className="w-full" disabled={disabled}><HiSquares2X2 /> Edit Layout</Button></Link>
    </div>
}

export default SeatCard