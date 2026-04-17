import { WebSocketServer, WebSocket} from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    room: string
}


const allSockets: User[] = [];


wss.on("connection", (socket) => {
    console.log("connected");

    socket.on("message", (message) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(message);

        if(parsedMessage.type == "join") {
            allSockets.push({
                socket,
                room: parsedMessage.room
            })
            socket.send(JSON.stringify({
                type: "join",
                room: parsedMessage.room
            }))
        }

        if(parsedMessage.type === 'chat') {
            const currentUserRoom = allSockets.find(user => user.socket === socket)?.room

            allSockets.map((s) => {
                if(s.room === currentUserRoom) {
                    if(s.socket !== socket) {
                        s.socket.send(JSON.stringify({
                            type: "chat",
                            message: parsedMessage.message
                        }))
                    }
                }
            })
        }
    })
    
})