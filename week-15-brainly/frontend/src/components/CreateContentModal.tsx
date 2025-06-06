import { useContext, useState } from "react";
import { ContentContext } from "../context/ContentContext";
import CrossIcon from "../assets/icons/CrossIcon";
import Input from "./Input";
import Button from "./Button";

const CreateContentModal = () => {
    const { open, setOpen } = useContext(ContentContext);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-black opacity-85 fixed top-0 left-0 flex justify-center">
                    <div className=" flex flex-col justify-center opacity-100">
                        <div className="bg-white rounded  flex flex-col opacity-100">
                            <div className="flex justify-end p-3">
                                <button onClick={() => setOpen((prev) => !prev)}>
                                    <CrossIcon size="md" />
                                </button>
                            </div>
                            <p className="text-center font-medium text-lg">INPUT BRAIN</p>
                            <span className="py-3 px-6 rounded opacity-100 bg-white">
                                <div className="flex flex-col gap-4 p-2">
                                    {/* Inputs */}
                                    <div className="flex flex-col gap-1 text-base font-medium">
                                        <p>Inut Title</p>
                                        <Input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text"
                                            placeholder="title"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 text-base font-medium">
                                        <p>Input Link</p>
                                        <Input
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            type="text"
                                            placeholder="link"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 text-base font-medium">
                                        <p>Input Type</p>
                                        <Input
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            type="text"
                                            placeholder="type"
                                        />
                                    </div>
                                    {/* Inputs End */}
                                </div>
                            </span>
                            <div className="flex justify-center pb-4 opacity-100">
                                <Button text="Submit" size="md" variant="primary" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateContentModal;
