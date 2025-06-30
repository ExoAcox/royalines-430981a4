import { Button } from "@components/button"
import { TextField } from "@components/input"
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal"
import { useState } from "react"
import { Else, If, Then } from "react-if"


interface Props {

}

const CancelModal: React.FC<Props> = ({ }) => {
    const { modal, setModal, data } = useModal<{ code: string }>("flight-plan-cancel-modal")
    const [text, setText] = useState("")
    const [initial, setInitial] = useState(true)

    const handleSubmit = () => {
        if (initial) return setInitial(false)
    }

    return <Modal visible={modal} centered onClose={() => setInitial(true)}>
        <div className="flex flex-col gap-3 items-center">
            <h4 className="text-center">Are you sure you want to cancel<br />this flight?</h4>
            <If condition={initial}>
                <Then>
                    <p className="text-center">This action cannot be undone once you click<br />"Cancel"</p>
                </Then>
                <Else>
                    <p className="text-center">{`Type “${data?.code}” to cancel this flight`}</p>
                    <TextField value={text} onChange={(value) => setText(value)} parentClassName="w-full" placeholder={`Type “${data?.code}” here`} />
                </Else>
            </If>

            <div className="flex gap-4 w-full mt-2">
                <Button className="flex-1" onClick={() => setModal(false)}>
                    No, Keep Flight
                </Button>
                <Button onClick={handleSubmit} className="flex-1 text-error-80 border-error-80" variant="ghost" disabled={!initial && text !== data?.code}>
                    Yes, Cancel Flight
                </Button>
            </div>
        </div>
    </Modal>
}

export default CancelModal