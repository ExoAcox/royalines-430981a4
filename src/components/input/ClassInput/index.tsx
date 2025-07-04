import { CustomInput } from "@components/input"
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay"
import { RiSofaFill } from "react-icons/ri"
import { When } from "react-if"

interface ListProps {
    title: string;
    children: string;
    active?: boolean;
    onClick: () => void;
}

const List: React.FC<ListProps> = ({ title, children, active, onClick }) => {
    return <button className={tw("flex text-left w-full flex-col gap-1 py-3 px-4 border-b last:border-none", active && "bg-primary-bg")} onClick={onClick}>
        <label className="text-sm font-bold">{title}</label>
        <span className="text-xs text-grey-70">{children}</span>
    </button>
}



interface Props {

}

const ClassDropdown: React.FC<Props> = ({ }) => {
    const [open, setOpen] = useOverlay("#dropdown-class")

    return <div className="relative flex-1" id="dropdown-class">
        <CustomInput Icon={RiSofaFill} label="Class"><button onClick={() => setOpen(true)}>Economy</button></CustomInput>
        <When condition={open}><div className="absolute w-[21.4375rem] z-[2] py-2 px-4 bg-white left-0 bottom-4 translate-y-full rounded-2xl shadow">
            <List title="Economy" active onClick={() => setOpen(false)}>Economy class</List>
        </div></When>
    </div>
}

export default ClassDropdown