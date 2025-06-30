import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"



interface Props {

}

const id = "approve-manage-user-modal"

const CancelModal: React.FC<Props> = ({ }) => {
    const { setModal } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Approve this user?"}
        buttons={[{
            label: "Approve User",
            onClick: () => setModal(false)
        },
        {
            label: "Cancel approve",
            onClick: () => setModal(false)
        }]}>
        This user will be approved and have access
    </ConfirmModal>
}

export default CancelModal