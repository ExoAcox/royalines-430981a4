import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"
import { HiTrash } from "react-icons/hi2"



interface Props {

}

const id = "cancel-manage-flight-modal"

const CancelModal: React.FC<Props> = ({ }) => {
    const { setModal } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Confirm adding new flight?"}
        buttons={[{
            label: "Continue Edit",
            onClick: () => setModal(false)
        },
        {
            label: "Cancel Adding",
            onClick: () => setModal(false)
        }]}>
        This action cannot be undone once you click "Save Changes"
    </ConfirmModal>
}

export default CancelModal