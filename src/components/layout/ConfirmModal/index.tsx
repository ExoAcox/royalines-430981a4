import { Button } from "@components/button";
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal";




interface Props {
    id: string;
    title: (data: unknown) => string;
    children: string;
    buttons: {
        label: React.ReactNode;
        onClick: () => void;
    }[]
}

const ConfirmModal: React.FC<Props> = ({ id, title, children, buttons }) => {
    const { modal, data } = useModal(id);

    return <Modal visible={modal} centered className="!max-w-[27.5rem]">
        <h4 className="text-center">{title(data)}</h4>
        <p className="text-center mt-2 mb-4">{children}</p>
        <Button onClick={buttons[0].onClick} className="w-full flex items-center">
            {buttons[0].label}
        </Button>
        <button onClick={buttons[1].onClick} className="mt-4 mx-auto block text-error-80 border-b border-error-80">
            {buttons[1].label}
        </button>
    </Modal>
}

export default ConfirmModal