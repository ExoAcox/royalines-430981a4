import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"
import { PiFolderSimplePlusFill } from "react-icons/pi"



interface Props {

}

const id = "delete-manage-flight-modal"

const DeleteModal: React.FC<Props> = ({ }) => {
    const { modal, setModal, setData } = useModal(id)

    return <ConfirmModal id={id}
        title={(data) => `Delete Flight ${data}, ${data}?`}
        buttons={[{
            label: "No, I want to keep it",
            onClick: () => setModal(false)
        },
        {
            label: "Delete Flight",
            onClick: () => setModal(false)
        }]}>
        All associated data will be permanently removed
    </ConfirmModal>
}

export default DeleteModal