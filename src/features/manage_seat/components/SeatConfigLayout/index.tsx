import { tw } from "@functions/style"
import { MdClose } from "react-icons/md"

import Image from "next/image"

import { When } from "react-if"

import PlaneHead from "@images/bitmap/plane-head.png"
import { TextField } from "@components/input"



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


const SeatConfigLayout: React.FC<Props> = ({ seats }) => {


    return <div className="flex flex-1 overflow-auto px-24">
        <div className="bg-white flex flex-col gap-6 relative p-4 mt-[16rem] pb-16 mx-auto">
            <Image src={PlaneHead} alt="" className="absolute w-full left-1/2 -translate-x-1/2 top-0.5 -translate-y-full" />
            {seats.layouts.map((layout, layoutIndex) => {
                const lastLayoutIndex = seats.layouts.slice(0, layoutIndex).reduce((acc, current) => acc + current.row, 0)

                return <div key={layoutIndex}>
                    <div>
                        <div className="flex-center bg-[#ADE2FE] h-10 rounded-md mb-4 text-sm font-semibold" >Section {layoutIndex + 1}</div>
                        <div className="flex gap-12 justify-center">
                            {layout.column.map((column, columnIndex) => {
                                const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                                if (column === 0) {
                                    return <div key={columnIndex} className="w-10 h-10" />
                                }

                                return <div key={columnIndex} >
                                    <div className="text-center text-xs text-grey-60 border-b-[3] border-grey-60 mb-2.5 pb-1">Column {columnIndex + 1}</div>
                                    <div className="flex gap-2">
                                        {Array.from({ length: column }, (_, cellIndex) => {
                                            return <TextField key={cellIndex} parentClassName="mb-2" className="w-10 h-10 rounded-sm px-0.5 text-xs font-semibold" inputClassName="text-center" value={layout.alphabet[lastIndex + cellIndex]} />
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {Array.from({ length: layout.row }, (_, rowIndex) => {
                            return <div key={rowIndex} className="flex gap-12 justify-center">
                                <TextField className="w-10 h-10 rounded-sm px-0.5 text-xs font-semibold" inputClassName="text-center" parentClassName="absolute -left-14" value={seats.numbering[lastLayoutIndex + rowIndex]} />


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