import { useMemo } from "react";
import Button from "../Button"

import { IoEye } from "react-icons/io5";
import { HiTrash } from "react-icons/hi2";
import { MdModeEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay";
import { When } from "react-if";


interface Props {
    type: "edit" | "delete" | "action" | "view_seat" | "edit_status" | "view_report"
    onClick?: () => void;
    onSchedule?: () => void;
    onCancel?: () => void;
    onApprove?: () => void;
    onDecline?: () => void;
    id?: string;
    className?: string;
}

const ActionButton: React.FC<Props> = ({ type, onClick, onSchedule, onCancel, onApprove, onDecline, id, className }) => {
    const iconClassName = "size-4 shrink-0"
    const classNameFinal = tw("h-8 w-[9rem] text-xs", className)
    const variant = ["edit_status", "action", "delete"].includes(type) ? "ghost" : "filled"

    const EditStatusButton = () => {
        const [isOpen, setOpen] = useOverlay(`#${id}`)

        return <div id={id} className="relative">
            <Button className={classNameFinal} variant={variant} onClick={() => setOpen(!isOpen)}>Edit Status <MdOutlineKeyboardArrowDown className={iconClassName} /> </Button>
            <When condition={isOpen}>
                <div className="text-xs flex flex-col w-full absolute font-semibold -bottom-1 shadow translate-y-full bg-white z-[2] border rounded-md">
                    <button className="text-grey-80 p-2 hover:bg-primary-bg border-b" onClick={() => {
                        setOpen(false);
                        if (onSchedule) onSchedule()
                    }}>Scheduled</button>
                    <button className="text-error-80 p-2 hover:bg-primary-bg" onClick={() => {
                        setOpen(false);
                        if (onCancel) onCancel()
                    }}>Cancelled</button>
                </div>
            </When>
        </div>
    }

    if (type === "edit_status") return <EditStatusButton />

    const UserActionButton = () => {
        const [isOpen, setOpen] = useOverlay(`#${id}`)

        return <div id={id} className="relative">
            <Button className={classNameFinal} variant={variant} onClick={() => setOpen(!isOpen)}>Action <MdOutlineKeyboardArrowDown className={iconClassName} /> </Button>
            <When condition={isOpen}>
                <div className="text-xs flex flex-col w-full absolute font-semibold -bottom-1 shadow translate-y-full bg-white z-[2] border rounded-md">
                    <button className="text-grey-80 p-2 hover:bg-primary-bg border-b" onClick={() => {
                        setOpen(false);
                        if (onApprove) onApprove()
                    }}>Approve</button>
                    <button className="text-grey-80 p-2 hover:bg-primary-bg" onClick={() => {
                        setOpen(false);
                        if (onDecline) onDecline()
                    }}>Decline</button>
                </div>
            </When>
        </div>
    }

    if (type === "action") return <UserActionButton />


    const content = useMemo(() => {
        switch (type) {
            case "edit":
                return <><MdModeEdit className={iconClassName} /> Edit</>;
            case "delete":
                return <><HiTrash className={iconClassName} /> Delete</>;
            case "view_seat":
                return <><IoEye className={iconClassName} /> View Seat</>;
            case "view_report":
                return <><IoEye className={iconClassName} /> View Report</>;
        }
    }, [type])

    return <Button className={classNameFinal} variant={variant} color={type === "delete" ? "red" : "green"} onClick={onClick}>{content}</Button>
}

export default ActionButton