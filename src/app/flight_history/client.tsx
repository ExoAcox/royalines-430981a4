"use client"

import { BookingBadge, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";

import { MdCalendarMonth } from "react-icons/md";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";


const FlightHistory: React.FC<Page> = ({ }) => {
    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <MdCalendarMonth className="size-6" />
            <h4>Manage Schedule</h4>
        </div>
        <div className="flex gap-8">
            <TextField placeholder="Search Schedule" prefix={<IoSearch />} parentClassName="flex-1" />
            <TextField placeholder="Search Schedule" prefix={<MdCalendarMonth />} parentClassName="flex-1" />
        </div>

        <Table>
            <TableHeader data={["Flight Code", "Flight Route", "Departure", "Arrival", "Status"]} />
            <TableBody data={[
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <BookingBadge color="red" />,

                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <BookingBadge color="red" />,

                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <BookingBadge color="red" />,

                ],
                [
                    <span className="text-black">GA-712</span>,
                    <p>Jakarta, Indonesia (CGK) -<br />Jeddah, Saudi Arabia (JED)</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    <BookingBadge color="red" />,

                ]
            ]} />
        </Table>
    </Wrapper>
}

export default FlightHistory;