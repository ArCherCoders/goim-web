import {defineStore} from "pinia";
import {LoginRequest} from "@/service/login";


interface UserInfo {
    userName: string
    userPic: string
    userId: number
    token: string
    online: number
}

const useLoginStore = defineStore("login", {
    state: () => ({
        userInfo: {
            userId: 0,
            userAccount: "",
            userKey: "",
            userName: "",
            userPic: "",
            userOnline: 0,
            token: ""
        }
    }),
    getters: {},
    actions: {
        async loginAction(userAccount: string, userPassword: string) {
            const res = await LoginRequest(userAccount, userPassword)
            console.log(Number(res.code))
            if (Number(res.code) > 0) {
                this.userInfo.userId = res.data.userId
                this.userInfo.userAccount = res.data.userAccount
                this.userInfo.userName = res.data.userName
                this.userInfo.userPic = res.data.userPic
                this.userInfo.userOnline = res.data.userOnline
                this.userInfo.userKey = res.data.userKey
                this.userInfo.token = res.data.token
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