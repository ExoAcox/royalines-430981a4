import { Button, Chip } from "@components/button"
import { PiSeatBold } from "react-icons/pi"
import SeatSectionCard from "../SeatSectionCard"
import { FaPlus } from "react-icons/fa6"
import { produce } from "immer"




interface Props {
    seats: {
        numbering: number[]
        layouts: {
            alphabet: string[]
            column: number[]
            row: number
        }[]
    }
    setSeats: (seats: any) => void
}


const SeatConfigSidebar: React.FC<Props> = ({ seats, setSeats }) => {
    return <div className="h-full mx-2 my-4">
        <div className="bg-white m-2 rounded-2xl p-4 w-[30rem] shadow-xs">
            <div className="flex justify-between items-center mb-4">
                <h4>Seat Configuration</h4>
                <Chip disabled><PiSeatBold /> Remaining: 400</Chip>
            </div>
            <div className="flex flex-col gap-4">
                {seats.layouts.map((layout, index) => {
                    return <SeatSectionCard key={index} onChange={({ column, row }) => {
                        const seats_ = produce(seats, draft => {
                            draft.layouts[index].column = column
                            draft.layouts[index].row = row
                        })

                        setSeats(seats_)
                    }} row={layout.row} column={layout.column} index={index} />
                })}
            </div>
            <Button variant="ghost" className="w-full mt-5"><FaPlus /> Add Section</Button>
        </div>
    </div>
}

export default SeatConfigSidebar