

import { GoArrowLeft } from "react-icons/go"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"

interface Props {
    onClick?: () => void
    href?: string
}

const BackButton: React.FC<Props> = ({ onClick, href }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const back = () => {
        if (onClick) onClick()
        routerChange();

        if (href) {
            router.push(href)
        } else {
            router.back()
        }

    }

    return <GoArrowLeft onClick={back} className="fill-grey-90 cursor-pointer size-6" />
}

export default BackButton