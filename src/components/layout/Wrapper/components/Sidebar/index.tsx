
import { PiAirplaneTiltBold } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { PiSeatBold } from "react-icons/pi";
import { LuFileClock, LuUsersRound } from "react-icons/lu";
import { TbPlaneDeparture } from "react-icons/tb";
import { IconType } from "react-icons";
import { tw } from "@functions/style";
import { Link } from "@components/navigation";

import { usePathname } from 'next/navigation'

interface ListProps {
    active?: boolean;
    children: React.ReactNode;
    Icon: IconType;
    href: string;
}

const List: React.FC<ListProps> = ({ children, active, Icon, href }) => {
    return <Link href={href} className={tw("flex items-center gap-3 p-4 text-grey-80 font-semibold border-l-6 border-transparent", active && "text-primary bg-primary-bg border-primary ")}>
        <Icon className="size-6" />
        {children}
    </Link>
}


interface Props {

}

const Sidebar: React.FC<Props> = ({ }) => {
    const pathname = usePathname()

    return <div className="sticky top-0 bg-white shadow-xs flex flex-col h-full w-[18.75rem]">
        <List Icon={PiAirplaneTiltBold} href="/manage_flight" active={pathname.startsWith("/manage_flight")}>Manage Flight</List>
        <List Icon={MdCalendarMonth} href="/manage_schedule" active={pathname.startsWith("/manage_schedule")}>Manage Schedule</List>
        <List Icon={PiSeatBold} href="/flight_plan" active={pathname.startsWith("/flight_plan")}>Flight Plan</List>
        <List Icon={LuFileClock} href="/flight_history" active={pathname.startsWith("/flight_history")}>Flight History</List>
        <List Icon={PiAirplaneTiltBold} href="/manage_airline" active={pathname.startsWith("/manage_airline")}>Manage Airlines</List>
        <List Icon={TbPlaneDeparture} href="/manage_airport" active={pathname.startsWith("/manage_airport")}>Manage Airport</List>
        <List Icon={LuUsersRound} href="/manage_user" active={pathname.startsWith("/manage_user")}>Manage Users</List>
    </div>
}

export default Sidebar