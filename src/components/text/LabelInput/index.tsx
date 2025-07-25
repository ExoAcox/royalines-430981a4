import { tw } from "@functions/style";
import { When } from "react-if";

const LabelInput: React.FC<{ children?: React.ReactNode; className?: string; required?: boolean }> = ({ children, className, required }) => {
    if (!children) return null;
    return <label className={tw("text-sm mb-1.5 font-bold text-grey-90 block", className)}>{children} <When condition={required}><span className="text-error-80">*</span></When></label>;
};

export default LabelInput;
