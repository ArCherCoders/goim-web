import {defineStore} from "pinia";
import useLoginStore from "@/stores/login/lgoin";
import {type AuthInterface, GoImClient} from "@/goim-web-sdk/goImClient";
import type {GoImMessage} from "@/type";

interface MessageState<T> {
    messages: T[],
    client: GoImClient
}

const useMessageStore = defineStore("message", {
    state: (): MessageState<GoImMessage> => ({
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
        receiveMessageFunc(data: any) {
            const receiveData = JSON.parse(data)
            let message: GoImMessage = {
                uid: receiveData.fromUserId,
                name: receiveData.fromUserName,
                avatar: receiveData.fromUserPic,
                messageId: receiveData.messageId,
                content: receiveData.messageContent,
            }
            this.messages.push(message)
        },
        connectAction() {
            const loginStore = useLoginStore();
            let userInfo: any = loginStore.userInfo;
            if (userInfo === null) {
                return
            }
            let auth: AuthInterface = {
                mid: userInfo.userId,
                room_id: "199",
                platform: "web",
                key: userInfo.userKey,
                accepts: [1000, 1002, 1003]
            }
            this.client = new GoImClient({
                    url: import.meta.env.VITE_WS_BASE_URL,
                    auth: auth,
                    receiveHeartbeatReplyFuncCallBack: () => this.receiveHeartbeatReplyFunc(),
                    receiveMessageFuncCallBack: (data: any) => this.receiveMessageFunc(data),
                    authReplyOkFuncCallBack: () => this.authReplyOkFunc(),
                }
            )
        }
        ,
        disConnectActon() {
            this.client.destroy();
        }
    }
})

export default useMessageStore