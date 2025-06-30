import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"



interface Props {

}

const id = "cancel-manage-user-modal"

const CancelModal: React.FC<Props> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()
    const { setModal } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Cancel adding airport?"}
        buttons={[{
            label: "Continue Edit",
            onClick: () => setModal(false)
        },
        {
            label: "Cancel edit",
            onClick: () => {
                setModal(false)

                routerChange();
                router.push("/manage_user")
            }
        }]}>
        Your data will not be saved
    </ConfirmModal>
}

export default CancelModal