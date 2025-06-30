"use client"

import { ActionButton, BookingBadge, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";
import Image from "next/image"
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";
import { PiAirplaneTiltBold } from "react-icons/pi";

import Logo from "@images/bitmap/logo.png"


const ManageAirline: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <PiAirplaneTiltBold className="size-6" />
            <h4>Manage Schedule</h4>
            <Link href="/manage_airline/edit_airline" className="ml-auto"><Button ><FaPlus /> Add New Airlines</Button></Link>
        </div>
        <TextField placeholder="Search Airlines" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Thumbnail", "Name", "IATA Code", "Action"]} />
            <TableBody data={[
                [
                    <Image src={Logo} alt="logo" className="mx-auto rounded size-10 object-contain" />,
                    <span className="text-black">Garuda Indonesia</span>,
                    "JT",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airline/edit_airline">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <Image src={Logo} alt="logo" className="mx-auto rounded size-10 object-contain" />,
                    <span className="text-black">Garuda Indonesia</span>,
                    "JT",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airline/edit_airline">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <Image src={Logo} alt="logo" className="mx-auto rounded size-10 object-contain" />,
                    <span className="text-black">Garuda Indonesia</span>,
                    "JT",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airline/edit_airline">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ],
                [
                    <Image src={Logo} alt="logo" className="mx-auto rounded size-10 object-contain" />,
                    <span className="text-black">Garuda Indonesia</span>,
                    "JT",
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="delete" className="w-20" />
                        <Link href="/manage_airline/edit_airline">
                            <ActionButton type="edit" />
                        </Link>
                    </div>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageAirline;