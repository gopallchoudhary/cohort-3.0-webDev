import BrainIcon from "../assets/icons/BrainIcon"
import LinkIcon from "../assets/icons/LinkIcon"
import TwitterIcon from "../assets/icons/TwitterIcon"
import YouTube from "../assets/icons/YouTube"
import SidebarComponent from "./SidebarComponent"


const SideBar = () => {
  return (
    <div className="bg-white border-r border-gray-300 fixed top-0 left-0 h-screen w-64">
      <div className="px-4 text-3xl py-2 flex items-center gap-3 font-medium  ">
        <BrainIcon />
        <h1>Brainly</h1>
      </div>
      <div className="pt-6 text-lg flex flex-col gap-2">
        <SidebarComponent text="Twitter" startIcon={<TwitterIcon />} />
        <SidebarComponent text="YouTube" startIcon={<YouTube />} />
        <SidebarComponent text="External Links" startIcon={<LinkIcon size="md" />} />
      </div>
    </div>
  )
}

export default SideBar