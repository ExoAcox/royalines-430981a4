
import { PiAirplaneTiltBold } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { PiSeatBold } from "react-icons/pi";
import { LuFileClock } from "react-icons/lu";
import { IconType } from "react-icons";
import { tw } from "@functions/style";

interface ListProps {
    active?: boolean;
    children: React.ReactNode;
    Icon: IconType;
}

const List: React.FC<ListProps> = ({ children, active, Icon }) => {
    return <div className={tw("flex items-center gap-3 p-4 text-grey-80 font-semibold border-l-6 border-transparent", active && "text-primary bg-primary-bg border-primary ")}>
        <Icon className="w-6 h-6" />
        {children}
    </div>
}


interface Props {

}

const Sidebar: React.FC<Props> = ({ }) => {
    return <div className="sticky top-0 bg-white shadow-xs flex flex-col h-full w-[18.75rem]">
        <List Icon={PiAirplaneTiltBold} active>Manage Flight</List>
        <List Icon={MdCalendarMonth}>Manage Schedule</List>
        <List Icon={PiSeatBold}>Flight Plan</List>
        <List Icon={LuFileClock}>Flight History</List>
    </div>
}

export default Sidebar