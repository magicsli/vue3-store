import { io, Socket } from "socket.io-client";
import store from "/@/store/index";

let socket: Socket

// 接收消息
export function initIo() {
    if (socket) return;
    socket = io('ws://localhost:4000')
    // 短线重连, 并且重新绑定
    socket.on('disconnect', function () {
        initIo()
    });
    bindUserSocketIo()
}

const bindUserSocketIo = () => {
    socket.emit("bindUserSocket", { _id: store?.getters?.userInfo?._id })
}



export const addSocketListener = (event: string, callback: Function) => {
    if (!socket) {
        console.warn("socket未开启")
        return
    }
    return socket.on(event, callback)
}


export const addSocketSend = (event: string, data: Object) => {
    if (!socket) {
        console.warn("socket未开启")
        return
    }
    return socket.emit(event, data)
}