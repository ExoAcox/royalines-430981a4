
interface CardProps {
    children: string;
    empty: number;
    paid: number;
    waiting: number;
}

interface Seat {
    numbering: number[]
    layouts: {
        alphabet: string[]
        column: number[]
        row: number
    }[]
}

interface Props {
    seats: Seat,
}


const Card: React.FC<CardProps> = ({ children, empty, paid, waiting }) => {
    return <div className="text-grey-100">
        <div className="text-lg font-semibold border-b pb-2">{children}</div>
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
                <div className="bg-[#C8CCD2] rounded-full size-6" />
                <label>Empty: {empty}</label>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-[#33B7FC] rounded-full size-6" />
                <label>Paid: {paid}</label>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full size-6" />
                <label>Waiting for Payment: {waiting}</label>
            </div>
        </div>
    </div>
}


const SeatConfigSidebar: React.FC<Props> = ({ seats }) => {



    return <div className="h-fit mx-2 my-4">
        <div className="bg-white m-2 rounded-2xl p-4 shadow-xs w-[24rem]">
            <div className="flex flex-col gap-4">
                <Card empty={80} paid={175} waiting={100}>Summary</Card>
                <Card empty={80} paid={175} waiting={100}>Economy Class</Card>
                <Card empty={80} paid={175} waiting={100}>Business Class</Card>
                <Card empty={80} paid={175} waiting={100}>First Class</Card>
            </div>
        </div>
    </div>
}

export default SeatConfigSidebar