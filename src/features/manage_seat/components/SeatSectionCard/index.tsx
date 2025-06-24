import { Chip } from "@components/button";
import { CustomDropdown } from "@components/dropdown";
import { PiSeatBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { TextField } from "@components/input";
import { ExampleInput, LabelInput } from "@components/text";
import { produce } from "immer"
import { formatInputNumber } from "@functions/common";



interface Props {
    index: number;
    column: number[];
    row: number;
    onChange: (data: { column: number[], row: number }) => void;
    onDelete: () => void
}

const SeatSectionCard: React.FC<Props> = ({ index, column, row, onChange, onDelete }) => {

    const totalSeat = column.reduce((acc, current) => acc + current, 0) * row

    console.log(formatInputNumber(row.toString()), row)

    return <div >
        <div className="flex items-center py-1 border-b gap-2.5 mb-2">
            <label className="text-lg font-semibold mr-auto">Section {index + 1}</label>
            <Chip disabled><PiSeatBold /> {totalSeat}</Chip>
            <CustomDropdown id={`seat-${index + 1}-dropdown`} buttons={[{
                label: "Delete Section",
                onClick: onDelete
            }]}><IoIosArrowDown className="w-5 h-5" /></CustomDropdown>
        </div>
        <div className="flex flex-col gap-4">
            <TextField label="Column" onChange={value_ => {
                let value = value_.replace(/\D/g, '')
                if (value.startsWith("0")) value = value.slice(1)
                value = value.slice(-1)
                if (Number(value) > 6) value = String(6)
                if (Number(value) < 1) value = String(1)

                if (Number(value) > column.length) {
                    const column_ = produce(column, draft => {
                        for (let i = column.length; i < Number(value); i++) {
                            draft.push(2)
                        }
                    })

                    onChange({ column: column_, row })
                } else {
                    onChange({ column: column.slice(0, Number(value)), row })
                }
            }} value={column.length} example="Enter the number of seat columns (max: 6)" className="w-[10rem]" required />
            <div>
                <LabelInput required>Seat Layout</LabelInput>
                <div className="flex gap-2">
                    {column.map((value, index) => {
                        return <TextField key={index} onChange={(value_) => {
                            let value = value_.replace(/\D/g, '')
                            if (value.startsWith("0")) value = value.slice(1)
                            value = value.slice(-1)
                            if (Number(value) > 6) value = String(6)

                            const column_ = produce(column, draft => {
                                draft[index] = Number(value)
                            })

                            onChange({ column: column_, row })
                        }} value={value} className="w-12" inputClassName="text-center" />
                    })}
                </div>
                <ExampleInput>Specify the number of seats in each column (max: 6)</ExampleInput>
            </div>
            <TextField label="Row" onChange={(value_) => {
                let value = value_.replace(/\D/g, '')
                if (value.startsWith("0")) value = value.slice(1)
                if (Number(value) < 1) value = String(1)
                if (Number(value) > 99) value = String(99)
                onChange({ row: Number(value), column })

            }} value={row} example="Enter the number of seat rows (max: 99)" className="w-[10rem]" required />
        </div>
    </div>
}

export default SeatSectionCard