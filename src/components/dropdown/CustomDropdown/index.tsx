
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay";
import { When } from "react-if";


interface Props {
    id: string;
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
    panelClassName?: string;
    buttons: {
        label: React.ReactNode;
        onClick: () => void;
    }[]
}

const CustomDropdown: React.FC<Props> = ({ id, children, buttons, className, parentClassName, panelClassName }) => {
    const [isOpen, setOpen] = useOverlay(`#${id}`)

    return <div id={id} className={tw("relative", parentClassName)}>
        <div className={tw("cursor-pointer", className)} onClick={() => setOpen(!isOpen)}>
            {children}
        </div>
        <When condition={isOpen}>
            <div className={tw("text-xs flex flex-col w-min-fit absolute -bottom-1 right-0 shadow translate-y-full bg-white z-[2] border rounded-md", panelClassName)}>
                {buttons.map((button, index) => {
                    return <button key={index} className="p-2 hover:bg-primary-bg px-4 border-b last:border-none font-medium whitespace-nowrap" onClick={() => {
                        setOpen(false)
                        button.onClick()
                    }}>{button.label}</button>
                })}
            </div>
        </When>
    </div>
}

export default CustomDropdown