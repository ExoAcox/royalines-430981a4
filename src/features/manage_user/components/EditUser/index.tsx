import { Button } from "@components/button";
import { TextField } from "@components/input";
import { HiTrash } from "react-icons/hi2";
import { PiFolderSimplePlusFill } from "react-icons/pi";
import { LuUsersRound } from "react-icons/lu";
import { Dropdown } from "@components/dropdown";



interface Props {
    onCancel: () => void;
    onSave: () => void;
}

const EditFlight: React.FC<Props> = ({ onCancel, onSave }) => {
    return <div>
        <div className="flex items-center gap-3 mb-7 rounded-2xl bg-white py-3 px-6 shadow-xs">
            <LuUsersRound className="size-6" />
            <h4>Edit User</h4>
            <Button className="ml-auto mr-1 text-error-80 border-error-80" variant="ghost" onClick={onCancel}><HiTrash className="size-6" /> Cancel</Button>
            <Button onClick={onSave}><PiFolderSimplePlusFill className="size-6" /> Save User</Button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-xs flex flex-col gap-4">
            <TextField label="Name" placeholder="Enter your name" required parentClassName="flex-1" />
            <TextField label="Email" placeholder="Enter your email" required parentClassName="flex-1" />
            <Dropdown id="user-role-dropdown" value="" onChange={() => null} options={[]} label="Role" placeholder="Select role" required parentClassName="flex-1" />
        </div>
    </div>
}

export default EditFlight