"use client"

import { ActionButton, BookingBadge, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";

import { TbPlaneDeparture } from "react-icons/tb";


const ManageAirport: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <TbPlaneDeparture className="size-6" />
            <h4>Manage Airport</h4>
            <Link href="/manage_airport/edit_airport" className="ml-auto"><Button ><FaPlus /> Add New Airport</Button></Link>
        </div>
        <TextField placeholder="Search Airports" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Name", "Code", "Location", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">Soekarno-Hatta International Airport (CGK)</span>,
                    "CGK",
                    "Jakarta, Indonesia",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airport/edit_airport">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Soekarno-Hatta International Airport (CGK)</span>,
                    "CGK",
                    "Jakarta, Indonesia",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airport/edit_airport">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Soekarno-Hatta International Airport (CGK)</span>,
                    "CGK",
                    "Jakarta, Indonesia",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airport/edit_airport">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Soekarno-Hatta International Airport (CGK)</span>,
                    "CGK",
                    "Jakarta, Indonesia",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airport/edit_airport">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageAirport;