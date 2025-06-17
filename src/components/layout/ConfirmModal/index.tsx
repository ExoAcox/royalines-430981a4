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

    return <Modal visible={modal} centered className="!mt-24 !max-w-[27.5rem]">
        <h4 className="text-center">{title(data)}</h4>
        <p className="text-center my-5">{children}</p>
        <Button onClick={buttons[0].onClick} className="w-full">
            {buttons[0].label}
        </Button>
        <Button onClick={buttons[1].onClick} className="w-full text-error-80 " variant="nude">
            {buttons[1].label}
        </Button>
    </Modal>
}

export default ConfirmModal