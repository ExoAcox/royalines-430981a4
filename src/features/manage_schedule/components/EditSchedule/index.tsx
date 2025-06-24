import { Button, Chip } from "@components/button";
import { Dropdown } from "@components/dropdown";
import { DateInput, TextField } from "@components/input";
import { Checkbox } from "@components/radio";
import { HiTrash } from "react-icons/hi2";
import { MdCalendarMonth, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiFolderSimplePlusFill, PiSeatBold } from "react-icons/pi";
import { HiMiniClock } from "react-icons/hi2";
import { When } from "react-if";
import ScheduleCard from "../ScheduleCard";



interface Props {
    onCancel: () => void;
    onSave: () => void;
    isEdit?: boolean;
}

const EditSchedule: React.FC<Props> = ({ isEdit }) => {
    return <div className="pb-8">
        <div className="flex items-center gap-3 mb-7 rounded-2xl bg-white py-3 px-6 shadow-xs">
            <MdCalendarMonth className="w-6 h-6" />
            <h4>{isEdit ? "Edit Schedule" : "Add New Schedule"}</h4>
            <Button className="ml-auto mr-1 text-error-80 border-error-80" variant="ghost"><HiTrash className="w-6 h-6" /> Cancel</Button>
            <Button ><PiFolderSimplePlusFill className="w-6 h-6" /> Save Schedule</Button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-xs flex flex-col gap-4">
            <div className="flex gap-8">
                <Dropdown id="flight-code-dropdown" label="Flight Code" options={[]} value="" onChange={() => null} placeholder="Select Flight Code" required parentClassName="flex-1" />
                <Checkbox className="flex-row h-12 items-center" buttonClassName="font-semibold text-sm ml-1" value={[]} label="Visibility" parentClassName="flex-1" options={[{
                    label: "Draft",
                    value: "draft"
                }, {
                    label: "Published",
                    value: "published"
                },]} onChange={() => null} example="This action is final. You cannot edit it once it’s published" />
            </div>
            <div className="flex gap-8">
                <TextField label="Route" placeholder="Select Route" required className="cursor-pointer" inputClassName="cursor-pointer" parentClassName="flex-1" suffix={<MdOutlineKeyboardArrowDown />} />
                <div className="flex-1" />
            </div>
            <label className="text-lg font-semibold mt-2">Departure</label>
            <div className="flex gap-8 items-start">
                <DateInput date={1} month={5} year={2025} onChange={() => null} />
                <TextField label="Time" placeholder="00:00:00" required prefix={<HiMiniClock className="w-6 h-6" />} suffix={<div className="px-1.5 py-1 border rounded-md -mr-1.5 font-medium text-grey-100">UTC+7</div>} example="UTC will be adjusted automatically based on the selected airport." />
            </div>
            <label className="text-lg font-semibold">Arrival</label>
            <div className="flex gap-8 items-start">
                <DateInput date={1} month={5} year={2025} onChange={() => null} />
                <TextField label="Time" placeholder="00:00:00" required prefix={<HiMiniClock className="w-6 h-6" />} suffix={<div className="px-1.5 py-1 border rounded-md -mr-1.5 font-medium text-grey-100">UTC+7</div>} example="UTC will be adjusted automatically based on the selected airport." />
            </div>
            <label className="text-lg font-semibold mt-2">Seat Price</label>
            <div className="flex">
                <ScheduleCard value={100}>Economy Class</ScheduleCard>
                <div className="max-w-[1px] flex-1 bg-base-border mx-8" />
                <ScheduleCard value={100}>Business Class</ScheduleCard>
                <div className="max-w-[1px] flex-1 bg-base-border mx-8" />
                <ScheduleCard value={100}>First Class</ScheduleCard>
            </div>

        </div>
    </div>
}

export default EditSchedule