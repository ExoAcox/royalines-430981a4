"use client"

import { ActionButton, BookingBadge, Button, StatusBadge } from "@components/button";
import { Wrapper } from "@components/layout"
import { Table, TableBody, TableHeader } from "@components/table";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@components/navigation";
import { LuUsersRound } from "react-icons/lu";
import useModal from "@hooks/useModal";
import { ApproveModal, DeclineModal } from "@features/manage_user/components";


const ManageUser: React.FC<Page> = ({ }) => {
    const approveModal = useModal("approve-manage-user-modal")
    const declineModal = useModal("decline-manage-user-modal")

    return <Wrapper>
        <div className="flex items-center gap-3 mb-7">
            <LuUsersRound className="size-6" />
            <h4>Manage Users</h4>
            <Link href="/manage_user/edit_user" className="ml-auto"><Button ><FaPlus /> Add New User</Button></Link>
        </div>
        <TextField placeholder="Search users" prefix={<IoSearch />} />
        <Table>
            <TableHeader data={["Name", "Email", "Role", "Status", "Action"]} />
            <TableBody data={[
                [
                    <span className="text-black">Anya Forger</span>,
                    <span className="text-black">anya@gmail.com</span>,
                    "Travel Agent",
                    <StatusBadge type="verified" />,
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="action" className="w-20" onDecline={() => declineModal.setData({ userId: "" })} onApprove={() => approveModal.setData({ userId: "" })} />
                        <Link href="/manage_user/edit_user">
                            <ActionButton type="edit" className="w-20" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Anya Forger</span>,
                    <span className="text-black">anya@gmail.com</span>,
                    "Travel Agent",
                    <StatusBadge type="verified" />,
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="action" className="w-20" onDecline={() => declineModal.setData({ userId: "" })} onApprove={() => approveModal.setData({ userId: "" })} />
                        <Link href="/manage_user/edit_user">
                            <ActionButton type="edit" className="w-20" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Anya Forger</span>,
                    <span className="text-black">anya@gmail.com</span>,
                    "Travel Agent",
                    <StatusBadge type="verified" />,
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="action" className="w-20" onDecline={() => declineModal.setData({ userId: "" })} onApprove={() => approveModal.setData({ userId: "" })} />
                        <Link href="/manage_user/edit_user">
                            <ActionButton type="edit" className="w-20" />
                        </Link>
                    </div>
                ],
                [
                    <span className="text-black">Anya Forger</span>,
                    <span className="text-black">anya@gmail.com</span>,
                    "Travel Agent",
                    <StatusBadge type="verified" />,
                    <div className="flex gap-4 justify-center">
                        <ActionButton type="action" className="w-20" onDecline={() => declineModal.setData({ userId: "" })} onApprove={() => approveModal.setData({ userId: "" })} />
                        <Link href="/manage_user/edit_user">
                            <ActionButton type="edit" className="w-20" />
                        </Link>
                    </div>
                ]
            ]} />
        </Table>

        <ApproveModal />
        <DeclineModal />
    </Wrapper>
}

export default ManageUser;