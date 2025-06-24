import { Button, Chip } from "@components/button";
import { TextField } from "@components/input";
import { Checkbox } from "@components/radio";
import { HiTrash } from "react-icons/hi2";
import { PiAirplaneTiltBold, PiFolderSimplePlusFill, PiSeatBold } from "react-icons/pi";
import { When } from "react-if";
import SeatCard from "../SeatCard";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";



interface Props {
    onCancel: () => void;
    onSave: () => void;
}

const EditFlight: React.FC<Props> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()


    return <div>
        <div className="flex items-center gap-3 mb-7 rounded-2xl bg-white py-3 px-6 shadow-xs">
            <PiAirplaneTiltBold className="w-6 h-6" />
            <h4>Manage Flight</h4>
            <Button className="ml-auto mr-1 gap-3 text-error-80 border-error-80" variant="ghost"><HiTrash /> Cancel</Button>
            <Button className="gap-3"><PiFolderSimplePlusFill /> Save Flight</Button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-xs flex flex-col gap-4">
            <div className="flex gap-8">
                <TextField label="Flight Code" placeholder="Insert Flight Code" required parentClassName="flex-1" />
                <TextField label="Tail Number" placeholder="Insert Tail Number" required parentClassName="flex-1" />
            </div>
            <div className="flex gap-8">
                <TextField label="Maximum Seats" placeholder="Insert Maximum Seats" required parentClassName="flex-1" example="Number Only" />
                <Checkbox className="flex-row h-12 items-center" buttonClassName="font-semibold text-sm ml-1" value={[]} label="Available Class" parentClassName="flex-1" options={[{
                    label: "Economy Class",
                    value: "economy"
                }, {
                    label: "Business Class",
                    value: "business"
                }, {
                    label: "First Class",
                    value: "first"
                }]} onChange={() => null} />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h4>Seat Configuration</h4>
                    <When condition={false}>
                        <span className="text-grey-80 text-xs">Please select the available class before setting the seat configuration.</span>
                    </When>
                </div>
                <Chip disabled><PiSeatBold /> Seats Remaining: 0</Chip>
            </div>
            <When condition={true}>
                <div className="flex">
                    <SeatCard value={100} href="/manage_flight/seat_configuration">Economy Class</SeatCard>
                    <div className="max-w-[1px] flex-1 bg-base-border mx-8" />
                    <SeatCard value={100} href="/manage_flight/seat_configuration">Business Class</SeatCard>
                    <div className="max-w-[1px] flex-1 bg-base-border mx-8" />
                    <SeatCard value={100} href="/manage_flight/seat_configuration">First Class</SeatCard>
                </div>
            </When>
        </div>
    </div>
}

export default EditFlight