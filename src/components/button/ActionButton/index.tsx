import { useMemo } from "react";
import Button from "../Button"

import { PiAddressBook } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { HiMiniTicket } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import { MdModeEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay";
import { When } from "react-if";


interface Props {
    type: "edit" | "view_seat" | "edit_status" | "view_report"
    onClick?: () => void;
    onSchedule?: () => void;
    onCancel?: () => void;
    id?: string;
}

const ActionButton: React.FC<Props> = ({ type, onClick, onSchedule, onCancel, id }) => {
    const iconClassName = "size-4"
    const className = tw("h-8 w-[9rem] text-xs")
    const variant = ["edit_status"].includes(type) ? "ghost" : "filled"

    const EditStatusButton = () => {
        const [isOpen, setOpen] = useOverlay(`#${id}`)

        return <div id={id} className="relative">
            <Button className={className} variant={variant} onClick={() => setOpen(!isOpen)}>Edit Status <MdOutlineKeyboardArrowDown className={iconClassName} /> </Button>
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


    const content = useMemo(() => {


        switch (type) {
            case "edit":
                return <><MdModeEdit className={iconClassName} /> Edit</>;
            case "view_seat":
                return <><IoEye className={iconClassName} /> View Seat</>;
            case "view_report":
                return <><IoEye className={iconClassName} /> View Report</>;
        }
    }, [type])

    return <Button className={className} variant={variant} onClick={onClick}>{content}</Button>
}

export default ActionButton