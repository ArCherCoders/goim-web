import {defineStore} from "pinia";
import useLoginStore from "@/stores/login/lgoin";
import {type AuthInterface, GoImClient} from "@/goim-web-sdk/goImClient";

interface MessageState {
    message: any,
    client: GoImClient
}

const useMessageStore = defineStore("message", {
    state: (): MessageState => ({
        messages: [],
        client: null,
    }),
    actions: {
        authReplyOkFunc() {
            console.log("认证成功")
        },
        receiveHeartbeatReplyFunc() {
            console.log("接收心跳")
        }
        ,
        receieveMessageFunc(data: any) {
            console.log("******************", this)
            console.log("接收消息=", data)
            console.log("接收消息=", JSON.parse(data))
            const receiveData = JSON.parse(data)
            let message ={
                uid:receiveData.fromUserId,
                name:receiveData.fromUserName,
                avatar: receiveData.fromUserPic,
                messageId:receiveData.messageId,
                content:receiveData.messageContent,
            }
            this.messages.push(message)
        },
        connectAction() {
            const loginStore = useLoginStore();
            let userInfo = loginStore.userInfo;
            if (userInfo === null) {
                return
            }
            console.log(userInfo)
            let auth: AuthInterface = {
                mid: userInfo.userId,
                room_id: "199",
                platform: "web",
                key: userInfo.userKey,
                accepts: [1000, 1002, 1003]
            }
            console.log(this)
            let goImClient = new GoImClient({
                    url: "ws://192.168.10.200:3102/sub",
                    auth: auth,
                    receiveHeartbeatReplyFuncCallBack: () => this.receiveHeartbeatReplyFunc(),
                    receiveMessageFuncCallBack: (data: any) => this.receieveMessageFunc(data),
                    authReplyOkFuncCallBack: () => this.authReplyOkFunc(),
                }
            )
            this.client = goImClient;
        }
        ,
        disConnectActon() {
            this.client.destroy();
        }
    }
})

export default useMessageStore