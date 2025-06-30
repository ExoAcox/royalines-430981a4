"use client"

import { Wrapper } from "@components/layout"
import { CancelModal, EditUser, SaveModal } from "@features/manage_user/components";
import useModal from "@hooks/useModal";


const ManageUserEdit: React.FC<Page> = ({ }) => {
    const saveModal = useModal("save-manage-user-modal")
    const cancelModal = useModal("cancel-manage-user-modal")

    const handleCancel = () => {
        console.log("wew")
        cancelModal.setModal(true)
    }

    const handleSave = () => {
        saveModal.setModal(true)
        // routerChange();
        // router.push("/manage_flight/seat_configuration")
    }


    return <Wrapper>
        <EditUser onCancel={handleCancel} onSave={handleSave} />
        <SaveModal />
        <CancelModal />
    </Wrapper>
}

export default ManageUserEdit;