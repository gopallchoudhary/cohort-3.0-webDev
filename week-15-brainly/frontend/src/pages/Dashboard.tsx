import { useContext } from "react"
import PlusIcon from "../assets/icons/PlusIcon"
import ShareIcon from "../assets/icons/ShareIcon"
import Button from "../components/Button"
import Card from "../components/Card"
import CreateContentModal from "../components/CreateContentModal"
import { ContentContext } from "../context/ContentContext"
import SideBar from "../components/SideBar"

const Dashboard = () => {
    const { setOpen } = useContext(ContentContext)
    const toggle = () => {
        setOpen((prev) => !prev)
    }
    return (
        <div>
            <CreateContentModal />
            <div className="flex">
                <div className="min-w-60">
                    <SideBar />
                </div>
                <div className="py-6 px-8 bg-slate-100 h-screen w-full border-l-1">
                    <div className="flex gap-4 py-2 justify-end mr-4">
                        <Button
                            text="Add Content"
                            startIcon={<PlusIcon size="md" />}
                            size="md"
                            variant="primary"
                            onClick={toggle}
                        />

                        <Button
                            text="Share Brain"
                            startIcon={<ShareIcon size="sm" />}
                            size="md"
                            variant="secondary"
                        />


                    </div>
                    <div className="flex gap-2">
                        <Card title="tweet" type="twitter" link="https://x.com/naval/status/1910245415322337330" />

                        <Card title="YouTube" link="https://www.youtube.com/watch?v=jzE_NaTOU7g" type="youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard