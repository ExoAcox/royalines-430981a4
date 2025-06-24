import { tw } from "@functions/style"

import Image from "next/image"


import PlaneHead from "@images/bitmap/plane-head.png"
import { TextField } from "@components/input"
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


const SeatConfigLayout: React.FC<Props> = ({ seats, setSeats }) => {


    return <div className="flex flex-1 overflow-auto px-24">
        <div className="bg-white flex flex-col gap-6 relative p-6 mt-[16rem] pb-16 mx-auto">
            <Image src={PlaneHead} alt="" className="absolute w-full left-1/2 -translate-x-1/2 top-0.5 -translate-y-full" />
            {seats.layouts.map((layout, layoutIndex) => {
                const lastLayoutIndex = seats.layouts.slice(0, layoutIndex).reduce((acc, current) => acc + current.row, 0)

                return <div key={layoutIndex}>
                    <div>
                        <div className="flex-center bg-[#ADE2FE] h-10 rounded-md mb-4 text-sm font-semibold" >Section {layoutIndex + 1}</div>
                        <div className="flex gap-12 justify-center pt-8">
                            {layout.column.map((column, columnIndex) => {
                                const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                                if (column === 0) {
                                    return <div key={columnIndex} className="w-10 h-10" />
                                }

                                return <div key={columnIndex} className="relative">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full text-center w-full min-w-fit whitespace-nowrap text-xs text-grey-60 border-b-[3] border-grey-60 mb-2.5 pb-1">Column {columnIndex + 1}</div>
                                    <div className="flex gap-2">
                                        {Array.from({ length: column }, (_, cellIndex) => {
                                            const isError = !layout.alphabet[lastIndex + cellIndex] || layout.alphabet.filter(value => value === layout.alphabet[lastIndex + cellIndex]).length > 1

                                            return <TextField
                                                key={`alphabet-${lastIndex + cellIndex}`}
                                                value={layout.alphabet[lastIndex + cellIndex]}
                                                onChange={(value) => {
                                                    const seats_ = produce(seats, draft => {
                                                        draft.layouts[layoutIndex].alphabet[lastIndex + cellIndex] = value.slice(0, 2).toUpperCase()
                                                    })

                                                    setSeats(seats_)
                                                }} parentClassName="mb-2" className={tw("w-10 h-10 rounded-sm px-0.5 text-xs font-semibold", isError && "bg-error-40")} inputClassName="text-center" />
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {Array.from({ length: layout.row }, (_, rowIndex) => {
                            const isError = !seats.numbering[lastLayoutIndex + rowIndex] || seats.numbering.filter(value => value === seats.numbering[lastLayoutIndex + rowIndex]).length > 1

                            return <div key={rowIndex} className="flex gap-12 justify-center">
                                <TextField
                                    key={`numbering-${lastLayoutIndex + rowIndex}`}
                                    value={seats.numbering[lastLayoutIndex + rowIndex]}
                                    onChange={(value_) => {
                                        let value = value_.replace(/\D/g, '')
                                        const seats_ = produce(seats, draft => {
                                            draft.numbering[lastLayoutIndex + rowIndex] = Number(value.slice(0, 3))
                                        })

                                        setSeats(seats_)
                                    }} className={tw("w-10 h-10 rounded-sm px-0.5 text-xs font-semibold", isError && "bg-error-40")} inputClassName="text-center" parentClassName="absolute -left-14" />


                                {layout.column.map((column, columnIndex) => {
                                    const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                                    if (column === 0) {
                                        return <div key={columnIndex} className="w-10 h-10" />
                                    }

                                    return <div key={columnIndex} className="flex gap-2">
                                        {Array.from({ length: column }, (_, cellIndex) => {
                                            const seatId = layout.alphabet[lastIndex + cellIndex] + seats.numbering[lastLayoutIndex + rowIndex]

                                            return <div key={cellIndex} className="w-10 h-10 bg-grey-50 rounded-sm" />
                                        })}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div >
}

export default SeatConfigLayout