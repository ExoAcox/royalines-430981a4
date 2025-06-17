import { ConfirmModal } from "@components/layout"
import useModal from "@hooks/useModal"
import { PiFolderSimplePlusFill } from "react-icons/pi"



interface Props {

}

const id = "save-manage-flight-modal"

const SaveModal: React.FC<Props> = ({ }) => {
    const { modal, setModal, setData } = useModal(id)

    return <ConfirmModal id={id}
        title={() => "Confirm saving flight configuration?"}
        buttons={[{
            label: <><PiFolderSimplePlusFill /> Save Flight</>,
            onClick: () => null
        },
        {
            label: "Continue Edit",
            onClick: () => setModal(false)
        }]}>
        All details will be stored
    </ConfirmModal>
}

export default SaveModal