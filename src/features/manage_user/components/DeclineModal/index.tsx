import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"



interface Props {

}

const id = "decline-manage-user-modal"

const CancelModal: React.FC<Props> = ({ }) => {
    const { setModal } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Decline this user?"}
        buttons={[{
            label: "Decline User",
            onClick: () => setModal(false)
        },
        {
            label: "Cancel decline",
            onClick: () => setModal(false)
        }]}>
        This user will be declined permanently
    </ConfirmModal>
}

export default CancelModal