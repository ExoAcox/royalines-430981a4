import { useMemo } from "react";
import { tw } from "@functions/style";

import { LabelInput, ErrorInput, ExampleInput } from "@components/text";
import { Else, If, Then, When } from "react-if";

export interface TextField extends BasicInput {
    value?: string | number;
    onChange?: (value: string) => void;
    type?: "text" | "number";
    controller?: object;
    example?: string;
    inputClassName?: string;
    labelClassName?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    max?: number;
    min?: number;
    onkeyDown?: (value: string) => void;
    onClick?: () => void;
    required?: boolean;
}

const TextField: React.FC<TextField> = ({
    value,
    onChange,
    label,
    placeholder,
    type = "text",
    example,
    className,
    parentClassName,
    inputClassName,
    labelClassName,
    controller,
    disabled,
    prefix,
    suffix,
    error,
    max,
    min,
    required,
    onkeyDown,
    onClick
}) => {
    const inputProps = { value, placeholder, type, disabled, max, min };

    const classNameFinal = useMemo(() => {
        return tw(
            `h-12 border border-grey-60 bg-white w-full flex gap-3 justify-between items-center px-3 rounded-lg`,
            disabled && "bg-grey-30",
            error && "border-error-80 border-grey-40",
            className
        );
    }, [disabled, error, className]);

    return (
        <div className={tw(parentClassName)}>
            <LabelInput className={tw(disabled && "text-grey-60", labelClassName)} required={required}>{label}</LabelInput>
            <div className={classNameFinal} onClick={() => {
                if (onClick) onClick()
            }}>
                {prefix}
                <input
                    className={tw("flex-1 w-full focus:outline-none text-grey-90 placeholder:text-grey-60", disabled && "bg-grey-30 text-grey-60", inputClassName)}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (onkeyDown) onkeyDown(e.key);
                    }}
                    {...controller}
                    {...inputProps}
                />
                {suffix}
            </div>
            <If condition={error}>
                <Then><ErrorInput error={error} /></Then>
                <Else><ExampleInput className={tw(disabled && "text-grey-60")}>{example}</ExampleInput></Else>
            </If>

        </div>
    );
};


export default TextField;
