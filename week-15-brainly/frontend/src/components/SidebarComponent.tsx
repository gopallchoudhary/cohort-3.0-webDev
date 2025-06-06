import { ReactElement } from "react"

interface SideBarProps {
    startIcon?: ReactElement
    text: string
}

const SidebarComponent = (props: SideBarProps) => {
    return (
        <button>
            <div className="flex gap-2 items-center w-fit px-5 py-2 hover:bg-slate-200  rounded-tr-md rounded-br-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:translate-x-2">
                {props.startIcon}
                <p>{props.text}</p>
            </div>
        </button>
    )
}

export default SidebarComponent