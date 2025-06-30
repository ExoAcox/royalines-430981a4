"use client"

import { ActionButton, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";

import { MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";


const ManageFlight: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <PiAirplaneTiltBold className="size-6" />
            <h4>Manage Flight</h4>
            <Link href="/manage_flight/edit_flight" className="ml-auto"><Button ><FaPlus /> Add New Flight</Button></Link>
        </div>
        <TextField placeholder="Search Flight" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Flight Code", "Tail Number", "Class Available", "Total Seats", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><ActionButton type="edit" className="w-24" /></Link>
                        <ActionButton type="delete" className="w-24" />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><ActionButton type="edit" className="w-24" /></Link>
                        <ActionButton type="delete" className="w-24" />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><ActionButton type="edit" className="w-24" /></Link>
                        <ActionButton type="delete" className="w-24" />
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><ActionButton type="edit" className="w-24" /></Link>
                        <ActionButton type="delete" className="w-24" />
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageFlight;