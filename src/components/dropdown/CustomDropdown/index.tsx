
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay";
import { When } from "react-if";


interface Props {
    id: string;
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
    buttons: {
        label: React.ReactNode;
        onClick: () => void;
    }[]
}

const CustomDropdown: React.FC<Props> = ({ id, children, buttons, className, parentClassName }) => {
    const [isOpen, setOpen] = useOverlay(`#${id}`)

    return <div id={id} className={tw("relative", parentClassName)}>
        <div className={tw("cursor-pointer", className)} onClick={() => setOpen(true)}>
            {children}
        </div>
        <When condition={isOpen}>
            <div className="text-xs flex flex-col w-full absolute -bottom-1 shadow translate-y-full bg-white z-[2] border rounded-md">
                {buttons.map((button, index) => {
                    return <button key={index} className="p-2 hover:bg-primary-bg border-b last:border-none" onClick={button.onClick}>{button.label}</button>
                })}
            </div>
        </When>
    </div>
}

export default CustomDropdown