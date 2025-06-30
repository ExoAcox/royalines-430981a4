import { Button, Chip } from "@components/button"
import { PiSeatBold } from "react-icons/pi"
import SeatConfigCard from "../SeatConfigCard"
import { FaPlus } from "react-icons/fa6"
import { produce } from "immer"
import { SeatPrice } from "@app/manage_schedule/seat_price/client"
import { TextField } from "@components/input"
import { tw } from "@functions/style"
import uniqolor from "uniqolor"
import { When } from "react-if"


interface Seat {
    numbering: number[]
    layouts: {
        alphabet: string[]
        column: number[]
        row: number
    }[]
}

interface Props {
    seats: Seat,
    prices: { price: string, color: string }[],
    setPrices: (prices: any) => void,
    priceData: SeatPrice[],
    setPriceData: (prices: any) => void,
    activePriceIndex: number,
    setActivePriceIndex: (index: number) => void
}


const SeatConfigSidebar: React.FC<Props> = ({ seats, prices, setPrices, activePriceIndex, setActivePriceIndex }) => {

    const handleChange = (value: string, index: number) => {
        const prices_ = produce(prices, draft => {
            draft[index].price = value
        })

        setPrices(prices_)
    }

    const handleAdd = () => {
        const prices_ = produce(prices, draft => {
            draft.push({ price: "1000", color: uniqolor.random().color })
        })

        setPrices(prices_)
    }


    return <div className="h-fit mx-2 my-4">
        <div className="bg-white m-2 rounded-2xl p-4 shadow-xs w-[24rem]">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-3">
                    <div className="bg-[#C8CCD2] rounded-full size-6" />
                    <label className="text-grey-100">Not set</label>
                </div>
                {prices.map((price, index) => {
                    return <div onClick={() => setActivePriceIndex(index)} key={index} className={tw("flex items-center gap-3 p-3 rounded-md border border-transparent cursor-pointer", activePriceIndex === index && " border-primary bg-primary-bg")}>
                        <div className="bg-[#C8CCD2] rounded-full size-6 shrink-0" style={{ backgroundColor: price.color }} />
                        <TextField value={price.price} parentClassName="w-full" onChange={(value) => handleChange(value, index)} label={`Price ${index + 1}`} />
                    </div>
                })}
            </div>
            <When condition={prices.length < 10}>
                <Button variant="ghost" className="w-full mt-5" onClick={handleAdd}
                ><FaPlus /> Add</Button>
            </When>
        </div>
    </div>
}

export default SeatConfigSidebar