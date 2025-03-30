import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({port: 4001})

interface User {
    socket: WebSocket;
    room: string
}

let allSockets : User[] = []

// event handler
wss.on("connection", function(socket) {

    socket.on("message", (message) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(message)

        if(parsedMessage.type == "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }
        console.log(allSockets);
        

        if(parsedMessage.type == "chat") {
            let currentUserRoom = allSockets.find((s) => s.socket == socket)?.room  
            
            allSockets.map((s) => {
                //@ts-ignore
                if(s.room == currentUserRoom) {
                    if(s.socket != socket) {
                        s.socket.send(parsedMessage.payload.message)
                    }
                }
            })
        }
    })
})