"use client"

import { Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";

import { MdCalendarMonth, MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";


const ManageSchedule: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <MdCalendarMonth className="w-6 h-6" />
            <h4>Manage Schedule</h4>
            <Button className="ml-auto gap-3"><FaPlus /> Add New Schedule</Button>
        </div>
        <TextField placeholder="Search Schedule" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Flight Code", "Flight Route", "Departure", "Arrival", "Visibility", "Status", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageSchedule;