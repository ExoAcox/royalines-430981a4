"use client"

import { BackButton, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { SeatOccupiedLayout, SeatOccupiedSidebar } from "@features/manage_seat/components";
import { useState } from "react";


const seats_ = {
    numbering: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    layouts: [{
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
        column: [2, 4, 2],
        row: 10
    }]
}


const SeatOccupied: React.FC<Page> = ({ }) => {
    const [seats, setSeats] = useState(seats_)



    return <Wrapper sidebar={false}>
        <div className="flex gap-3 items-center bg-white border-b py-4 px-16 z-[2] sticky top-0">
            <BackButton href="/manage_flight/edit_flight" />
            <h4>Occupied Seat - RJL45</h4>
        </div>
        <div className="flex-1 flex">
            <div className="max-h-[calc(100dvh-11.75rem)] sticky top-19 overflow-auto">
                <SeatOccupiedSidebar seats={seats} />
            </div>
            <SeatOccupiedLayout seats={seats} />
        </div>


    </Wrapper>
}

export default SeatOccupied;