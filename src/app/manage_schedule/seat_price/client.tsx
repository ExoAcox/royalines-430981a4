"use client"

import { BackButton, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { SeatPriceLayout, SeatPriceSidebar } from "@features/manage_seat/components";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiFolderSimplePlusFill } from "react-icons/pi";
import uniqolor from 'uniqolor';

export interface SeatPrice {
    flight_seat_id: number;
    seat_number: string;
    class_name: string;
    price: string;
    currency: string;
    seat_status: "locked" | "available"
}


const seats_ = {
    numbering: [1, 2],
    layouts: [{
        alphabet: ["A", "B"],
        column: [2],
        row: 2
    }]
}

const price_: SeatPrice[] = [
    {
        flight_seat_id: 1,
        seat_number: "1A",
        class_name: "economy",
        price: "",
        currency: "idr",
        seat_status: "available"

    },
    {
        flight_seat_id: 2,
        seat_number: "1B",
        class_name: "economy",
        price: "",
        currency: "idr",
        seat_status: "available"

    },
    {
        flight_seat_id: 3,
        seat_number: "2A",
        class_name: "economy",
        price: "",
        currency: "idr",
        seat_status: "available"

    },
    {
        flight_seat_id: 4,
        seat_number: "2B",
        class_name: "economy",
        price: "",
        currency: "idr",
        seat_status: "available"

    }
]



const SeatPrice: React.FC<Page> = ({ }) => {
    const [seats, setSeats] = useState(seats_)
    const [priceData, setPriceData] = useState(price_)
    const [prices, setPrices] = useState<{ price: string, color: string }[]>([])
    const [activePriceIndex, setActivePriceIndex] = useState(0)
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    useEffect(() => {
        if (!prices.length) {
            const uniquePrices = [...new Set(priceData.map(data => data.price))]
            const prices_ = uniquePrices.length === 1 && !uniquePrices[0] ? [{ price: "1000", color: uniqolor.random().color }] : uniquePrices.map(price => ({ price, color: uniqolor.random().color }))
            setPrices(prices_)
        }
    }, [priceData])


    return <Wrapper sidebar={false}>
        <div className="flex gap-3 items-center bg-white border-b py-4 px-16 z-[2] sticky top-0">
            <BackButton href="/manage_flight/edit_flight" />
            <h4>Set Economy Class Price</h4>
            <Button className="ml-auto gap-3"><PiFolderSimplePlusFill className="size-6" /> Save Price</Button>
        </div>
        <div className="flex-1 flex">
            <div className="max-h-[calc(100dvh-11.75rem)] sticky top-19 overflow-auto">
                <SeatPriceSidebar seats={seats} prices={prices} setPrices={setPrices} priceData={priceData} setPriceData={setPriceData} activePriceIndex={activePriceIndex} setActivePriceIndex={setActivePriceIndex} />
            </div>
            <SeatPriceLayout seats={seats} prices={prices} setPrices={setPrices} priceData={priceData} setPriceData={setPriceData} activePriceIndex={activePriceIndex} />
        </div>
    </Wrapper>
}

export default SeatPrice;