"use client"

import { Button } from "@components/button";
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
                        <Link href="/manage_flight/edit_flight"><Button className="h-8 w-24"><MdEdit /> Edit</Button></Link>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><Button className="h-8 w-24"><MdEdit /> Edit</Button></Link>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><Button className="h-8 w-24"><MdEdit /> Edit</Button></Link>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ],
                [
                    <span className="text-black">GA-712</span>,
                    "PK-GIC",
                    "Economy, Business",
                    400,
                    <div className="flex gap-2 justify-center">
                        <Link href="/manage_flight/edit_flight"><Button className="h-8 w-24"><MdEdit /> Edit</Button></Link>
                        <Button className="h-8 w-24 text-error-80 border-error-80" variant="ghost"><HiTrash /> Delete</Button>
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageFlight;