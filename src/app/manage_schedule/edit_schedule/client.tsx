"use client"

import { Wrapper } from "@components/layout"
import { EditSchedule, SelectRouteModal } from "@features/manage_schedule/components";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";


const ManageScheduleAdd: React.FC<Page> = ({ }) => {
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
        <EditSchedule onCancel={handleCancel} onSave={handleSave} />
        <SelectRouteModal onSelect={() => null} />
    </Wrapper>
}

export default ManageScheduleAdd;