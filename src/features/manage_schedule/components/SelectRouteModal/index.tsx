import { TextField } from "@components/input"
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal"
import { IoSearch } from "react-icons/io5"
import { MdClose } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi";

interface ListProps {
    onClick: () => void;
    origin: {
        name: string;
        location: string;
    },
    destination: {
        name: string;
        location: string;
    },
}

const List: React.FC<ListProps> = ({ origin, destination, onClick }) => {
    return <button onClick={onClick} className="flex">
        <div className="flex flex-col p-2 border-b gap-1 items-start w-[22rem]">
            <span className="text-sm">{origin.name}</span>
            <label className="text-2xs text-grey-80">{origin.location}</label>
        </div>
        <div className="w-[6rem] flex-center">
            <FiArrowRight className="size-5" />
        </div>
        <div className="flex flex-col items-start gap-1 p-2 border-b w-[22rem]">
            <span className="text-sm">{destination.name}</span>
            <label className="text-2xs text-grey-80">{destination.location}</label>
        </div>
    </button>
}



interface Props {
    onSelect: () => void
}

const SelectRouteModal: React.FC<Props> = ({ onSelect }) => {
    const { modal, setModal } = useModal("select-route-modal")

    const close = () => setModal(false)

    return <Modal visible={modal} className="!p-0">
        <div className="flex items-center justify-between p-4 border-b">
            <label className="font-bold">Select Route</label>
            <MdClose className="size-5" onClick={close} />
        </div>
        <div className="p-4 flex flex-col gap-8">
            <TextField prefix={<IoSearch />} />
            <div className="flex flex-col">
                <List onClick={() => {
                    onSelect()
                    close()
                }} origin={{
                    name: "Soekarno-Hatta International Airport (CGK)",
                    location: "Jakarta, Indonesia"
                }}
                    destination={{
                        name: "King Abdul Aziz Airport (JED)",
                        location: "Jeddah, Saudi Arabia"
                    }}
                />
                <List onClick={() => {
                    onSelect()
                    close()
                }} origin={{
                    name: "Soekarno-Hatta International Airport (CGK)",
                    location: "Jakarta, Indonesia"
                }}
                    destination={{
                        name: "King Abdul Aziz Airport (JED)",
                        location: "Jeddah, Saudi Arabia"
                    }}
                />
            </div>
        </div>
    </Modal>
}

export default SelectRouteModal