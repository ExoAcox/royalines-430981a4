import { Button } from "@components/button";
import { TextField } from "@components/input"
import { FaMoneyBills } from "react-icons/fa6";


interface Props {
    children: string;
    value: number;
}

const ScheduleCard: React.FC<Props> = ({ children, value }) => {
    return <div className="flex flex-col flex-1 gap-3">
        <label className="text-black text-sm font-semibold">{children}</label>
        <TextField label="Pricing Range" value={value.toString()} example="Auto-filled after the price is set" disabled />
        <Button className="w-full"><FaMoneyBills /> Set Price</Button>
    </div>
}

export default ScheduleCard