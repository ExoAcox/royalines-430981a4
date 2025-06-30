import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"
import { PiFolderSimplePlusFill } from "react-icons/pi"



interface Props {

}

const id = "save-manage-user-modal"

const SaveModal: React.FC<Props> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()
    const { setModal } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Confirm airport data?"}
        buttons={[{
            label: <><PiFolderSimplePlusFill className="size-6" /> Save Changes</>,
            onClick: () => {
                routerChange();
                router.push("/manage_user")
            }
        },
        {
            label: "Continue edit",
            onClick: () => setModal(false)
        }]}>
        All details will be stored
    </ConfirmModal>
}

export default SaveModal