import { MdEditCalendar } from "react-icons/md"
import CustomInput from "../CustomInput"
import Dropdown from "@components/dropdown/Dropdown"
import dayjs from "dayjs";
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData);
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs().localeData();
dayjs.extend(customParseFormat);

interface Props {
    date: number;
    month: number;
    year: number;
    onChange: (data: object) => void
}

const DateInput: React.FC<Props> = ({ date, month, year, onChange }) => {


    return <div className="w-fit gap-1.5 flex font-medium items-end">
        <Dropdown label="Date" required id="dropdown-departure-date" className="w-18" labelClassName="text-center block" value={date} options={[
            { label: 1, value: 1 },
            { label: 6, value: 6 },
            { label: 9, value: 9 },
            { label: 24, value: 24 },
            { label: 25, value: 25 },
            { label: 28, value: 28 }
        ]} onChange={(date) => onChange({ date })} />
        <Dropdown id="dropdown-departure-month" className="w-[10rem]" value={dayjs().month(month - 1).format("MMMM")} options={dayjs.months().map(month => ({ label: month, value: month }))} onChange={(month) => onChange({ month: dayjs(month, 'MMMM').month() + 1 })} />
        <Dropdown id="dropdown-departure-year" value={year} options={Array.from({ length: 10 }, (_, index) => ({ label: dayjs().year() + index, value: dayjs().year() + index }))} onChange={(year) => onChange({ year })} />
    </div>
}

export default DateInput