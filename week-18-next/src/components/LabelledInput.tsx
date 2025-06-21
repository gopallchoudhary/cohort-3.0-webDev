import React, { LabelHTMLAttributes } from "react";
interface labelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

const LabelledInput = (props: labelledInputType) => {
    return (
        <div>
            <label className='"block mb-2 text-sm text-black font-semibold pt-4'>
                {props.label}
            </label>
            <input
                type={props.type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default LabelledInput;
