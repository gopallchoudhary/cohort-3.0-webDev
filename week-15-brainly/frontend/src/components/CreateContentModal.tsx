import { useContext, useState } from "react";
import { ContentContext } from "../context/ContentContext";
import CrossIcon from "../assets/icons/CrossIcon";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

const CreateContentModal = () => {
    enum contentType {
        Youtube = "Youtube",
        Twitter = "Twitter"
    }
    const { open, setOpen } = useContext(ContentContext);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState<contentType>(contentType.Youtube);

    async function addContent() {
        const response = await axios.post(
            `${BACKEND_URL}/api/v1/content/post`,
            { title, link, type },
            { withCredentials: true }
        );
        console.log(response.data);
        setTitle("");
        setLink("");
        setOpen((prev) => !prev)
    }
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-black opacity-90 fixed top-0 left-0 flex justify-center">
                    <div className=" flex flex-col justify-center  opacity-100">
                        <div className="bg-white rounded  flex flex-col">
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
                                    <p className="font-medium text-base ">Input Type</p>
                                    <div className="flex  gap-4 text-base font-medium">
                                        <Button
                                            text="Youtube"
                                            size="sm"
                                            variant={
                                                type === contentType.Youtube ? "primary" : "secondary"
                                            }
                                            onClick={() => setType(contentType.Youtube)}
                                        />
                                        <Button
                                            text="Twitter"
                                            size="sm"
                                            variant={
                                                type === contentType.Twitter ? "primary" : "secondary"
                                            }
                                            onClick={() => setType(contentType.Twitter)}
                                        />
                                    </div>
                                    {/* Inputs End */}
                                </div>
                            </span>
                            <div className="flex justify-center pb-4 opacity-100">
                                <Button
                                    onClick={addContent}
                                    text="Submit"
                                    size="md"
                                    variant="primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateContentModal;
