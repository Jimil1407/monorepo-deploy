import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";


const server = new WebSocketServer({ port: 3001 });

server.on("connection", (socket: { send: (arg0: string) => void; }) => {
    client.user.create({
        data: {
            username : Math.random().toString(36).substring(7),
            password:  Math.random().toString(36).substring(7),
        }
    })
    socket.send("Hello from server");
}); 
