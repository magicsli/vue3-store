import { io } from "socket.io-client";
import store from "/@/store/index";


export let socket = null;
// 接收消息
export function initIo() {
    if (socket) return;
    socket = io('ws://localhost:4000')
    bindUserSocketIo()
}

const bindUserSocketIo = () => {

    console.log(store)
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