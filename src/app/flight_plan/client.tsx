"use client"

import { ActionButton, BookingBadge, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";

import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { PiSeatBold } from "react-icons/pi";


const FlightPlan: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <PiSeatBold className="size-6" />
            <h4 className="mr-auto">Flight Plan</h4>
            <TextField placeholder="Search Flight" className="w-[22rem]" prefix={<IoSearch />} />
        </div>
        <Table>
            <TableHeader data={["Flight Code", "Flight Route", "Departure", "Paid Seat", "Status", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "300/300",
                    <BookingBadge color="red" />,
                    <div className="flex flex-col gap-2 items-center">
                        <ActionButton type="view_seat" />
                        <ActionButton type="edit_status" id={`edit-button-1`} />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "300/300",
                    <BookingBadge color="red" />,
                    <div className="flex flex-col gap-2 items-center">
                        <ActionButton type="view_seat" />
                        <ActionButton type="edit_status" id={`edit-button-2`} />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "300/300",
                    <BookingBadge color="red" />,
                    <div className="flex flex-col gap-2 items-center">
                        <ActionButton type="view_seat" />
                        <ActionButton type="edit_status" id={`edit-button-3`} />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "300/300",
                    <BookingBadge color="red" />,
                    <div className="flex flex-col gap-2 items-center">
                        <ActionButton type="view_seat" />
                        <ActionButton type="edit_status" id={`edit-button-4`} />
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default FlightPlan;