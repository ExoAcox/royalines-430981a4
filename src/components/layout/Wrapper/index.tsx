

import { tw } from "@functions/style";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Else, If, Then } from "react-if";

interface Props {
    user?: User;
    children: React.ReactNode;
    sidebar?: boolean;
    device?: Device;
    title?: string;
    className?: string;
    navbarClassName?: string;
    transparent?: boolean;
}

const Wrapper: React.FC<Props> = ({ user, transparent = true, children, className, navbarClassName, sidebar = true }) => {

    return (
        <div className={tw("h-dvh w-full flex flex-col")}>
            <Navbar user={user} transparent={transparent} className={navbarClassName} />

            <main
                className={tw(
                    tw("relative flex flex-1 min-w-[1280px] overflow-auto pt-[6rem]", sidebar ? "flex-row" : "flex-col"),
                    className
                )}
            >
                <If condition={sidebar}>
                    <Then>
                        <Sidebar />
                        <div className="flex-1 p-8 pr-16">
                            {children}
                        </div>
                    </Then>
                    <Else>
                        {children}
                    </Else>
                </If>

            </main>
        </div>
    );
};

export default Wrapper;
