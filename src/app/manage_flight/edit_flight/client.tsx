"use client"

import { Wrapper } from "@components/layout"
import { EditFlight } from "@features/manage_flight/components";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";


const ManageFlight: React.FC<Page> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const handleCancel = () => {
        routerChange();
        router.back()
    }

    const handleSave = () => {
        routerChange();
        router.push("manage_flight/seat_configuration")
    }


    return <Wrapper>
        <EditFlight onCancel={handleCancel} onSave={handleSave} />
    </Wrapper>
}

export default ManageFlight;