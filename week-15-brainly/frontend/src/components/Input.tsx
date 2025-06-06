import { ChangeEvent } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    return (
        <div>
            <input
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className="px-4 py-2 rounded-md  text-black bg-slate-200 opacity-90 min-w-72"
            />
        </div>
    );
};

export default Input;
