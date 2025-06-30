import { Button, Chip } from "@components/button"
import { PiSeatBold } from "react-icons/pi"
import SeatConfigCard from "../SeatConfigCard"
import { FaPlus } from "react-icons/fa6"
import { produce } from "immer"


interface Seat {
    numbering: number[]
    layouts: {
        alphabet: string[]
        column: number[]
        row: number
    }[]
}
interface Props {
    seats: Seat
    setSeats: (seats: any) => void
}


const SeatConfigSidebar: React.FC<Props> = ({ seats, setSeats }) => {

    const handleChange = (seats: Seat, index?: number) => {

        const currentNumberingLength = seats.numbering.length
        const nextNumberingLength = seats.layouts.reduce((acc, current) => acc + current.row, 0)

        const seats_ = produce(seats, draft => {
            if (nextNumberingLength > currentNumberingLength) {
                for (let i = 0; i < nextNumberingLength - currentNumberingLength; i++) {
                    draft.numbering.push((draft.numbering.at(-1) ?? 0) + 1)
                }
            } else {
                draft.numbering.splice(nextNumberingLength)
            }

            if (index != undefined) {
                const currentAlphabetLength = seats.layouts[index].alphabet.length
                const nextAlphabetLength = seats.layouts[index].column.reduce((acc, current) => acc + current, 0)



                if (nextAlphabetLength > currentAlphabetLength) {
                    for (let i = 0; i < nextAlphabetLength - currentAlphabetLength; i++) {
                        const lastAlphabet = seats.layouts[index].alphabet.at(-1)
                        const lastCharCode = lastAlphabet?.charCodeAt(lastAlphabet.length - 1) ?? 64
                        draft.layouts[index].alphabet.push(`${lastAlphabet?.length === 2 ? lastAlphabet[0] : ""}${String.fromCharCode(lastCharCode + i + 1)}`)
                    }
                } else {
                    draft.layouts[index].alphabet.splice(nextAlphabetLength)
                }
            }
        })

        return seats_
    }

    return <div className="h-full mx-2 my-4">
        <div className="bg-white m-2 rounded-2xl p-4 w-[30rem] shadow-xs">
            <div className="flex justify-between items-center mb-4">
                <h4>Seat Configuration</h4>
                <Chip disabled><PiSeatBold /> Remaining: 400</Chip>
            </div>
            <div className="flex flex-col gap-4">
                {seats.layouts.map((layout, index) => {
                    return <SeatConfigCard key={index}
                        onChange={({ column, row }) => {
                            const seats_ = produce(seats, draft => {
                                draft.layouts[index].column = column
                                draft.layouts[index].row = row
                            })

                            const seats__ = handleChange(seats_, index)
                            setSeats(seats__)
                        }}
                        onDelete={() => {
                            const seats_ = produce(seats, draft => {
                                draft.layouts.splice(index, 1)
                            })

                            const seats__ = handleChange(seats_)
                            setSeats(seats__)
                        }}
                        row={layout.row} column={layout.column} index={index} />
                })}
            </div>
            <Button variant="ghost" className="w-full mt-5"
                onClick={() => {
                    const seats_ = produce(seats, draft => {
                        draft.layouts.push({
                            alphabet: ["A", "B", "C", "D"],
                            column: [2, 2],
                            row: 10
                        })
                    })

                    const seats__ = handleChange(seats_)
                    setSeats(seats__)
                }}
            ><FaPlus /> Add Section</Button>
        </div>
    </div>
}

export default SeatConfigSidebar