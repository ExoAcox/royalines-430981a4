"use client"

import { BackButton, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { SeatConfigLayout, SeatConfigSidebar } from "@features/manage_seat/components";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiFolderSimplePlusFill } from "react-icons/pi";

const seats_ = {
    numbering: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    layouts: [{
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
        column: [2, 4, 2],
        row: 10
    }]
}



const SeatConfiguration: React.FC<Page> = ({ }) => {
    const [seats, setSeats] = useState(seats_)
    const { routerChange } = useRouterEvent()
    const router = useRouter()


    return <Wrapper sidebar={false}>
        <div className="flex gap-3 items-center bg-white border-b py-4 px-16 z-[2] sticky top-0">
            <BackButton href="/manage_flight/edit_flight" />
            <h4>Economy Class</h4>
            <Button className="ml-auto gap-3"><PiFolderSimplePlusFill className="w-6 h-6" /> Save Configuration</Button>
        </div>
        <div className="flex-1 flex">
            <div className="max-h-[calc(100dvh-11.75rem)] sticky top-19 overflow-auto">
                <SeatConfigSidebar seats={seats} setSeats={setSeats} />
            </div>
            <SeatConfigLayout seats={seats} setSeats={setSeats} />
        </div>
    </Wrapper>
}

export default SeatConfiguration;