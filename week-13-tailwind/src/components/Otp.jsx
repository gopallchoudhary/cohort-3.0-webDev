import React, { useRef, useState } from "react";

const Otp = ({ number }) => {
    const ref = useRef(Array(number).fill(0));

    return (
        <div className="flex gap-2 mx-auto">

            {Array(number)
                .fill(1)
                .map((input, index) => (
                    <SubOtp
                        key={index}

                        reference={(e) => ref.current[index] = e}
                        onDone={() => {
                            if (index >= number - 1) {
                                ref.current[index].blur()
                                return;
                            }
                            ref.current[index + 1].focus();
                            console.log(ref.current[index].value);

                        }}
                        goBack={() => {
                            if (index == 0) {
                                return;
                            }
                            ref.current[index - 1].focus();
                        }}
                    />
                ))}
        </div>
    );
};

function SubOtp({ reference, onDone, goBack }) {
    const [inputBoxValue, setInputBoxValue] = useState("");
    return (
        <div>
            <input
                value={inputBoxValue}
                type="text"
                ref={reference}
                onChange={(e) => {
                    const val = e.target.value;
                    const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                    if (num.includes(val)) {
                        onDone();
                        setInputBoxValue(val.trim());
                    } else {
                    }
                }}
                onKeyUp={(e) => {
                    if (e.key == "Backspace") {
                        goBack();
                        setInputBoxValue("")
                    }
                }}
                className="w-[40px] h-[50px] rounded-md outline-none bg-gray-600 px-4"
            />
        </div>
    );
}
export default Otp;
