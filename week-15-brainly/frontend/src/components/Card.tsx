import DeleteIcon from "../assets/icons/DeleteIcon"
import ShareIcon from "../assets/icons/ShareIcon"

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}

const Card = ({ title, link, type }: CardProps) => {
    return (
        <div className="bg-white rounded-md shadow-md border border-gray-200 p-4 max-w-72 h-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                    <a href={link} target="_blank">{<ShareIcon />}</a>
                    <p>{title}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <button>{<ShareIcon />}</button>
                    <button>{<DeleteIcon />}</button>
                </div>
            </div>
            <div className="px-2 pt-4 flex">
                {type == "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type == "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}


            </div>
        </div>
    )
}

export default Card