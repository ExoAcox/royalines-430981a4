import { tw } from "@functions/style"
import { MdClose } from "react-icons/md"

import Image from "next/image"

import { When } from "react-if"

import PlaneHead from "@images/bitmap/plane-head.png"
import { SeatPrice } from "@app/manage_schedule/seat_price/client"
import { produce } from "immer"


interface Props {
    seats: {
        numbering: number[],
        layouts: {
            alphabet: string[],
            column: number[],
            row: number
        }[]
    },
    prices: { price: string, color: string }[],
    setPrices: (prices: any) => void,
    priceData: SeatPrice[],
    setPriceData: (prices: any) => void,
    activePriceIndex: number,
}

const SeatPicker: React.FC<Props> = ({ seats, prices, setPrices, priceData, setPriceData, activePriceIndex }) => {

    const handleSeatSelect = (seatId: string) => {
        const priceData_ = produce(priceData, draft => {
            const price = prices[activePriceIndex]
            const index = priceData.findIndex(data => data.seat_number === seatId)
            draft[index].price = price.price
        })

        setPriceData(priceData_)
    }


    return <div className="flex flex-1 justify-center">
        <div className="bg-white flex flex-col gap-6 relative p-4 mt-[16rem] pb-16">
            <Image src={PlaneHead} alt="" className="absolute w-full left-1/2 -translate-x-1/2 top-0.5 -translate-y-full" />
            {seats.layouts.map((layout, layoutIndex) => {
                const lastLayoutIndex = seats.layouts.slice(0, layoutIndex).reduce((acc, current) => acc + current.row, 0)

                return <div key={layoutIndex}>
                    <div className="flex gap-12 justify-center">
                        {layout.column.map((column, columnIndex) => {
                            const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                            if (column === 0) {
                                return <div key={columnIndex} className="w-8 h-8" />
                            }

                            return <div key={columnIndex} className="flex gap-2">
                                {Array.from({ length: column }, (_, cellIndex) => {
                                    return <div key={cellIndex} className="flex-center w-8 h-8 text-2xs font-semibold">{layout.alphabet[lastIndex + cellIndex]}</div>
                                })}
                            </div>
                        })}
                    </div>
                    <div className="flex flex-col gap-2">
                        {Array.from({ length: layout.row }, (_, rowIndex) => {
                            return <div key={rowIndex} className="flex gap-12 justify-center">
                                <div className="flex-center w-8 h-8 text-2xs font-semibold absolute -left-10">{seats.numbering[lastLayoutIndex + rowIndex]}</div>
                                {layout.column.map((column, columnIndex) => {
                                    const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                                    if (column === 0) {
                                        return <div key={columnIndex} className="w-8 h-8" />
                                    }

                                    return <div key={columnIndex} className="flex gap-2">
                                        {Array.from({ length: column }, (_, cellIndex) => {
                                            const seatId = seats.numbering[lastLayoutIndex + rowIndex] + layout.alphabet[lastIndex + cellIndex]
                                            const seat = priceData.find(data => data.seat_number === seatId)
                                            const price = seat?.price ? prices.find(data => data.price === seat?.price)?.color : ""



                                            return <div key={seatId} onClick={() => handleSeatSelect(seatId)}
                                                className={tw("flex-center w-8 h-8 bg-blue-20 text-2xs font-semibold rounded-sm cursor-pointer",

                                                    // occupied && "bg-grey-50 cursor-not-allowed",
                                                    // selected > 0 && "bg-success-70 cursor-default"
                                                )} style={{ backgroundColor: price }} />
                                        })}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default SeatPicker