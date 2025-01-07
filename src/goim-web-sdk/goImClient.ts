const rawHeaderLen: number = 16;
const packetOffset: number = 0;
const headerOffset: number = 4;
const verOffset: number = 6;
const opOffset: number = 8;
const seqOffset: number = 12;

type AuthReplyOkFunc = () => void

type ReceiveHeartbeatReplyFunc = () => void

type ReceiveMessageFunc = (data: any) => void

// 配置对象
export interface GoImConfig{
    url:string,
    auth: AuthInterface,
    receiveHeartbeatReplyFuncCallBack: ReceiveHeartbeatReplyFunc,
    receiveMessageFuncCallBack: ReceiveMessageFunc,
    authReplyOkFuncCallBack: AuthReplyOkFunc,
}

// var token = '{"mid":123, "room_id":"live://1000", "platform":"web", "accepts":[1000,1001,1002]}'
type platForm="web" | "android" | "ios"
export interface AuthInterface {
    mid: number
    room_id: string
    platform: platForm
    accepts: number[]
}

export class GoImClient {
    // 'ws://192.168.1.8:3102/sub'
    url: string
    private _MAX_CONNECT_TIMES = 10
    private _DELAY = 15000
    textDecoder = new TextDecoder()
    textEncoder = new TextEncoder()
    token: string
    ws: WebSocket
    heartbeatInterval: any
    authReplyOkFunc: AuthReplyOkFunc
    receiveHeartbeatReplyFunc: ReceiveHeartbeatReplyFunc
    receiveMessageFunc: ReceiveMessageFunc

    constructor(config:GoImConfig) {
        this.url = config.url
        this.token = JSON.stringify(config.auth)
        this.authReplyOkFunc = config.authReplyOkFuncCallBack// 认证成功的回调
        this.receiveHeartbeatReplyFunc = config.receiveHeartbeatReplyFuncCallBack// 接收服务端的心跳回应
        this.ws = new WebSocket(this.url)
        this.receiveMessageFunc=config.receiveMessageFuncCallBack
        this.createConnect(this._MAX_CONNECT_TIMES, this._DELAY)
    }

    createConnect(maxConnectTimes: number, delay: number) {
        if (maxConnectTimes == 0) {
            return
        }
        this.create()
    }

    onopen = ():void => {
        console.log("打开连接")
        this.Auth(this.token, this.textDecoder, this.textEncoder)
    }

    onmessage = (evt: any) => {
        let data = evt.data;
        let dataView: DataView = new DataView(data, 0);
        let packetLen: number = dataView.getInt32(packetOffset);
        let headerLen: number = dataView.getInt16(headerOffset);
        let ver: number = dataView.getInt16(verOffset);
        let op: number = dataView.getInt32(opOffset);
        let seq: number = dataView.getInt32(seqOffset);
        console.log("receiveHeader: packetLen=" + packetLen, "headerLen=" + headerLen, "ver=" + ver, "op=" + op, "seq=" + seq);
        switch (op) {
            // auth reply ok
            case 8:
                this.heartbeat()
                this.heartbeatInterval = setInterval(this.heartbeat, 30 * 1000)
                this.authReplyOkFunc()
                break;
            case 3:
                // receive a heartbeat from server
                console.log("receive: heartbeat");
                this.receiveHeartbeatReplyFunc()
                break;
            case 9:
                // batch message
                for (let offset = rawHeaderLen; offset < data.byteLength; offset += packetLen) {
                     packetLen = dataView.getInt32(offset);
                    let headerLen = dataView.getInt16(offset + headerOffset);
                    let ver = dataView.getInt16(offset + verOffset);
                    let op = dataView.getInt32(offset + opOffset);
                    let seq = dataView.getInt32(offset + seqOffset);
                    let msgBody = this.textDecoder.decode(data.slice(offset + headerLen, offset + packetLen));
                    // callback
                    this.messageReceived(ver, msgBody);
                    console.log("receive: ver=" + ver + " op=" + op + " seq=" + seq + " message=" + msgBody);
                }
                break;
            default:
                let msgBody = this.textDecoder.decode(data.slice(headerLen, packetLen));
                this.messageReceived(ver, msgBody);
                break
        }
    }

    onclose = () => {
        if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
        setTimeout(this.reConnect, this._DELAY)
        //  重拾连接最大次数之后关闭连接
    }

    reConnect=()=> {
        this.createConnect(--this._MAX_CONNECT_TIMES, this._DELAY * 2);
    }

    create(): void {

        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = this.onopen
        this.ws.onmessage = this.onmessage
        this.ws.onclose = this.onclose
    }

    destroy(){
        console.log("wesocket 实例销毁")
        this.ws.close()
    }

    Auth(token: string, textDecoder: TextDecoder, textEncoder: TextEncoder) {
        let headerBuf: ArrayBuffer = new ArrayBuffer(rawHeaderLen);
        let headerView: DataView = new DataView(headerBuf, 0);
        let bodyBuf: Uint8Array = textEncoder.encode(token);
        headerView.setInt32(packetOffset, rawHeaderLen + bodyBuf.byteLength);
        headerView.setInt16(headerOffset, rawHeaderLen);
        headerView.setInt16(verOffset, 1);
        headerView.setInt32(opOffset, 7);
        headerView.setInt32(seqOffset, 1);
        // 发送消息
        this.ws.send(this.mergeArrayBuffer(headerBuf, bodyBuf))
    }


    mergeArrayBuffer(ab1: any, ab2: any) {
        let u81: Uint8Array = new Uint8Array(ab1),
            u82: Uint8Array = new Uint8Array(ab2),
            res: Uint8Array = new Uint8Array(ab1.byteLength + ab2.byteLength);
        res.set(u81, 0);
        res.set(u82, ab1.byteLength);
        return res.buffer;
    }
    messageReceived(ver: number, body: any) {
        // console.log("messageReceived:", "ver=" + ver, "body=" + body);
        this.receiveMessageFunc(body)
    }

    heartbeat = () => {
        let headerBuf: ArrayBuffer = new ArrayBuffer(rawHeaderLen);
        let headerView: DataView = new DataView(headerBuf, 0);
        // 总共16个字节
        headerView.setInt32(packetOffset, rawHeaderLen); //4个字节
        headerView.setInt16(headerOffset, rawHeaderLen); //2个字节
        headerView.setInt16(verOffset, 1);         //2个字节
        headerView.setInt32(opOffset, 2);          //4个字节
        headerView.setInt32(seqOffset, 1);         //4个字节
        this.ws.send(headerBuf);
        console.log("send: heartbeat");
    }


}

