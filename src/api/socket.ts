import { io, Socket } from "socket.io-client";
import store from "/@/store/index";

let socket: Socket

// 初始化socketIo
export function initIo() {
    if (socket) return;
    socket = io('ws://localhost:4000')
    // 短线重连, 并且重新绑定
    socket.on('disconnect', function () {
        initIo()
    });
    bindUserSocketIo()
}

// 发送连接绑定
const bindUserSocketIo = () => {
    socket.emit("bindUserSocket", { _id: store?.getters?.userInfo?._id })
}


// 添加监听事件
export const addSocketListener = (event: string, callback: Function) => {
    if (!socket) {
        console.warn("socket未开启")
        return
    }
    return socket.on(event, callback)
}

// 发送信息
export const addSocketSend = (event: string, data: Object) => {
    if (!socket) {
        console.warn("socket未开启")
        return
    }
    return socket.emit(event, data)
}