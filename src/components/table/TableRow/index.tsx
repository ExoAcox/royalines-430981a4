import { tw } from "@functions/style"


interface Props {
    data: React.ReactNode[]
    className?: string
}

const TableRow: React.FC<Props> = ({ data, className }) => {
    return <tr className={tw("text-grey-70 text-sm text-center border rounded-xs bg-white ring ring-base-border", className)}>
        {data.map((cell, index) => {
            return <td key={index} className="py-2">{cell}</td>
        })}
    </tr>
}

export default TableRow