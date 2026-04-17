import { Input } from "@repo/ui/input"

export default function RoomId({ params }: any) {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "40vw",
            padding: 50
        }}>
            <div>
                Chat Room {params.roomId}
            </div>
            <div>
                <Input type="text" placeholder="Chat here" />
            </div>
        </div>
    )
}