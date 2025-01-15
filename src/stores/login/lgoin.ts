import {defineStore} from "pinia";
import {LoginRequest} from "@/service/login";
import useMessageStore from "@/stores/message/message";
import {localCache} from "@/utils/cache";


interface UserInfo {
    userName: string
    userPic: string
    userId: number
    token: string
    online: number
}

const useLoginStore = defineStore("login", {
    state: () => ({
        userInfo: JSON.parse(localCache.getCache("userInfo") ?? null)
    }),
    getters: {},
    actions: {
        async loginAction(userAccount: string, userPassword: string) {
            const res = await LoginRequest(userAccount, userPassword)
            console.log(Number(res.code))
            if (Number(res.code) > 0) {
                this.userInfo = res.data
                localCache.setCache("userInfo", JSON.stringify(this.userInfo))
                const messageStore = useMessageStore();
                messageStore.connectAction();
            }
            return new Promise((resolve, reject) => {
                if (Number(res.code) > 0) {
                    resolve(100);
                } else {
                    reject(res.message);
                }
            })
        }
    }
})

export default useLoginStore