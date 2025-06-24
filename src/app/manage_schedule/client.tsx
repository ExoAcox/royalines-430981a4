"use client"

import { BookingBadge, Button } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";

import { MdCalendarMonth, MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";


const ManageSchedule: React.FC<Page> = ({ }) => {


    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <MdCalendarMonth className="w-6 h-6" />
            <h4>Manage Schedule</h4>
            <Link href="/manage_schedule/edit_schedule" className="ml-auto"><Button ><FaPlus /> Add New Schedule</Button></Link>
        </div>
        <TextField placeholder="Search Schedule" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Flight Code", "Flight Route", "Departure", "Arrival", "Visibility", "Status", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">GA-712</span>,

                    "Jakarta, Indonesia (CGK) - Jeddah, Saudi Arabia (JED)",
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "Published",
                    <BookingBadge color="red" />,
                    <Link href="/manage_schedule/edit_schedule">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                    </Link>
                ],
                [
                    <span className="text-black">GA-712</span>,

                    "Jakarta, Indonesia (CGK) - Jeddah, Saudi Arabia (JED)",
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "Published",
                    <BookingBadge color="red" />,
                    <Link href="/manage_schedule/edit_schedule">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                    </Link>
                ],
                [
                    <span className="text-black">GA-712</span>,

                    "Jakarta, Indonesia (CGK) - Jeddah, Saudi Arabia (JED)",
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "Published",
                    <BookingBadge color="red" />,
                    <Link href="/manage_schedule/edit_schedule">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                    </Link>
                ],
                [
                    <span className="text-black">GA-712</span>,

                    "Jakarta, Indonesia (CGK) - Jeddah, Saudi Arabia (JED)",
                    <p>22 Mei<br />2022, 7.00</p>,
                    <p>22 Mei<br />2022, 7.00</p>,
                    "Published",
                    <BookingBadge color="red" />,
                    <Link href="/manage_schedule/edit_schedule">
                        <Button className="h-8 w-24"><MdEdit /> Edit</Button>
                    </Link>
                ]
            ]} />
        </Table>
    </Wrapper>
}

export default ManageSchedule;